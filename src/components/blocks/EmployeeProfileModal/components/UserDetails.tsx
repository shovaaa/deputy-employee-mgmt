import React from "react";
import { IImageHolder } from "../../../../interfaces/ImageHolder";
import ImageHolder from "../../ImageHolder/ImageHolder";
import Button from "../../Button/Button";

interface IProps {
  name: string;
  status: string;
  profilePicture: IImageHolder;
  tab: string[];
};

const UserDetails = (props: IProps) => {
  return (
    <div className="EmployeeProfileModal-userDetails">
      <div className="EmployeeProfileModal-userDetails--profilePictureContainer">
        <ImageHolder
          alt={props.profilePicture.alt}
          url={props.profilePicture.url}
          displayShape={props.profilePicture.displayShape}
          displaySize={props.profilePicture.displaySize}
        />
      </div>
      <div className="EmployeeProfileModal-userDetails--profileDetailContainer">
        <p className="mb-1 EmployeeProfileModal-userDetails--profileDetailContainer-name">{props.name}</p>
        <p className="mb-1 EmployeeProfileModal-userDetails--profileDetailContainer-status">{props.status}</p>
      </div>
      <div>
        {props.tab.map((tabValue, index) => {
          return (
            <div className="EmployeeProfileModal-userDetails--tab d-block w-100" key={index}>
              <span>{tabValue}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default UserDetails;