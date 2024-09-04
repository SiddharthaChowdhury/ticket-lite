import { useCallback } from "react";
import { useAppDispatch } from "../../data/context/useAppDispatch";
import { ButtonForm } from "../../stories/molecule/buttonForm/ButtonForm";

const CreateColumnButton = () => {
  const dispatch = useAppDispatch();

  const handleCreateColumn = useCallback(
    (columnName: string) => {
      dispatch({
        type: "CREATE_COLUMN",
        columnName,
      });
    },
    [dispatch]
  );

  return (
    <ButtonForm
      inputPlaceholder={"Create column"}
      onSubmit={handleCreateColumn}
    />
  );
};

export default CreateColumnButton;
