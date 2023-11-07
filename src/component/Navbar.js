import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (

      <div>
        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
        <label htmlFor="menu-icon"></label>
        <nav className="nav">
          <ul className="pt-5">
            <li><a href="#">Work</a></li>
            <li><a href="#">Studio</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
