import React, { useState } from "react";
import { INavBar } from "../../../interfaces/NavBar";
import EmployeeListingTable from "../../blocks/EmployeeListingTable/EmployeeListingTable";
import NavBar from "../../blocks/NavBar/NavBar";
import { IEmployeeListing } from "../../blocks/EmployeeListingTable/EmployeeListingTable";
import { IProps as ISearchBox } from "../../blocks/SearchBox/SearchBox";
import { IProps as IFilter } from "../../blocks/Filter/Filter";
import DeputyPagination, {IProps as IPagination} from "../../blocks/DeputyPagination/DeputyPagination";

interface IProps {
  title: string;
  navBar: INavBar;
  employeeDetails: IEmployeeListing[];
  saveDetailFormApi: string;
  searchBox: ISearchBox;
  filterButton: IFilter;
  pagination: IPagination;
};

const EmployeeListing = (props: IProps) => {
  const [employeeDetails, setEmployeeDetails] = useState<IEmployeeListing[]>(props.employeeDetails);

  return (
    <div className="employeeListing container">
      <NavBar {...props.navBar} />
      <div>
        <h1 className="employeeListing-title">{props.title}</h1>
      </div>
      <div>
        <EmployeeListingTable
          saveDetailFormApi={props.saveDetailFormApi}
          searchBox={props.searchBox}
          filterButton={props.filterButton}
          employeeDetails={employeeDetails} />
      </div>
      <div>
        <DeputyPagination {...props.pagination} setEmployeeDetails={(value)=>setEmployeeDetails(value)} />
      </div>
    </div>
  );
};

export default EmployeeListing;