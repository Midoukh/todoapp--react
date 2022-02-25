import React from "react";
import "./Navbar.style.css";

import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
const NavBar = ({}) => {
  return (
    <nav className="navbar">
      <Logo icon="dashboard" label="Dashboard" />
      <Flex>
        <Button bg="#AF68E5" />
        <Profile />
      </Flex>
    </nav>
  );
};

export default NavBar;
