import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login/Login";
import Main from "./page/Main/Main";
import KakaoLogin from "./page/Login/KakaoLogin";
import Nav from "./nav/Nav";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Login /> />
        <Route path="/oauth/kakaologin" element=<KakaoLogin /> />
        <Route element=<Nav />>
          <Route path="/main" element=<Main /> />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
