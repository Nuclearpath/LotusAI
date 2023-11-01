import create from "zustand";
import { Auth } from "./auth";
import { Graph } from "./graph";

export const store = create()((...a) => ({
  ...Auth(...a),
  ...Graph(...a),
}));
