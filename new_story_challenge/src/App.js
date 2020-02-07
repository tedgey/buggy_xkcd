import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainNav from "./components/mainNav";
import HomePage from "./components/homePage";
import SearchPage from "./components/searchPage";

import "./stylesheets/styles.css";

const routesArray = [
  { linkRoute: "/", linkName: "Latest" },
  { linkRoute: "/search", linkName: "Search" }
];

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <MainNav routes={routesArray} />
        </header>
        <Route path="/" exact component={HomePage} className="latest" />
        <Route path="/search" component={SearchPage} className="search" />
      </div>
    </Router>
  );
}

export default App;
