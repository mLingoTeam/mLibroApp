import React from 'react';
import Layout from '../layouts/Layout'
import TaskCard from '../components/TaskCard';
import req from '../req/req'

class Mainpage extends React.Component {

    constructor(props){
        super(props);

        req.setTasks();
    }

    render(){
        if(!localStorage.getItem("status")){
            this.props.history.push("/")
            return <div>you logged out, refresh the page if you see this</div>;
        }
        const tasks = [ ...JSON.parse(localStorage.getItem("today")), ...JSON.parse(localStorage.getItem("all"))];
        return(
            <Layout history={this.props.history}>
                <div className="row">
                {
                tasks.map(
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