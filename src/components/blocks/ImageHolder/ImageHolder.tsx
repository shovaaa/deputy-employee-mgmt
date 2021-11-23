import React from "react";
import { IImageHolder } from "../../../interfaces/ImageHolder";

interface IProps extends IImageHolder {

}

const ImageHolder = (props:IProps) => {
  return (
    <div className={`imageHolder`}>
      <img alt={props.alt} src={props.url} className={`imageHolder-${props.displaySize} imageHolder-${props.displayShape}`} />
    </div>
  );
};

export default ImageHolder;