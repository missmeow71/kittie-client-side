import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
      <div className="header">
          <header className="App-header">
            <img src="./logo.jpg" id='logo' alt=""/>
         </header>
        <div className="nav">
            <button className="navbut">
              <Link className="button-style home-atag" to="/">HOME</Link>
            </button>
            <button className="navbut">
              <Link className="button-style donate-atag" to="/Donate">DONATE</Link>
            </button>
        </div>
      </div>
  )
}


    

export default Header
    
