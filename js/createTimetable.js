

// クリック以外から呼び出せるように、外部に作成
// TODO: classの付け外しに変える。そしてcssにこれ用のクラスを作る
function crosshairHighlight(e) {
  const td = e.target;
  const table = e.target.closest("table");
  $$("td", table).map(e=>e.style.backgroundColor="")

  const targetTR = [...td.closest("tr").children];
  const tdIndex = td.cellIndex;

  const targetTDs = $$(`td:nth-child(${tdIndex + 1})`, td.closest("table"));

  ([...targetTR, ...targetTDs])
    .map(e=>e.style.backgroundColor="rgb(255 195 195)")

  td.style.backgroundColor="rgb(255 106 106)"
}

// 空の時間割を作る関数
function createTimetable2() {
  const week = "月火水木金";
  const time = n => `${1}限目`

  const timetable = range(5).map(_=>range(5))

  // // 時間追加
  // timetable.map((e,i)=>e.unshift(i==0 ? "" : i));

  const trs = timetable
    .map((e, n)=>e.map(e=>create("td", null, {classList: `time-${n+1}`, events: { click: crosshairHighlight }})))
    .map(Wrap("tr"));

  // 曜日追加
  trs.unshift(create("tr", week.split("").map(Wrap("td"))));

  // ここに移動！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
  // // 時間追加
  // timetable.map((e,i)=>e.unshift(i==0 ? "" : i));

  const timetable_table = create("table", trs, {id: "timetable"});

  return timetable_table;
}

function createTimetable(timetable) {
  const week = "月火水木金";
  // const transpose = (arr) => arr[0].map((col, i) => arr.map((row) => row[i]));

  timetable = transpose(timetable);

  // 曜日追加
  timetable.unshift(week.split(""));

  // 時間追加
  timetable.map((e,i)=>e.unshift(i==0 ? "" : i));

  const trs = timetable.map(e=>e.map(Wrap("td", {events: { click: crosshairHighlight }}))).map(Wrap("tr"));
  const timetable_table = create("table", trs, {id: "timetable"});

  return timetable_table;
}

// 時間割データを反映させる関数
function applyTimetable(table, events) {
  function registerToTimetable(event) {
    // return e => append($(, table), event)
  }
  events.map(registerToTimetable)
}
