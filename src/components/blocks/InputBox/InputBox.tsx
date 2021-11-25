import React from "react";
import { IInput } from "../../../interfaces/InputBox";

interface IProps extends IInput {
  onChange: (v: any) => void;
}

const InputBox = (props: IProps) => {
  return (
    <div>
     {props.label && <label htmlFor={props.name} className="input-label">{props.label}</label>}
      <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}
        className={`input input-${props.displayHeight} ${props.displayWidth}`}  onChange={(e) => props.onChange(e.target.value)}/>
    </div>
  );
};

export default InputBox;