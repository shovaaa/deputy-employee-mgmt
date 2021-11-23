import React from "react";
import { IInput } from "../../../interfaces/InputBox";

interface IProps extends IInput {

}

const InputBox = (props: IProps) => {
  console.log(props);

  return (
    <div>
      <label htmlFor={props.name} className="input-label">{props.label}</label><br/>
      <input type={props.type} id={props.id} name={props.name}
        minLength={props.minLength} maxLength={props.maxLength} className={`input input-${props.displayHeight} ${props.displayWidth}`}/>
    </div>
  );
};

export default InputBox;