
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

class DateUtils {
  formatedDateString(date) {
    return date.toISOString().split('T')[0];
  }
  
  weekDays(current) {
    var week = [];
    // Starting Monday not Sunday 
    var first = current.getDate() - current.getDay() + 1;
    current.setDate(first);
    for (var i = 0; i < 7; i++) {
      week.push(new Date(+current));
      current.setDate(current.getDate()+1);
    }
    return week;
  }

  monthDays(year, month) {
    let date = new Date();
    date.setFullYear(year, month, 1);
    let weekIndex = date.getDay();

    console.log(date);

    let monthArr = [];
    for(let i = 0; i < 5; i++) {
      let weekArr = [];
      for(let j = 0; j < 7; j++) {
        if(i == 0 && j < weekIndex) {
          weekArr[j] = j;
        } 
        else {
          weekArr[j] = date;
          date = date.addDays(1);
        }
      }
      monthArr.push(weekArr);
    }

    return monthArr;
  }

  getDateParts(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      weekday: date.getDay()
    }
  }
}



export default DateUtils;