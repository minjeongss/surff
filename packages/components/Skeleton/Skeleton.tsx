import { SkeletonProps } from "./Skeleton.d";
import { SkeletonWrapper, Shimmer } from "./Skeleton.styles";

/**
 * @description
 * Skeleton UI
 *
 * @param width Skeleton의 너비
 * @param height Skeleton의 높이
 */
const Skeleton = ({ width = 60, height = 60 }: SkeletonProps) => {
  return (
    <SkeletonWrapper width={width} height={height}>
      <Shimmer />
    </SkeletonWrapper>
  );
};

export default Skeleton;
