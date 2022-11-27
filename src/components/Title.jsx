import React from "react";

import mastercraft from "../assets/images/logo-mastercraft.svg";
import bookmark from "../assets/images/icon-bookmark.svg";

const Title = () => {
  return (
    <div className="mx-auto w-3/4 text-center flex flex-col shadow-lg rounded-lg p-5 -mt-14 bg-white">
      <img
        className="self-center -mt-12"
        src={mastercraft}
        alt="mastercraft logo"
      />
      <h3 className="font-bold text-2xl p-5">
        Mastercraft Bamboo Monitor Riser
      </h3>
      <p className="text-gray-dark">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-evenly mt-6">
        <button className="bg-cyan-light text-white rounded-full py-3 px-10 font-bold">
          Back this project
        </button>
        <img src={bookmark} alt="bookmark icon" />
      </div>
    </div>
  );
};

export default Title;
