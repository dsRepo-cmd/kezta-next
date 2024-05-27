import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import Page from "@/containers/Page/Page";
import { contactContent } from "@/data/contactContent";
import { NavigationName } from "@/data/navigation";

export default function Contact() {
  return (
    <Page naigation={NavigationName.Contact}>
      <div>
        <TitleBox text={contactContent.title} />
        <Text color="text-grayPrimary" text={contactContent.text} />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29613.85462041243!2d-74.01574220633657!3d40.714528503669186!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1716743785587!5m2!1sen!2sua"
        width="930"
        height="500"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className=" flex ">
        <form className=" flex flex-col gap-10 w-1/2 items-start">
          <div className=" flex flex-col gap-2 w-full">
            <div className=" flex gap-4">
              <label className=" text-grayPrimary" htmlFor="name">
                Your Name
              </label>
              <input
                className=" bg-black border-none focus-visible:outline-none"
                name="name"
                type="text"
              />
            </div>
            <span className=" border-solid border-b-[1px] border-divider w-[80%]"></span>
          </div>

          <div className=" flex flex-col gap-2 w-full">
            <div className=" flex gap-4">
              <label className=" text-grayPrimary" htmlFor="email">
                Email
              </label>
              <input
                className=" bg-black border-none focus-visible:outline-none"
                name="email"
                type="text"
              />
            </div>
            <span className=" border-solid border-b-[1px] border-divider w-[80%]"></span>
          </div>

          <div className=" flex flex-col gap-2 w-full">
            <div className=" flex gap-4">
              <label className=" text-grayPrimary" htmlFor="message">
                Message
              </label>
              <textarea
                className=" bg-black border-none focus-visible:outline-none"
                rows={6}
                cols={40}
                name="message"
              />
            </div>
            <span className=" border-solid border-b-[1px] border-divider w-[80%]"></span>
          </div>

          <button>SUBMIT</button>
        </form>
        <div>tess</div>
      </div>
    </Page>
  );
}
