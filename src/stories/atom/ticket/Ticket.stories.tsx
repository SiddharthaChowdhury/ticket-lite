import { Ticket } from "./Ticket";

const story = {
  title: "Atom/Ticket",
  component: Ticket,
};

const Default = () => {
  return <Ticket title="Lorem ipsum dolor sit amet bla bla bla" />;
};

export default story;
export { Default };
