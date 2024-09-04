import { TAction, TState, TTicket } from "./types";

export const INITIAL_STATE: TState = {
  structure: new Map([["c1", ["t1", "t2"]]]),
  tickets: new Map([
    ["t1", { title: "Initial board data-structure creation", id: "t1" }],
    ["t2", { title: "Add update feature", id: "t2" }],
  ]),
  columns: new Map([["c1", { title: "Backlog", id: "c1" }]]),
  ticketIdView: "t1",
};

export const reducer = (
  state: TState = INITIAL_STATE,
  action: TAction
): TState => {
  switch (action.type) {
    case "UPDATE_TICKET":
      return reduceUpdateTicket(state, action);
    case "CREATE_COLUMN":
      return reduceCreateColumn(state, action);
    case "CREATE_TICKET":
      return reduceCreateTicket(state, action);
    case "MOVE_TICKET":
      return reduceMoveTicket(state, action);
    case "SET_TICKET_VIEW":
      return reduceSetTicketView(state, action);
    default:
      return state;
  }
};

const reduceSetTicketView = (
  state: TState,
  { ticketId }: Extract<TAction, { type: "SET_TICKET_VIEW" }>
): TState => {
  return {
    ...state,
    ticketIdView: ticketId,
  };
};

const reduceUpdateTicket = (
  state: TState,
  { payload }: Extract<TAction, { type: "UPDATE_TICKET" }>
): TState => {
  const { id } = payload;
  const ticket = state.tickets.get(id);

  if (!ticket) return state;

  const updatedTicket = {
    ...ticket,
    ...payload,
  };

  const updatedTickets = new Map(state.tickets);
  updatedTickets.set(id, updatedTicket);

  return {
    ...state,
    tickets: updatedTickets,
  };
};

const reduceCreateColumn = (
  state: TState,
  { columnName }: Extract<TAction, { type: "CREATE_COLUMN" }>
): TState => {
  const isColumnExist = state.columns.get(columnName);
  if (isColumnExist) return state;

  const newColumnMap = new Map(state.columns);
  const newColumnId = `c${state.columns.size + 1}`;
  newColumnMap.set(newColumnId, {
    title: columnName,
    id: newColumnId,
  });

  const newStructureMap = new Map(state.structure);
  newStructureMap.set(newColumnId, []);

  return {
    ...state,
    structure: newStructureMap,
    columns: newColumnMap,
  };
};

const reduceCreateTicket = (
  state: TState,
  action: Extract<TAction, { type: "CREATE_TICKET" }>
): TState => {
  const ticketPayload: TTicket = {
    ...action.ticket,
    id: `t${state.tickets.size + 1}`,
  };

  const newTicketsMap = new Map(state.tickets);
  newTicketsMap.set(ticketPayload.id, ticketPayload);

  const newStructureMap = new Map(state.structure);
  const ticketIds = newStructureMap.get(action.inColumnId);

  if (!ticketIds) return state;

  ticketIds.push(ticketPayload.id);

  return {
    ...state,
    structure: newStructureMap,
    tickets: newTicketsMap,
  };
};

const reduceMoveTicket = (
  state: TState,
  action: Extract<TAction, { type: "MOVE_TICKET" }>
): TState => {
  const { toColumnId, fromColumnId } = action;

  if (toColumnId === fromColumnId) return state; // we are not even sorting so no change

  const colFromTickets = state.structure.get(fromColumnId);
  const colToTickets = state.structure.get(toColumnId);
  const updatedStructure = new Map(state.structure);
  const isValidTicket = state.tickets.has(action.ticketId);

  if (colFromTickets && colToTickets && isValidTicket) {
    const newColFromTicketList = colFromTickets.filter(
      (ticketId) => ticketId !== action.ticketId
    );
    updatedStructure.set(fromColumnId, newColFromTicketList);

    const newColToTicketList = [...colToTickets, action.ticketId];
    updatedStructure.set(toColumnId, newColToTicketList);

    return {
      ...state,
      structure: updatedStructure,
    };
  }

  return state;
};
