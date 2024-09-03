import { useContext } from "react";
import { AppDispatchContext } from "./AppContextProvider";

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("[useAppDispatch]: Dispatch context is undefined.");
  }
  return context;
};
