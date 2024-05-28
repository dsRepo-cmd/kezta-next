import Text from "../Text/Text";

interface TitleBoxProps {
  title: string;
}
export default function TitleBox({ title }: TitleBoxProps) {
  return (
    <div className=" flex  relative">
      <div className=" absolute left-[-102px] bottom-0 top-0  border-solid border-l-2 border-grayPrimary " />
      <Text color="text-grayPrimary" title={title} />
    </div>
  );
}
