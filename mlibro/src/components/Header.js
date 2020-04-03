import React from 'react';
import {FaHamburger} from 'react-icons/fa'

const Header = () => {
    return(
        <div className="header">
                <nav className="navbar-fixed">
                    <div className="nav-wrapper container">
                    <a href="#!" className="brand-logo">mLibro</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><FaHamburger/></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Today</a></li>
                        <li><a href="badges.html">All</a></li>
                        <li><a href="collapsible.html">mLingo Team</a></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                        <li><a href="sass.html">Today</a></li>
                        <li><a href="badges.html">All</a></li>
                        <li><a href="collapsible.html">mLingo Team</a></li>
                </ul>
        </div>
    )
}

export default Header;