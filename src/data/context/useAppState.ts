import { useContext } from "react";
import { AppStateContext } from "./AppContextProvider";

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("[useAppState]: State context is undefined.");
  }
  return context;
};
