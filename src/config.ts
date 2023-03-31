const BASE_URL = "http://172.20.10.3:8000";

const API = {
  kakaoLogin: `${BASE_URL}/users/login/kakao`,
  login: `${BASE_URL}/users/login`,
  posts: `${BASE_URL}/posts`,
  comments: `${BASE_URL}/comments`,
};

export { API };
