import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { API_KEY, REDIRECT_URI } from "./Login";
import { API } from "../../config";

export const BASE_URL = `http://10.58.52.229:8000/users/login/kakao`;

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  const getToken = async () => {
    try {
      await axios
        .get(
          `${API.kakaoLogin}?grant_type=authorization_code&client_id=${API_KEY}&redirect_url=${REDIRECT_URI}&code=${code}`
        )
        .then((response) => {
          if (!response.data.accessToken) return alert("로그인 실패");
          localStorage.setItem("accessToken", response.data.accessToken);
          alert("환영합니다");
          navigate("/main");
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  });
  return <div></div>;
};

export default KakaoLogin;
