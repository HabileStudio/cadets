import React, { Component } from 'react'
import { ReactComponent as Logo } from './logo.svg'

class Header extends Component {

  render() {
    return (
      <div className="Header">

        <h2>
          == made with the help of&nbsp;
          <a href="https://ssd-api.jpl.nasa.gov/doc/cad.html"
             target="_blank" rel="noopener noreferrer">
            NASA and JPL databases
          </a>
          &nbsp;==
        </h2>

        <Logo />

        <h2>
          Close-Approach Data and Earth Threats from Space
        </h2>

      </div>
    )
  }
}



export default Header