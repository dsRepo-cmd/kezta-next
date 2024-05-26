type TextColor = "text-grayPrimary" | "text-white" | "text-orange";

interface TextProps {
  title?: string;
  subtitle?: string;
  text?: string;
  color: TextColor;
}

export default function Text({ title, subtitle, text, color }: TextProps) {
  return (
    <>
      {title && (
        <h2 className={`text-xl  text-grayPrimary ${color}`}>{title}</h2>
      )}
      {subtitle && <h3 className={`text-xl ${color}`}>{subtitle}</h3>}
      {text && <p className={`text-grayPrimary ${color}`}>{text}</p>}
    </>
  );
}
