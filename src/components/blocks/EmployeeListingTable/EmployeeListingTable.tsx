import React, {useState} from "react";
import { IButton } from "../../../interfaces/Button";
import Button from "../Button/Button";
import EmployeeProfileModal from "../EmployeeProfileModal/EmployeeProfileModal";

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
  const [showModal, setShowModal] = useState<boolean>(false);
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
                <div className="col text-right" data-toggle="modal" data-target="#exampleModalCenter">
                  <Button
                    variant={employee.viewMoreButton.variant}
                    size={employee.viewMoreButton.size}
                    buttonAlt={employee.viewMoreButton.buttonAlt}
                    buttonText={employee.viewMoreButton.buttonText}
                    buttonLink={employee.viewMoreButton.buttonLink}
                    buttonClass={employee.viewMoreButton.buttonClass}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <EmployeeProfileModal />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListingTable;