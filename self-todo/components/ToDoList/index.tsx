import styled from "@emotion/styled";
import { ToDoItem } from "@/components/ToDoItem";
import { Title } from "@/components/Title";
import { useContext, useState } from "react";
import { ToDoListContext } from "@/contexts/ToDoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToDoList = () => {
  const { todoList, onDelete } = useContext(ToDoListContext);

  return (
    <Container>
      {todoList.map((todo) => (
        <ToDoItem key={todo} label={todo} onDelete={() => onDelete(todo)} />
      ))}
    </Container>
  );
};
