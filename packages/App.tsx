import React from "react";
import Modal from "./components/Modal/Modal";
import useDisclosure from "./hooks/useDisclosure";
import SignUp from "../examples/components/Signup";

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
        body={<SignUp />}
      />
    </div>
  );
};

export default App;
