import React from "react";
import "./Flex.style.css";
const Flex = ({
  children,
  direction = "row",
  border,
  width,
  space,
  pointer,
  clickEvent,
  justify,
  dashed,
}) => {
  return (
    <div
      className="flex-container"
      style={{
        padding: "0 1rem",
        margin: ".5rem 0",
        display: "flex",
        justifyContent: space ? "space-between" : justify,
        alignItems: "center",
        flexDirection: direction,
        border: border && "1px solid #ccc",
        borderRadius: "50px",
        width: width && width,
        cursor: pointer && "pointer",
        borderStyle: dashed && "dashed",
      }}
      onClick={clickEvent && clickEvent}
    >
      {children}
    </div>
  );
};

export default Flex;
