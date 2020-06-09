import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import CountryBigCard from "./components/CountryBigCard";
import HomePage from "./components/HomePage";
// import useToggle from "./hooks/useToggle";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <Navbar
          darkMode={() => {
            console.log("darkoMode");
            setIsDark(!isDark);
          }}
        />
        <Switch>
          <Route
            exact
            path="/countries/:alpha3Code"
            component={CountryBigCard}
          />
          <Route
            exact
            path="/countries"
            component={Countries}
            isDark={isDark}
          />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
