import { useContext } from "react";
import { UserDataContext } from "../providers/user-data/user-data.provider";

export const useUserData = () => {
  const { setUserData, userData } = useContext(UserDataContext);
  return { setUserData, userData };
};
