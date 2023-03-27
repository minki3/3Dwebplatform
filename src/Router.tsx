import React, { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login/Login";
import Main from "./page/Main/Main";
import KakaoLogin from "./page/Login/KakaoLogin";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Writing from "./page/Writing/Writing";
import Detail from "./page/Detail/Detail";

interface LayoutProps {
  children?: ReactNode;
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Login /> />
        <Route path="/oauth/kakaologin" element=<KakaoLogin /> />
        <Route element={<Layout />}>
          <Route path="/main" element=<Main /> />
          <Route path="/writing" element=<Writing /> />
          <Route path="/Detail/:listId" element=<Detail /> />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Router;
