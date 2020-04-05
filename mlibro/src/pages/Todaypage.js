import React from 'react';
import Layout from '../layouts/Layout'
import TaskCard from '../components/TaskCard';

class Todaypage extends React.Component {

    constructor(props){
        super(props);

    }

    render(){
        if(!localStorage.getItem("status")){
            this.props.history.push("/")
            return <div>you logged out, refresh the page if you see this</div>;
        }
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