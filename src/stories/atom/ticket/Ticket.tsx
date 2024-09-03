import { TicketStyled } from "./styles";

type TProps = {
  title: string;
};

const Ticket = ({ title }: TProps) => {
  return <TicketStyled>{title}</TicketStyled>;
};

export { Ticket };
