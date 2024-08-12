import Text from "@/components/Text/Text";
import { contactContent } from "@/data/contactContent";
import React from "react";

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
      {renderInfoBlock(
        contactContent.info.address.title,
        contactContent.info.address.text
      )}
      {renderInfoBlock(
        contactContent.info.phone.title,
        contactContent.info.phone.text
      )}
      {renderInfoBlock(
        contactContent.info.email.title,
        contactContent.info.email.text
      )}
      {renderInfoBlock(
        contactContent.info.workingHours.title,
        contactContent.info.workingHours.text
      )}
    </div>
  );
}

export default Info;
