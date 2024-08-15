import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import GoogleMap from "./google-map";
import Form from "./form";
import Info from "./info";
import { contactContent } from "./const";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-8 w-full">
        <TitleBox title={contactContent.title} />
        <Text
          fontSize="text-xl"
          color="text-grayPrimary"
          text={contactContent.text}
        />
      </div>

      <GoogleMap />

      <div className="flex gap-32 mt-20 md:flex-col">
        <Form />
        <Info />
      </div>
    </>
  );
};

export default Contact;
