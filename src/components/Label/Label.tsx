interface LabelProps {
  right?: boolean;
}

export default function Label({ right }: LabelProps) {
  return (
    <div
      className={` absolute z-[-30] rotate-[270deg] md:hidden  ${
        right
          ? " right-[-260px] bottom-[250px] xl:right-[-200px] "
          : "top-[300px] left-[-300px] xl:left-[-240px]"
      } `}
    >
      <span className=" text-[250px] text-gray font-bold xl:text-[200px]">
        kezto
      </span>
    </div>
  );
}
