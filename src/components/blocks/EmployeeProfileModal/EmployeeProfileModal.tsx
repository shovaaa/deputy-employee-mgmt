import React from "react";
import DetailForm from "./components/DetailForm";
import UserDetails from "./components/UserDetails";
import { IImageHolder } from "../../../interfaces/ImageHolder";

interface IProps {
  name: string;
  status: string;
  address: string;
  email: string;
  location: string;
  dateOfBirth: string;
  profilePicture?: IImageHolder;
  employeeId: string;
};

const EmployeeProfileModal = (props: IProps) => {
  return (
    <div className="EmployeeProfileModal">
      <div className="d-block d-lg-flex">
        <UserDetails
          name={props.name}
          status={props.status}
          profilePicture={props.profilePicture}
        />
        <DetailForm
          employeeId={props.employeeId}
          location={props.location}
          dateOfBirth={props.dateOfBirth}
          address={props.address}
          email={props.email}
        />
      </div>

    </div>
  );
};

export default EmployeeProfileModal;