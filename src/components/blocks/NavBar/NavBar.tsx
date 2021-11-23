import React from "react";
import { INavBar } from "../../../interfaces/NavBar";
import ImageHolder from "../ImageHolder/ImageHolder";

interface IProps extends INavBar {

}

const NavBar = (props: IProps) => {
  return (
    <div className="navBar-container">
      <div className="navBar-logoContainer">
        <ImageHolder url={"https://images.unsplash.com/photo-1637589869710-8f56ef24ff85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80"} alt="new-image" displayShape="round" displaySize="sm" />
      </div>
      <div className="navBar-itemContainer">
        {
          props.mainMenu.map((menuItem, index) => {
            return (
              <div key={index} className="navBar-item">
                <a href={menuItem.navLink} className="navBar-item--link">{menuItem.navText}</a>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default NavBar;