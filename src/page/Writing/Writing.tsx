import React, { useState, useRef, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import styled from "styled-components";
import axios from "axios";
import AppendFile from "./AppendFile";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import { Navigate } from "react-router-dom";
import { API } from "../../config";
import { useMutation } from "react-query";
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

  const navigate = useNavigate();

  // const submit = async () => {
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", content);
  //   for (let i = 0; i < file.length; i++) {
  //     formData.append("image_url", file[i]);
  //   }
  //   try {
  //     if (!title && !content) return alert("제목과 내용을 입력해주세요");
  //     if (!title) return alert("제목을 입력해주세요");
  //     if (!content) return alert("내용을 입력해주세요");
  //     if (file.length === 0) return alert("파일을 첨부해주세요");
  //     await axios.post(`${API.posts}`, formData, {
  //       headers: { Authorization: localStorage.accessToken },
  //     });
  //     alert("완료되었습니다.");
  //     navigate("/main");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const mutationSubmit = async () => {
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", content);
  //   for (let i = 0; i < file.length; i++) {
  //     formData.append("image_url", file[i]);
  //   }

  //   if (!title && !content) {
  //     alert("제목과 내용을 입력해주세요");
  //     throw new Error("오류");
  //   }
  //   if (!title) {
  //     alert("제목을 입력해주세요");
  //     throw new Error("오류");
  //   }
  //   if (!content) {
  //     alert("제목을 입력해주세요");
  //     throw new Error("오류");
  //   }
  //   if (file.length === 0) {
  //     alert("파일을 첨부해주세요");
  //     throw new Error("오류");
  //   }
  //   await axios.post(`${API.posts}`, formData, {
  //     headers: { Authorization: localStorage.accessToken },
  //   });
  // };

  // const { mutate } = useMutation(mutationSubmit, {
  //   onSuccess: (e) => {
  //     alert("등록되었습니다.");
  //     navigate("/main");
  //   },
  //   onError: (error, variables, context) => {
  //     console.log(error);
  //     console.log(variables);
  //     console.log(context);
  //   },
  // });
  const mutationSubmit = async () => {
    if (!title || !content || file.length === 0) {
      alert("제목, 내용, 파일을 모두 입력해주세요.");
      throw new Error("오류");
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", content);
    file.forEach((f: any) => formData.append("image_url", f));

    await axios.post(`${API.posts}`, formData, {
      headers: { Authorization: localStorage.accessToken },
    });
  };
  const { mutate } = useMutation(mutationSubmit, {
    onSuccess: () => {
      alert("등록되었습니다.");
      navigate("/main");
    },
    onError: (error, variables, context) => {
      console.log(error);
      console.log(variables);
      console.log(context);
    },
  });

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

  if (!localStorage.accessToken) {
    alert("로그인이 필요한 서비스입니다.");
    return <Navigate to="/" />;
  }

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
        <Submit
          onClick={() => {
            mutate();
          }}
        >
          Submit
        </Submit>
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
  cursor: default;
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
