import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./SingleTodo.style.css";
import { IoIosDoneAll } from "react-icons/io";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import { deleteATodo, updateATodo } from "../TodosContainer/helpers";

dayjs.extend(RelativeTime);

const SingleTodo = ({ todo, getTodos }) => {
  const { completed, text, createdAt, _id } = todo;
  const [loading, setLoading] = useState(false);
  const notify = (message) => toast(message);
  const handleDeleteATodo = async () => {
    setLoading(true);
    try {
      const response = await deleteATodo(_id);
      console.log(response);
      setLoading(false);
      notify("TODO deleted!");
      getTodos();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleUpdateATodo = async () => {
    console.log(completed);

    try {
      // const response = await updateATodo(_id, completed)
    } catch (error) {}
  };
  const integratedClassHeading = completed
    ? ["single-todo--head", "approved-progress"].join(" ")
    : "single-todo--head";
  const integratedClassOval = completed
    ? ["single-todo--ovel", "approved-progress-oval"].join(" ")
    : "single-todo--ovel";
  return (
    <li className="single-todo">
      <div
        className={`${
          completed ? "single-todo--toggle completed" : "single-todo--toggle"
        }`}
      >
        <div className={integratedClassHeading}>
          <div className={integratedClassOval} onClick={handleUpdateATodo}>
            {completed && <IoIosDoneAll size="30" />}
          </div>
          <h3 className="single-todo--text">{text}</h3>
        </div>
        <MdOutlineDelete
          size={25}
          color="rgba(0,0,0,.9)"
          style={{
            cursor: loading ? "not-allowed" : "pointer",
          }}
          onClick={handleDeleteATodo}
        />
        <div className="single-todo--calendar">
          <BsFillCalendar2Fill color="rgb(243, 145, 33)" />
          <strong>{dayjs(createdAt).fromNow()}</strong>
        </div>
      </div>
      <ToastContainer />
    </li>
  );
};

export default SingleTodo;
