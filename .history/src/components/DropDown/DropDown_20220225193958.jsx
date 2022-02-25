import React, { useState } from "react";
import Switch from "react-switch";
import { IoMdLogOut } from "react-icons/io";
import { useOktaAuth } from "@okta/okta-react";
import "./DropDown.style.css";
import LocalStrge from "../../utils/localStorage";
const Menu = () => {
  const [checkedSwitch, setCheckedSwitch] = useState(false);
  const { oktaAuth } = useOktaAuth();
  const handleCheckedSwitch = (checked) => {
    setCheckedSwitch(checked);
    handleSetDarkMode(checked);
  };
  const handleSetDarkMode = (checked) => {
    new LocalStrge().set("darkMode", checked);
    if (checked) {
      document.querySelector(".navbar").classList.add("dark");
      document.querySelector(".todos--container").classList.add("dark");
    } else {
      document.querySelector(".navbar").classList.remove("dark");
      document.querySelector(".todos--container").classList.remove("dark");
    }
  };
  const handleSignOut = () => {
    oktaAuth.signOut();
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

      <li onClick={handleSignOut}>
        <IoMdLogOut size={25} />
        <strong>Log out</strong>
      </li>
    </ul>
  );
};

export default Menu;
