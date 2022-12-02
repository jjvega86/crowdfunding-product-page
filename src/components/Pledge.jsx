import { useMemo, useState } from "react";
import RewardButton from "./RewardButton";

const Pledge = ({ name, pledgeAmt, description, quantity, isSelection }) => {
  const outOfStock = useMemo(() => (quantity <= 0 ? true : false), [quantity]);
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`${
        outOfStock && "opacity-25"
      } border-2 border-solid border-gray-light rounded-lg p-6 mt-7`}
    >
      <div className="flex sm:flex-row sm:justify-between">
        {isSelection && (
          <input
            className="mr-5"
            type="radio"
            name="pledge"
            checked={selected}
            onChange={() => setSelected(!selected)}
          />
        )}
        <div>
          <h3 className="text-black text-lg font-bold mb-1">{name}</h3>
          {pledgeAmt && (
            <p className="text-cyan-light font-medium mb-7">{`Pledge $${pledgeAmt} or more`}</p>
          )}
        </div>
      </div>
      <p className="mb-7">{description}</p>
      <div className="sm:flex sm:flex-row sm:justify-between">
        {quantity && (
          <div className="flex flex-row items-center mb-7">
            <p
              className={`${
                !isSelection ? `text-4xl` : `text-xl`
              } font-bold text-black mr-2`}
            >
              {quantity}
            </p>
            <p>left</p>
          </div>
        )}
        {!isSelection && <RewardButton outOfStock={outOfStock} />}
      </div>
      {selected && (
        <div>
          <hr />
          <div className="flex flex-row justify-between">
            <input
              className="border-solid"
              type="number"
              name="quantity"
              value={pledgeAmt}
            />
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pledge;
