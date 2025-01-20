import { RefObject, useEffect } from "react";

type ClickEventType = MouseEvent | TouchEvent;

/**
 * @description
 * Ref로 등록한 컴포넌트의 외부 클릭함을 감지하는 로직
 *
 * @param ref
 *  - Ref로 등록한 컴포넌트
 *  - 제네릭 문법을 활용해, Ref의 타입을 HTMLElement의 하위 요소로 유동적 지정 가능
 *  - DOM 요소에 접근해 이벤트 감지가 목적이기에 RefObject 사용
 *  - DOM 요소 조작 또는 컴포넌트 래핑이 목적이 아니기에 forwardRef 사용하지 않음
 * @param handler 외부 클릭했을 때 실행하는 함수
 */
const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: ClickEventType) => void
) => {
  useEffect(() => {
    const listener = (event: ClickEventType) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return; // ref가 null이거나 클릭한 요소가 ref의 최상위가 아닌 내부인 경우, 종료
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
