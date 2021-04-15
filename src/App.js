import React from "react";
import SearchEngine from "./SearchEngine";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary 📔</header>
        <main>
        <SearchEngine />
        </main>
        <footer className="app-footer">
          <small>Coded by Jaycee</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
