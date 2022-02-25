import React, { useState, useEffect } from "react";
import SingleTodo from "../SingleTodo/SingleTodo";
import GridLoader from "react-spinners/GridLoader";
import { ToastContainer, toast } from "react-toastify";

import { v4 as uuid } from "uuid";
import { TiThListOutline } from "react-icons/ti";
import { BsChevronDown, BsChevronCompactUp } from "react-icons/bs";
import { RiAlarmWarningLine } from "react-icons/ri";
import "./Todos.style.css";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import { createATodo, getAllTodos } from "./helpers";
import { FaSignal } from "react-icons/fa";
import axios from "axios";
import LocalStrge from "../../utils/localStorage";
import BeatLoader from "react-spinners/BeatLoader";

const Container = ({ userName }) => {
  const [newTodo, setNewTodo] = useState({
    text: "",
    completed: false,
    userID: new LocalStrge().get("okta-token-storage").idToken.claims.sub,
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [noTodos, setNoTods] = useState(false);
  const notify = (message) => toast(message);

  const handleShowInput = () => {
    setShowInput(!showInput);
  };
  const handleSetCompleted = (e) => {
    const { value } = e.target;
    console.log(value);

    setNewTodo({ ...newTodo, completed: value === "true" });
    console.log(newTodo);
  };
  const handleSetText = (e) => {
    const { value: text } = e.target;

    setNewTodo({ ...newTodo, text });
  };

  const handleCreateATodo = async () => {
    setLoading(true);
    try {
      const response = await createATodo(newTodo);
      setSuccess(response.data.status);
      setLoading(false);
      console.log(response);
      notify(response.data.status);
      handleGetAllUserTodos();
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleGetAllUserTodos = async (signal) => {
    try {
      const fetchedTodos = await getAllTodos(signal);

      console.log(fetchedTodos);
      if (!fetchedTodos.data.data.length) setNoTods(true);
      else setNoTods(false);
      setTodos(fetchedTodos.data.data.reverse());
    } catch (err) {
      console.error(error);
      setError(error);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    handleGetAllUserTodos(signal);
    //cleaning up async subscriptions
    return () => controller.abort();
  }, [noTodos]);
  let renderedList;
  if (noTodos) {
    renderedList = (
      <Flex border dashed width="486px" justify="center">
        <RiAlarmWarningLine size={25} />
        <h5 style={{ marginLeft: ".6rem" }}>
          You have no TODOS. start adding some
        </h5>
      </Flex>
    );
  } else {
    renderedList =
      todos.length > 0 ? (
        todos.map((t) => (
          <SingleTodo key={uuid()} todo={t} getTodos={handleGetAllUserTodos} />
        ))
      ) : (
        <GridLoader />
      );
  }
  return (
    <div className="todos--container">
      <div className="todos--welcome">
        <h1>
          Welcome Home <strong>{userName}</strong>
        </h1>
      </div>
      <Flex width="485px">
        <TiThListOutline size="35" color="#af68e5b5" />
        <h2
          style={{
            marginLeft: ".5rem",
          }}
        >
          My TODOS
        </h2>
      </Flex>
      <Flex
        className="todos--add"
        border
        width="485px"
        pointer
        clickEvent={handleShowInput}
        justify="space-between"
      >
        <Flex>
          <Button bg="#AF68E5" />
          <h4>Add a task</h4>
        </Flex>
        {showInput ? <BsChevronCompactUp /> : <BsChevronDown />}
      </Flex>
      {showInput && (
        <Flex className="todos--input" width="485px" justify="space-between">
          <select
            name="select"
            onChange={handleSetCompleted}
            value={newTodo.completed}
          >
            <option value={false}>Pending</option>
            <option value={true}>Completed</option>
          </select>
          <input
            type="text"
            placeholder="Your TODO..."
            onChange={handleSetText}
          />
          <Button
            bg="#AF68E5"
            label={loading ? "Creating..." : "Create"}
            noIcon
            clickEvent={handleCreateATodo}
            disabled={loading}
          />
        </Flex>
      )}
      <ul className="todos--list">{renderedList}</ul>
      <ToastContainer />
    </div>
  );
};

export default Container;
