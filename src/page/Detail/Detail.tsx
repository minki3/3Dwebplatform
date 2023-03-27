import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { listId } = useParams();
  return <DetailContainer>fdfdfsddfffd</DetailContainer>;
};

export default Detail;

const DetailContainer = styled.div`
  margin-top: 100px;
  padding: 20px;
  height: 100vh;
  background-color: blue;
`;
