type DomNodeId = string;

const createElement = (selectedId: DomNodeId) => {
  const element = document.createElement("div");
  element.setAttribute("id", selectedId);
  return element;
};

const usePortal = (selectedId: DomNodeId) => {
  const parentElement = document.body;
  const isExistElement = document.getElementById(selectedId);
  const element = isExistElement ? isExistElement : createElement(selectedId);

  if (!isExistElement) {
    parentElement.appendChild(element);
  }
  return element;
};

export default usePortal;
