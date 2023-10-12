import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
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
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@gmail.com");
      }
      return true;
    },
  },
};
