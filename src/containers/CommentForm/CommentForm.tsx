import { CommentFormData } from "@/app/stories/types";
import Divider from "@/components/Divider/Divider";
import TitleBox from "@/components/TitleBox/TitleBox";
import React from "react";

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
        <div className=" flex  gap-10">
          <div className=" flex flex-col  gap-2 w-full ">
            <div className=" flex gap-4 ">
              <label className="text-grayPrimary text-lg" htmlFor="userName">
                Name
              </label>
              <input
                className="bg-black border-none focus-visible:outline-none"
                type="text"
                maxLength={60}
                name="userName"
                value={form.userName || ""}
                onChange={handleChange}
                required
              />
            </div>
            <Divider />
          </div>

          <div className=" flex flex-col  gap-2 w-full ">
            <div className=" flex gap-4 ">
              <label className="text-grayPrimary text-lg" htmlFor="userEmail">
                Email
              </label>
              <input
                className="bg-black border-none focus-visible:outline-none"
                type="text"
                maxLength={60}
                name="userEmail"
                value={form.userEmail || ""}
                onChange={handleChange}
                required
              />
            </div>
            <Divider />
          </div>
        </div>

        <div className=" flex flex-col  gap-2 w-full ">
          <div className=" flex gap-4 ">
            <label className="text-grayPrimary text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-black border-none resize-x w-full focus-visible:outline-none"
              rows={5}
              name="message"
              value={form.message || ""}
              onChange={handleChange}
              required
            />
          </div>
          <Divider />
        </div>

        <div className=" flex justify-between">
          <button
            type="submit"
            className="text-lg px-12 py-3 bg-orange uppercase"
          >
            {isReplyMode ? "Submit Reply" : "Submit"}
          </button>
          {isReplyMode && (
            <button
              type="button"
              className="text-lg px-12 py-3 bg-orange uppercase"
              onClick={resetForm}
            >
              Cancel Reply
            </button>
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

export default CommentForm;
