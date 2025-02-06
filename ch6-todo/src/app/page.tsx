"use client";

import styled from "@emotion/styled";
import { DataView } from "@/components/DataView";
import { useState } from "react";
import { ToDoInput } from "@/components/ToDoInput";
import { Button } from "@/components/Button";
import { ShowInputButton } from "@/components/ShowInputButton";
import { InputContainer } from "@/components/InputContainer";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

export default function Home() {
  const [toDoList, setToDoList] = useState([
    "리액트 공부하기",
    "운동하기",
    "책 읽기",
  ]);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete}></DataView>
      <InputContainer onAdd={onAdd} />
    </Container>
  );
}
