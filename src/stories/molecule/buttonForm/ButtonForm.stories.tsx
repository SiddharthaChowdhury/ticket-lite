import { ButtonForm } from "./ButtonForm";

const story = {
  title: "Molecule/ButtonForm",
  component: ButtonForm,
};

const Default = () => {
  return (
    <ButtonForm inputPlaceholder={"Create ticket"} onSubmit={console.log} />
  );
};

export default story;
export { Default as Input };
