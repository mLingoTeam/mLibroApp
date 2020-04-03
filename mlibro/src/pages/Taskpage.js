
import React from 'react';
import {assingments} from '../data.json'
import Task from '../components/Task';
import Layout from '../layouts/Layout'

class Taskpage extends React.Component {

    constructor(){
        super();
        this.state = { zadanie: {}, loading: true }
    }

   componentDidMount(){
       let id = this.props.match.params.task_id
       const find = assingments.find( el => el.id == id)

        this.setState((state)=>{
            return{
                ...state,
                zadanie: find
            }
        }, this.setState(()=>{ return {...this.state, loading: false}}))
   }

   render(){

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