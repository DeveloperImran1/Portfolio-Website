import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-backend-alpha-jet.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
