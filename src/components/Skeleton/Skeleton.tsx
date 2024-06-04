import { CSSProperties, HTMLAttributes, memo } from "react";
import cls from "./Skeleton.module.css";

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

  return <div className={`${cls.Skeleton} ${className}`} style={styles} />;
}
export default memo (Skeleton)