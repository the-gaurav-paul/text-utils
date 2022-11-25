import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import { Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f2e4b";
      showAlert("Dark mode has been enabled", "success");
      // document.body.style.color = 'white';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.body.style.color = 'black';
    }
  };

  return (
    <>
      <Router>
        <div className="container">
          <Navbar title="Text-Utils" mode={mode} />
         
          <Alert alert={alert} />
          <div
            className="form-check form-switch "
            style={{ textAlign: "right" }}
          >
            <input
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleMode}
            />
            <b style={{ color: mode === "light" ? "black" : "white" }}>
              Enable {mode === "light" ? "Dark" : "Light"} Mode
            </b>
          </div>
          <Routes>
          <Route exact path="/about"
              element = {<About mode={mode} />}
            />
          <Route exact path="/"
              element = {
                <div className={`container my-3`}>
                <TextForm
                  heading="Text to be analyzed"
                  mode={mode}
                  
                />
              </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
