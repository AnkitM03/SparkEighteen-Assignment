import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Content from "./Components/Content";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#D57E7E";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#33506d";
      document.body.style.color = "white";
    }
  };

  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Content mode={mode} />
    </div>
  );
}

export default App;
