import axios from "../../Config/axios.config";

const getAllTodos = (signal) => {
  return axios.post("/get", todo, {
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
