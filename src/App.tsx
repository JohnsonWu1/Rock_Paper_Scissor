import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Game from './Game'
import NotFound from './NotFound'
import HomePage from './homepage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
