import axios from "axios";

export const BASE_URL = "http://192.168.100.42:4000/api";


export const apiHandler = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });
  instance.interceptors.request.use((config) => {
    return config;
  });
  return instance;
};


