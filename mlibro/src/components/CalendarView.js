import React from 'react'
import DateUtils from '../util/dateUtil';
import TaskCard from '../components/TaskCard'

const du = new DateUtils();

class CalendarView extends React.Component {
  constructor(props) {
    super();
    
    console.log( `Props year: ${props.year}\nProps month: ${props.month}`);
    let date = new Date();
    date.setFullYear(props.year, props.month, 1);
    this.state = {
      tasks: props.tasks,
      monthdays: du.monthDays(props.year, props.month),
      date: date
    }

  }

  render() {
    return(
      <div className="container">
        <h5>{this.state.date.getFullYear()}-{this.state.date.getMonth()}</h5>
        <div className="row" style={{color: "#e84393"}}>
          <div className="col s1 calendar-cell">Mon</div>
          <div className="col s1 calendar-cell">Tue</div>
          <div className="col s1 calendar-cell">Wed</div>
          <div className="col s1 calendar-cell">Thu</div>
          <div className="col s1 calendar-cell">Fri</div>
          <div className="col s1 calendar-cell">Sat</div>
          <div className="col s1 calendar-cell">Sun</div>
        </div>
        {
          this.state.monthdays.map((week) => this.mapWeek(week))
        }

        <div className="row">
          {this.showTasksForDay(this.state.date)}
        </div>
      </div>
    )
  }


  dayHasTask(day) {
    let fDate = du.formatedDateString(day);
    return this.state.tasks.find((element) => element['termin_oddania'] == fDate) == undefined ? false : true;
  }



  /* Helper functions
  -------------------------------------*/
  mapWeek(week) {
    return (
      <div className="row">
      {
        
        week.map((day) => 
            <div key={typeof day == 'number' ? day : du.formatedDateString(week[week.indexOf(day)])} 
                  className={typeof day == 'number' ? "col s1 calendar-cell" : du.formatedDateString(day) == du.formatedDateString(this.state.date) ? "col s1 calendar-cell cell-selected" : "col s1 calendar-cell"}
                  style={week.indexOf(day) % 2 == 0 ? {backgroundColor: "#fefefe"} : {backgroundColor: "#dedede"}}>
              {typeof day == "number" ? <p>-</p> : this.dayHasTask(day) ? <p><a href="#" onClick={() => this.setState({date: day})}>{day.getDate()}</a></p> : <p>{day.getDate()}</p>}
            </div>)

      }
      </div>
    )    
  }

  showTasksForDay(day) {
    return <div className="row">
    {
      this.state.tasks.map((element) => {
        if(element['termin_oddania'] == du.formatedDateString(day)) return <TaskCard props={element}/>
      })
    }
    </div>
  }
}

export default CalendarView;