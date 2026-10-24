import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 menu">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="Contact">
              <li>Contact</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className="col-4"></div>
      </div>
    );
  }
}
