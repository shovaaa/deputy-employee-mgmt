import React from "react";
import '../assets/styles/app.scss';
import EmployeeListing from "./pages/EmployeeListing/EmployeeListing";
import {data as employeeData} from "./data/employeeListing.mock";
import { initApiMockServer } from "../scripts/apiMockServer";
import EmployeeProfileModal from "./blocks/EmployeeProfileModal/EmployeeProfileModal";

const App = () => {
  initApiMockServer();
  
  return (
    <div className="App">
      <EmployeeProfileModal />
    </div>
  );
}

export default App;
