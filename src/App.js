import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import logo from "./logo.svg";
import "./App.css";

// CREATE INPUT THAT FILTERS CITIES BASED ON CURRENT INPUT PARTIAL MATCH, DISPLAY UNDERNEATH.
// OR ASSUME CLOSEST MATCH AND POPULATE CONTENT

// ON MATCHING/SELECTING CITY NAME, POPULATE UNDERNEATH COMPONENT WITH MATCHING NAME

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
          <ResultsList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
