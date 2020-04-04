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
            .then(result => { return { data: JSON.stringify(result), status: result }})

            }
        }

        async loginSystem(){

            this.setState({
                ...this.state,
                loading: true
            })


            const data = await this.login();

            //const {zadania} = data;

            console.log(JSON.stringify(data))
            console.log(await JSON.stringify(data))
            console.log(await data)
            console.log(await data.na_dzisiaj)
            console.log(await data.pozostale)
            console.log(await JSON.stringify(data.response))
            if(data.status.ok){
                    localStorage.setItem('status', 'logged');
                    //localStorage.setItem('tasks', await data.zadania)
            }
            else if(!data.status.ok){
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
                    <button className="button-mlibro" onClick={this.loginSystem}>Sign in by librus</button>
                </div>
             }
        </div>
        )
    }
}

export default Formular;