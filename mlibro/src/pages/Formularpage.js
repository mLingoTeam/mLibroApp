import React from 'react';
import Layout from '../layouts/Layout'
import Formular from './Formular'

class Formularpage extends React.Component {

    render(){
        if(localStorage.getItem('status')){
            this.props.history.push("/zadania");
        }
        return <Layout><Formular/></Layout>
    }


}

export default Formularpage;