import { INITIAL_STATE, reducer } from "./reducer";
import { TAction } from "./types";

describe("reducer", () => {
  it("should return the initial state when action is unknown", () => {
    const unknownAction = { type: "UNKNOWN_ACTION" } as unknown as TAction;
    const state = reducer(INITIAL_STATE, unknownAction);
    expect(state).toEqual(INITIAL_STATE);
  });

  it("should handle SET_TICKET_VIEW action", () => {
    const action: TAction = { type: "SET_TICKET_VIEW", ticketId: "t2" };
    const state = reducer(INITIAL_STATE, action);
    expect(state.ticketIdView).toBe("t2");
  });

  it("should handle UPDATE_TICKET action", () => {
    const action: TAction = {
      type: "UPDATE_TICKET",
      payload: { id: "t1", title: "Updated title" },
    };
    const state = reducer(INITIAL_STATE, action);
    expect(state.tickets.get("t1")?.title).toBe("Updated title");
  });

  it("should handle CREATE_COLUMN action", () => {
    const action: TAction = {
      type: "CREATE_COLUMN",
      columnName: "In Progress",
    };
    const state = reducer(INITIAL_STATE, action);
    const newColumnId = `c${INITIAL_STATE.columns.size + 1}`;
    expect(state.columns.get(newColumnId)?.title).toBe("In Progress");
    expect(state.structure.get(newColumnId)).toEqual([]);
  });

  it("should handle CREATE_TICKET action", () => {
    const action: TAction = {
      type: "CREATE_TICKET",
      ticket: { title: "New Ticket" },
      inColumnId: "c1",
    };
    const state = reducer(INITIAL_STATE, action);
    const newTicketId = `t${INITIAL_STATE.tickets.size + 1}`;
    expect(state.tickets.get(newTicketId)?.title).toBe("New Ticket");
    expect(state.structure.get("c1")).toContain(newTicketId);
  });

  it("should handle MOVE_TICKET action", () => {
    const action: TAction = {
      type: "MOVE_TICKET",
      ticketId: "t1",
      fromColumnId: "c1",
      toColumnId: "c1", // Simulate moving within the same column
    };
    const state = reducer(INITIAL_STATE, action);
    expect(state.structure.get("c1")).toContain("t1");
  });
});
