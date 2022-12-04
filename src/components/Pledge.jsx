import { useMemo } from "react";
import RewardButton from "./RewardButton";

const Pledge = ({ name, pledgeAmt, description, quantity, setIsOpen }) => {
  const outOfStock = useMemo(() => (quantity <= 0 ? true : false), [quantity]);

  return (
    <div
      className={`${
        outOfStock && "opacity-25"
      } border-2 border-solid border-gray-light rounded-lg p-6 mt-7`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <h3 className="text-black text-lg font-bold mb-1">{name}</h3>
        {pledgeAmt && (
          <p className="text-cyan-light font-medium mb-7">{`Pledge $${pledgeAmt} or more`}</p>
        )}
      </div>
      <p className="mb-7">{description}</p>
      <div className="sm:flex sm:flex-row sm:justify-between">
        {quantity && (
          <div className="flex flex-row items-center mb-7">
            <p className={`text-3xl font-bold text-black mr-2`}>{quantity}</p>
            <p>left</p>
          </div>
        )}
        <RewardButton outOfStock={outOfStock} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Pledge;
