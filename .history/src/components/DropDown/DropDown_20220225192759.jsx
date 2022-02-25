import React, { useState } from "react";
import Switch from "react-switch";
import { IoMdLogOut } from "react-icons/io";
import "./DropDown.style.css";
import LocalStrge from "../../utils/localStorage";
const Menu = () => {
  const [checkedSwitch, setCheckedSwitch] = useState(false);
  const handleCheckedSwitch = (checked) => {
    setCheckedSwitch(checked);
    handleSetDarkMode(checked);
  };
  const handleSetDarkMode = (checked) => {
    new LocalStrge().set("darkMode", checked);

    document.querySelector(".navbar").classList.add("dark");
  };
  return (
    <ul className="menu">
      <h3>My Stuff</h3>
      <li>
        <label>
          <strong>Dark Mode</strong>
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
