import React, { useState } from "react";
import { IButton } from "../../../interfaces/Button";
import Button from "../Button/Button";

export interface IProps extends IButton {
  filterApi: string;
  filterItems: IFilterItem[];

  setFilterTerm: (val: string) => void;
};

interface IFilterItem {
  filterText: string;
  filterId: string;
}

const Filter = (props: IProps) => {
  const [showDropdown, setShowDropDown] = useState<boolean>(false);

  console.log(props.buttonText);

  return (
    <div className="Filter">
      <div onMouseOut={() => { setShowDropDown(false) }} onMouseOver={() => { setShowDropDown(true) }} onClick={() => { setShowDropDown(true) }}>
        <Button
          variant="outline-grey"
          size="sm"
          buttonText={props.buttonText || "Filter"}
          buttonAlt="filter"
          buttonClass=""
        />
        <div className="Filter-dropdownIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
      <div
        onMouseOver={() => { setShowDropDown(true) }}
        onMouseOut={() => { setShowDropDown(false) }}
        className="position-absolute z-5">
        <div className={`Filter-dropdownMenu ${showDropdown ? 'd-block' : 'd-none'}`}>
          {
            props.filterItems.map((item, index) => {
              return (
                <button
                  key={index}
                  className="Filter-dropdownMenu--item d-block"
                  id={item.filterId}
                  onClick={() => props.setFilterTerm(item.filterId)}
                >
                  {item.filterText}
                </button>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Filter