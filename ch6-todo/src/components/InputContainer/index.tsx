import { useState } from "react";
import { ToDoInput } from "../ToDoInput";
import { ShowInputButton } from "../ShowInputButton";

interface Props {
  onAdd: (todo: string) => void;
}

export const InputContainer = ({ onAdd }: Props) => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onAddToDo = (toDo: string) => {
    onAdd(toDo);
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <ToDoInput onAdd={onAddToDo} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => {
          setShowToDoInput(!showToDoInput);
        }}
      />
    </>
  );
};
