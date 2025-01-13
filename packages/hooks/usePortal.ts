type domNodeId = string;

const createElement = (selectedId: domNodeId) => {
  const element = document.createElement("div");
  element.setAttribute("id", selectedId);
  return element;
};

const usePortal = (selectedId: domNodeId) => {
  const parentElement = document.body;
  const isExistElement = document.getElementById(selectedId);
  const element = isExistElement ? isExistElement : createElement(selectedId);

  if (!isExistElement) {
    parentElement.appendChild(element);
  }
  return element;
};

export default usePortal;
