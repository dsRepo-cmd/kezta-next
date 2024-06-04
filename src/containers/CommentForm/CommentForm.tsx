import React, { memo } from "react";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import TitleBox from "@/components/TitleBox/TitleBox";
import { CommentFormData } from "@/app/stories/types";

interface CommentFormProps {
  form: CommentFormData;
  setForm: React.Dispatch<React.SetStateAction<CommentFormData>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
  isReplyMode: boolean;
  errors: Record<string, string>;
  message: string;
}

const CommentForm: React.FC<CommentFormProps> = ({
  form,
  setForm,
  handleSubmit,
  resetForm,
  isReplyMode,
  errors,
  message,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <TitleBox title={isReplyMode ? "Leave a Reply" : "Leave a Comment"} />

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-10 w-full"
      >
        <div className=" flex  gap-10 md:flex-col">
          <Input
            onChange={handleChange}
            value={form.userName}
            label="Name"
            required
            name="userName"
          />

          <Input
            value={form.userEmail}
            label="Email"
            required
            name="userEmail"
            onChange={handleChange}
          />
        </div>

        <Textarea
          value={form.message}
          label="Message"
          required
          name="message"
          onChange={handleChange}
        />

        <div className=" flex justify-between">
          <Button type="submit">{isReplyMode ? "Reply" : "Submit"}</Button>
          {isReplyMode && (
            <Button type="button" onClick={resetForm}>
              Cancel
            </Button>
          )}
        </div>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{errors[err]}</li>
        ))}
      </div>
    </>
  );
};

export default memo(CommentForm);
