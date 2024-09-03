import { PropsWithChildren } from "react";
import { ColumnStyled } from "./styles";
import { Button } from "../../atom/button/styles";
import { useDroppable } from "@dnd-kit/core";
import { TColumn } from "../../../data/state/types";
import { truncateText } from "../../../utils/truncateText";

type TProps = {
  column: TColumn;
};

const Column = ({ children, column }: PropsWithChildren<TProps>) => {
  const { isOver, setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <ColumnStyled $isDragOver={isOver}>
      <div className="colTitle">{truncateText(column.title, 25)}</div>
      <div className="tickets" ref={setNodeRef}>
        {children}
      </div>
      <div className="addTicketBtn">
        <Button>+</Button>
      </div>
    </ColumnStyled>
  );
};

export { Column };
