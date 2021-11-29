import React, { useEffect, useState } from "react";
import { INavBar } from "../../../interfaces/NavBar";
import EmployeeListingTable from "../../blocks/EmployeeListingTable/EmployeeListingTable";
import NavBar from "../../blocks/NavBar/NavBar";
import { IEmployeeListing } from "../../blocks/EmployeeListingTable/EmployeeListingTable";
import SearchBox, { IProps as ISearchBox } from "../../blocks/SearchBox/SearchBox";
import Filter, {IProps as IFilter} from "../../blocks/Filter/Filter";
import axios from "axios";

interface IProps {
  title: string;
  navBar: INavBar;
  employeeDetails: IEmployeeListing[];
  searchBox: ISearchBox;
  filterButton: IFilter;
};

const EmployeeListing = (props: IProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [employeeDetails, setEmployeeDetails] = useState(props.employeeDetails);
  const [filterTerm, setFilterTerm] = useState<string>('');


  const searchEmployee = (value: string) => {
    if (value.length < 3) return

    axios.get(`${props.searchBox.callApi}?term=${value}`)
      .then(res => {
        const data = res.data.payload;
        setEmployeeDetails(data.employeeDetails);
      })
  };

  const filterEmployee = (value: string) => {
    if(!value) return;

    axios.get(`${props.filterButton.filterApi}?term=${value}`)
      .then(res => {
        const data = res.data.payload;
        setEmployeeDetails(data.employeeDetails);
      })
  };

  useEffect(() => {
    if (searchValue === '') {
      // eslint-disable-next-line
      setEmployeeDetails(props.employeeDetails);
      return;
    };

    // eslint-disable-next-line
    searchValue && searchEmployee(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (filterTerm === '' || filterTerm === 'none') {
      // eslint-disable-next-line
      setEmployeeDetails(props.employeeDetails);
      return;
    };

    // eslint-disable-next-line
    filterTerm && filterEmployee(filterTerm);
  }, [filterTerm]);

  return (
    <div className="employeeListing container">
      <NavBar {...props.navBar} />
      <div>
        <h1 className="employeeListing-title">{props.title}</h1>
      </div>
      <div className="d-flex justify-content-between">
        <SearchBox
          {...props.searchBox}
          setSearchValue={(v) => setSearchValue(v)}
        />
        <Filter
          {...props.filterButton}
          buttonText={filterTerm ? filterTerm : props.filterButton.buttonText}
          setFilterTerm={(v) => setFilterTerm(v)}
        />
      </div>
      <EmployeeListingTable employeeDetails={employeeDetails} />
    </div>
  );
};

export default EmployeeListing;