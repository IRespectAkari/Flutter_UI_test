


function createMonth(year, month) {
  const MAXDAYS = new Date(year, month, 0).getDate()

  // <month>月の日数分のdivを作成
  const days = range(MAXDAYS, 1)
    .map(n => [create("span", n), create("div", null, {classList: "shedules"})])
    .map(Wrap("div", {classList: ["day", `month-${month}`]}))

  // 1日が始まる曜日まで移動させるためのdivを作成
  const paddingDate = range(new Date(`${year}/${month}/1`).getDay())
    .map(_=>create("div", null, {classList: "paddingDate"}));

  // 月のdivのclass
  const classLists = ["month", `year-${year}`]
  if(paddingDate.length == 0) {
    classLists.push("paddingDate-0");
  }

  // 1日が始まる曜日まで移動させるためにdivを追加
  days.unshift(...paddingDate)
// console.log(days)

  return create("div", days, {id: `month-${month}`, classList: classLists, dataset: {year: `${year}年`, month: `${month}月`}})
}


const calendarTest = create("div", null, {id: "calendarTest"})
append("body", calendarTest)

// とりあえずで2020年から10年分生成
const monthList = range(10, 2020).flatMap(year => range(12,1).map(month => createMonth(year, month)));
const calendarView = create("div", monthList, {id: "calendarView"});
append("#calendarTest", calendarView);


// ヘッダー部分
const calendarSelector = [
  create("select", range(10, 2020).map(Wrap("option", {value: year=>`${year}年`})), {id: "yearSelector", events: {change: scrollToMonthAdapter}}), "年",
  create("select", range(12,1).map(Wrap("option", {value: month=>`${month}月`})), {id: "monthSelector", events: {change: scrollToMonthAdapter}}), "月",
];
const header = [
  create("div", null, {id: "config"}),
  create("div", calendarSelector, {id: "displayMonth"}),
  create("div", null, {id: "option"})
];
append("header", header);



// -----------------------------------------------
// headerに表示する月を判定し、headerに表示する
// -----------------------------------------------

const months = $$(".month");

function updateMonthHeader() {
  const threshold = window.innerHeight * 0.2;

  let currentMonth = months[0];

  months.forEach(month => {
    const rect = month.getBoundingClientRect();

    if (rect.top <= threshold) {
      currentMonth = month;
    }
  });

  $("select#yearSelector").value = currentMonth.dataset.year
  $("select#monthSelector").value = currentMonth.dataset.month
}

calendarTest.addEventListener("scroll", updateMonthHeader);
calendarTest.addEventListener("resize", updateMonthHeader);

// -----------------------------------------------
// headerでの変更をスクロールで反映させる
// -----------------------------------------------

// EventListenerに登録するためのアダプター
function scrollToMonthAdapter() {
  const year = $("select#yearSelector").value
  const month = $("select#monthSelector").value
  scrollToMonth(year, month);
}

// year年month月
function scrollToMonth(year, month) {
  const target = $(`.month[data-year="${year}"][data-month="${month}"]`);

  if (!target) return;

  const parent = $("#calendarTest")

  const parentRect = parent.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  const offset = parentRect.height * 0.10;

  parent.scrollBy({
      top: targetRect.top - parentRect.top - offset,
      behavior: "smooth"
  });

}
