import React from "react";
import Modal from "../../packages/components/Modal/Modal";
import useDisclosure from "../../packages/hooks/useDisclosure";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  return (
    <div>
      <button onClick={onOpen}>open</button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        position="center"
        header="회원가입"
        body={"signup!"}
      />
    </div>
  );
};

export default App;
