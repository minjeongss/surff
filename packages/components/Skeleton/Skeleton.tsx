import { SkeletonProps } from "./Skeleton.d";

const Skeleton = ({ width = 60, height = 60 }: SkeletonProps) => {
  return (
    <div
      className="rounded-[4px] bg-[#ebebeb] overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="w-1/2 h-full bg-[rgba(245,245,245,0.6)] blur-[4px] animate-shimmering"
        style={{
          boxShadow:
            "0 0 50px 30px rgba(245, 245, 245, 0.3), 0 0 20px 10px rgba(245, 245, 245, 0.2), 0 0 10px 5px rgba(245, 245, 245, 0.1)",
        }}
      />
    </div>
  );
};

export default Skeleton;
