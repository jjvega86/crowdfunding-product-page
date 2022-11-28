import { useState } from "react";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close-menu.svg";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {!open && (
        <img
          onClick={() => setOpen(!open)}
          className="h-6 w-6 sm:hidden"
          src={hamburger}
          alt="hamburger"
        />
      )}
      {open && (
        <div className="min-h-screen min-w-full bg-gray-dark bg-opacity-25 fixed right-0 top-0 transition duration-200">
          <img
            onClick={() => setOpen(!open)}
            className="h-6 w-6 sm:hidden top-4 right-4 absolute"
            src={close}
            alt="close icon"
          />
          <ul
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-7 font-bold text-lg bg-white text-black p-5 rounded-lg h-60 w-5/6 absolute top-28 left-10 z-50"
          >
            <a href="#about">
              <li>About</li>
            </a>
            <hr className="border-gray-light border-[1px]" />
            <a href="#discover">
              <li>Discover</li>
            </a>
            <hr className="border-gray-light border-[1px]" />
            <a href="#getstarted">
              <li>Get Started</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
