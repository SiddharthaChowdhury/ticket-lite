import { PropsWithChildren } from "react";
import { ColumnStyled } from "./styles";
import { Button } from "../../atom/button/styles";

type TProps = {
  title: string;
};

const Column = ({ title, children }: PropsWithChildren<TProps>) => {
  return (
    <ColumnStyled>
      <div className="colTitle">{title}</div>
      <div className="tickets">{children}</div>
      <div className="addTicketBtn">
        <Button>+</Button>
      </div>
    </ColumnStyled>
  );
};

export { Column };
