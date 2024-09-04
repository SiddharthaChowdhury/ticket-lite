import { TState } from "../data/state/types";

/**
 * During panning, I chose the data-structure to use Map for ease
 * Map cannot be correctly stringified, hence converting them to array before stringify
 * In real-world scenario this localStorage is redundant and data should come from Database instead
 */
export const loadStateFromLocalStorage = (): TState | undefined => {
  try {
    const serializedState = localStorage.getItem("boardState");
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);

    return {
      ...parsedState,
      structure: new Map(parsedState.structure),
      tickets: new Map(parsedState.tickets),
      columns: new Map(parsedState.columns),
    };
  } catch (err) {
    console.error("Error! Could not load state", err);
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: TState) => {
  try {
    const serializedState = JSON.stringify({
      ...state,
      structure: Array.from(state.structure.entries()),
      tickets: Array.from(state.tickets.entries()),
      columns: Array.from(state.columns.entries()),
    });
    localStorage.setItem("boardState", serializedState);
  } catch (err) {
    console.error("Error! Could not save state", err);
  }
};
