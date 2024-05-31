import React from "react";

import { Comment } from "@/app/stories/types";
import CommentItem from "../CommentItem/CommentItem";

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

export default CommentsList;
