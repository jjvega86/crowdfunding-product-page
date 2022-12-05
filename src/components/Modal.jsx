import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import closeModal from "../assets/images/icon-close-modal.svg";

const Modal = ({ children, isOpen, setIsOpen, title, description }) => {
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
            <Dialog.Panel className="relative rounded bg-white md:w-1/2 w-5/6 p-6">
              <Dialog.Title className="text-lg font-bold mb-5">
                {title}
              </Dialog.Title>
              <button
                className="absolute top-8 right-5"
                onClick={() => setIsOpen(false)}
              >
                <img src={closeModal} alt="modal close icon" />
              </button>
              <Dialog.Description className="mb-5 text-sm text-gray-dark">
                {description}
              </Dialog.Description>
              {children}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
