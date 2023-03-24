import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("accessToken");
  };

  return (
    <>
      <NavContainer>
        <LogoContainer>
          <NavLogo
            src={logo}
            onClick={() => {
              navigate("/main");
            }}
          />
        </LogoContainer>

        {localStorage.accessToken ? (
          <LoginOutBox>
            <LoginOut
              onClick={() => {
                Logout();
                navigate("/");
              }}
            >
              로그아웃
            </LoginOut>
          </LoginOutBox>
        ) : (
          <LoginOutBox>
            <LoginOut
              onClick={() => {
                navigate("/");
              }}
            >
              로그인
            </LoginOut>
          </LoginOutBox>
        )}
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 1;
`;

const NavLogo = styled.img`
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const LoginOut = styled.div`
  margin-left: 0px;
  font-size: 13px;
  font-weight: lighter;
  margin: 15px;
  cursor: pointer;
`;

const LoginOutBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
  margin-left: auto;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`;
