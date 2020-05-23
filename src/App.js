import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import Country from "./components/Country";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/country">
            <Country />
          </Route>
          <Route path="/">
            <Countries />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
