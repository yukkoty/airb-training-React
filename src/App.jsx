import "./App.css";
import forrest2 from "./forrest2.jpeg";
import Tab from "./Tab";
import Message from "./Message";
import Button from "./Button";
import SearchBar from "./SearchBar";
import LiveContent from "./LiveContent";
import Footer from "./Footer";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <img className="backGroundImg" src={forrest2} />

        <Tab />
        <SearchBar />
        <Message />
        <Button />
        <LiveContent />
        <Footer />

        <p>
          Edit <code>src/App.js</code> and save to reload.{" "}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
