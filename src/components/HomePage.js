import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <div className="button-container">
        <div className="go-to-country-button">
          <Link className="link" to={{ pathname: "/countries" }}>
            <button className="button">
              ...would you like to go?
              <p className="small-p">click and check!</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
