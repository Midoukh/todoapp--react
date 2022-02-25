import axios from "axios";

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/todos"
    : "";

const instance = axios.create({
  baseURL: URL,
});

export default instance;
