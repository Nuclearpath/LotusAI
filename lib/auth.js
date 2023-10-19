import { StateCreator } from "zustand";
import { useSession } from "next-auth/react";

export const Auth = (set) => ({
  name: "",
  email: "",
  image: "",
  role: "",
  getAuth: async (session) => {
    //console.log(session);

    set({
      name: session.user.name,
      email: session.user.email,
      role: session.user.role,
    });
  },
});
