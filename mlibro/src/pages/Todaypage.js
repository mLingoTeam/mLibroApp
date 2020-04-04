import React from 'react';
import Layout from '../layouts/Layout'
import TaskCard from '../components/TaskCard';

class Todaypage extends React.Component {

    constructor(){
        super();
        if(!localStorage.getItem("status")){
            this.props.history.push("/")
        }
    }

    render(){
        return(
            <Layout>
                <div className="row">
                {
                    JSON.parse(localStorage.getItem("today")).map(
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

export default Todaypage;