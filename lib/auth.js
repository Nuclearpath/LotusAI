import { StateCreator } from "zustand";
import { useSession } from "next-auth/react";

export const Auth = (set) => ({
  name: "",
  email: "",
  image: "",
  getAuth: (session) => {
    //console.log(session);
    set({ name: session.user.name });
  },
});
