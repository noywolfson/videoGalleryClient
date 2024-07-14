import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Upload from './Upload';
import Gallery from './Gallery';

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <Routes>
                <Route exact path="/upload" element={<Upload/>} />
                <Route exact path="/gallery" element={<Gallery/>} />
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </header>
      </div>
  );
}

export default App;
