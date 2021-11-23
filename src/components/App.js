import React from "react";
import '../assets/styles/app.scss';
import EmployeeListing from "./pages/EmployeeListing/EmployeeListing";
import {data as employeeData} from "./data/employeeListing.mock";

const App = () => {
  return (
    <div className="App">
      <EmployeeListing {...employeeData} />
    </div>
  );
}

export default App;
