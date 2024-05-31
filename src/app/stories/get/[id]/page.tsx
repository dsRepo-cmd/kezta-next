"use client";
import Text from "@/components/Text/Text";
import Link from "next/link";
import { useEffect, useState } from "react";

interface StoryProps {
  params: { id: string };
}

interface Story {
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
  const [story, setStory] = useState<Story>();
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

  const [isReplyMode, setIsReplyMode] = useState(false);
  const [currentCommentId, setCurrentCommentId] = useState<string | null>(null);

  const formValidate = () => {
    let err: Record<string, string> = {};
    if (!form.message) err.message = "Message is required";
    if (!form.userEmail) err.userEmail = "Email is required";
    if (!form.userName) err.userName = "Name is required";
    return err;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
      const data = await res.json();
      setMessage(data.message);
      fetchComments(params.id); // Fetch comments again to update the list
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

  const handleReplyClick = (commentId: string) => {
    setIsReplyMode(true);
    setCurrentCommentId(commentId);
    setForm((prevForm) => ({
      ...prevForm,
      commentId: commentId,
      message: "",
    }));
  };

  const resetForm = () => {
    setIsReplyMode(false);
    setCurrentCommentId(null);
    setForm({
      message: "",
      userName: "",
      avatarLink: "https://picsum.photos/100/100?random=1",
      userEmail: "",
      storyId: params.id,
    });
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
    return comments.map((comment) => (
      <div key={comment._id} className="ml-10 mt-5">
        <p>{comment.message}</p>
        <p>{comment.userEmail}</p>
        <button onClick={() => handleReplyClick(comment._id)}>Ответить</button>
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-5">{renderComments(comment.replies)}</div>
        )}
      </div>
    ));
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
          title={isReplyMode ? "Reply Form" : "Comments Form"}
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
      </div>
    </>
  );
}
