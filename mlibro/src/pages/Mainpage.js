import React from 'react';
import Layout from '../layouts/Layout'
import TaskCard from '../components/TaskCard';
import req from '../req/req';
import "materialize-css/dist/css/materialize.min.css";
import WeeklyView from '../components/WeeklyView';
import CalendarView from '../components/CalendarView'
import DateUtils from '../util/dateUtil';
import M from 'materialize-css';

const du = new DateUtils();

class Mainpage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            renderStyle: 'grid',
            currentWeekDays: du.weekDays(new Date)
        };

        req.setTasks();
    }

    componentDidMount() {
        M.Tabs.init(this.Tabs);
    }

    render(){
        if(!localStorage.getItem("status")){
            this.props.history.push("/")
            return <div>you logged out, refresh the page if you see this</div>;
        }
        const tasks = [ ...JSON.parse(localStorage.getItem("today")), ...JSON.parse(localStorage.getItem("all"))];
        
        return(
            <Layout history={this.props.history}>
                <ul ref={Tabs => {this.Tabs = Tabs;}} className="tabs tabs-fixed-width" id="tabs-swipe-demo">
                    <li key="1" class="tab"><a href="#grid">Grid</a></li>
                    <li key="2" class="tab"><a href="#weekly">Weekly</a></li>
                    <li key="3" class="tab"><a href="#calendar">Calendar</a></li>
                </ul>

                <div id="grid">
                    <div className="row">
                    {
                        tasks.map((element) => {
                            return (
                                <TaskCard props={element}/>
                            )
                        }
                        )
                    }
                    </div>
                    
                </div>
                <div id="weekly">
                    <WeeklyView weekdays={this.state.currentWeekDays} tasks={tasks}/>
                </div>
                <div id="calendar" className="row" style={{marginTop: "30px"}}>
                    <div className="col s12">
                        <CalendarView year={new Date().getFullYear()} month={new Date().getMonth()} tasks={tasks}/>
                    </div>
                </div>
            </Layout>
        )  
    }
}

export default Mainpage;