import { useDroppable } from "@dnd-kit/core";
import { PropsWithChildren, useCallback } from "react";
import { TColumn, TTicket } from "../../../data/state/types";
import { truncateText } from "../../../utils/truncateText";
import { ButtonForm } from "../../molecule/buttonForm/ButtonForm";
import { ColumnStyled } from "./styles";

type TProps = {
  column: TColumn;
  onCreateNewTicket: (ticket: Omit<TTicket, "id">) => void;
};

const Column = ({
  children,
  column,
  onCreateNewTicket,
}: PropsWithChildren<TProps>) => {
  const { isOver, setNodeRef } = useDroppable({
    id: column.id,
  });

  const handleCreateTicket = useCallback(
    (title: string) => {
      onCreateNewTicket({ title });
    },
    [onCreateNewTicket]
  );

  return (
    <ColumnStyled $isDragOver={isOver}>
      <div className="colTitle">{truncateText(column.title, 25)}</div>
      <div className="tickets" ref={setNodeRef}>
        {children}
      </div>
      <div className="addTicketBtn">
        <ButtonForm
          inputPlaceholder={"Create ticket"}
          onSubmit={handleCreateTicket}
        />
      </div>
    </ColumnStyled>
  );
};

export { Column };
