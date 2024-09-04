import { DragEndEvent } from "@dnd-kit/core";
import { useCallback } from "react";
import { TTicket } from "../data/state/types";
import { useAppDispatch } from "../data/context/useAppDispatch";

export const useBoardPage = () => {
  const dispatch = useAppDispatch();

  const handleTicketMove = useCallback(
    (event: DragEndEvent) => {
      const { over, active } = event;

      const fromColumnId = active.data.current?.fromColumnId;
      const toColumnId = over?.id.toString();
      const ticketId = active.id.toString();

      if (!!fromColumnId && !!toColumnId && !!ticketId) {
        dispatch({
          type: "MOVE_TICKET",
          fromColumnId,
          toColumnId,
          ticketId,
        });
      }
    },
    [dispatch]
  );

  const handleCreateNewTicket = useCallback(
    (ticket: Omit<TTicket, "id">, columnId: string) => {
      dispatch({
        type: "CREATE_TICKET",
        ticket: {
          title: ticket.title,
        },
        inColumnId: columnId,
      });
    },
    [dispatch]
  );

  const handleTicketSelect = useCallback(
    (ticketId: string) => {
      dispatch({
        type: "SET_TICKET_VIEW",
        ticketId,
      });
    },
    [dispatch]
  );

  const handleEditTicket = useCallback(
    (ticket: TTicket) => {
      dispatch({
        type: "UPDATE_TICKET",
        payload: {
          ...ticket,
        },
      });
    },
    [dispatch]
  );

  return {
    handleCreateNewTicket,
    handleTicketSelect,
    handleTicketMove,
    handleEditTicket,
  };
};
