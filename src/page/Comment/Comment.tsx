import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "react-query";
import { API } from "../../config";
const Comment = () => {
  const [comment, setComment] = useState("");
  const [commentArea, setCommentArea] = useState<string[]>([]);
  const handleCommit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  console.log(comment);
  console.log(commentArea);

  const handleCommentArea = () => {
    setCommentArea(commentArea.concat(comment));
  };

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
          value={comment}
        />
        <Submit onClick={handleCommentArea}>입력</Submit>
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
