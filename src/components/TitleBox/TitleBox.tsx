import Text from "../Text/Text";

interface TitleBoxProps {
  text: string;
}
export default function TitleBox({ text }: TitleBoxProps) {
  return (
    <div className=" flex h-full relative">
      <div className=" absolute left-[-102px] bottom-0 top-0  border-solid border-l-2 border-grayPrimary " />
      <Text color="text-grayPrimary" title={text} />
    </div>
  );
}
