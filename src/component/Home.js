import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 12px 64px;
`;

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`;

export default function Home() {
  return (
    <>
      <Container>
        <Label>リンク</Label>
        <Link to="/about">About画面へ</Link>
        <Link to="/work">Work画面へ</Link>
        <Link to="/contact">Contact画面へ</Link>
      </Container>
    </>
  );
}
