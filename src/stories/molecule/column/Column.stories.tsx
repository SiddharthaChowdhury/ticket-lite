import { TColumn, TTicket } from "../../../data/state/types";
import { Ticket } from "../../atom/ticket/Ticket";
import { DndArea } from "../../common/DndArea";
import { Column } from "./Column";

const story = {
  title: "Molecule/Column",
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
  return (
    <DndArea>
      <Column column={DUMMY_COLUMN}>
        {TICKET_DUMMY.map((t) => (
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
