import { CSSProperties, HTMLAttributes, memo } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

function Skeleton(props: SkeletonProps) {
  const { className, height, width, border } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={` relative w-full h-[50px] shadow-custom bg-[#161515] overflow-hidden  ${className}`}
      style={styles}
    >
      <div className=" block absolute left-40 top-0 h-full w-[80%] animate-load bg-gradient-custom"></div>
    </div>
  );
}
export default memo(Skeleton);
