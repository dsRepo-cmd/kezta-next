import { CSSProperties, HTMLAttributes, memo } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  width?: string | number;
  aspectRatio?: string;
  border?: string;
}

function Skeleton(props: SkeletonProps) {
  const { className, height, width, aspectRatio, border } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
    aspectRatio,
  };

  return (
    <div
      className={`relative w-full h-full shadow-custom bg-[#161515] overflow-hidden ${className}`}
      style={styles}
    >
      <div className="absolute left-40 top-0 h-full w-[80%] animate-load bg-gradient-custom"></div>
    </div>
  );
}

export default memo(Skeleton);
