import { useState } from "react";
import PledgeSelection from "./PledgeSelection";

// TODO: Change pledge amount after pledge for correct item
// TODO: Wire data flow to change project stats after pledge selection

const initialState = {
  bambooStandQty: 101,
  blackEditionStandQty: 64,
  mahoganySpecialEditionQty: 0,
};

const PledgeSelections = ({ setIsOpen, setSuccessIsOpen }) => {
  const [pledges, setPledges] = useState(initialState);
  const [currentChoice, setCurrentChoice] = useState("");

  const handleChange = (e) => {
    setCurrentChoice(e.target.value);
  };

  return (
    <div className="text-gray-dark">
      <PledgeSelection
        name={"Pledge with no reward"}
        description={`Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`}
        onChange={handleChange}
        current={currentChoice}
        setIsOpen={setIsOpen}
        setSuccessIsOpen={setSuccessIsOpen}
      />
      <PledgeSelection
        name={"Bamboo Stand"}
        pledgeAmt={25}
        description={`You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special Backer
          member list.`}
        quantity={pledges.bambooStandQty}
        onChange={handleChange}
        current={currentChoice}
        setIsOpen={setIsOpen}
        setSuccessIsOpen={setSuccessIsOpen}
      />
      <PledgeSelection
        name={"Black Edition Stand"}
        pledgeAmt={75}
        description={`You get a Black Special Edition computer stand and a personal thank
      you. You’ll be added to our Backer member list. Shipping is included.`}
        quantity={pledges.blackEditionStandQty}
        onChange={handleChange}
        current={currentChoice}
        setIsOpen={setIsOpen}
        setSuccessIsOpen={setSuccessIsOpen}
      />
      <PledgeSelection
        name={"Mahogany Special Edition"}
        pledgeAmt={200}
        description={`You get
      two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
      thank you. You’ll be added to our Backer member list. Shipping is
      included.`}
        quantity={pledges.mahoganySpecialEditionQty}
        onChange={handleChange}
        current={currentChoice}
        setIsOpen={setIsOpen}
        setSuccessIsOpen={setSuccessIsOpen}
      />
    </div>
  );
};

export default PledgeSelections;
