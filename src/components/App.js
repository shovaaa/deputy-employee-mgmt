import React from "react";
import '../assets/styles/app.scss';
import EmployeeListing from "./pages/EmployeeListing/EmployeeListing";
import { data as employeeData } from "./data/employeeListing.mock";
import NavBar from "./blocks/NavBar/NavBar";
import {data as navBarData} from "./data/navBar.mock";
import { initApiMockServer } from "../scripts/apiMockServer";

const App = () => {
  initApiMockServer();

  return (
    <div className="App">
      <NavBar {...navBarData} />
      <EmployeeListing {...employeeData} />
    </div>
  );
}

export default App;
