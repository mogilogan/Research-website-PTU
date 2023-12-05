import React from "react";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <SiGmail size={40} />
    </Link>
  );
};

export default ButtonMailto;
