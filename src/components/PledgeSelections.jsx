import { useState } from "react";
import Pledge from "./Pledge";

// TODO: On select pledge, show "pledge amt + continue"
// TODO: Add "success" modal -> transition after pledge is made
// TODO: Change pledge amount after pledge for correct item
// TODO: Wire data flow to change project stats after pledge selection

const initialState = {
  bambooStandQty: 101,
  blackEditionStandQty: 64,
  mahoganySpecialEditionQty: 0,
};

const PledgeSelections = () => {
  const [pledges, setPledges] = useState(initialState);
  return (
    <div className="text-gray-dark">
      <Pledge
        name={"Pledge with no reward"}
        description={`Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`}
        isSelection
      />
      <Pledge
        name={"Bamboo Stand"}
        pledgeAmt={25}
        description={`You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special Backer
          member list.`}
        quantity={pledges.bambooStandQty}
        isSelection
      />
      <Pledge
        name={"Black Edition Stand"}
        pledgeAmt={75}
        description={`You get a Black Special Edition computer stand and a personal thank
      you. You’ll be added to our Backer member list. Shipping is included.`}
        quantity={pledges.blackEditionStandQty}
        isSelection
      />
      <Pledge
        name={"Mahogany Special Edition"}
        pledgeAmt={200}
        description={`You get
      two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
      thank you. You’ll be added to our Backer member list. Shipping is
      included.`}
        quantity={pledges.mahoganySpecialEditionQty}
        isSelection
      />
    </div>
  );
};

export default PledgeSelections;
