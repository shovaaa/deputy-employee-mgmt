import React, { useState } from "react";
import EmployeeListingTable from "../../blocks/EmployeeListingTable/EmployeeListingTable";
import { IEmployeeListing } from "../../blocks/EmployeeListingTable/EmployeeListingTable";
import { IProps as ISearchBox } from "../../blocks/SearchBox/SearchBox";
import { IProps as IFilter } from "../../blocks/Filter/Filter";
import DeputyPagination, {IProps as IPagination} from "../../blocks/DeputyPagination/DeputyPagination";

interface IProps {
  employeeDetails: IEmployeeListing[];
  saveDetailFormApi: string;
  searchBox: ISearchBox;
  filterButton: IFilter;
  pagination: IPagination;
};

const EmployeeListing = (props: IProps) => {
  const [employeeDetails, setEmployeeDetails] = useState<IEmployeeListing[]>(props.employeeDetails);

  return (
    <div className="EmployeeListing container">
      <div>
        <h1 className="EmployeeListing-title">All Employee</h1>
      </div>
      <div>
        <EmployeeListingTable
          saveDetailFormApi={props.saveDetailFormApi}
          searchBox={props.searchBox}
          filterButton={props.filterButton}
          employeeDetails={employeeDetails} />
      </div>
      <div className="d-none d-lg-block">
        <DeputyPagination {...props.pagination} setEmployeeDetails={(value)=>setEmployeeDetails(value)} screen="large" />
      </div>
      <div className="d-block d-lg-none">
        <DeputyPagination {...props.pagination} setEmployeeDetails={(value)=>setEmployeeDetails(value)} screen="small" />
      </div>
    </div>
  );
};

export default EmployeeListing;