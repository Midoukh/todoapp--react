import React from "react";
import { MdAddCircle } from "react-icons/md";
import "./Button.style.css";

const Button = ({
  label,
  bg = "transparent",
  clickEvent,
  color = "white",
  noIcon,
  disabled,
}) => {
  // const Icon = label === 'add'? MdAddCircle :
  return (
    <button
      className="button"
      style={{
        backgroundColor: bg,
        color,
        opacity: disabled ? ".4" : "1",
      }}
      onClick={clickEvent && clickEvent}
      disabled={disabled}
    >
      {!noIcon && <MdAddCircle color="white" />}
      <h5>{label}</h5>
    </button>
  );
};

export default Button;
