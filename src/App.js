import logo from "./logo.svg";
import { useHistory } from "react-router-dom";
import "./App.css";

function App() {
  const RouteChange = () => {
    let path = `https://photos.app.goo.gl/dZP4xVBRikizYVz9A`;
    window.location.href = path;
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={RouteChange}>STEEVE</button>
      </header>
    </div>
  );
}

export default App;
