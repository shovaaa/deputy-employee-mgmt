import { data as navData } from "../data/navBar.mock";
import { data as employeeDetails } from "../data/employeeDetails.mock";

export const data = {
  navBar: { ...navData },
  saveDetailFormApi: "/api/employee/save",
  employeeDetails: employeeDetails,
  pagination: {
    totalPageNumber: 10,
    currentPageIndex: 1,
    paginationApi: "/api/employee/page"
  },
  filterButton: {
    "filterApi": "/api/employee/filter",
    "filterItems": [
      {
        filterText: "None",
        filterId: "none"
      },
      {
        filterText: "Male",
        filterId: "male"
      },
      {
        filterText: "Female",
        filterId: "female"
      },
      {
        filterText: "Employeed",
        filterId: "employeed"
      },
      {
        filterText: "Discarded",
        filterId: "discarded"
      }
    ]
  },
  searchBox: {
    callApi: "/api/employee/search"
  }
}