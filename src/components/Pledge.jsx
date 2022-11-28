import { useMemo } from "react";
import RewardButton from "./RewardButton";

const Pledge = ({ name, pledgeAmt, description, quantity }) => {
  const outOfStock = useMemo(() => (quantity <= 0 ? true : false), [quantity]);
  return (
    <div
      className={`${
        outOfStock && "opacity-25"
      } border-2 border-solid border-gray-light rounded-lg p-6 mt-7`}
    >
      <h3 className="text-black text-lg font-bold mb-1">{name}</h3>
      <p className="text-cyan-light font-medium mb-7">{`Pledge $${pledgeAmt} or more`}</p>
      <p className="mb-7">{description}</p>
      <div className="flex flex-row items-center mb-7">
        <p className="text-4xl font-bold text-black mr-2">{quantity}</p>
        <p>left</p>
      </div>
      <RewardButton outOfStock={outOfStock} />
    </div>
  );
};

export default Pledge;
