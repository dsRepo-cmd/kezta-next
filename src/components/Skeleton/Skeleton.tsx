import { CSSProperties, HTMLAttributes, memo } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  aspectRatio?: string;
}

function Skeleton(props: SkeletonProps) {
  const { className, aspectRatio } = props;

  const styles: CSSProperties = {
    aspectRatio,
  };

  return (
    <div
      className={`relative shadow-custom bg-[#161515] overflow-hidden ${className}`}
      style={styles}
    >
      <div className="absolute left-40 top-0 h-full w-[80%] animate-load bg-gradient-custom"></div>
    </div>
  );
}

export default memo(Skeleton);
