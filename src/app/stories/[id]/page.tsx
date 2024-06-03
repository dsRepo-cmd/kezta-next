"use client";
import React, { useEffect, useState } from "react";
import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/check.svg";
import SosialLinks from "@/components/SosialLinks/SosialLinks";
import {
  AdjacentLink,
  Comment,
  CommentFormData,
  FetchStories,
  SroriesBlockType,
  Srory,
  StoryProps,
} from "../types";
import CommentForm from "@/containers/CommentForm/CommentForm";
import CommentsList from "@/containers/CommentsList/CommentsList";
import Icon from "@/components/Icon/Icon";
import Skeleton from "@/components/Skeleton/Skeleton";

export default function Story({ params }: StoryProps) {
  const [story, setStory] = useState<Srory>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  const [prevStory, setPrevStory] = useState<AdjacentLink>();
  const [nextStory, setNextStory] = useState<AdjacentLink>();

  const [form, setForm] = useState<CommentFormData>({
    message: "",
    userName: "",
    avatarLink: "https://picsum.photos/id/237/100/100",
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
      avatarLink: "https://picsum.photos/id/237/100/100",
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
      const data: FetchStories = await res.json();

      setStory(data.story);
      setPrevStory(data.prevStory);
      setNextStory(data.nextStory);
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

  if (!story) {
    return (
      <>
        <Link
          className="flex gap-4 items-center duration-300 text-orange hover:text-white"
          href="/stories"
        >
          <Divider style={{ width: "3rem", paddingTop: "1px" }} />
          <Text fontSize="text-xl" text="Back to main" />
        </Link>
        <div className=" w-[60vw] flex flex-col gap-10 md:w-[90vw]">
          <Skeleton width={"100%"} height={400} />
          <Skeleton width={"50%"} height={60} />
          <Skeleton width={"50%"} height={120} />
          <Skeleton width={"100%"} height={800} />
        </div>
      </>
    );
  }

  return (
    <>
      <Link
        className="flex gap-4 items-center duration-300 text-orange hover:text-white"
        href="/stories"
      >
        <Divider style={{ width: "3rem", paddingTop: "1px" }} />
        <Text fontSize="text-xl" text="Back to main" />
      </Link>

      <div className="flex">
        <Image
          src={story.image}
          alt={story.image}
          width={912}
          height={446}
          priority
        />
      </div>

      <div className="flex flex-col gap-2">
        <Text
          fontSize="text-[44px]"
          className="mb-3 capitalize"
          title={story.title}
        />
        <Divider style={{ width: "10rem" }} />
        <div className="flex gap-2">
          <Text fontSize="text-lg" text={story.date} />
          <Text fontSize="text-lg" text="|" />
          <Text fontSize="text-lg" text={`Posted by: ${story.userName}`} />
        </div>
        <Text fontSize="text-lg" color="text-orange" text={story.type} />
      </div>

      <div className="flex flex-col gap-10">
        {story.blocks.map((block) => (
          <div key={block.id}>
            {block.type === SroriesBlockType.TEXT && (
              <Text
                fontSize="text-lg"
                color="text-grayPrimary"
                text={block.text}
              />
            )}
            {block.type === SroriesBlockType.TITLE && (
              <Text
                fontSize="text-[44px]"
                className="text-[2rem] capitalize"
                title={block.title}
              />
            )}
            {block.type === SroriesBlockType.CHECK_LIST && (
              <ul className="flex flex-col gap-5">
                {block.checkList?.map((item) => (
                  <li className="flex gap-5" key={item.id}>
                    <Icon Svg={CheckIcon} />
                    <Text
                      className=" w-full"
                      fontSize="text-lg"
                      text={item.text}
                    />
                  </li>
                ))}
              </ul>
            )}
            {block.type === SroriesBlockType.IMAGE_TEXT && (
              <span>
                {block.image && (
                  <div className="relative flex-shrink-0 float-right">
                    <Image
                      src={block.image}
                      alt={block.image}
                      width={500}
                      height={230}
                    />
                  </div>
                )}
                {block.texts?.map((text) => (
                  <Text
                    fontSize="text-lg"
                    key={text.id}
                    className="mb-10"
                    color="text-grayPrimary"
                    text={text.text}
                  />
                ))}
              </span>
            )}
          </div>
        ))}

        <div className="flex w-full justify-end items-center gap-5">
          <Divider style={{ width: "2rem", paddingTop: "1px" }} />
          <SosialLinks horisontal links={story.socialLinks} />
        </div>

        <div className="flex flex-col gap-4 ">
          <div className="flex gap-4 items-baseline">
            {nextStory && (
              <>
                <Text
                  fontSize="text-[28px]"
                  color="text-grayPrimary"
                  text="Next:"
                />
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  href={`/stories/${nextStory._id}`}
                >
                  <Text
                    fontSize="text-xl"
                    className="duration-300 hover:text-orange"
                    text={nextStory.title}
                  />
                </Link>
              </>
            )}
          </div>
          <div className="flex gap-4 items-baseline">
            {prevStory && (
              <>
                <Text
                  fontSize="text-[28px]"
                  color="text-grayPrimary"
                  text="Prev:"
                />
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  href={`/stories/${prevStory._id}`}
                >
                  <Text
                    fontSize="text-xl"
                    className="duration-300 hover:text-orange"
                    text={prevStory.title}
                  />
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Comments Section */}

        <div className="flex flex-col gap-10">
          <CommentsList
            comments={comments}
            handleReplyClick={handleReplyClick}
          />
          <CommentForm
            form={form}
            setForm={setForm}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
            isReplyMode={isReplyMode}
            errors={errors}
            message={message}
          />
        </div>
      </div>
    </>
  );
}
