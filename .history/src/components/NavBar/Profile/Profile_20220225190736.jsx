import React from "react";
import { FaUserAstronaut } from "react-icons/fa";

import "./Profile.style.css";

const Profile = ({}) => {
  return (
    <div className="profile" onClick={handleShowDropDown}>
      <FaUserAstronaut size={25} />
    </div>
  );
};

export default Profile;
