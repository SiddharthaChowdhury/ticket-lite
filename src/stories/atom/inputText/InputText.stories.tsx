import { useState } from "react";
import { InputText } from "./InputText";

const story = {
  title: "Atom/InputText",
  component: InputText,
};

const Input = () => {
  const [value, setValue] = useState<string>("Untitled");

  return <InputText value={value} onChange={setValue} />;
};

export default story;
export { Input };
