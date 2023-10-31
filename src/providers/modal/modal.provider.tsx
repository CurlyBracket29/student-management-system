import { Modal } from "@mantine/core";
import React, { PropsWithChildren, createContext, useState } from "react";

type Props = {};

interface IModalState {
  open: boolean;
  children: JSX.Element | null;
  title: string;
}

export const ModalContext = createContext<{
  showModal: (children: JSX.Element, title: string) => void;
  hideModal: () => void;
  toggleModal: () => void;
}>({} as any);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalState, setModalState] = useState<IModalState>({
    open: false,
    children: null,
    title: "",
  });

  const showModal = (children = <></>, title = "") => {
    setModalState({ open: true, children, title });
  };

  const hideModal = () => {
    setModalState({ open: false, children: null, title: "" });
  };

  const toggleModal = () => {
    setModalState({ ...modalState, open: !modalState.open });
  };
  return (
    <ModalContext.Provider value={{ toggleModal, showModal, hideModal }}>
      <Modal
        opened={modalState.open}
        onClose={toggleModal}
        title={modalState.title}
        size={"xl"}
      >
        {modalState.children}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
