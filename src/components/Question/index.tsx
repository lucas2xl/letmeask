import { ReactNode } from "react";
import "./styles.scss";

interface IQuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHightLighted?: boolean;
}

export const Question = ({
  content,
  author,
  children,
  isAnswered = false,
  isHightLighted = false,
}: IQuestionProps) => {
  return (
    <div
      className={`question 
        ${isAnswered ? "answered" : ""}
        ${isHightLighted && !isAnswered ? "highlighted" : ""}`}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
};
