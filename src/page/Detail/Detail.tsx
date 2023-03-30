import React from "react";
import styled from "styled-components";
import Comment from "../Comment/Comment";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();

  const { title, description, image_url, user_email } = location.state;
  return (
    <DetailContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <WriterContainer>
        <Writer>
          <span style={{ fontWeight: "bold" }}>작성자 :</span> {user_email}
        </Writer>
      </WriterContainer>
      <DescriptionContainer>
        <Discription>{description}</Discription>
      </DescriptionContainer>
      <ImageContainer>
        <Image src={image_url} alt="image"></Image>
      </ImageContainer>
      <Comment></Comment>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  margin-top: 100px;
  padding: 20px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  padding-left: 10px;
  font-weight: bold;
  cursor: default;
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 50px;
  border: 1px solid #d3d3d3;
  border-left: none;
  border-right: none;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DescriptionContainer = styled.div`
  border: 1px solid #d3d3d3;
  width: 50%;
  height: 400px;

  overflow: hidden;
  cursor: default;
`;

const WriterContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  margin-bottom: 10px;
`;

const Writer = styled.div`
  font-weight: lighter;
  font-size: 13px;
  cursor: default;
`;

const Discription = styled.div`
  padding: 20px;
`;

const ImageContainer = styled.div`
  border: 1px solid #d3d3d3;
  width: 50%;
  height: 100px;
`;

const Image = styled.img`
  width: 100px;
  height: 50px;
  border: 1px solid gray;
`;
