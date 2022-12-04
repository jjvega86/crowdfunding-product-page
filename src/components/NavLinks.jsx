import React from "react";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <ul className="hidden sm:flex flex-row gap-8">
      <NavLink content="About" href="#about" />
      <NavLink content="Discover" href="#discover" />
      <NavLink content="Get Started" href="#getstarted" />
    </ul>
  );
};

export default NavLinks;
