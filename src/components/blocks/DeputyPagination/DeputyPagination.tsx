import React, { useEffect, useState } from 'react';
import Button from "../Button/Button";
import Pagination from 'react-bootstrap/Pagination'
import axios from "axios";
import { IEmployeeListing } from '../EmployeeListingTable/EmployeeListingTable';

export interface IProps {
  totalPageNumber: number;
  currentPageIndex: number;
  paginationApi: string;

  setEmployeeDetails: (value: IEmployeeListing[]) => void;
}

const DeputyPagination = (props: IProps) => {
  const [activePageIndex, setActivePageIndex] = useState(props.currentPageIndex);

  const callPaginationApi = (index: number, isCurrent: boolean = false, isPrevious: boolean = false, isNext: boolean = false) => {
    isPrevious && setActivePageIndex(index);
    isNext && setActivePageIndex(index);
    isCurrent && setActivePageIndex(index);

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
      <Pagination.Item key={number} active={number === activePageIndex} onClick={() => callPaginationApi(number, true)}>
        {number}
      </Pagination.Item>,
    );
  };

  return (
    <div className="d-flex justify-content-between">
      <div onClick={() => callPaginationApi((activePageIndex - 1), false, true, false)} className="deputyPagination-btnContainer">
        <Button
          variant="outline-grey"
          size="lg"
          buttonAlt="previous-page"
          buttonText="Previous"
          buttonClass="deputyPagination-btn w-100"
        />
      </div>
      <div className="deputyPagination-container">
        <Pagination size="lg">{items}</Pagination>
      </div>

      <div onClick={() => callPaginationApi((activePageIndex + 1), false, false, true)} className="deputyPagination-btnContainer">
        <Button
          variant="outline-grey"
          size="lg"
          buttonAlt="next-page"
          buttonText="Next"
          buttonClass="deputyPagination-btn w-100"
        />
      </div>
    </div>
  );
};

export default DeputyPagination;