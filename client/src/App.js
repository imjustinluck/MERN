import './App.css';
import React from "react";
import {Router} from "@reach/router";
import DisplayComponent from "./components/DisplayComponent"
import CreateComponent from "./components/CreateComponent"
import EditComponent from "./components/EditComponent"
import ViewComponent from "./components/ViewComponent"

function App() {
  return (
    <div className="App">
      <h1>Justin's Pet Shelter!</h1>
      <Router>
        <DisplayComponent path="/"/>
        <CreateComponent path="/pets/new" />
        <EditComponent path="/pets/:id/edit" />
        <ViewComponent path="/pets/:id/" />
      </Router>
    </div>
  );
}

export default App;
