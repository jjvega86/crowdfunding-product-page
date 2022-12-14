import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import checkIcon from "../assets/images/icon-check.svg";

const CompleteModal = ({ isOpen, setIsOpen }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as={Fragment}
    >
      <Dialog className="relative z-50" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="bg-white w-2/3 flex flex-col justify-center items-center rounded-lg p-10">
              <img className="mb-8" src={checkIcon} alt="check icon" />
              <Dialog.Title className="text-lg font-bold mb-5">
                Thanks for your support!
              </Dialog.Title>
              <Dialog.Description className="mb-5 text-sm text-gray-dark">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </Dialog.Description>
              <button
                className="bg-cyan-light hover:bg-cyan-dark text-white rounded-full py-3 px-10 font-bold mt-5"
                onClick={() => setIsOpen(false)}
              >
                Got it!
              </button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CompleteModal;
