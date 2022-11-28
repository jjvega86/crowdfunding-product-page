import React from "react";
import CardWrapper from "./CardWrapper";
import Pledge from "./Pledge";

const PledgeOptions = () => {
  return (
    <CardWrapper>
      <div className="p-6 text-left text-gray-dark">
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="mb-10">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <Pledge
          name={"Bamboo Stand"}
          pledgeAmt={25}
          description={`You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you'll be added to a special Backer
        member list.`}
          quantity={101}
        />
      </div>
    </CardWrapper>
  );
};

export default PledgeOptions;
