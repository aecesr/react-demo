import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:4523/mock/1734085/api",
  timeout: 5000,
});

// 请求拦截器

instance.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("x-auth-token");

    if (token) {
      config.headers = {
        "x-auth-token": token,
      };
    }
    return config;
  },
  function (error) {
    // 错误请求
    return Promise.reject(error);
  }
);

// 响应拦截器

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // 错误响应
    return Promise.reject(error);
  }
);

export default instance;
