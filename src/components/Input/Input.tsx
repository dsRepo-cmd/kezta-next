import React, { InputHTMLAttributes } from "react";
import Divider from "../Divider/Divider";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  htmlFor?: string;
  isTextArea?: boolean;
  rows?: number;
}
export default function Input({
  label,
  rows = 6,
  name,
  type = "text",
  isTextArea,
  ...otherProps
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-4">
        <label className="text-grayPrimary text-lg text-nowrap" htmlFor={name}>
          {label}
        </label>

        {isTextArea ? (
          <textarea
            className="bg-black border-none resize-x w-full focus-visible:outline-none"
            rows={rows}
            name={name}
          />
        ) : (
          <input
            className="bg-black border-none focus-visible:outline-none"
            name={name}
            type={type}
            {...otherProps}
          />
        )}
      </div>
      <Divider />
    </div>
  );
}
