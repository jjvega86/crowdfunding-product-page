import { useState } from "react";
import Modal from "./Modal";

const RewardButton = ({ outOfStock }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-light text-white rounded-full py-3 px-10 font-bold"
        >
          Select Reward
        </button>
      )}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default RewardButton;
