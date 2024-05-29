import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import Page from "@/containers/Page/Page";
import { contactContent } from "@/data/contactContent";
import { NavigationName } from "@/data/navigation";

const Contact = () => {
  const renderFormInput = (
    label: string,
    name: string,
    type = "text",
    isTextArea = false
  ) => (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-4">
        <label className="text-grayPrimary" htmlFor={name}>
          {label}
        </label>
        {isTextArea ? (
          <textarea
            className="bg-black border-none focus-visible:outline-none"
            rows={6}
            cols={40}
            name={name}
          />
        ) : (
          <input
            className="bg-black border-none focus-visible:outline-none"
            name={name}
            type={type}
          />
        )}
      </div>
      <Divider />
    </div>
  );

  const renderInfoBlock = (title: string, text: string | string[]) => (
    <div className="flex flex-col w-full gap-2">
      <Text className="text-[1.12rem]" color="text-orange" text={title} />
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
    <Page navigation={NavigationName.Contact}>
      <div className="flex flex-col gap-5">
        <TitleBox title={contactContent.title} />
        <Text
          className="text-[1.25rem]"
          color="text-grayPrimary"
          text={contactContent.text}
        />
      </div>
      {/* map  */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29613.85462041243!2d-74.01574220633657!3d40.714528503669186!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1716743785587!5m2!1sen!2sua"
        width="930"
        height="500"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex gap-32 mt-20">
        {/* form  */}

        <form noValidate className="flex flex-col gap-10 w-1/2 items-start">
          {renderFormInput(contactContent.form.name, "name")}
          {renderFormInput(contactContent.form.email, "email")}
          {renderFormInput(
            contactContent.form.message,
            "message",
            "text",
            true
          )}
          <button className="text-[1.1rem] px-12 py-3 bg-orange uppercase">
            {contactContent.form.button}
          </button>
        </form>
        {/* info  */}

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
      </div>
    </Page>
  );
};

export default Contact;
