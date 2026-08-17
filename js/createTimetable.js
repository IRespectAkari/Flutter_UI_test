
function createTimetable(timetable) {
  const week = "月火水木金";
  const transpose = (arr) => arr[0].map((col, i) => arr.map((row) => row[i]));

  timetable = transpose(timetable);

  // 曜日追加
  timetable.unshift(week.split(""));

  // 時間追加
  timetable.map((e,i)=>e.unshift(i==0 ? "" : i));

  const trs = timetable.map(e=>e.map(Wrap("td"))).map(Wrap("tr"));
  const timetable_table = create("table", trs, {id: "timetable"});

  return timetable_table;
}




