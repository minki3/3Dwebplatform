import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { allDataType } from "../../type";

const Card = ({
  _id,
  title,
  description,
  image_url,
  like_count,
  user_email,
}: allDataType) => {
  const navigate = useNavigate();
  return (
    <CardComponent
      key={_id}
      onClick={() => {
        navigate(`/detail/${_id}`, {
          state: { title, description, image_url, user_email, _id },
        });
      }}
    >
      <Image src={image_url} alt="a" />
      <Informaitn>
        <Title>{title}</Title>
        <Writer>{user_email}</Writer>
        <Like>
          <FontAwesomeIcon icon="heart" />
          <LikeNums>{like_count}</LikeNums>
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
  padding 15px;
  margin: 10px;
  cursor: pointer;
  :hover {
    border: 1px solid black;
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
