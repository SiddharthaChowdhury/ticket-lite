import { createContext, PropsWithChildren, useReducer } from "react";
import { TState, TAction } from "../state/types";
import { INITIAL_STATE, reducer } from "../state/reducer";

/**
 * Creating 2 separate contexts (with clear intent) for following reason:
 * 1. Dispatch: Components that consume this context will NOT re-render when the state changes, as they only need the dispatch function
 * 2. State: Components that consume this context will re-render only when the state changes
 */
export const AppStateContext = createContext<TState | undefined>(undefined);
export const AppDispatchContext = createContext<
  React.Dispatch<TAction> | undefined
>(undefined);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
