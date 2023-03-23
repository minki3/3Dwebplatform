import React, { useState, useRef, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import styled from "styled-components";
import axios from "axios";
import AppendFile from "./AppendFile";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

// interface fileType {
//   lastModified?: number | Blob;
//   lastModifiedDate?: any;
//   name?: string | Blob;
//   size?: number | Blob;
//   type?: string | Blob;
//   webkitRelativePath?: string | Blob;
// }

const Writing = () => {
  const QuillRef = useRef<ReactQuill>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<any>([]);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const paserContent = parse(content);

  console.log(paserContent);
  const navigate = useNavigate();
  console.log(file);
  console.log(content);

  const submit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", content);
    for (let i = 0; i < file.length; i++) {
      formData.append("image_url", file[i]);
    }
    for (let value of formData.values()) {
      console.log(value);
    }
    try {
      if (!title && !content) return alert("제목과 내용을 입력해주세요");
      if (!title) return alert("제목을 입력해주세요");
      if (!content) return alert("내용을 입력해주세요");
      if (file.length === 0) return alert("파일을 첨부해주세요");
      await axios.post("http://10.58.52.192:8000/posts", formData, {
        headers: { Authorization: localStorage.accessToken },
      });
      alert("완료되었습니다.");
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };

  // quill에서 사용할 모듈을 설정하는 코드
  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 됨.
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          // ["image", "video"],
        ],
        // handlers: {
        //   image: imageHandler,
        // },
      },
    }),
    []
  );

  return (
    <WritingContainer>
      <TitleContainer>
        <Title>Title</Title>
        <TitleInput name="title" onChange={handleTitle} />
      </TitleContainer>
      <AppendFile id="file" onInput={setFile}></AppendFile>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={content}
        onChange={setContent}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
        style={{ height: "400px", width: "50%" }}
      />
      <SubmitContainer>
        <Submit onClick={submit}>Submit</Submit>
      </SubmitContainer>
    </WritingContainer>
  );
};

export default Writing;

const WritingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  height: 100vh;
  margin-bottom: 120px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 50%;
`;

const Title = styled.div`
  width: 50px;
  font-weight: bold;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #d3d3d3;
`;

const SubmitContainer = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
`;

const Submit = styled.button`
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  background-color: white;
  width: 300px;
  height: 50px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
