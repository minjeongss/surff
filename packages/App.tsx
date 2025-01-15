import React from "react";
import Modal from "./components/Modal/Modal";
import useDisclosure from "./hooks/useDisclosure";

const App = () => {
  const { isOpen, onOpen, onToggle } = useDisclosure(false);
  return (
    <div>
      <button onClick={onOpen}>open</button>
      <Modal isOpen={isOpen} onToggle={onToggle} />
    </div>
  );
};

export default App;
