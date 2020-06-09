import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode }) => {
  // let initialTheme;

  // const darkMode = () => {
  //   if (initialTheme) {
  //     document.documentElement.style.setProperty(
  //       "--background-color",
  //       "hsl(0, 0%, 98%)"
  //     );
  //     document.documentElement.style.setProperty(
  //       "--text-color",
  //       "hsl(200, 15%, 8%)"
  //     );
  //     document.documentElement.style.setProperty(
  //       "--elements-color",
  //       "hsl(0, 0%, 100%)"
  //     );

  //     initialTheme = false;
  //   } else {
  //     document.documentElement.style.setProperty(
  //       "--background-color",
  //       "hsl(207, 26%, 17%)"
  //     );
  //     document.documentElement.style.setProperty(
  //       "--text-color",
  //       "hsl(0, 0%, 100%)"
  //     );
  //     document.documentElement.style.setProperty(
  //       "--elements-color",
  //       "hsl(209, 23%, 22%)"
  //     );
  //     initialTheme = true;
  //   }
  // };

  return (
    <div className="navbar-container">
      <div className="navbar-wraper">
        <div>
          <div className="a-tag-titel">
            <Link className="link" to={{ pathname: "/" }}>
              Where in the World...
            </Link>
          </div>
        </div>
        <div>
          <div className="a-tag-mood" onClick={darkMode}>
            Dark Mode
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//passing action up / props down
