import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleUser from "../../../lib/models/GoogleUser";
import CredUser from "../../../lib/models/CredUser";
import connectDatabase from "../../../lib/connectDatabase";
export const options = {
  // adapter: MongoDBAdapter(clientPromise),
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
        method: { label: "method", type: "text" },
      },
      async authorize(credentials, req) {
        // await connectDatabase();
        await CredUser.sync();
        //  console.log(credentials.email);
        const user = await CredUser.findOne({
          where: { email: credentials.email },
        });

        // console.log(user);

        if (user) {
          const isMatched = await user.validPassword(credentials?.password);
          if (isMatched) {
            return user;
          } else {
            null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 30*60,
  },

  callbacks: {
    async session({ session, token }) {
      //  console.log(token);
      session.user.role = token.role;
      //console.log(token);
      return session;
    },
    async jwt({ token, account, profile, user }) {
      if (account) {
        if (account.provider === "google") {
          token.role = profile.role;
        }
        if (account.provider === "credentials") {
          token.role = user.role;
        }
      }
      return token;
    },
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        if (profile.email_verified && profile.email.endsWith("@gmail.com")) {
          try {
            //console.log(profile);
            // await connectDatabase();
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
                role: "user",
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
