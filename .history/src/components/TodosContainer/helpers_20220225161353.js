import axios from "../../Config/axios.config";
import LocalStrge from "../../utils/localStorage";

const userData = new LocalStrge().get("okta-token-storage") || {};
const accessToken =
  Object.keys(userData).length === 0 ? "" : userData.accessToken.accessToken;

const getAllTodos = async (signal) => {
  axios.defaults.headers.common = { Authorization: `Bearer ${accessToken}` };
  return axios.get("/get", todo, {
    signal,
  });
};
const createATodo = async (todo) => {
  return axios.post("/post", todo);
};
const updateATodo = (todoId, data) => {
  return axios.put(`/put/${todoId}`, data);
};
const deleteATodo = (todoId) => {
  return axios.delete(`/delete/${todoId}`);
};

export { getAllTodos, createATodo, updateATodo, deleteATodo };
