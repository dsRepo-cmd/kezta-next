import Text from "@/components/Text/Text";
import { contactContent } from "./const";
const { info } = contactContent;

function Info() {
  const renderInfoBlock = (title: string, text: string | string[]) => (
    <div className="flex flex-col w-full gap-2">
      <Text className="text-lg" color="text-orange" text={title} />
      {Array.isArray(text) ? (
        <div>
          {text.map((line, index) => (
            <Text color="text-grayPrimary" key={index} text={line} />
          ))}
        </div>
      ) : (
        <Text color="text-grayPrimary" text={text} />
      )}
    </div>
  );
  return (
    <div className="flex flex-col w-full gap-8">
      {renderInfoBlock(info.address.title, info.address.text)}
      {renderInfoBlock(info.phone.title, info.phone.text)}
      {renderInfoBlock(info.email.title, info.email.text)}
      {renderInfoBlock(info.workingHours.title, info.workingHours.text)}
    </div>
  );
}

export default Info;
