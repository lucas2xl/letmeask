import "./styles.scss";
import { ButtonHTMLAttributes } from "react";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};
export const Button = ({ isOutlined = false, ...props }: TButtonProps) => {
  return (
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} />
  );
};
