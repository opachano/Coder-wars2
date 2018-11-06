// My Code

function lastDayIsFriday(initialYear, endYear) {
  let counter = 0;
  if(!endYear) {
    for(let i = initialYear; i < initialYear+1; i++) {
    for(let j = 0; j <= 11; j++) {
      let tempDate = new Date(i, j+1, 0).getDay()
      if(tempDate == 5) {
        counter ++
      }
    }
  }
  return counter;
  }
  for(let i = initialYear; i < endYear+1; i++) {
    for(let j = 0; j <= 11; j++) {
      let tempDate = new Date(i, j+1, 0).getDay()
      if(tempDate == 5) {
        counter ++
      }
    }
  }
}

// Best Practice

function lastDayIsFriday(initialYear, endYear = initialYear) {
  let fridays = 0
  for (let y = initialYear; y <= endYear; y++) {
    for (let month = 0; month < 12; month++) {
      if (new Date(y, month + 1, 0).getDay() === 5) fridays++
    } 
  }
  return fridays
}