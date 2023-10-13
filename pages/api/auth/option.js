import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import dbConnect from "../../../utils/connectdb";
import User from "../../../models/user";
import clientPromise from "../clientPromise";
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
        await dbConnect();

        const user = await User.findOne({
          email: credentials?.email,
          password: credentials?.password,
          method: credentials?.method,
        });
        //console.log(user);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 30,
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
