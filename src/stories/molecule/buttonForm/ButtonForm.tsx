import { useCallback, useState } from "react";
import { ButtonFormStyled } from "./styles";
import { InputText } from "../../atom/inputText/InputText";
import { Button } from "../../atom/button/styles";

type TProps = {
  inputPlaceholder: string;
  onSubmit: (value: string) => void;
};

const ButtonForm = ({ inputPlaceholder, onSubmit }: TProps) => {
  const [text, setText] = useState<string | undefined>(undefined);

  const toggleInputMode = useCallback(() => {
    setText((value) => {
      if (value === undefined) return "";
      else return undefined;
    });
  }, []);

  const handleSubmit = useCallback(() => {
    if (!text) return;
    toggleInputMode();
    onSubmit(text);
  }, [text, onSubmit, toggleInputMode]);

  return (
    <ButtonFormStyled>
      {text !== undefined && (
        <InputText
          placeholder={inputPlaceholder}
          value={text}
          onChange={setText}
        />
      )}
      <div className="cta">
        {text !== undefined && <Button onClick={handleSubmit}>+ Create</Button>}
        <Button onClick={toggleInputMode}>
          {text === undefined ? "+" : "〰️ Cancel"}
        </Button>
      </div>
    </ButtonFormStyled>
  );
};

export { ButtonForm };
