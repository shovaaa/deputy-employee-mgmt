import React from "react";
import { IInput } from "../../../interfaces/InputBox";
import InputBox from "../InputBox/InputBox";

export interface IProps extends IInput {
  callApi: string;

  setSearchValue: (v: string) => void;
};

const SearchBox = (props: IProps) => {

  return (
    <div className="searchBox">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="searchBox-icon">
        <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
      </svg>
      <InputBox
        displayHeight="lg"
        displayWidth="w-100"
        label={undefined}
        name="search-box"
        id="search-box"
        type="text"
        placeholder="Search People"

        onChange={(value) => props.setSearchValue(value)} />
    </div>
  );
};

export default SearchBox;