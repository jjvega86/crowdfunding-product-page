import { useState } from "react";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close-menu.svg";
import { Transition } from "@headlessui/react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    if (open) {
      setOpen(false);
      document.body.style.overflow = "unset";
    } else {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="relative">
      {!open && (
        <img
          onClick={handleToggle}
          className="h-6 w-6 sm:hidden"
          src={hamburger}
          alt="hamburger"
        />
      )}
      <Transition
        show={open}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="min-h-screen min-w-full bg-gray-dark bg-opacity-25 fixed right-0 top-0">
          <img
            onClick={handleToggle}
            className="h-6 w-6 sm:hidden top-8 right-9 absolute"
            src={close}
            alt="close icon"
          />
          <ul
            onClick={handleToggle}
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
      </Transition>
    </div>
  );
};

export default MobileNav;
