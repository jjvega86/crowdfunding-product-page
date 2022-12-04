import { useState } from "react";
import Modal from "./Modal";
import CompleteModal from "./CompleteModal";
import PledgeSelections from "./PledgeSelections";

const RewardButton = ({ outOfStock }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [successIsOpen, setSuccessIsOpen] = useState(false);
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
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Back this project"
        description="Want to support us in bringing Mastercraft Bamboo Monitor Rise out in the world?"
      >
        <PledgeSelections
          setIsOpen={setIsOpen}
          setSuccessIsOpen={setSuccessIsOpen}
        />
      </Modal>
      <CompleteModal isOpen={successIsOpen} setIsOpen={setSuccessIsOpen} />
    </div>
  );
};

export default RewardButton;
