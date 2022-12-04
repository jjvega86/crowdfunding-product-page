import React from "react";

const NavLink = ({ content, href }) => {
  return (
    <a className="hover:cursor-pointer hover:text-gray-light" href={`${href}`}>
      <li>{content}</li>
    </a>
  );
};

export default NavLink;
