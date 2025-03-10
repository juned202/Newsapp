import React, { Component } from 'react'
import {  Link } from "react-router";

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg " style={{backgroundColor:"rgb(121, 183, 225)"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">science</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
