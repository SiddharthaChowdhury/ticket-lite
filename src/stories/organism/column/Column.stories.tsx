import { ComponentProps, useCallback, useState } from "react";
import { TColumn, TTicket } from "../../../data/state/types";
import { Ticket } from "../../atom/ticket/Ticket";
import { DndArea } from "../../common/DndArea";
import { Column } from "./Column";

const story = {
  title: "Organism/Column",
  component: Column,
};

const TICKET_DUMMY: TTicket[] = [
  {
    id: "t1",
    title: "Some title",
  },
  {
    id: "t2",
    title: "Random 2nd title",
  },
];

const DUMMY_COLUMN: TColumn = {
  id: "c1",
  title: "To do",
};

const Default = () => {
  const [tickets, setTickets] = useState(TICKET_DUMMY);

  const handleTicketCreate: ComponentProps<typeof Column>["onCreateNewTicket"] =
    useCallback((ticket) => {
      setTickets((existing) => [
        ...existing,
        { ...ticket, id: `${Date.now()}` },
      ]);
    }, []);

  return (
    <DndArea>
      <Column column={DUMMY_COLUMN} onCreateNewTicket={handleTicketCreate}>
        {tickets.map((t) => (
          <Ticket
            key={t.id}
            ticket={t}
            columnId={DUMMY_COLUMN.id}
            onTicketClick={console.log}
          />
        ))}
      </Column>
    </DndArea>
  );
};

export default story;
export { Default };
