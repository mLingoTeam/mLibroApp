import React from 'react';
import {Link} from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'
import M from 'materialize-css'

class Header extends React.Component {


    constructor(){
        super();

        this.show = function(e){
            document.getElementById('mobile-demo').classList.toggle('mobile-demo-active');
        }
    }

    clearStorage = () =>{
        localStorage.removeItem('status')
        localStorage.removeItem('tasks')
        window.location.reload();
    }




    render(){
        return(
            <div className="header">
                    <nav className="navbar-fixed">
                        <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo">mLibro</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger" onClick={this.show}><FaHamburger/></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/zadania">Today</Link></li>
                            <li><Link to="/zadania">All</Link></li>
                            <li><Link to="/zadania">mLingo Team</Link></li>
                            <li><Link to="/" className="signout tooltipped active" data-tooltip="Remember to log out!" onClick={this.clearStorage}>Sign out</Link></li>
                        </ul>
                        </div>
                    </nav>

                    <ul className="sidenav" id="mobile-demo">
                            <li><a className="sidenav-close"><FaHamburger onClick={this.show}/></a></li>
                            <li><Link to="/zadania">Today</Link></li>
                            <li><Link to="/zadania">All</Link></li>
                            <li><Link to="/zadania">mLingo Team</Link></li>
                            <li><Link to="/" className="signout "onClick={this.clearStorage}>Sign out</Link></li>


                    </ul>
            </div>
        )
    }
}

export default Header;