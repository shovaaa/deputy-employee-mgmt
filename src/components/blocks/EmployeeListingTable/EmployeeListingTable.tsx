import React from "react";
import { IButton } from "../../../interfaces/Button";
import Button from "../Button/Button";

interface IProps {
  employeeDetails: IEmployeeListing[];
};

export interface IEmployeeListing {
  gender: string;
  name: string;
  location: string;
  email: string;
  status: string;
  viewMoreButton: IButton;
};

const EmployeeListingTable = (props: IProps) => {
  return (
    <div className="employeeListingTable">
      <div className="container employeeListingTable-container">
        <div className="row mb-3">
          <div className="col employeeListingTable-title">
            Name
          </div>
          <div className="col employeeListingTable-title">
            Address
          </div>
          <div className="col employeeListingTable-title col-3">
            Email
          </div>
          <div className="col employeeListingTable-title">
            Status
          </div>
          <div className="col employeeListingTable-title">
            
          </div>
        </div>
        {
          props.employeeDetails.map((employee, index) => {
            return (
              <div className="row mb-3 d-flex align-items-center" key={index}>
                <div className="col">
                  {employee.name}
                </div>
                <div className="col">
                  {employee.location}
                </div>
                <div className="col col-3">
                  {employee.email}
                </div>
                <div className="col">
                  {employee.status}
                </div>
                <div className="col text-right">
                  <Button
                    variant={employee.viewMoreButton.variant}
                    size={employee.viewMoreButton.size}
                    buttonAlt={employee.viewMoreButton.buttonAlt}
                    buttonText={employee.viewMoreButton.buttonText}
                    buttonLink={employee.viewMoreButton.buttonLink}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default EmployeeListingTable;