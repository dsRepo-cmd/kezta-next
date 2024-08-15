import React, { memo } from "react";
import { Comment } from "@/types/types";
import TitleBox from "@/components/TitleBox/TitleBox";
import Text from "@/components/Text/Text";
import CommentItem from "./comment-item";

interface CommentsListProps {
  comments: Comment[];
  handleReplyClick: (commentId: string) => void;
}

const CommentsList: React.FC<CommentsListProps> = ({
  comments,
  handleReplyClick,
}) => {
  return (
    <>
      <TitleBox title={"Comments"} />
      {comments.length === 0 && (
        <Text
          color="text-grayPrimary"
          className=" mb-5"
          fontSize="text-[28px]"
          text="No comments yet"
        />
      )}
      {comments.map((comment) => (
        <CommentItem
          key={comment._id}
          comment={comment}
          handleReplyClick={handleReplyClick}
        />
      ))}
    </>
  );
};

export default memo(CommentsList);
