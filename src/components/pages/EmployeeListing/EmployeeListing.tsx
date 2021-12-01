import React from "react";
import { INavBar } from "../../../interfaces/NavBar";
import EmployeeListingTable from "../../blocks/EmployeeListingTable/EmployeeListingTable";
import NavBar from "../../blocks/NavBar/NavBar";
import { IEmployeeListing } from "../../blocks/EmployeeListingTable/EmployeeListingTable";
import { IProps as ISearchBox } from "../../blocks/SearchBox/SearchBox";
import {IProps as IFilter} from "../../blocks/Filter/Filter";

interface IProps {
  title: string;
  navBar: INavBar;
  employeeDetails: IEmployeeListing[];
  saveDetailFormApi: string;
  searchBox: ISearchBox;
  filterButton: IFilter;
};

const EmployeeListing = (props: IProps) => {

  return (
    <div className="employeeListing container">
      <NavBar {...props.navBar} />
      <div>
        <h1 className="employeeListing-title">{props.title}</h1>
      </div>
      
      <EmployeeListingTable 
      saveDetailFormApi={props.saveDetailFormApi}
      searchBox={props.searchBox} 
      filterButton={props.filterButton}
      employeeDetails={props.employeeDetails} />
    </div>
  );
};

export default EmployeeListing;