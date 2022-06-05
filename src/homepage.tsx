import {Component} from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
        <div>
          <h1>Home Page</h1>
          <hr />
          <p>
            {/* Game Route */}
            <Link to="/game">game page</Link>
          </p>
        </div>
      );
  }
}

export default HomePage
