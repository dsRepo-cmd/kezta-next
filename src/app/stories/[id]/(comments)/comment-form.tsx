"use client";
import React, { useState } from "react";
import TitleBox from "@/components/TitleBox/TitleBox";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import Button from "@/components/Button/Button";
import { CommentFormData } from "@/types/types";

interface CommentFormProps {
  storyId: string;
  isReplyMode?: boolean;
  currentCommentId?: string | null;
  onSubmit: (formData: CommentFormData, isReply: boolean) => Promise<void>;
  onCancel?: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
  storyId,
  isReplyMode = false,
  currentCommentId = null,
  onSubmit,
  onCancel,
}) => {
  const [form, setForm] = useState<CommentFormData>({
    message: "",
    userName: "",
    avatarLink: "https://picsum.photos/id/237/100/100",
    userEmail: "",
    storyId: storyId,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFormChange = (field: keyof CommentFormData, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const formValidate = () => {
    const err: Record<string, string> = {};
    if (!form.message) err.message = "Message is required";
    if (!form.userEmail) err.userEmail = "Email is required";
    if (!form.userName) err.userName = "Name is required";
    if (form.userName.length > 20)
      err.userName = "Name must be ≤ 20 characters";
    return err;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = formValidate();
    if (Object.keys(validationErrors).length === 0) {
      await onSubmit(
        currentCommentId ? { ...form, commentId: currentCommentId } : form,
        !!currentCommentId
      );
      setForm({
        message: "",
        userName: "",
        avatarLink: "https://picsum.photos/id/237/100/100",
        userEmail: "",
        storyId: storyId,
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col gap-10 w-full mb-6"
    >
      {!isReplyMode && <TitleBox title="Leave a Comment" />}
      <div className="flex gap-10 md:flex-col">
        <Input
          name="userName"
          label="Name"
          required
          value={form.userName}
          onChange={(e) => handleFormChange("userName", e.target.value)}
        />
        <Input
          name="userEmail"
          label="Email"
          required
          value={form.userEmail}
          onChange={(e) => handleFormChange("userEmail", e.target.value)}
        />
      </div>
      <Textarea
        name="message"
        label="Message"
        required
        value={form.message}
        onChange={(e) => handleFormChange("message", e.target.value)}
      />
      <div className="flex justify-between">
        <Button type="submit">{isReplyMode ? "Reply" : "Submit"}</Button>
        {isReplyMode && onCancel && (
          <Button type="button" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
      {Object.keys(errors).map((err, index) => (
        <li key={index}>{errors[err]}</li>
      ))}
    </form>
  );
};

export default CommentForm;
