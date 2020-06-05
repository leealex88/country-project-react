import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import CountryBigCard from "./components/CountryBigCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/country/:alpha3Code" component={CountryBigCard} />
          <Route exact path="/" component={Countries} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
