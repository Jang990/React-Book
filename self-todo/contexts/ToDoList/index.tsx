import { JSX } from "@emotion/react/jsx-runtime";
import { createContext, useState } from "react";

interface Context {
  todoList: string[];
  onDelete: (todo: string) => void;
  onAdd: (todo: string) => void;
}

export const ToDoListContext = createContext<Context>({
  todoList: [],
  onDelete: (): void => {},
  onAdd: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ToDoListContextProvider = ({ children }: Props) => {
  const [todoList, setToDoList] = useState([
    "리액트 공부하기",
    "운동하기",
    "SpringBatch 공부하기",
  ]);

  const onAdd = (todo: string) => {
    setToDoList([...todoList, todo]);
  };

  const onDelete = (todo: string) => {
    setToDoList(todoList.filter((item) => item !== todo));
  };

  return (
    <ToDoListContext.Provider
      value={{
        todoList,
        onDelete,
        onAdd,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
