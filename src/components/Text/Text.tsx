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

const colorClasses: { [key in TextColor]: string } = {
  "text-grayPrimary": "text-grayPrimary selection:bg-grayLight",
  "text-white": "text-white selection:text-grayPrimary selection:bg-grayLight",
  "text-orange": "text-orange",
};

export default function Text({
  title,
  subtitle,
  text,
  color = "text-white",
  className,
  fontSize = "text-base",
}: TextProps) {
  const colorClass = colorClasses[color] || "";
  return (
    <>
      {title && (
        <h2 className={` ${colorClass} ${className} ${fontSize}`}>{title}</h2>
      )}
      {subtitle && (
        <h3 className={`  ${colorClass} ${className} ${fontSize}`}>
          {subtitle}
        </h3>
      )}
      {text && (
        <p className={` ${colorClass} ${className} ${fontSize}`}>{text}</p>
      )}
    </>
  );
}
