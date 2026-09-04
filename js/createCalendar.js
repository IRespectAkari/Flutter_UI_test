


function createMonth(month) {
  // const MAXDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // const MAXDAYS = range(12, 1).map(month=>new Date(2026, month, 0).getDate())
  const MAXDAYS = new Date(2026, month, 0).getDate()

  // const days = range(MAXDAYS[month - 1], 1)
  const days = range(MAXDAYS, 1)
    // .map(Wrap("div", {id: `month-${month}` ,classList: ["day"]}))
    // .map(Wrap("div", {classList: ["day", `month-${month}`]}))
    // .map(n => create("div", [n, create("div", null, {classList: "shedules"})], {classList: [`day-${n}`, `month-${month}`]}))
    // .map(Wrap("span").map(n => create("div", [n, create("div", null, {classList: "shedules"})], {classList: ["day", `month-${month}`]}))
    .map(n => [create("span", n), create("div", null, {classList: "shedules"})])
    .map(Wrap("div", {classList: ["day", `month-${month}`]}))

  const paddingDate = range(new Date(`2026/${month}/1`).getDay())
    .map(_=>create("div", null, {classList: "paddingDate"}));

  const classLists = ["month"]
  if(paddingDate.length == 0) {
    classLists.push("paddingDate-0");
  }

  days.unshift(...paddingDate)
// console.log(days)

  return create("div", days, {id: `month-${month}`, classList: classLists, dataset: {month: `${month}月`}})
}





const calendarTest = create("div", null, {id: "calendarTest"})
append("body", calendarTest)

const monthList = range(12,1).map(createMonth)

// append("#calendarTest", days)
append("#calendarTest", monthList)














