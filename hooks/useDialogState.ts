import { useState } from "react";

const useDialogState = () => {
  const [isVisible, setVisible] = useState(false);

  const handleHide = () => setVisible(false);
  const handleShow = () => setVisible(true);

  return { isVisible, handleHide, handleShow };
};

export { useDialogState };
