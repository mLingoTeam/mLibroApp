
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
       console.log(id)
       const find = assingments.find( el => el.id == id)

       console.log(find)

        this.setState((state)=>{
            return{
                ...state,
                zadanie: find
            }
        }, this.setState(()=>{ return {...this.state, loading: false}}))
   }

   render(){

       return ( this.state.loading  ? (
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