import React from "react";
import { IButton } from "../../../interfaces/Button";

interface IProps extends IButton {

};

const Button = (props: IProps) => {
  return (
    <button data-testid="button" aria-label={props.buttonAlt} className={`btn btn-${props.variant} btn-${props.size} ${props.buttonClass && props.buttonClass} btn-text`}>
      {props.buttonText}
    </button>
  );
};

export default Button;