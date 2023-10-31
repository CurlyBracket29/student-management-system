import React, { createContext, useState } from "react";

export const UserDataContext = createContext<{
  userData: { email: string; id: string };
  setUserData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      id: string;
    }>
  >;
}>({} as any);
export const UserDataProvider = ({ children }: any) => {
  const [userData, setUserData] = useState({ email: "", id: "" });
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
