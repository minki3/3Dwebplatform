import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <FooterLogo src={Logo} />
      </LogoContainer>
      <TextContainer>
        <Text>우리 취업가능,,?ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</Text>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  position: fixed;
  background-color: white;
  border: 1px solid #dcdddd;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: white;
`;

const FooterLogo = styled.img`
  width: 100px;
  height: 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100%;
  border-right: 1px solid #d3d3d3;
`;

const TextContainer = styled.div`
  padding: 10px;
`;

const Text = styled.div`
  font-weight: lighter;
  font-size: 13px;
`;
