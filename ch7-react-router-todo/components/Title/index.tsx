import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`;

const Label = styled.h1`
  margin-top: 0;
  font-size: 2rem;
  font-weight: bold;
`;

interface Props {
  readonly label: string;
}

export const Title = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};
