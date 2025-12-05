import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
      // Do not alter the main div
      <RenderParagraph />
    </div>
  );
}

function RenderParagraph() {
  const [hide, setHide] = useState(false);

  const para = (
    <p id="para">
      Hello, I've learnt to use the full-stack evaluation tool. This makes me so
      happy
    </p>
  );

  return (
    <>
      <button id="click" onClick={() => setHide(true)}>
        click
      </button>
      {hide && para}
    </>
  );
}

export default App;
