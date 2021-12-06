import React from "react";
import { IImageHolder } from "../../../interfaces/ImageHolder";

interface IProps extends IImageHolder {

}

const ImageHolder = (props:IProps) => {
  return (
    <div className={`ImageHolder`}>
      <img alt={props.alt} src={props.url} className={`ImageHolder-${props.displaySize} ImageHolder-${props.displayShape}`} />
    </div>
  );
};

export default ImageHolder;