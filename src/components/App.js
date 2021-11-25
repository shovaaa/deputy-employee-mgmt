import React from "react";
import '../assets/styles/app.scss';
import EmployeeListing from "./pages/EmployeeListing/EmployeeListing";
import {data as employeeData} from "./data/employeeListing.mock";
import { initApiMockServer } from "../scripts/apiMockServer";

const App = () => {
  initApiMockServer();
  
  return (
    <div className="App">
      <EmployeeListing {...employeeData} />
    </div>
  );
}

export default App;
