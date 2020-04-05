import React from 'react';
import {Link} from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'

class Header extends React.Component {


    constructor(props){
        super(props);

        this.show = function(e){
            document.getElementById('mobile-demo').classList.toggle('mobile-demo-active');
        }
        this.clearStorage = async () =>
        {
            await localStorage.removeItem('status');
            await localStorage.removeItem('today');
            await localStorage.removeItem('all');
            this.props.history.push("/");
            window.location.reload();
        }
    }






    render(){
        return(
            <div className="header">
                    <nav className="navbar-fixed">
                        <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo">mLibro</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger" onClick={this.show}><FaHamburger/></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/today">Today</Link></li>
                            <li><Link to="/zadania">All</Link></li>
                            <li><a href="https://github.com/mLingoTeam" target="blank">mLingo Team</a></li>
                            <li><a className="signout tooltipped active" data-tooltip="Remember to log out!" onClick={this.clearStorage}>Sign out</a></li>
                        </ul>
                        </div>
                    </nav>

                    <ul className="sidenav" id="mobile-demo">
                            <li><a className="sidenav-close"><FaHamburger onClick={this.show}/></a></li>
                            <li><Link to="/today">Today</Link></li>
                            <li><Link to="/zadania">All</Link></li>
                            <li><a href="https://github.com/mLingoTeam" target="blank">mLingo Team</a></li>
                            <li><a className="signout "onClick={this.clearStorage}>Sign out</a></li>


                    </ul>
            </div>
        )
    }
}

export default Header;