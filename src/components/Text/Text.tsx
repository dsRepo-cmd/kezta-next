type TextColor = "text-grayPrimary" | "text-white" | "text-orange";

interface TextProps {
  title?: string;
  subtitle?: string;
  text?: string;
  className?: string;
  color?: TextColor;
}

export default function Text({
  title,
  subtitle,
  text,
  color,
  className,
}: TextProps) {
  return (
    <>
      {title && <h2 className={`text-xl  ${color} ${className}`}>{title}</h2>}
      {subtitle && (
        <h3 className={` text-lg ${color} ${className}`}>{subtitle}</h3>
      )}
      {text && <p className={` ${color} ${className}`}>{text}</p>}
    </>
  );
}
