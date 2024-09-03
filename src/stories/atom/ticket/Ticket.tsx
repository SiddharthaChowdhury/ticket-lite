import { useDraggable } from "@dnd-kit/core";
import { TicketStyled } from "./styles";
import { TTicket } from "../../../data/state/types";
import { truncateText } from "../../../utils/truncateText";
import { useCallback } from "react";

type TProps = {
  ticket: TTicket;
  columnId: string;
  onTicketClick: (ticketId: string) => void;
};

const Ticket = ({ ticket, columnId, onTicketClick }: TProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: ticket.id,
    data: {
      fromColumnId: columnId,
    },
  });

  const handleClick = useCallback(() => {
    onTicketClick(ticket.id);
  }, [onTicketClick, ticket.id]);

  return (
    <TicketStyled
      $transform={transform}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={handleClick}
    >
      {truncateText(ticket.title, 150)}
    </TicketStyled>
  );
};

export { Ticket };
