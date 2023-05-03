import { atom } from "recoil";

export const windowState = atom({
  key: "windowState",
  default: {
    width: 0,
    height: 0,
    scroll: 0,
  },
});
