import '../styles/button.scss';
import {ButtonHTMLAttributes} from 'react';

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export const Button = (props: TButtonProps) => {
  return(
    <button className="button" {...props}/>
  )
};
