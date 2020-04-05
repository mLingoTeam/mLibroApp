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
            window.location.reload();
        }

        this.getTasks = this.getTasks.bind(this);
        this.setTasks = this.setTasks.bind(this);
        this.setTasks();
    }

    getTasks() {

        const token = localStorage.getItem("status");

        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"token": token})
        };


        return fetch(`https://obscure-depths-75684.herokuapp.com/` + `https://mlibro-api.herokuapp.com/refresh`, requestOptions)
        .then(function(response) {
            return response.json();
          }).then(function(data) {
            return data
          });

    }

    async setTasks(){
        const data = await this.getTasks();
        const resolved_data = Promise.resolve(data);
        resolved_data.then(e=> localStorage.setItem('today', JSON.stringify(e.zadania.na_dzisiaj)));
        resolved_data.then(e=> localStorage.setItem('all', JSON.stringify(e.zadania.pozostale)));
    }


    render(){
        return(
            <div className="header">
                    <nav className="navbar-fixed">
                        <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo">mLibro</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger" onClick={this.show}><FaHamburger/></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/today">Dzisiejsze Zadania</Link></li>
                            <li><Link to="/zadania">Wszystkie Zadania</Link></li>
                            <li><a href="https://github.com/mLingoTeam" target="blank">mLingo Team</a></li>
                            <li><a className="signout tooltipped active" data-tooltip="Remember to log out!" onClick={this.clearStorage}>Wyloguj się</a></li>
                        </ul>
                        </div>
                    </nav>

                    <ul className="sidenav" id="mobile-demo">
                            <li><a className="sidenav-close"><FaHamburger onClick={this.show}/></a></li>
                            <li><Link to="/today">Dzisiejsze Zadania</Link></li>
                            <li><Link to="/zadania">Wszystkie Zadania</Link></li>
                            <li><a href="https://github.com/mLingoTeam" target="blank">mLingo Team</a></li>
                            <li><a className="signout "onClick={this.clearStorage}>Wyloguj się</a></li>


                    </ul>
            </div>
        )
    }
}

export default Header;