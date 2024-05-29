type TextColor = "text-grayPrimary" | "text-white" | "text-orange";
type FontSize =
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-[28px]"
  | "text-[32px]"
  | "text-[44px]"
  | "text-[52px]"
  | "text-7xl";

interface TextProps {
  title?: string;
  subtitle?: string;
  text?: string;
  className?: string;
  color?: TextColor;
  fontSize?: FontSize;
}

export default function Text({
  title,
  subtitle,
  text,
  color,
  className,
  fontSize = "text-base",
}: TextProps) {
  return (
    <>
      {title && (
        <h2 className={` ${color} ${className} ${fontSize}`}>{title}</h2>
      )}
      {subtitle && (
        <h3 className={`  ${color} ${className} ${fontSize}`}>{subtitle}</h3>
      )}
      {text && <p className={` ${color} ${className} ${fontSize}`}>{text}</p>}
    </>
  );
}
