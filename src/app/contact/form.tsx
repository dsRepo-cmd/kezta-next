import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import { contactContent } from "./const";

function Form() {
  return (
    <form
      noValidate
      className="flex flex-col gap-10 w-1/2 items-start md:w-full"
    >
      <Input label={contactContent.form.name} name={"name"} type={"text"} />
      <Input label={contactContent.form.email} name={"email"} type={"text"} />
      <Textarea
        label={contactContent.form.message}
        name={"message"}
        type={"text"}
      />

      <Button className="text-lg px-12 py-3 bg-orange uppercase">
        {contactContent.form.button}
      </Button>
    </form>
  );
}

export default Form;
