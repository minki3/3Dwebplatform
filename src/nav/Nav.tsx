import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <NavContainer>
      <NavLogo src={logo} />

      <LoginOut>로그아웃</LoginOut>

      <Outlet />
    </NavContainer>
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
`;

const NavLogo = styled.img`
  margin-left: 20px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const LoginOut = styled.div`
  margin-left: 0px;
  display: flex;
  font-size: 13px;
  font-weight: lighter;
`;
