"use client";
import { Comment, CommentFormData } from "@/types/types";
import TitleBox from "@/components/TitleBox/TitleBox";
import Text from "@/components/Text/Text";
import CommentItem from "./comment-item";

interface CommentsListProps {
  comments: Comment[];
  handleReplyClick: (commentId: string) => void;
  currentCommentId: string | null;
  form: CommentFormData;
  setForm: React.Dispatch<React.SetStateAction<CommentFormData>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
  errors: Record<string, string>;
  response: string;
}

const CommentsList: React.FC<CommentsListProps> = ({
  comments,
  handleReplyClick,
  currentCommentId,
  form,
  setForm,
  handleSubmit,
  resetForm,
  errors,
  response,
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
          isReplyFormVisible={currentCommentId === comment._id}
          form={form}
          setForm={setForm}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
          errors={errors}
          response={response}
        />
      ))}
    </>
  );
};

export default CommentsList;
