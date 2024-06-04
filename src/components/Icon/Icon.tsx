import React, { FC, memo } from "react";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconProps extends SvgProps {
  className?: string;
  Svg: FC<React.SVGProps<SVGSVGElement>>;
  title?: string;
  filled?: boolean;
}

function Icon(props: IconProps) {
  const { className, Svg, width = 32, height = 32, ...otherProps } = props;

  return (
    <Svg
      className={`${className}`}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );
}

export default memo(Icon);
