import React, { useState } from "react";

import "./SingleTodo.style.css";
import { IoIosDoneAll } from "react-icons/io";
import { BsFillCalendar2Fill } from "react-icons/bs";

const SingleTodo = ({ todo }) => {
  const { completed, text, createdAt } = todo;
  const [isActive, setIsActive] = useState(false);

  const handleToggleAccordion = () => {
    setIsActive(!isActive);
  };

  const integratedClassHeading = completed
    ? ["single-todo--head", "approved-progress"].join(" ")
    : "single-todo--head";
  const integratedClassOval = completed
    ? ["single-todo--ovel", "approved-progress-oval"].join(" ")
    : "single-todo--ovel";
  return (
    <li className="single-todo">
      <div className="single-todo--toggle">
        <div className={integratedClassHeading}>
          <div className={integratedClassOval}>
            {completed && <IoIosDoneAll size="30" />}
          </div>
          <h3 className="single-todo--text">{text}</h3>
        </div>
        <span onClick={handleToggleAccordion}>{isActive ? "-" : "+"}</span>
      </div>
      <div className="single-todo--calendar">
        <BsFillCalendar2Fill />
      </div>
      {isActive && <div className="single-todo--details">{text}</div>}
    </li>
  );
};

export default SingleTodo;
