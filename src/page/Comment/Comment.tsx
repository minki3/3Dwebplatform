import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "react-query";
import { API } from "../../config";
import axios from "axios";
import { Post_IdType } from "../../type";
import { error } from "console";

const Comment = ({ post_id }: Post_IdType) => {
  const [comment, setComment] = useState({ comment: "" });
  const [commentArea, setCommentArea] = useState<string[]>([]);
  const handleCommit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };
  console.log(comment);
  console.log(commentArea);

  const hanldeSubmit = async () => {
    if (!comment) {
      alert("댓글을 입력하세요.");
      throw new Error("오류");
    }
    await axios.post(`${API.comments}/${post_id}`, comment, {
      headers: { Authorization: localStorage.accessToken },
    });
  };
  const { mutate } = useMutation(hanldeSubmit, {
    onSuccess(data, variables, context) {
      console.log(data);
    },
    onError(error, variables, context) {
      console.log(error);
      console.log(variables);
      console.log(context);
    },
  });

  return (
    <CommentContainer>
      <CommentArea>
        {commentArea.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </CommentArea>
      <CommentInputContainer>
        <CommentInput
          placeholder="댓글을 입력해주세요."
          onChange={handleCommit}
          name="comment"
        />
        <Submit
          onClick={() => {
            mutate();
          }}
        >
          입력
        </Submit>
      </CommentInputContainer>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const CommentArea = styled.div`
  padding: 20px;
  width: 50%;
  padding-bottom: 20px;
  border: 1px solid #d3d3d3;
`;
const CommentInput = styled.input`
  width: 100%;
  padding: 20px;
`;

const CommentInputContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Submit = styled.button`
  width: 20%;
  padding: 21px;
  background-color: white;
  border: 1px solid #d3d3d3;
  :hover {
    background-color: black;
    color: white;
  }
`;
