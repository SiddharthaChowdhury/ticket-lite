import { useCallback } from "react";
import { TextBoxStyled } from "./styles";

type TProps = {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
};

const InputText = ({ value, onChange, placeholder }: TProps) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <TextBoxStyled
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export { InputText };
