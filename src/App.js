import React from "react";
import SearchEngine from "./SearchEngine";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary 📔</header>
        <main>
        <SearchEngine defaultWord="dictionary"/>
        </main>
        <footer className="app-footer">
          <small><a href="https://github.com/jayceeth/dictionary-project">Open source</a> by Jaycee</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
