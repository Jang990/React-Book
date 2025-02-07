import styled from "@emotion/styled";
import { Title } from "@/components/Title";
import { ToDoList } from "@/components/ToDoList";
import { ShowInputButton } from "@/components/ShowInputButton";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <Container>
      <Title label="할 일 목록" />
      <ToDoList />
      <ShowInputButton show={false} onClick={() => router.push("/add")} />
    </Container>
  );
};
