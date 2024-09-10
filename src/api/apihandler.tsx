import axios from "axios";

export const BASE_URL = "http://137.59.222.200:5100/api";


export const apiHandler = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });
  instance.interceptors.request.use((config) => {
    return config;
  });
  return instance;
};


