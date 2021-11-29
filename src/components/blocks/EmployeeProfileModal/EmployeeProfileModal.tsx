import React, { useState } from "react";
import DetailForm from "./components/DetailForm";
import UserDetails from "./components/UserDetails";

interface IProps {

};

const EmployeeProfileModal = (props: IProps) => {
  const ppData = {
    alt: "username",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    displayShape: "round",
    displaySize: "lg"
  }

  const inputData = [{
    displayHeight: "lg",
    displayWidth: "w-75",
    label: "Address",
    name: "address",
    id: "address",
    type: "text",
    placeholder: "Address",
    value: "Wionara Road"
  },
  {
    displayHeight: "lg",
    displayWidth: "w-75",
    label: "Email",
    name: "email",
    id: "email",
    type: "text",
    placeholder: "Email",
    value: "test@abc.com"
  },
  {
    displayHeight: "lg",
    displayWidth: "w-75",
    label: "Location",
    name: "location",
    id: "location",
    type: "text",
    placeholder: "Location",
    value: "Sydney"
  },
  {
    displayHeight: "lg",
    displayWidth: "w-75",
    label: "Date Of Birth",
    name: "dateOfBirth",
    id: "dateOfBirth",
    type: "text",
    placeholder: "Date Of Birth",
    value: "25-09-1990"
  }];

  const saveBtnData = {
    variant: "blue",
    size: "sm",
    buttonText: "Save",
    buttonAlt: "save-btn",
    buttonClass: ""
  };

  return (
    <div className="EmployeeProfileModal">
      <div className="d-flex">
        <UserDetails
          name="Elaine Gomez"
          status="Employeed"
          profilePicture={ppData} 
          tab={['Details']}/>
        <DetailForm 
        detailForm={inputData}
        saveButton={saveBtnData}
        />
      </div>

    </div>
  );
};

export default EmployeeProfileModal;