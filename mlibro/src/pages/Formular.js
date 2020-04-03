import React from 'react';
import {Link} from 'react-router-dom';

class Formular extends React.Component{
    constructor(){
        super();
        this.state={
            "username":"",
            "password": ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    login() {

            const {username, password} = this.state;
            console.log(username, password);

            const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
            };


            return fetch(`https://mlibro-api.herokuapp.com/get_assingments`, requestOptions)
            .then(result => result.json())
            .then(result => console.log(result))


    }

    render(){
        return(
            <div className="formular--container col m12">
                <div>
                <h2>Welcome in mLibro</h2>
                <h4>Sign in to your librus account</h4>
                </div>
                <div className="container col m12">
                    <div className="row">
                        <form className="col s12 m12">
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="username" type="text" className="validate" name="username" value={this.state.username} onChange={this.handleChange}/>
                                <label for="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange}/>
                                <label for="password">Password</label>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <button className="button-mlibro" onClick={this.login}>Sign in by librus</button>
            </div>
        )
    }
}

export default Formular;