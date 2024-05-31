import { Comment } from "@/app/stories/types";

interface CommentItemProps {
  comment: Comment;
  handleReplyClick: (commentId: string) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  handleReplyClick,
}) => {
  return (
    <div className="ml-10 mt-5">
      <p>{comment.message}</p>
      <p>{comment.userEmail}</p>
      <button onClick={() => handleReplyClick(comment._id)}>Reply</button>
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-5">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply._id}
              comment={reply}
              handleReplyClick={handleReplyClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
