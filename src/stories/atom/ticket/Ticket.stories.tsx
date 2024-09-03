import { StorybookDndArea } from "../../common/StorybookDndArea";
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
    <StorybookDndArea>
      <Ticket ticket={TICKET_DUMMY} onTicketClick={console.log} columnId="c1" />
    </StorybookDndArea>
  );
};

export default story;
export { Default };
