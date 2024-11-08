"use client";
import Image from "next/image";
import { Comment, CommentFormData } from "@/types/types";
import Button from "@/components/Button/Button";
import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import { formatDateString } from "@/lib/utils";
import CommentForm from "./comment-form";

interface CommentItemProps {
  comment: Comment;
  handleReplyClick: (commentId: string) => void;
  isReplyFormVisible: boolean;
  form: CommentFormData;
  setForm: React.Dispatch<React.SetStateAction<CommentFormData>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
  errors: Record<string, string>;
  response: string;
}

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  handleReplyClick,
  isReplyFormVisible,
  form,
  setForm,
  handleSubmit,
  resetForm,
  errors,
  response,
}) => {
  return (
    <div>
      <div className="flex w-full gap-10 mb-10">
        <div className="flex justify-start self-baseline min-w-[70px] min-h-[70px]">
          <Image
            style={{ objectFit: "contain" }}
            alt="avatar"
            src={comment.avatarLink}
            width={100}
            height={100}
          />
        </div>
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

      {isReplyFormVisible && (
        <div className="ml-10">
          <CommentForm
            isReplyMode={true}
            form={form}
            setForm={setForm}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
            errors={errors}
            response={response}
          />
        </div>
      )}

      {/* Render replies if they exist */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-10">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply._id}
              comment={reply}
              handleReplyClick={handleReplyClick}
              isReplyFormVisible={form.commentId === reply._id} // conditionally show reply form for each reply
              form={form}
              setForm={setForm}
              handleSubmit={handleSubmit}
              resetForm={resetForm}
              errors={errors}
              response={response}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
