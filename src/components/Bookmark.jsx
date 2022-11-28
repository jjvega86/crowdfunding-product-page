import React from "react";
import bookmark from "../assets/images/icon-bookmark.svg";

const Bookmark = () => {
  return (
    <div className="flex flex-row pr-5">
      <img className="z-50" src={bookmark} alt="bookmark icon" />
      <p className="w-40 h-14 hidden sm:block rounded-full bg-gray-light text-black font-bold -ml-10 py-4 pl-5">
        Bookmark
      </p>
    </div>
  );
};

export default Bookmark;
