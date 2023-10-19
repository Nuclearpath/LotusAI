import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleUser from "../../../lib/models/GoogleUser";
import connectDatabase from "../../../lib/connectDatabase";
export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          name: "user",
          email: "example@gmail.com",
          password: "12345678",
        };
        // console.log(credentials);

        if (
          user.email === credentials?.email &&
          user.password == credentials?.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 15 * 60,
  },

  callbacks: {
    async session({ session, token, user }) {
      session.user.role = token.role;

      return session;
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.role = profile.role;
      }
      return token;
    },
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        if (profile.email_verified && profile.email.endsWith("@gmail.com")) {
          try {
            //console.log(profile);
            await connectDatabase();
            await GoogleUser.sync();
            const user = await GoogleUser.findOne({
              where: {
                email: profile.email,
              },
            });
            //console.log(user);
            if (user) {
              profile.role = user.role;
              //console.log(profile);
              return user;
            } else {
              const newUser = await GoogleUser.create({
                email: profile.email,
                name: profile.name,
                role: "mod",
              });
              profile.role = newUser.role;

              return newUser;
            }
          } catch (err) {
            return null;
          }
        }
      }
      return true;
    },
  },
};
