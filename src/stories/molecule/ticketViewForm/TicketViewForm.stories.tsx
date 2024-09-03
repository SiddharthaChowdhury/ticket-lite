import { TTicket } from "../../../data/state/types";
import TicketViewForm from "./TicketViewForm";

const story = {
  title: "Molecule/TicketViewForm",
  component: TicketViewForm,
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

const Default = () => {
  return <TicketViewForm ticket={TICKET_DUMMY[0]} onSaveEdit={console.log} />;
};

export { Default };

export default story;
