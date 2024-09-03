import { DndArea } from "../../common/DndArea";
import { Ticket } from "./Ticket";

const story = {
  title: "Atom/Ticket",
  component: Ticket,
};

const TICKET_DUMMY = {
  title: "Some title of the ticket",
  id: "t1",
};

const Default = () => {
  return (
    <DndArea>
      <Ticket ticket={TICKET_DUMMY} onTicketClick={console.log} columnId="c1" />
    </DndArea>
  );
};

export default story;
export { Default };
