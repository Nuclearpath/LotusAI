import create from "zustand";
import { Auth } from "./auth";

export const store = create()((...a) => ({
  ...Auth(...a),
}));
