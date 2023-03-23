import React, { useState, useEffect } from "react";
import styled from "styled-components";
import File from "./File";

interface FileUploadProps {
  id: string;
  onInput: (file: []) => void;
}
interface fileType {
  lastModified?: number;
  lastModifiedDate?: any;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
}

const AppendFile = ({ id, onInput }: FileUploadProps) => {
  const [file, setFile] = useState<any>([]);

  useEffect(() => {
    onInput(file);
  }, [file]);

  const pickedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let pickedFile = [];

    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        pickedFile.push(e.target.files[i]);
      }
      setFile([...file, ...pickedFile]);
    }
  };

  const onDelete = (clickedIndex: number) => {
    const deletedFile = file.filter(
      (_: any, index: number) => index !== clickedIndex
    );

    setFile(deletedFile);
  };
  return (
    <AppendFileArea>
      <Title>첨부 파일 :</Title>
      <AppendLabel htmlFor={id}>+ 파일 추가하기</AppendLabel>
      <AppendFileInput
        id={id}
        type="file"
        multiple
        accept=".jpg, .png, .jpeg, .pdf, .word"
        onChange={pickedHandler}
      />
      {file &&
        file.map((item: any, index: number) => (
          <File item={item} index={index} onDelete={onDelete} key={item.name} />
        ))}
    </AppendFileArea>
  );
};

export default AppendFile;

const AppendFileArea = styled.div`
  padding: 10px;
  width: 50%;
`;

const Title = styled.span`
  font-weight: bold;
`;

const AppendLabel = styled.label`
  padding-left: 10px;
  font-size: 13px;
  font-weight: lighter;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;

const AppendFileInput = styled.input`
  display: none;
`;
