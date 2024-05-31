"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface SroryProps {
  _id: string;
  title: string;
  type: string;
  image: string;
}

export interface CommentFormData {
  message: string;
  userName: string;
  avatarLink: string;
  userEmail: string;
  storyId: string;
}

interface Error {
  message?: string;
  userName?: string;
  avatarLink?: string;
  userEmail?: string;
}

interface Comments {
  _id: string;
  message: string;
  createdAt: Date;
  userName: string;
  userEmail: string;
  avatarLink: string;
}

export default function NewStory() {
  const [stories, setStories] = useState<SroryProps[]>([]);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [comments, setComments] = useState<Comments[]>([]);

  const [form, setForm] = useState({
    message: "",
    userName: "",
    avatarLink: "https://picsum.photos/100/100?random=1",
    userEmail: "",
    storyId: "",
  });

  const formValidate = () => {
    let err: Error = {};
    if (!form.message) err.message = "Message is required";
    if (!form.userEmail) err.userEmail = "Email is required";
    if (!form.userName) err.userName = "Name is required";
    return err;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;

    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const postComment = (form: CommentFormData) => {
    fetch("/api/stories/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = formValidate();

    if (Object.keys(errs).length === 0) {
      console.log(form);
      postComment(form);
    } else {
      setErrors({ errs });
    }
  };

  // =======================================
  const fetchStories = async () => {
    const res = await fetch("/api/stories");
    const stories = res.json();
    return stories;
  };

  useEffect(() => {
    fetchStories().then((stories) => {
      setStories(stories);
    });
  }, []);

  // =======================================
  const handleComments = useCallback(async (storyId: string) => {
    try {
      const fetchedComments = await fetchComments(storyId);
      if (fetchedComments) {
        setComments(fetchedComments);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, []);

  const fetchComments = async (
    storyId: string
  ): Promise<Comments[] | undefined> => {
    const res = await fetch(`/api/stories/comments?storyId=${storyId}`);

    const comments = res.json();

    return comments;
  };
  // =======================================
  return (
    <>
      <Link className=" hover:text-orange duration-300" href={"/stories/new"}>
        New
      </Link>
      {stories &&
        stories.map((story) => {
          form.storyId = story._id;
          return (
            <div key={story._id}>
              <div>{story.title}</div>
              <div>{story.type}</div>
              <div>{story._id}</div>
              {/* Comments Form=========================================== */}
              <form
                onSubmit={handleSubmit}
                className=" mt-10 flex flex-col gap-5 w-[500px]"
              >
                <label htmlFor="message">Message</label>
                <input
                  className=" text-black"
                  type="text"
                  maxLength={60}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="userEmail">Email</label>
                <input
                  className=" text-black"
                  type="text"
                  maxLength={60}
                  name="userEmail"
                  value={form.userEmail}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="userName">Name</label>
                <input
                  className=" text-black"
                  type="text"
                  maxLength={60}
                  name="userName"
                  value={form.userName}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="avatar">Name</label>
                <input
                  className=" text-black"
                  type="text"
                  maxLength={60}
                  name="avatar"
                  value={form.avatarLink}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="id">ID</label>
                <input
                  className=" text-black"
                  type="text"
                  maxLength={60}
                  name="id"
                  value={story._id}
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
                  <li key={index}>{err}</li>
                ))}
              </div>

              {/* Comments=========================================== */}
              <div className=" flex flex-col gap-5">
                <h1>Comments</h1>
                <button onClick={() => handleComments(story._id)}>
                  Update coments
                </button>
                {comments &&
                  comments.map((comment) => (
                    <div key={comment._id}>{comment.message}</div>
                  ))}
              </div>
            </div>
          );
        })}
    </>
  );
}
