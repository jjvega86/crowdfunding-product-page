import { useMemo, useState } from "react";
import { useContext } from "react";
import { PledgeContext } from "../context/PledgeContext";

const PledgeSelection = ({
  title,
  name,
  pledgeAmt,
  description,
  onChange,
  setIsOpen,
  setSuccessIsOpen,
  current,
}) => {
  const { pledges, setPledges, setBackers, setRaised } =
    useContext(PledgeContext);
  const quantity = pledges[`${name}`];
  const outOfStock = useMemo(
    () => (quantity <= 0 && name !== null ? true : false),
    [quantity, name]
  );
  const isSelected = current === title;
  const [pledgeValue, setPledgeValue] = useState(pledgeAmt);

  const handleComplete = () => {
    console.log(pledgeValue);
    setIsOpen(false);
    setPledges({
      ...pledges,
      [`${name}`]: quantity - 1,
    });
    setBackers((prev) => prev + 1);
    setRaised((prev) => prev + +pledgeValue);
    setSuccessIsOpen(true);
  };

  return (
    <div
      className={`${
        outOfStock && "opacity-25"
      } border-2 border-solid border-gray-light ${
        isSelected && "border-cyan-light"
      } rounded-lg mt-7`}
    >
      <div className="flex sm:flex-row sm:justify-between p-6">
        <input
          className="mr-5 self-start mt-2"
          type="radio"
          name="pledge"
          value={title}
          checked={isSelected}
          onChange={onChange}
          disabled={outOfStock}
        />
        <div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between">
              <h3 className="text-black text-md font-bold mb-1">{title}</h3>
              {pledgeAmt && (
                <p className="text-cyan-light font-bold ml-6">{`Pledge $${pledgeAmt} or more`}</p>
              )}
            </div>
            {quantity && (
              <div className="flex flex-row items-center mb-7">
                <p className={`font-bold text-black mr-2`}>{quantity}</p>
                <p>left</p>
              </div>
            )}
          </div>
          <p className="mb-7">{description}</p>
        </div>
      </div>
      {isSelected && (
        <>
          <hr />
          <div className="p-6">
            <div className="flex flex-row justify-between mt-5">
              <input
                className="hidden md:block pl-4"
                type="text"
                name="pledge"
                placeholder="Enter your pledge"
                onChange={(e) => setPledgeValue(e.target.value)}
              />
              <div className="flex flex-row items-center p-2 border-2 w-24 rounded-full border-gray-light">
                <p className="ml-2">$</p>
                <input
                  className="ml-2 w-1/2 text-black font-bold text-lg"
                  type="number"
                  name="quantity"
                  value={pledgeValue}
                  onInput={(e) => setPledgeValue(e.target.value)}
                />
              </div>
              <button
                onClick={handleComplete}
                className="bg-cyan-light text-white rounded-full py-3 px-6 font-bold"
              >
                Continue
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PledgeSelection;
