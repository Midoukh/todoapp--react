import React, { useState } from "react";

import "./SingleTodo.style.css";
import { IoIosDoneAll } from "react-icons/io";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import { deleteATodo } from "../TodosContainer/helpers";

dayjs.extend(RelativeTime);

const SingleTodo = ({ todo }) => {
  const { completed, text, createdAt, _id } = todo;
  const [isActive, setIsActive] = useState(false);

  const handleToggleAccordion = () => {
    setIsActive(!isActive);
  };
  const handleDeleteATodo = async () => {
    try {
      // const response = await deleteATodo(_id);
      console.log(_id);
    } catch (error) {
      console.log(response);
    }
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
          <div className={integratedClassOval}>
            {completed && <IoIosDoneAll size="30" />}
          </div>
          <h3 className="single-todo--text">{text}</h3>
        </div>
        <MdOutlineDelete
          size={25}
          color="rgba(0,0,0,.9)"
          style={{
            cursor: "pointer",
          }}
          onClick={handleDeleteATodo}
        />
        <div className="single-todo--calendar">
          <BsFillCalendar2Fill color="rgb(243, 145, 33)" />
          <strong>{dayjs(createdAt).fromNow()}</strong>
        </div>
      </div>

      {isActive && <div className="single-todo--details">{text}</div>}
    </li>
  );
};

export default SingleTodo;
