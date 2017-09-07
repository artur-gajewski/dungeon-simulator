import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    render() {
        return (
            <div id="nav-background">
                <div id="nav-container">
                    <header id="nav-header">
                      <h1>
                          <Link id="nav-logo" to="/">Dungeon Simulator</Link>
                      </h1>
                      <div id="nav-menu-button" onClick={() => this.toggleMobileMenu()}>MENU</div>
                    </header>
                    <nav>
                      <ul className="nav-ul hide-ul">
                        <li>
                          <Link className="nav-link" to="/news">News</Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/list">Adventures</Link>
                        </li>
                      </ul>
                    </nav>
                </div>
            </div>
        );
    }

    toggleMobileMenu() {
      const navUl = document.getElementsByClassName("nav-ul");
      navUl[0].style.transition = "max-height 0.5s";
      navUl[0].classList.toggle("hide-ul");
    }
}

export default Navigation;
