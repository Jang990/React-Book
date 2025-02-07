import styled from "@emotion/styled";
import { ToDoList } from "@/components/ToDoList";
import { Title } from "@/components/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

export const DataView = () => {
  return (
    <Container>
      <Title label="할 일 목록"></Title>
      <ToDoList />
    </Container>
  );
};
