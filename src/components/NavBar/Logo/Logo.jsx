import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { SiProtodotio } from "react-icons/si";

import "./Logo.style.css";
const Logo = ({ icon, label }) => {
  return (
    <div className="logo">
      {icon === "dashboard" ? (
        <MdOutlineDashboard size="20" />
      ) : (
        <SiProtodotio size="20" />
      )}
      <h3>{label}</h3>
    </div>
  );
};

export default Logo;
