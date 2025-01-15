import { useCallback, useState } from "react";

type DefaultValue = boolean;

const useDisclosure = (defaultValue: DefaultValue) => {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
