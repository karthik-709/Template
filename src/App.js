import Home from "./Home/Home";
import React from "react";
import "./App.css";
import Appheader from "./AppHeader";
import AppFooter from "./AppFooter";

function App() {
  return (
    <div className="App">
      <Appheader />
      <Home />
      <AppFooter />
    </div>
  );
}

export default App;
