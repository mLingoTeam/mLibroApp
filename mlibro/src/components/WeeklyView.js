import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import TaskCard from '../components/TaskCard';
import DateUtils from "../util/dateUtil";

const du = new DateUtils();

class WeeklyView extends Component {
  constructor(props){
    super(props);
    this.state = {
      weekdays: props.weekdays,
      tasks: props.tasks
    }

    this.nextWeek = this.nextWeek.bind(this);
    this.prevWeek = this.prevWeek.bind(this);
  }

  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }

  render() {
    return (
      <div>
        <div className="row grey lighten-4">
          <div className="col s3 center-text"><a href="#" className="small-btn-nav" onClick={this.prevWeek}>Prev weeek</a></div>
          <div className="col s6 center-text" ><h5>{du.formatedDateString(this.state.weekdays[0])} -- {du.formatedDateString(this.state.weekdays[6])}</h5></div>
          <div className="col s3 center-text"><a href="#" className="small-btn-nav" onClick={this.nextWeek}>Next weeek</a></div>
        </div>
        <ul ref={Tabs => {this.Tabs = Tabs;}} className="tabs tabs-fixed-width" id="tabs-swipe-demo">
          <li key="1" class="tab"><a href={`#day-${du.formatedDateString(this.state.weekdays[0])}`}>{du.formatedDateString(this.state.weekdays[0])}</a></li>
          <li key="2" class="tab"><a href={`#day-${du.formatedDateString(this.state.weekdays[1])}`}>{du.formatedDateString(this.state.weekdays[1])}</a></li>
          <li key="3" class="tab"><a href={`#day-${du.formatedDateString(this.state.weekdays[2])}`}>{du.formatedDateString(this.state.weekdays[2])}</a></li>
          <li key="4" class="tab"><a href={`#day-${du.formatedDateString(this.state.weekdays[3])}`}>{du.formatedDateString(this.state.weekdays[3])}</a></li>
          <li key="5" class="tab"><a href={`#day-${du.formatedDateString(this.state.weekdays[4])}`}>{du.formatedDateString(this.state.weekdays[4])}</a></li>
          <li key="6" class="tab"><a href={`#day-${du.formatedDateString(this.state.weekdays[5])}`}>{du.formatedDateString(this.state.weekdays[5])}</a></li>
          <li key="7" class="tab"><a href={`#day-${du.formatedDateString(this.state.weekdays[6])}`}>{du.formatedDateString(this.state.weekdays[6])}</a></li>
        </ul>

        <div id={`day-${du.formatedDateString(this.state.weekdays[0])}`}>
          {this.showTasksForDay(this.state.weekdays[0])}
        </div>
        <div id={`day-${du.formatedDateString(this.state.weekdays[1])}`}>
          {this.showTasksForDay(this.state.weekdays[1])}
        </div>
        <div id={`day-${du.formatedDateString(this.state.weekdays[2])}`}>
          {this.showTasksForDay(this.state.weekdays[2])}
        </div>
        <div id={`day-${du.formatedDateString(this.state.weekdays[3])}`}>
          {this.showTasksForDay(this.state.weekdays[3])}
        </div>
        <div id={`day-${du.formatedDateString(this.state.weekdays[4])}`}>
          {this.showTasksForDay(this.state.weekdays[4])}
        </div>
        <div id={`day-${du.formatedDateString(this.state.weekdays[5])}`}>
          {this.showTasksForDay(this.state.weekdays[5])}
        </div>
        <div id={`day-${du.formatedDateString(this.state.weekdays[6])}`}>
          {this.showTasksForDay(this.state.weekdays[6])}
        </div>
      </div>
    );
  }



  /* Helper functions 
  -------------------------------------------*/

  showTasksForDay(day) {
    return <div>
    {
      this.state.tasks.map((element) => {
        if(element['termin_oddania'] == du.formatedDateString(day)) return <TaskCard props={element}/>
      })
    }
    </div>
  }

  nextWeek() {
    this.setState({weekdays: du.weekDays(this.state.weekdays[6].addDays(1))});
  }
  prevWeek() {
    this.setState({weekdays: du.weekDays(this.state.weekdays[0].addDays(-2))});
  }
}

export default WeeklyView;