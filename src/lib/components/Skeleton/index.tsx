import { SkeletonWrapper, Shimmer } from "./Skeleton.styles";

interface SkeletonProps {
  width: number;
  height: number;
}

const Skeleton = ({ width, height }: SkeletonProps) => {
  return (
    <SkeletonWrapper width={width} height={height}>
      <Shimmer />
    </SkeletonWrapper>
  );
};

export default Skeleton;
