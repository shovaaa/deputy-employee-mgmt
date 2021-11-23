import React from "react";
import { IButton } from "../../../interfaces/Button";

interface IProps extends IButton {

};

const Button = (props: IProps) => {

  console.log(props);

  return (
    <button aria-label={props.buttonAlt} className={`btn btn-${props.variant} btn-${props.size}`}>
      <a href={props.buttonLink} className="btn-link">
        {props.buttonText}
      </a>
    </button>
  );
};

export default Button;