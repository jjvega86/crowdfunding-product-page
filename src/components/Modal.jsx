import { Dialog } from "@headlessui/react";

import closeModal from "../assets/images/icon-close-modal.svg";

const Modal = ({ children, isOpen, setIsOpen, title, description }) => {
  return (
    <Dialog
      className="relative z-50"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative rounded bg-white w-7/8 p-6">
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
    </Dialog>
  );
};

export default Modal;
