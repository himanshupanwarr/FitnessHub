import React, { Component } from 'react'
import './Navbar.css'
import {
  Link,
 } from "react-router-dom";

export default class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="containers">
        <Link className="nav" to="/home">E-Gyan</Link>
       
      </div>
    </nav>
    )
  }
}
