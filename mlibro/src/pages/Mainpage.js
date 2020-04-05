import React from 'react';
import Layout from '../layouts/Layout'
import TaskCard from '../components/TaskCard';

class Mainpage extends React.Component {

    constructor(props){
        super(props);
        if(!localStorage.getItem("status")){
            this.props.history.push("/")
        }
    }

    render(){
        return(
            <Layout history={this.props.history}>
                <div className="row">
                {
                JSON.parse(localStorage.getItem("all")).map(
                (element) => {
                    return (
                            <TaskCard props={element}/>
                    )
                }
                )}
                </div>
            </Layout>
        )
    }
}

export default Mainpage;