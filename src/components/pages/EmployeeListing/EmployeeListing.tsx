import React from "react";
import { INavBar } from "../../../interfaces/NavBar";
import EmployeeListingTable from "../../blocks/EmployeeListingTable/EmployeeListingTable";
import NavBar from "../../blocks/NavBar/NavBar";
import {IEmployeeListing} from "../../blocks/EmployeeListingTable/EmployeeListingTable";

interface IProps {
  title: string;
  navBar: INavBar;
  employeeDetails: IEmployeeListing[];

};

const EmployeeListing = (props:IProps) => {
  return (
    <div className="employeeListing">
      <NavBar {...props.navBar} />
      <div className="container">
        <h1 className="employeeListing-title">{props.title}</h1>
      </div>
      <EmployeeListingTable employeeDetails={props.employeeDetails} />
    </div>
  );
};

export default EmployeeListing;