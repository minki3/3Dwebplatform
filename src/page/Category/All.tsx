import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { saveAll } from "../../store/AllSlice";

interface allDataType {
  id: string;
  user_id: string;
  post_id: number;
  title: string;
  description: string;
  image_url: string;
  __v: number;
  _id: string;
}

const All = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const { data, error, isLoading } = useQuery("dataAll", async () => {
  //   const res = await axios("http://10.58.52.238:8000/posts");
  //   return res.data.data;
  // });

  const { data, error, isLoading } = useQuery("dataAll", async () => {
    const res = await axios("http://localhost:4000/all").then((res) =>
      dispatch(saveAll(res.data))
    );
    // console.log(res.data);
    // return res.data;
  });
  console.log(data);
  const allData = useAppSelector((state) => state.All);
  console.log(allData);
  if (error) return <div>error !</div>;

  if (isLoading) return <div> 로딩 중입니다.</div>;

  return (
    <AllContainer>
      <Gridcontainer>
        {/* {data.map((item: allDataType) => {
          const {
            id,
            user_id,
            post_id,
            title,
            description,
            image_url,
            __v,
            _id,
          } = item;
          return <Card></Card>;
        })} */}
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
