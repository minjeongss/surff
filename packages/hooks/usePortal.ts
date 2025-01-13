import { useEffect } from "react";

// SSR 예외 처리: SSR에선 브라우저가 없기에, 동작하지 않도록 한다.
const isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";

// ID를 가진 DOM Node를 출력한다.
const createElement = (selectedId: string) => {
  const element = document.createElement("div");
  element.setAttribute("id", selectedId);
  return element;
};

/**
 * @description
 * Portal 사용을 위한 DOM Node 생성 로직
 *
 * @param selectedId
 * @returns HTMLDivElement
 */
const usePortal = (selectedId: string) => {
  const element = isBrowser
    ? document.getElementById(selectedId) || createElement(selectedId)
    : null;

  useEffect(() => {
    if (!element) return;

    const parentElement = document.body;
    if (!document.getElementById(selectedId)) {
      parentElement.appendChild(element);
    }

    return () => {
      parentElement.removeChild(element);
    };
  }, []);

  return element;
};

export default usePortal;
