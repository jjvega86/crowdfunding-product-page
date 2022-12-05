import { useContext, useState } from "react";
import { PledgeContext } from "../context/PledgeContext";
import { Transition } from "@headlessui/react";

import CardWrapper from "./CardWrapper";
import Pledge from "./Pledge";
import Modal from "./Modal";
import CompleteModal from "./CompleteModal";
import PledgeSelections from "./PledgeSelections";

const PledgeOptions = () => {
  const { pledges } = useContext(PledgeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [successIsOpen, setSuccessIsOpen] = useState(false);

  return (
    <>
      <CardWrapper>
        <div className="p-6 text-left text-gray-dark">
          <h3 className="text-xl font-bold text-black mb-5">
            About this project
          </h3>
          <p className="mb-5">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="mb-10">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <Pledge
            name={"Bamboo Stand"}
            pledgeAmt={25}
            description={`You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special Backer
          member list.`}
            quantity={pledges.bambooStand}
            setIsOpen={setIsOpen}
          />
          <Pledge
            name={"Black Edition Stand"}
            pledgeAmt={75}
            description={`You get a Black Special Edition computer stand and a personal thank
      you. You’ll be added to our Backer member list. Shipping is included.`}
            quantity={pledges.blackEditionStand}
            setIsOpen={setIsOpen}
          />
          <Pledge
            name={"Mahogany Special Edition"}
            pledgeAmt={200}
            description={`You get
      two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
      thank you. You’ll be added to our Backer member list. Shipping is
      included.`}
            quantity={pledges.mahoganySpecialEdition}
            setIsOpen={setIsOpen}
          />
        </div>
      </CardWrapper>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {" "}
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
      </Transition>
      <Transition
        show={successIsOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {" "}
        <CompleteModal isOpen={successIsOpen} setIsOpen={setSuccessIsOpen} />
      </Transition>
    </>
  );
};

export default PledgeOptions;
