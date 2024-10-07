import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Education from "./Education";
import Projects from "./Achievement";
import Contacts from "./Phone";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
      <Aboutme />
      <Education />
      <Projects />
      <Contacts/>
    </div>
  );
}

export default App;
