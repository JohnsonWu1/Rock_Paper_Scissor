import {Component} from 'react'
import notfound from './notfound.png'
import './index.css'
import { Link } from "react-router-dom";

class NotFound extends Component {
  
  render() {
    return (
      <div className="not-found-wrap">
        <div className="img-box">
          <img src={notfound} alt="404" />
          <div>
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
