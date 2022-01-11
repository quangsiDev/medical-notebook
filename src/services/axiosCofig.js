import axios from "axios";
import localStorageServ from "./localstorageServ";
// import { API_URL } from "./config";

const API_URL = "http://localhost:5000";

axios.defaults.withCredentials = true;

export const postAPI = async (url, post, token) => {
  const res = await axios.post(`${API_URL}/api/${url}`, post, {
    headers: { Authorization: localStorageServ.accessToken.get() },
  });
  return res;
};

export const getAPI = async (url, token) => {
  const res = await axios.get(`${API_URL}/api/${url}`, {
    headers: { Authorization: localStorageServ.accessToken.get() },
  });

  return res;
};

export const deleteAPI = async (url, post, token) => {
  const res = await axios.delete(`${API_URL}/api/${url}`, {
    headers: { Authorization: localStorageServ.accessToken.get() },
  });

  return res;
};

export const patchAPI = async (url, post, token) => {
  const res = await axios.patch(`${API_URL}/api/${url}`, post, {
    headers: { Authorization: localStorageServ.accessToken.get() },
  });

  return res;
};

export const putAPI = async (url, post, token) => {
  const res = await axios.put(`${API_URL}/api/${url}`, post, {
    headers: { Authorization: localStorageServ.accessToken.get() },
  });

  return res;
};
