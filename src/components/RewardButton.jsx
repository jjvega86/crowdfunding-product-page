import React from "react";

const RewardButton = ({ outOfStock }) => {
  return (
    <div>
      {outOfStock ? (
        <button
          disabled
          className="bg-black text-white rounded-full py-3 px-10 font-bold"
        >
          Out Of Stock
        </button>
      ) : (
        <button className="bg-cyan-light text-white rounded-full py-3 px-10 font-bold">
          Select Reward
        </button>
      )}
    </div>
  );
};

export default RewardButton;
