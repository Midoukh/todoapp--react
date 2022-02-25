import React from "react";
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
      {label}
    </button>
  );
};

export default Button;
