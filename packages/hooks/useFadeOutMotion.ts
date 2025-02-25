import { useEffect, useState } from "react";

interface useFadeOutMotionProps {
  isOpen: boolean;
  executionTimeout: number;
}
/**
 * @description
 * Ref로 등록한 컴포넌트가 dom에서 사라질 때 자연스럽게 사라지도록 표현하는 로직
 *
 * @param isOpen
 *  - Ref로 등록한 컴포넌트가 dom에 나타남 또는 나타나지 않음에 대한 정보
 * @param executionTimeout
 *  - 타이머에 애니메이션을 보여주는 시간 등록
 *  - animation의 duration과 동일한 시간 설정 필요
 * @returns closed
 *  - isOpen이 false로 변한 후, 애니메이션을 보여주는 시간 확보하는 요소
 *  - 타이머에 등록된 시간이 지난 후, closed가 true로 변하며 화면에서 컴포넌트 삭제
 */
const useFadeOutMotion = ({
  isOpen,
  executionTimeout,
}: useFadeOutMotionProps) => {
  const [fadeOut, setFadeOut] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    if (isOpen) setFadeOut(false);
    else {
      timeoutId = setTimeout(() => {
        setFadeOut(true);
      }, executionTimeout);
    }

    // 화면에서 사라질 때, 타이머 제거하여 성능 향상
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen, executionTimeout]);

  return fadeOut;
};

export default useFadeOutMotion;
