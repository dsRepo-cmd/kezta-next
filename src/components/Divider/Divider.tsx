interface DividerProps {
  vertical?: boolean;
  className?: string;
}

export default function Divider({ vertical, className }: DividerProps) {
  if (vertical) {
    return (
      <div
        className={` border-solid border-l-2 border-divider mr-20 ${className}`}
      ></div>
    );
  }
  return (
    <span
      className={`border-solid border-b-[1px] border-divider  w-full ${className}`}
    ></span>
  );
}
