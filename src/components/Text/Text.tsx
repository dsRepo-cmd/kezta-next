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

const FontSizeClasses: { [key in FontSize]: string } = {
  "text-sm": "text-sm",
  "text-base": "text-base md:text-base",
  "text-lg": "text-lg md:text-base",
  "text-xl": "text-xl md:text-lg",
  "text-2xl": "text-2xl md:text-xl",
  "text-[28px]": "text-[28px] md:text-2xl",
  "text-[32px]": "text-[32px] md:text-[20px]",
  "text-[44px]": "text-[44px] md:text-[32px]",
  "text-[52px]": "text-[52px] md:text-[44px]",
  "text-7xl": "text-7xl md:text-5xl",
};

export default function Text({
  title,
  subtitle,
  text,
  color = "text-white",
  className = "",
  fontSize = "text-base",
}: TextProps) {
  const colorClass = colorClasses[color] || "";
  const fontSizeClass = FontSizeClasses[fontSize] || "";
  return (
    <>
      {title && (
        <h2 className={` ${colorClass} ${className} ${fontSizeClass}   `}>
          {title}
        </h2>
      )}
      {subtitle && (
        <h3 className={`  ${colorClass} ${className} ${fontSizeClass}`}>
          {subtitle}
        </h3>
      )}
      {text && (
        <p className={` ${colorClass} ${className} ${fontSizeClass}`}>{text}</p>
      )}
    </>
  );
}
