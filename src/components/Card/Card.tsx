import { ReactNode, memo } from "react";

interface CardProps {
  children: ReactNode;
}
const Card = ({ children }: CardProps) => {
  return <div className=" bg-orange p-10">{children}</div>;
};

export default memo(Card);
