import Divider from "../Divider/Divider";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  htmlFor?: string;

  value?: string;
}
function Input({
  label,
  name,
  type = "text",
  value,

  ...otherProps
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-4">
        <label className="text-grayPrimary text-lg text-nowrap " htmlFor={name}>
          {label}
        </label>

        <input
          className="bg-black border-none focus-visible:outline-none selection:text-grayPrimary"
          id={name}
          name={name}
          type={type}
          value={value}
          {...otherProps}
        />
      </div>
      <Divider />
    </div>
  );
}

export default Input;
