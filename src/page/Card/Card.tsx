import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (
    <CardComponent>
      <Image src={logo} />
      <Informaitn>
        <Title>타이틀</Title>
        <Writer>작성자</Writer>
        <Like>
          <FontAwesomeIcon icon="heart" />
          <LikeNums>좋아요 갯수</LikeNums>
        </Like>
      </Informaitn>
    </CardComponent>
  );
};

export default Card;

const CardComponent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  width: 200px;
  height: 250px;
  border-radius: 8px;
  margin: 10px;
  padding 15px;
  cursor: pointer;
  :hover{
    border : 1px solid black
  }
`;

const Image = styled.img`
  width: 100px;
  height: 120px;
`;

const Informaitn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
  padding-bottom: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  padding: 10px;
  text-align: center;
`;

const Writer = styled.div`
  font-weight: lighter;
  font-size: 13px;
  text-align: right;
`;

const Like = styled.div`
  margin-top: 10px;
`;

const LikeNums = styled.span`
  padding-left: 5px;
  font-size: 13px;
  font-weight: lighter;
`;
