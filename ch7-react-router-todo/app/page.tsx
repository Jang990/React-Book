"use client";

import styled from "@emotion/styled";
import { DataView } from "@/components/DataView";
import { ToDoListContextProvider } from "@/contexts/ToDoList";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

export default function Home() {
  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
      </ToDoListContextProvider>
    </Container>
  );
}
