import React from "react";

const NavLinks = () => {
  return (
    <ul className="hidden sm:flex flex-row gap-8">
      <a href="#about">
        <li>About</li>
      </a>
      <a href="#discover">
        <li>Discover</li>
      </a>
      <a href="#getstarted">
        <li>Get Started</li>
      </a>
    </ul>
  );
};

export default NavLinks;
