import React from "react";

const CardWrapper = ({ children, negative }) => {
  return (
    <div
      className={`mx-auto w-10/12 text-center flex flex-col shadow-lg rounded-lg p-5 ${
        negative ? "-mt-14" : "mt-10"
      } bg-white`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
