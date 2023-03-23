import React from "react";
import styled from "styled-components";

const File = ({ item, index, onDelete, key }: any) => {
  return (
    <FileContainer key={key}>
      <FileBox>
        <FileName>{item.name}</FileName>
        <FileDelete
          onClick={() => {
            onDelete(index);
          }}
        >
          x
        </FileDelete>
      </FileBox>
    </FileContainer>
  );
};

export default File;

const FileContainer = styled.div`
  margin-top: 10px;
`;

const FileName = styled.div`
  font-size: 13px;
  font-weight: lighter;
`;

const FileBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FileDelete = styled.div`
  cursor: pointer;
  font-size: 13px;
`;
