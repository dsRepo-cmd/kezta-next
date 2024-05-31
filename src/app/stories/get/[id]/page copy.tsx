"use client";
import Text from "@/components/Text/Text";

import Link from "next/link";
import { useEffect, useState } from "react";

interface StoryProps {
  params: { id: string };
}

interface StoryProps {
  _id: string;
  title: string;
  type: string;
  image: string;
}

interface CommentFormData {
  message: string;
  userName: string;
  avatarLink: string;
  userEmail: string;
  storyId: string;
  commentId?: string;
}

interface Comment {
  _id: string;
  message: string;
  userName: string;
  userEmail: string;
  avatarLink: string;
  commentId?: string;
  storyId?: string;
  replies?: Comment[];
}

export default function StoryId({ params }: StoryProps) {
  const [story, setStory] = useState<StoryProps>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState<CommentFormData>({
    message: "",
    userName: "",
    avatarLink: "https://picsum.photos/100/100?random=1",
    userEmail: "",
    storyId: params.id,
  });

  const [replyForm, setReplyForm] = useState<Record<string, CommentFormData>>(
    {}
  );

  const formValidate = () => {
    let err: Record<string, string> = {};
    if (!form.message) err.message = "Message is required";
    if (!form.userEmail) err.userEmail = "Email is required";
    if (!form.userName) err.userName = "Name is required";
    return err;
  };

  const replyformValidate = (replyForm: CommentFormData) => {
    let err: Record<string, string> = {};
    if (!replyForm.message) err.message = "Message is required";
    if (!replyForm.userEmail) err.userEmail = "Email is required";
    if (!replyForm.userName) err.userName = "Name is required";
    return err;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleReplyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    commentId: string
  ) => {
    const { name, value } = e.target;
    setReplyForm((prev) => ({
      ...prev,
      [commentId]: { ...prev[commentId], [name]: value },
    }));
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
      const data = await res.json();
      setMessage(data.message);
      fetchComments(params.id); // Fetch comments again to update the list
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
      const data = await res.json();
      setMessage(data.message);
      fetchComments(params.id); // Fetch comments again to update the list
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      await postComment(form);
    } else {
      setErrors(errs);
    }
  };

  const handleReplySubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    commentId: string
  ) => {
    e.preventDefault();
    const currentReplyForm = replyForm[commentId];
    const errs = replyformValidate(currentReplyForm);
    if (Object.keys(errs).length === 0) {
      await postReply(currentReplyForm);
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

  const fetchStories = async (storyId: string) => {
    try {
      const res = await fetch(`/api/stories?storyId=${storyId}`);
      const data = await res.json();
      setStory(data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    fetchStories(params.id);
  }, [params.id]);

  useEffect(() => {
    fetchComments(params.id);
  }, [params.id]);

  const renderComments = (comments: Comment[]) => {
    return comments.map((comment) => {
      const currentReplyForm = replyForm[comment._id] || {
        message: "",
        userName: "",
        avatarLink: "https://picsum.photos/100/100?random=1",
        userEmail: "",
        storyId: params.id,
        commentId: comment._id,
      };
      return (
        <div key={comment._id} className="ml-10 mt-5">
          <p>{comment.message}</p>
          <p>{comment.userEmail}</p>
          {renderComments(comment.replies || [])}
          {/* Reply Form */}
          <form
            onSubmit={(e) => handleReplySubmit(e, comment._id)}
            className="ms-10 mt-5 flex flex-col gap-5 w-[500px]"
          >
            <label htmlFor="message">Reply Message</label>
            <input
              className="text-black"
              type="text"
              maxLength={60}
              name="message"
              value={currentReplyForm.message}
              onChange={(e) => handleReplyChange(e, comment._id)}
              required
            />

            <label htmlFor="userEmail">Email</label>
            <input
              className="text-black"
              type="text"
              maxLength={60}
              name="userEmail"
              value={currentReplyForm.userEmail}
              onChange={(e) => handleReplyChange(e, comment._id)}
              required
            />

            <label htmlFor="userName">Name</label>
            <input
              className="text-black"
              type="text"
              maxLength={60}
              name="userName"
              value={currentReplyForm.userName}
              onChange={(e) => handleReplyChange(e, comment._id)}
              required
            />

            <button type="submit" className="btn">
              Submit Reply
            </button>
          </form>
        </div>
      );
    });
  };

  return (
    <>
      <Link href={"/stories/get"}>Back</Link>
      <h1>{params.id}</h1>
      <h1>{story?.title}</h1>
      <h1>{story?.type}</h1>

      {/* Comments Section */}
      <Text fontSize="text-[28px]" color="text-grayPrimary" title="Comments" />
      <div className="flex flex-col gap-5">
        {renderComments(comments)}

        {/* Comments Form */}
        <Text
          fontSize="text-[28px]"
          color="text-grayPrimary"
          title="Comments Form"
        />
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
            value={form.message}
            onChange={handleChange}
            required
          />

          <label htmlFor="userEmail">Email</label>
          <input
            className="text-black"
            type="text"
            maxLength={60}
            name="userEmail"
            value={form.userEmail}
            onChange={handleChange}
            required
          />

          <label htmlFor="userName">Name</label>
          <input
            className="text-black"
            type="text"
            maxLength={60}
            name="userName"
            value={form.userName}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <p>{message}</p>
        <div>
          {Object.keys(errors).map((err, index) => (
            <li key={index}>{errors[err]}</li>
          ))}
        </div>
      </div>
    </>
  );
}
