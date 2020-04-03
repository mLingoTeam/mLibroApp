import React from 'react';

class Formular extends React.Component{
    constructor(){
        super();
        this.state={
            "username":"",
            "password": ""
        }
    }

    render(){
        return(
            <div className="formular--container col m12">
                <div className="container col m12">
                    <div className="row">
                        <form className="col s12 m12">
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="username" type="text" className="validate"/>
                                <label for="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"/>
                                <label for="password">Password</label>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Formular;