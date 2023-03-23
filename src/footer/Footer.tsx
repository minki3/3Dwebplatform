import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterContainer>footer</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.div`
  position: fixed;
  background-color: white;
  border: 1px solid #dcdddd;
  bottom: 0;
  width: 100%;
  height: 100px;
`;
