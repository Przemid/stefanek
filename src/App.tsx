import React from "react";
import "./App.css";

const routeChange = () => {
  let path = `https://photos.app.goo.gl/dZP4xVBRikizYVz9A`;
  window.location.href = path;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={routeChange}>Steve</button>
      </header>
    </div>
  );
}

export default App;
