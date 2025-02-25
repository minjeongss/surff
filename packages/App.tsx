import React from "react";
import Modal from "./components/Modal/Modal";
import useDisclosure from "./hooks/useDisclosure";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  return (
    <div>
      <button onClick={onOpen}>open</button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        position="bottom"
        header="Modal Header Part"
        body="Modal Body Part"
      />
    </div>
  );
};

export default App;
