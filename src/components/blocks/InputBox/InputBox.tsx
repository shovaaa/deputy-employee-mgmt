import React, { useState, useEffect } from "react";
import { IInput } from "../../../interfaces/InputBox";

interface IProps extends IInput {
  onChange: (v: any) => void;
  getId?: (v: any) => void;
}

const InputBox = (props: IProps) => {
  const [inputValue, setInputValue] = useState(props.value);

  useEffect(() => {
    props.getId && props.getId(props.id);
  }, []);

  return (
    <div>
      {props.label && <label htmlFor={props.name} className="input-label">{props.label}</label>}
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className={`input input-${props.displayHeight} ${props.displayWidth}`}
        onChange={(e) => { props.onChange(e.target.value); setInputValue(e.target.value) }}
        value={inputValue}
      />
    </div>
  );
};

export default InputBox;