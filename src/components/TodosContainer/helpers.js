import axios from "../../Config/axios.config";
import LocalStrge from "../../utils/localStorage";

const userData = new LocalStrge().get("okta-token-storage") || {};
const accessToken =
  Object.keys(userData).length === 0 ? "" : userData.accessToken.accessToken;
const userID =
  Object.keys(userData).length === 0 ? "" : userData.idToken.claims.sub;
axios.defaults.headers.common = { Authorization: `Bearer ${accessToken}` };

const getAllTodos = async (signal) => {
  return axios.get(`/get/${userID}`, {
    signal,
  });
};
const createATodo = async (todo) => {
  const newTodo = { ...todo, createdAt: new Date() };
  return axios.post("/post", newTodo);
};
const updateATodo = (todoId, data) => {
  return axios.put(`/put/${todoId}`, data);
};
const deleteATodo = (todoId) => {
  return axios.delete(`/delete/${todoId}`);
};

export { getAllTodos, createATodo, updateATodo, deleteATodo };
