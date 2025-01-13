type domNodeId = string;

const createElement = (selectedId: domNodeId) => {
  const element = document.createElement("div");
  element.setAttribute("id", selectedId);
  return element;
};

const usePortal = (domNodeId: domNodeId) => {
  const parentElement = document.body;
  const existElement = document.getElementById(domNodeId);
  const element = existElement ? existElement : createElement(domNodeId);

  if (!existElement) {
    parentElement.appendChild(element);
  }
  return element;
};

export default usePortal;
