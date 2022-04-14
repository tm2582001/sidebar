import React from "react";
import Home from "./pages/home/home.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
