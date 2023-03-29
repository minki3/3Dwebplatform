import React, { useRef } from "react";
import styled from "styled-components";
import { header } from "../../styles/mixin";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API } from "../../config";

interface SignUpType {
  email: string;
  password: string;
  password_confirm: string;
  address: string;
}

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
  } = useForm<SignUpType>({ mode: "onBlur" });

  const onSubmitHandler = async (data: SignUpType) => {
    try {
      await axios.post(`${API.login}`, {
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Header>Sign Up</Header>
        <SignUpArea>
          <SignUpInputArea>
            <SignUpBlock>
              <Text>email</Text>
              <SignUpInput
                placeholder="이메일 형식으로 입력"
                {...register("email", {
                  required: "* 이메일은 필수 입력입니다.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "* 이메일 형식에 맞지 않습니다.",
                  },
                })}
              />
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            </SignUpBlock>
            <SignUpBlock>
              <Text>password</Text>
              <SignUpInput
                type="password"
                placeholder="비밀번호 8자리 이상"
                {...register("password", {
                  required: "* 비밀번호는 필수 입력입니다.",
                  minLength: {
                    value: 8,
                    message: "* 8자리 이상 비밀번호를 사용하세요.",
                  },
                })}
              />
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            </SignUpBlock>
            <SignUpBlock>
              <Text>password</Text>
              <SignUpInput
                type="password"
                placeholder="비밀번호 재확인"
                {...register("password_confirm", {
                  required: true,
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return (
                        password === value || "*비밀번호가 일치하지 않습니다."
                      );
                    },
                  },
                })}
              ></SignUpInput>
              <ErrorMessage>{errors.password_confirm?.message}</ErrorMessage>
            </SignUpBlock>
            <SignUpBlock>
              <Text>address</Text>
              <SignUpInput
                {...register("address", {
                  required: "*주소를 입력해주세요",
                  minLength: {
                    value: 5,
                    message: "*주소를 입력해주세요.",
                  },
                })}
              ></SignUpInput>
              <ErrorMessage>{errors.address?.message}</ErrorMessage>
            </SignUpBlock>
          </SignUpInputArea>
        </SignUpArea>
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  ${header}
`;

const SignUpArea = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-weight: lighter;
  display: flex;
`;

const SignUpInputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const SignUpInput = styled.input`
  border: 1px solid #d3d3d3;
  width: 250px;
  height: 30px;
  border-radius: 8px;
`;

const SignUpButton = styled.button`
  margin-top: 80px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: white;
  width: 300px;
  height: 30px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

const SignUpBlock = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 20px;
`;
const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  font-size: 13px;
  padding-top: 5px;
`;
