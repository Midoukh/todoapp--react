import React, { useState } from "react";
import Switch from "react-switch";
import { IoMdLogOut } from "react-icons/io";
import "./DropDown.style.css";
const Menu = () => {
  const [checkedSwitch, setCheckedSwitch] = useState(false);
  const handleCheckedSwitch = (checked) => {
    setCheckedSwitch(checked);
  };
  return (
    <ul className="menu">
      <h3>My Stuff</h3>
      <li>
        <label>
          <Switch onChange={handleCheckedSwitch} checked={checkedSwitch} />
        </label>
      </li>

      <li>
        <IoMdLogOut size={25} />
        <strong>Log out</strong>
      </li>
    </ul>
  );
};

export default Menu;
