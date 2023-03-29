import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { saveAll } from "../../store/AllSlice";
import PagenationButton from "./PagenationButton";
import { API } from "../../config";
import { allDataType } from "../../type";

const All = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const { data, error, isLoading } = useQuery(
    "dataAll",
    async () => {
      const res = await axios(`${API.posts}`);
      console.log(res.data.postDataInfo);
      return res.data.postDataInfo;
    },
    { refetchOnMount: true, refetchOnWindowFocus: true }
  );

  const writingHandler = () => {
    if (!localStorage.accessToken) {
      alert("로그인 후 이용해주세요.");
      navigate("/");
    } else {
      navigate("/writing");
    }
  };

  // const { data, error, isLoading } = useQuery("dataAll", async () => {
  //   const res = await axios("http://localhost:4000/all");
  //   console.log(res.data);
  //   return res.data;
  // });
  // const allData = useAppSelector((state) => state.All);
  // console.log(allData);
  console.log(data);
  if (!data) return <div>load</div>;

  if (error) return <div>error !</div>;

  if (isLoading) return <div> 로딩 중입니다.</div>;

  return (
    <AllContainer>
      <Gridcontainer>
        {data.slice(offset, offset + limit).map((item: allDataType) => {
          const {
            user_id,
            title,
            description,
            image_url,
            _id,
            like_count,
            user_email,
          } = item;
          return (
            <Card
              _id={_id}
              user_id={user_id}
              title={title}
              description={description}
              image_url={image_url}
              like_count={like_count}
              user_email={user_email}
            />
          );
        })}
      </Gridcontainer>
      <WritingContainer>
        <GoToWrite onClick={writingHandler}>글쓰기</GoToWrite>
      </WritingContainer>
      <ButtonArea>
        <PagenationButton
          total={data.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </ButtonArea>
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

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;
