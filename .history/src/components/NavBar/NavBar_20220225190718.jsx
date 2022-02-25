import React, { useState } from "react";
import "./Navbar.style.css";

import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import DropDown from "../DropDown/DropDown";
const NavBar = ({}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <nav className="navbar">
      <Logo icon="dashboard" label="Dashboard" />
      <Flex>
        <Button bg="#AF68E5" />
        <Profile handleShowDropDown={handleShowDropDown} />
      </Flex>
      {showDropDown && <DropDown />}
    </nav>
  );
};

export default NavBar;
