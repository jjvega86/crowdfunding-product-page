import React from "react";
import Pledge from "./Pledge";

// TODO: Add state object to track pledge information for each option
// TODO: Map state object to display each pledge
// TODO: Add "success" modal -> transition after pledge is made
// TODO: Wire data flow to change project stats after pledge selection
const PledgeSelections = () => {
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
        quantity={101}
        isSelection
      />
      <Pledge
        name={"Black Edition Stand"}
        pledgeAmt={75}
        description={`You get a Black Special Edition computer stand and a personal thank
      you. You’ll be added to our Backer member list. Shipping is included.`}
        quantity={64}
        isSelection
      />
      <Pledge
        name={"Mahogany Special Edition"}
        pledgeAmt={200}
        description={`You get
      two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
      thank you. You’ll be added to our Backer member list. Shipping is
      included.`}
        quantity={0}
        isSelection
      />
    </div>
  );
};

export default PledgeSelections;
