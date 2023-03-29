import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { post_id } = useParams();

  const { title, description, image_url } = location.state;
  return <DetailContainer>{post_id}</DetailContainer>;
};

export default Detail;

const DetailContainer = styled.div`
  margin-top: 100px;
  padding: 20px;
  height: 100vh;
`;
