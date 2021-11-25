import { data as navData } from "../data/navBar.mock";
import { data as employeeDetails } from "../data/employeeDetails.mock";

export const data = {
  title: "All Employee",
  navBar: { ...navData },
  employeeDetails: employeeDetails,
  filterButton: {
    "variant": "outline-grey",
    "size": "sm",
    "buttonText": "Filter",
    "buttonLink": "#",
    "buttonAlt": "filter",
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
    displayHeight: "lg",
    displayWidth: "w-100",
    label: { undefined },
    name: "search-box",
    id: "search-box",
    type: "text",
    placeholder: "Search People",
    callApi: "/api/employee/search"
  }
}