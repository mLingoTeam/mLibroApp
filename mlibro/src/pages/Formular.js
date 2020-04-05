import React from 'react';
import {FaCog} from 'react-icons/fa'

class Formular extends React.Component{
    constructor(){
        super();
        this.state={
            "username":"",
            "password": "",
            "loading": null
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.loginSystem = this.loginSystem.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    login() {

            if(this.state.username != undefined && this.state.password != undefined){
                const {username, password} = this.state;

            const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
            };


            return fetch(`https://obscure-depths-75684.herokuapp.com/` + `https://mlibro-api.herokuapp.com/get_assingments`, requestOptions)
            .then(function(response) {
                return response.json();
              }).then(function(data) {
                return data
              });

            }
        }

        async loginSystem(){

            this.setState({
                ...this.state,
                loading: true
            })


            const data = await this.login();
            const resolved_data = Promise.resolve(data);

            if(!data.message){
                    resolved_data.then(e=> localStorage.setItem('status', e.token));
                    resolved_data.then(e=> localStorage.setItem('today', JSON.stringify(e.zadania.na_dzisiaj)));
                    resolved_data.then(e=> localStorage.setItem('all', JSON.stringify(e.zadania.pozostale)));
            }
            else if(data.message){
                alert("Niepoprawny login lub hasło!")
            }


              setTimeout(() => {
                this.setState({
                  ...this.state,
                  loading: false
                })
              }, 1000);

        }


    render(){
        if(localStorage.getItem('status')){
            this.props.history.push("/zadania");
        }
        return(
                    <div>
                {
                    this.state.loading === true ?<div className="formular--container col m12"> <FaCog className="spin"/> </div>:
                <div className="formular--container col m12 container">
                    <div>
                    <h2>Witaj w Mlibro</h2>
                    <h4>Wygodne sprawdzanie zadań domowych!</h4>
                    <h4>Zaloguj się za pomocą twojego konta Librus</h4>
                    </div>
                    <div className="container col m12">
                        <div className="row">
                            <form className="col s12 m12">
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input id="username" type="text" className="validate" name="username" value={this.state.username} onChange={this.handleChange}/>
                                    <label for="username">Login Librus</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange}/>
                                    <label for="password">Hasło Librus</label>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <button className="button-mlibro" onClick={this.loginSystem}>Zaloguj się za pomocą Librusa</button>
                </div>
             }
        </div>
        )
    }
}

export default Formular;