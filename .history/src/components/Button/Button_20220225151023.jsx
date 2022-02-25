import React from "react";
import { MdAddCircle } from "react-icons/md";
import "./Button.style.css";

const Button = ({ label, bg = "transparent", clickEvent, color = "white" }) => {
  // const Icon = label === 'add'? MdAddCircle :
  return (
    <button
      className="button"
      style={{
        backgroundColor: bg,
        color,
      }}
      onClick={clickEvent && clickEvent}
    >
      <MdAddCircle color="white" />
      <h5>{label}</h5>
    </button>
  );
};

export default Button;
