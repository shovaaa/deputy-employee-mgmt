import React from "react";
import Button from "./blocks/Button/Button";
import '../assets/styles/app.scss';
import InputBox from "./blocks/InputBox/InputBox";
import NavBar from "./blocks/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <p>Hello!</p>
      <Button variant="blue" buttonText="Save" buttonLink="#" buttonAlt="click" size="sm" />
      <Button variant="outline-grey" buttonText="Previous Page" buttonLink="#" buttonAlt="click" size="sm" />
      <div>
        <InputBox label="Name" name="employee-name" id="employee-name" type="text" minLength={1} maxLength={150} displayHeight="sm" displayWidth="w-50"/>
      </div>
      <div>
        <NavBar activeKey={"/home"} mainMenu={[{navText: "Home", navLink: "/home"}]}/>
      </div>
    </div>
  );
}

export default App;
