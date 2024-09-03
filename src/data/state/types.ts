export type TTicket = {
  title: string;
  id: string;
};

export type TColumn = {
  title: string;
  id: string;
};

export type TState = {
  structure: Map<string, string[]>;
  tickets: Map<string, TTicket>;
  columns: Map<string, TColumn>;
};

export type TAction =
  | {
      type: "UPDATE_TICKET";
      payload: TTicket;
    }
  | {
      type: "MOVE_TICKET";
      toColumnId: string;
      fromColumnId: string;
      ticketId: string;
    }
  | {
      type: "CREATE_COLUMN";
      columnName: string;
    }
  | {
      type: "CREATE_TICKET";
      ticket: Omit<TTicket, "id">;
      inColumnId: string;
    };
