import React, { useContext } from "react";
import { ModalContext } from "../providers/modal/modal.provider";

type Props = {};

const useModalProvider = () => {
  const { showModal, hideModal, toggleModal } = useContext(ModalContext);
  return { showModal, hideModal, toggleModal };
};

export default useModalProvider;
