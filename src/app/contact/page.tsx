import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import Page from "@/containers/Page/Page";
import { contactContent } from "@/data/contactContent";
import { NavigationName } from "@/data/navigation";

export default function Contact() {
  return (
    <Page navigation={NavigationName.Contact}>
      <div>
        <TitleBox title={contactContent.title} />
        <Text color="text-grayPrimary" text={contactContent.text} />
      </div>

      {/* map */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29613.85462041243!2d-74.01574220633657!3d40.714528503669186!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1716743785587!5m2!1sen!2sua"
        width="930"
        height="500"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className=" flex gap-32">
        {/* form */}

        <form noValidate className=" flex flex-col gap-10 w-1/2 items-start">
          <div className=" flex flex-col gap-2 w-full">
            <div className=" flex gap-4">
              <label className=" text-grayPrimary" htmlFor="name">
                {contactContent.form.name}
              </label>
              <input
                className=" bg-black border-none focus-visible:outline-none"
                name="name"
                type="text"
              />
            </div>
            <Divider />
          </div>

          <div className=" flex flex-col gap-2 w-full">
            <div className=" flex gap-4">
              <label className=" text-grayPrimary" htmlFor="email">
                {contactContent.form.email}
              </label>
              <input
                className=" bg-black border-none focus-visible:outline-none"
                name="email"
                type="text"
              />
            </div>
            <Divider />
          </div>

          <div className=" flex flex-col gap-2 w-full">
            <div className=" flex gap-4">
              <label className=" text-grayPrimary" htmlFor="message">
                {contactContent.form.message}
              </label>
              <textarea
                className=" bg-black border-none focus-visible:outline-none"
                rows={6}
                cols={40}
                name="message"
              />
            </div>
            <Divider />
          </div>

          <button className=" text-[1.1rem] px-12 py-3 bg-orange uppercase ">
            {contactContent.form.button}
          </button>
        </form>

        {/* info */}

        <div className=" flex flex-col w-full gap-8">
          <div className=" flex flex-col w-full gap-2">
            <Text
              className=" text-[1.12rem]"
              color="text-orange"
              text={contactContent.info.address.title}
            />
            <Text
              color="text-grayPrimary"
              text={contactContent.info.address.text}
            />
          </div>

          <div className=" flex flex-col w-full gap-2">
            <Text
              className=" text-[1.12rem]"
              color="text-orange"
              text={contactContent.info.phone.title}
            />
            <Text
              color="text-grayPrimary"
              text={contactContent.info.phone.text}
            />
          </div>

          <div className=" flex flex-col w-full gap-2">
            <Text
              className=" text-[1.12rem]"
              color="text-orange"
              text={contactContent.info.email.title}
            />
            <Text
              color="text-grayPrimary"
              text={contactContent.info.email.text}
            />
          </div>

          <div className=" flex flex-col w-full gap-2">
            <Text
              className=" text-[1.12rem]"
              color="text-orange"
              text={contactContent.info.workingHours.title}
            />
            <div>
              {contactContent.info.workingHours.text.map((text, index) => (
                <Text color="text-grayPrimary" key={index} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
