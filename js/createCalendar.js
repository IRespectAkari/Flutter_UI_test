


function createCalendar(month) {
  const days = range(MAXDAYS[month - 1], 1)
    .map(Wrap("div", {id: `month-${month}` ,classList: ["day"]}))

// console.log(MAXDAYS.map(n=>range(n,1)))

  const paddingDate = range(new Date(`2026/${month}/1`).getDay())
  .map(_=>create("span", null, {classList: "paddingDate"}))

  days.unshift(...paddingDate)
console.log(days)
  return days;



  return create("table", days, {id: "calendar"})
}





const calendarTest = create("div", null, {id: "calendarTest"})
append("body", calendarTest)

const MAXDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthList = range(12,1).map(createCalendar).map(Wrap("div", {classList: `month`}))

// append("#calendarTest", days)
append("#calendarTest", monthList)














