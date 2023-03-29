import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import ModalPortal from "../Modal/ModalPortal";
import SignUpModal from "../Modal/SignUp";
import { header } from "../../styles/mixin";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { useAppSelector } from "../../store/store";
import { toggleActions } from "../../store/Toggle";
import { API } from "../../config";

interface SignInType {
  email: string;
  password: string;
}
export const API_KEY = process.env.REACT_APP_API_KEY;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInType>({ mode: "onBlur" });

  const dispatch = useAppDispatch();

  const toggle = useAppSelector((state) => state.Toggle.isClicked);

  const isOpend = () => {
    dispatch(toggleActions.toggle());
  };

  const onSubmitHandler = async (data: SignInType) => {
    try {
      await axios
        .post(`${API.login}`, {
          data,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("accessToken", response.data.accessToken);
          if (localStorage.accessToken) {
            alert("환영합니다");
            navigate("/main");
          } else {
            alert("아이디와 비밀번호가 틀립니다.");
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginPageContainer>
      <LoginMain>
        <Image src={logo} alt="asdf" />
      </LoginMain>
      <LoginBox>
        <Header>3D Web PlatForm</Header>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <LoginArea>
            <LoginInput>
              <Type>ID</Type>
              <Input
                type="text"
                placeholder="아이디"
                {...register("email", {
                  required: "* 이메일을 입력하세요.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "* 이메일 형식에 맞지 않습니다.",
                  },
                })}
              ></Input>
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </LoginInput>
            <LoginInput>
              <Type>PW</Type>
              <Input
                type="password"
                placeholder="비밀번호"
                {...register("password", {
                  required: "* 비밀번호를 입력하세요.",
                  minLength: {
                    value: 1,
                    message: "* 비밀번호를 입력해주세요.",
                  },
                })}
              ></Input>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </LoginInput>
          </LoginArea>
          <LoginButton>join</LoginButton>
        </form>
        <SignUp
          // onClick={() => {
          //   // setIsOpen(true);
          //   isOpend();
          // }}
          onClick={isOpend}
        >
          SignUp
        </SignUp>
        {toggle ? (
          <ModalPortal
            closePortal={isOpend}
            width="500px"
            height="500px"
            position="fixed"
            top="50%"
            left="50%"
          >
            <SignUpModal></SignUpModal>
          </ModalPortal>
        ) : (
          ""
        )}
        <SocialLoginArea>
          <Header>Social Login</Header>
          <Link to={KAKAO_AUTH_URL}>
            <SocialLoginBox>KaKao Login</SocialLoginBox>
          </Link>
        </SocialLoginArea>
      </LoginBox>
    </LoginPageContainer>
  );
};

export default Login;

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

const LoginMain = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const LoginBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  padding-top: 50px;
`;

const Image = styled.img``;

const Header = styled.div`
  ${header}
`;

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const Type = styled.div`
  display: flex;
  align-items: center;
  font-weight: lighter;
  cursor: default;
`;

const Input = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  width: 200px;
  height: 30px;
  margin-bottom: 8px;
  padding: 5px;
`;

const LoginInput = styled.div`
  width: 200px;
  height: 70px;
`;

const LoginButton = styled.button`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: white;
  width: 200px;
  height: 40px;
  cursor: pointer;
`;

const SignUp = styled.div`
  padding-top: 10px;
  font-size: 13px;
  font-weight: lighter;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;

const SocialLoginArea = styled.div`
  margin-top: 30px;
`;

const SocialLoginBox = styled.button`
  border: 1px solid #d3d3d3;
  background-color: white;
  border-radius: 8px;
  width: 400px;
  height: 30px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  font-size: 11px;
`;
