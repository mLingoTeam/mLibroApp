
import React from 'react';
import Task from '../components/Task';
import Layout from '../layouts/Layout'


class Taskpage extends React.Component {

    constructor(){
        super();
        this.state = { zadanie: {}, loading: true }

    }

   componentDidMount(){
       let id = this.props.match.params.task_id;
       let assingments = JSON.parse(localStorage.getItem("today"));
       let assingments2 = JSON.parse(localStorage.getItem("all"));
       let assingments3 = [...assingments, ...assingments2];
       const find = assingments3.find( el => el.id == id)

        this.setState((state)=>{
            return{
                ...state,
                zadanie: find
            }
        }, this.setState(()=>{ return {...this.state, loading: false}}))
   }

   render(){

    if(!localStorage.getItem("status")){
        this.props.history.push("/")
    }

       return ( this.state.loading === true  ? (
        <Layout>
            <div>
                ...loading
            </div>
        </Layout>
        )
        :
        ( <Layout> <Task props={this.state.zadanie}/> </Layout>)
   )

   }
}

export default Taskpage;