import React, { InputHTMLAttributes } from "react";
import Divider from "../Divider/Divider";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  htmlFor?: string;

  rows?: number;
  value?: string;
}
export default function Textarea({
  label,
  rows = 6,
  name,
  type = "text",
  value,
  ...otherProps
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-4">
        <label className="text-grayPrimary text-lg text-nowrap" htmlFor={name}>
          {label}
        </label>

        <textarea
          className="bg-black border-none resize-x w-full focus-visible:outline-none selection:text-grayPrimary"
          rows={rows}
          name={name}
          {...otherProps}
        />
      </div>
      <Divider />
    </div>
  );
}
