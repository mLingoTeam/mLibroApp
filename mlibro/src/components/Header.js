import React from 'react';
import {Link} from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'

const Header = () => {
    return(
        <div className="header">
                <nav className="navbar-fixed">
                    <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">mLibro</Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><FaHamburger/></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/zadania">Today</Link></li>
                        <li><Link to="/zadania">All</Link></li>
                        <li><Link to="/zadania">mLingo Team</Link></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                        <li><Link to="/zadania">Today</Link></li>
                        <li><Link to="/zadania">All</Link></li>
                        <li><Link to="/zadania">mLingo Team</Link></li>
                </ul>
        </div>
    )
}

export default Header;