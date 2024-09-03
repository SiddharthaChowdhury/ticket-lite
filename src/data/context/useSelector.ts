import { useContext } from "react";
import { AppStateContext } from "./AppContextProvider";
import { TState } from "../state/types";

export const useSelector = <TSelected>(
  selector: (state: TState) => TSelected
): TSelected => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("[useSelector]: State context is undefined.");
  }
  return selector(context);
};
