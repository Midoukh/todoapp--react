import React, { useState } from "react";
import SingleTodo from "../SingleTodo/SingleTodo";
import GridLoader from "react-spinners/GridLoader";
import { v4 as uuid } from "uuid";
import { TiThListOutline } from "react-icons/ti";
import { BsChevronDown, BsChevronCompactUp } from "react-icons/bs";
import "./Todos.style.css";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import { createATodo } from "./helpers";
const Container = ({ userName }) => {
  const [newTodo, setNewTodo] = useState({
    text: "",
    completed: false,
    createdAt: null,
    userID: "5688",
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([
    {
      completed: true,
      text: "fap",
      createdAt: new Date(),
    },
  ]);
  const [showInput, setShowInput] = useState(false);

  const handleShowInput = () => {
    setShowInput(!showInput);
  };
  const handleSetCompleted = (e) => {
    const { value } = e.target;

    if (value === "completed") setNewTodo({ ...newTodo, completed: true });
  };
  const handleSetText = (e) => {
    const { value: text } = e.target;

    setNewTodo({ ...newTodo, text });
  };

  const handleCreateATodo = async () => {
    try {
      const response = await createATodo(newTodo);
      setSuccess(response.data.status);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="todos--container">
      <div className="todos--welcome">
        <h1>
          Welcome Home <strong>{userName}</strong>
        </h1>
      </div>
      <Flex width="485px">
        <TiThListOutline size="35" color="#af68e5b5" />
        <h2>My TODOS</h2>
      </Flex>
      <Flex
        className="todos--add"
        border
        width="485px"
        pointer
        clickEvent={handleShowInput}
        justify="flex-start"
      >
        <Flex>
          <Button bg="#AF68E5" />
          <h4>Add a task</h4>
        </Flex>
        {showInput ? <BsChevronCompactUp /> : <BsChevronDown />}
      </Flex>
      {showInput && (
        <Flex className="todos--input" width="485px" justify="space-between">
          <select name="select" onChange={handleSetCompleted}>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <input
            type="text"
            placeholder="Your TODO..."
            onChange={handleSetText}
          />
          <Button bg="#AF68E5" label="CREATE" clickEvent={handleCreateATodo} />
        </Flex>
      )}
      <ul className="todos--list">
        {todos.length > 0 ? (
          todos.map((t) => <SingleTodo key={uuid()} todo={t} />)
        ) : (
          <GridLoader />
        )}
      </ul>
    </div>
  );
};

export default Container;
