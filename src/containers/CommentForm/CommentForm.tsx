import { CommentFormData } from "@/app/stories/types";
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
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-5 w-[500px]"
      >
        <label htmlFor="message">Message</label>
        <input
          className="text-black"
          type="text"
          maxLength={60}
          name="message"
          value={form.message || ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="userEmail">Email</label>
        <input
          className="text-black"
          type="text"
          maxLength={60}
          name="userEmail"
          value={form.userEmail || ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="userName">Name</label>
        <input
          className="text-black"
          type="text"
          maxLength={60}
          name="userName"
          value={form.userName || ""}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          {isReplyMode ? "Submit Reply" : "Submit"}
        </button>
        {isReplyMode && (
          <button type="button" className="btn" onClick={resetForm}>
            Cancel Reply
          </button>
        )}
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
