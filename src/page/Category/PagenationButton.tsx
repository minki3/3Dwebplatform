import React from "react";
import styled from "styled-components";

interface PagenationButtonType {
  total: number;
  page: number;
  limit: number;
  setPage: (arg0: number) => void;
}

const PagenationButton = ({
  total,
  page,
  limit,
  setPage,
}: PagenationButtonType) => {
  const numPage = Math.ceil(total / limit);
  return (
    <ButtonArea>
      <Button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
      >
        &lt;
      </Button>
      {Array<number>(numPage)
        .fill(0)
        .map((_, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => {
                setPage(idx + 1);
              }}
              aria-current={page === idx + 1 ? "page" : undefined}
            >
              {idx + 1}
            </Button>
          );
        })}
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === numPage}
      >
        &gt;
      </Button>
    </ButtonArea>
  );
};

export default PagenationButton;

const ButtonArea = styled.div``;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  padding: 15px;
  :hover {
    background-color: black;
    color: white;
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
    color: #d3d3d3;
    :hover {
      background-color: white;
    }
  }
  &[aria-current] {
    background-color: black;
    color: white;
  }
`;
