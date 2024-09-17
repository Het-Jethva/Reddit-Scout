import { atom } from "recoil";

export const searchTermState = atom({
  key: "searchTermState", 
  default: "", 
});

export const postsState = atom({
  key: "postsState",
  default: [],
});
