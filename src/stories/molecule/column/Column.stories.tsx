import { Ticket } from "../../atom/ticket/Ticket";
import { Column } from "./Column";

const story = {
  title: "Molecule/Column",
  component: Column,
};

const Default = () => {
  return (
    <Column title="Lorem ipsum">
      <Ticket title="Eager to serve in the military" />
      <Ticket title="Lorem ipsum for tickets" />
    </Column>
  );
};

export default story;
export { Default };
