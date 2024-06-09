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
      className={`relative max-w-full shadow-custom bg-[#161515] overflow-hidden animate-pulse  dark:bg-grayPrimary ${className}`}
      style={styles}
    />
  );
}

export default memo(Skeleton);
