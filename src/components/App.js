import React from "react";
import Button from "./blocks/Button/Button";
import '../assets/styles/theme/app.scss';

const App = () => {
  return (
    <div className="App">
      <p>Hello!</p>
      <Button variant="blue" buttonText="Save" buttonLink="#" buttonAlt="click" size="sm" />
      <Button variant="outline-grey" buttonText="Previous Page" buttonLink="#" buttonAlt="click" size="sm" />
    </div>
  );
}

export default App;
