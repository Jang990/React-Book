"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "@emotion/styled";

import { Button } from "@/components/button";
import { Label } from "@/components/label";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const [counter, setCounter] = useState(0);
  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };
  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button label="-" onClick={sub}></Button>
        <Label data={counter}></Label>
        <Button label="+" onClick={add}></Button>
      </Contents>
    </Container>
  );
}
