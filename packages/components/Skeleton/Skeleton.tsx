import { SkeletonProps } from "./Skeleton.d";
import { SkeletonWrapper, Shimmer } from "./Skeleton.styles";

const Skeleton = ({ width = 60, height = 60 }: SkeletonProps) => {
  return (
    <SkeletonWrapper width={width} height={height}>
      <Shimmer />
    </SkeletonWrapper>
  );
};

export default Skeleton;
