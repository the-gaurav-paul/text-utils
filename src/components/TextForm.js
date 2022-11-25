import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  };
  let handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  let handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  let handleOnChange = (event) => {
    setText(event.target.value);
  };
  let textLength = () => {
    if (text.length === 0) {
      return 0;
    } else {
      return text.split(" ").length;
    }
  };
  let handleExtraSpaces = ()=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
  }
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            
           placeholder="Enter your text"
           
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
              //placeholder : {color:"red"}
            }}
            id="my-box"
            rows="8"
            
            
          ></textarea>
        </div>
        <div className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </div>
        <div className="btn btn-primary mx-1" onClick={handleUpClick}>
          Uppercase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleLowClick}>
          Lowercase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </div>

      </div>
      <div
        className="conatiner mx-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your text summary</h3>
        <p>
          {textLength()} words and {text.length} letters
        </p>
        <p>{textLength() * 0.008} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
