import React from "react";
import { Navigate } from "react-router-dom";

const MyPage = () => {
  if (!localStorage.accessToken) {
    alert("로그인 후 이용해주세요.");
    return <Navigate to="/" />;
  }

  return <div>mypage</div>;
};

export default MyPage;
