// comment-box.tsx

"use client";
import React, { useEffect, useState } from "react";
import { Comment, CommentFormData } from "@/types/types";
import TitleBox from "@/components/TitleBox/TitleBox";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Divider from "@/components/Divider/Divider";
import { formatDateString } from "@/lib/utils";
import CommentForm from "./comment-form";

interface CommentBoxProps {
  storyId: string;
}

const CommentBox: React.FC<CommentBoxProps> = ({ storyId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentCommentId, setCurrentCommentId] = useState<string | null>(null);

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

  const postComment = async (formData: CommentFormData, isReply = false) => {
    try {
      const res = await fetch("/api/stories/comments", {
        method: isReply ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      fetchComments(storyId);
      setCurrentCommentId(null);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const handleReplyClick = (commentId: string) => {
    setCurrentCommentId(commentId);
  };

  const CommentItem = ({ comment }: { comment: Comment }) => (
    <div className="mb-10">
      <div className="flex w-full gap-10 mb-10">
        <Image
          style={{ objectFit: "contain" }}
          alt="avatar"
          src={comment.avatarLink}
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-10 w-full">
          <div className="flex gap-5">
            <Text fontSize="text-xl" text={comment.userName} />
            <Text
              color="text-grayPrimary"
              text={formatDateString(comment.createdAt)}
            />
          </div>
          <div className="flex flex-col items-start gap-5">
            <Text color="text-grayPrimary" text={comment.message} />
            <div className="flex gap-5 items-center">
              <Divider style={{ width: "3rem", paddingTop: "1px" }} />
              <Button
                variant="clear"
                className="text-orange"
                onClick={() => handleReplyClick(comment._id)}
              >
                Reply
              </Button>
            </div>
          </div>
        </div>
      </div>
      {currentCommentId === comment._id && (
        <CommentForm
          storyId={storyId}
          isReplyMode
          currentCommentId={comment._id}
          onSubmit={postComment}
          onCancel={() => setCurrentCommentId(null)}
        />
      )}
      {comment.replies?.map((reply) => (
        <div key={reply._id} className="ml-10">
          <CommentItem comment={reply} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-10">
      <TitleBox title="Comments" />
      {comments.length === 0 ? (
        <Text
          text="No comments yet"
          fontSize="text-[28px]"
          color="text-grayPrimary"
          className="mb-5"
        />
      ) : (
        comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))
      )}
      {!currentCommentId && (
        <CommentForm storyId={storyId} onSubmit={postComment} />
      )}
    </div>
  );
};

export default CommentBox;
