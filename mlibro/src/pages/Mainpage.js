import React from 'react';
import Layout from '../layouts/Layout'
import TaskCard from '../components/TaskCard';
import {assingments} from '../data.json';

const Mainpage = () => {

    return(
        <Layout>
            <div className="row">
            {assingments.map(
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

export default Mainpage;