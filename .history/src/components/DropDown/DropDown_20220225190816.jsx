import React from "react";

import { IoMdLogOut } from "react-icons/io";
import "./DropDown.style.css";
const Menu = () => {
  return (
    <ul className="menu">
      <h3>My Stuff</h3>
      <li>switch</li>

      <li>
        <IoMdLogOut size={25} />
        <strong>Log out</strong>
      </li>
    </ul>
  );
};

export default Menu;
