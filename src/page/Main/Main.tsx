import React, { useState } from "react";
import styled from "styled-components";
import All from "../Category/All";
import MyPage from "../Category/MyPage";

interface ComponentType {
  [key: string]: JSX.Element;
}

const Main = () => {
  const [tab, setTab] = useState("all");
  return (
    <MainContainer>
      <MainMenu>
        {MENU.map((item) => {
          const { id, name, category } = item;
          return (
            <Category
              key={id}
              className={category === tab ? "active" : ""}
              onClick={() => {
                setTab(category);
              }}
            >
              {name}
            </Category>
          );
        })}
      </MainMenu>
      <Display>{Component[tab]}</Display>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border-right: 1px solid #d3d3d3;
  height: 100vh;
`;

const Category = styled.div`
  padding: 15px;
  font-weight: lighter;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }
`;

const Display = styled.div`
  margin: 30px;
`;

const MENU = [
  { id: 1, name: "전체보기", category: "all" },
  { id: 2, name: "내 작품", category: "mypage" },
];

const Component: ComponentType = {
  all: <All />,
  mypage: <MyPage />,
};
