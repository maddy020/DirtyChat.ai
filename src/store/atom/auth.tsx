import recoil from "recoil";

export const userAtom = recoil.atom({
  key: "user",
  default: { session: null },
});
