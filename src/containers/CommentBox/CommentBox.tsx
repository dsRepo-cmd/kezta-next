"use client";
import React, { useEffect, useState } from "react";
import CommentsList from "../CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";
import { Comment, CommentFormData } from "@/app/stories/types";
interface CommentBoxProps {
  storyId: string;
}
function CommentBox({ storyId }: CommentBoxProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [response, setResponse] = useState("");
  const [isReplyMode, setIsReplyMode] = useState(false);
  const [currentCommentId, setCurrentCommentId] = useState<string | null>(null);

  const formValidate = () => {
    let err: Record<string, string> = {};
    if (!form.message) err.message = "Message is required";

    if (!form.userEmail) err.userEmail = "Email is required";
    if (!form.userName) err.userName = "Name is required";
    if (form.userName.length > 20)
      err.userName = "The name must be no more than 20 characters";
    return err;
  };

  const [form, setForm] = useState<CommentFormData>({
    message: "",
    userName: "",
    avatarLink: "https://picsum.photos/id/237/100/100",
    userEmail: "",
    storyId: storyId,
  });

  const resetForm = () => {
    setIsReplyMode(false);
    setCurrentCommentId(null);
    setForm({
      message: "",
      userName: "",
      avatarLink: "https://picsum.photos/id/237/100/100",
      userEmail: "",
      storyId: storyId,
    });
  };

  const postComment = async (formData: CommentFormData) => {
    try {
      const res = await fetch("/api/stories/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await res.json();
      setResponse(response);
      fetchComments(storyId); // Fetch comments again to update the list
      resetForm();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const postReply = async (formData: CommentFormData) => {
    try {
      const res = await fetch("/api/stories/comments", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await res.json();
      setResponse(response);
      fetchComments(storyId); // Fetch comments again to update the list
      resetForm();
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      if (isReplyMode && currentCommentId) {
        await postReply({ ...form, commentId: currentCommentId });
      } else {
        await postComment(form);
      }
    } else {
      setErrors(errs);
    }
  };
  const fetchComments = async (storyId: string) => {
    try {
      const res = await fetch(`/api/stories/comments?storyId=${storyId}`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments(storyId);
  }, [storyId]);

  const handleReplyClick = (commentId: string) => {
    setIsReplyMode(true);
    setCurrentCommentId(commentId);
    setForm((prevForm) => ({
      ...prevForm,
      commentId: commentId,
      message: "",
    }));
  };

  return (
    <div className="flex flex-col gap-10">
      <CommentsList comments={comments} handleReplyClick={handleReplyClick} />
      <CommentForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        resetForm={resetForm}
        isReplyMode={isReplyMode}
        errors={errors}
        response={response}
      />
    </div>
  );
}

export default CommentBox;
