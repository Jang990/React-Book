"use client";

import styled from "@emotion/styled";
import { Title } from "@/components/Title";
import { TextInput } from "@/components/TextInput";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ToDoListContext } from "@/contexts/ToDoList";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function AddPage() {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setToDo] = useState("");
  const router = useRouter();

  const onAddToDo = () => {
    if (toDo === "") return;

    onAdd(toDo);
    setToDo("");
    router.push("/");
  };

  return (
    <Container>
      <Contents>
        <Title label="할일 추가" />
        <InputContainer>
          <TextInput value={toDo || ""} onChange={setToDo} />
          <Button label="추가" color="#304ffe" onClick={onAddToDo} />
        </InputContainer>
      </Contents>
    </Container>
  );
}
