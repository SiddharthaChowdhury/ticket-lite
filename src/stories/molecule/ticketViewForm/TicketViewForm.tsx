import { useCallback, useEffect, useState } from "react";
import { TicketViewStyled } from "./styles";
import { TTicket } from "../../../data/state/types";
import { InputText } from "../../atom/inputText/InputText";
import { Button } from "../../atom/button/styles";

type TProps = {
  ticket?: TTicket;
  onSaveEdit: (ticket: TTicket) => void;
};

const TicketViewForm = ({ ticket, onSaveEdit }: TProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle("");
    setIsEdit(false);
  }, [ticket]);

  const handleToggleEdit = useCallback(() => {
    setTitle((oldTitle) => {
      if (oldTitle) return "";

      return ticket?.title ?? "";
    });

    setIsEdit((mode) => !mode);
  }, [ticket?.title]);

  const handleSave = useCallback(() => {
    if (!ticket) return;

    onSaveEdit({
      ...ticket,
      title,
    });

    handleToggleEdit();
  }, [handleToggleEdit, onSaveEdit, ticket, title]);

  if (!ticket) return null;

  return (
    <TicketViewStyled>
      {isEdit && (
        <>
          <InputText value={title} onChange={setTitle} />
          <div className="buttonContainer">
            <Button
              $isDisabled={title.length === 0}
              onClick={title.length === 0 ? noop : handleSave}
            >
              Save
            </Button>
            <Button onClick={handleToggleEdit}>〰️ Cancel</Button>
          </div>
        </>
      )}
      {!isEdit && (
        <>
          <div className="title">{ticket.title}</div>
          <div className="buttonContainer">
            <Button onClick={handleToggleEdit}>Edit</Button>
          </div>
        </>
      )}
    </TicketViewStyled>
  );
};

const noop = () => {};

export default TicketViewForm;
