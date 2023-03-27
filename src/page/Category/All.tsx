import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

const All = () => {
  const navigate = useNavigate();
  return (
    <AllContainer>
      <Gridcontainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Gridcontainer>
      <WritingContainer>
        <GoToWrite
          onClick={() => {
            navigate("/writing");
          }}
        >
          글쓰기
        </GoToWrite>
      </WritingContainer>
    </AllContainer>
  );
};

export default All;

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
`;

const GoToWrite = styled.span`
  text-align: right;
  font-weight: lighter;
  padding: 20px;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;

const WritingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
