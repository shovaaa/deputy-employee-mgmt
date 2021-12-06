import React, { useEffect, useState } from 'react';
import Button from "../Button/Button";
import Pagination from 'react-bootstrap/Pagination'
import axios from "axios";
import { IEmployeeListing } from '../EmployeeListingTable/EmployeeListingTable';

export interface IProps {
  totalPageNumber: number;
  currentPageIndex: number;
  paginationApi: string;

  screen: string;

  setEmployeeDetails: (value: IEmployeeListing[]) => void;
}

const DeputyPagination = (props: IProps) => {
  const [activePageIndex, setActivePageIndex] = useState(props.currentPageIndex);

  const callPaginationApi = (index: number) => {
    setActivePageIndex(index);

    if(index === 0) {
      setActivePageIndex(1);
    }

    if(index > props.totalPageNumber) {
      setActivePageIndex(props.totalPageNumber);
    }

    (index > 0 && index <= props.totalPageNumber) && axios.get(`${props.paginationApi}?number=${index}`)
      .then(res => {
        const data = res.data.payload;
        props.setEmployeeDetails(data.employeeDetails);
      })
  };

  let items = [];

  for (let number = 1; number <= props.totalPageNumber; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePageIndex} onClick={() => callPaginationApi(number)}>
        {number}
      </Pagination.Item>,
    );
  };

  return (
    <div className="d-block text-center d-lg-flex justify-content-between">
      <div onClick={() => callPaginationApi(activePageIndex - 1)} className="DeputyPagination-btnContainer d-flex justify-content-center">
        <Button
          variant="outline-grey"
          size={props.screen === 'large' ? 'lg' : 'sm'}
          buttonAlt="previous-page"
          buttonText="Previous"
          buttonClass="DeputyPagination-btn w-100"
        />
      </div>
      <div className="DeputyPagination-container d-flex justify-content-center">
        <Pagination size={props.screen === 'large' ? 'lg' : 'sm'}>{items}</Pagination>
      </div>

      <div onClick={() => callPaginationApi(activePageIndex + 1)} className="DeputyPagination-btnContainer d-flex justify-content-center">
        <Button
          variant="outline-grey"
          size={props.screen === 'large' ? 'lg' : 'sm'}
          buttonAlt="next-page"
          buttonText="Next"
          buttonClass="DeputyPagination-btn w-100"
        />
      </div>
    </div>
  );
};

export default DeputyPagination;