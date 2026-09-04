// クリック以外から呼び出せるように、外部に作成
function crosshairAndLineAdapter(date, periodTimeArray) {
  const createTimeObj = timeTxt => {const d = new Date(); d.setHours(...(timeTxt.split(":"))); return d;}

  const START = createTimeObj("8:50");
  const END   = createTimeObj("17:40");

  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  });
  clickEvent.timeTest = true;

// console.log(getPeriodIndex(date, periodTimeArray))
  const period = getPeriodIndex(date, periodTimeArray) + 1;
  const day = date.getDay() - 2;
  const timeClass = `time-${period}`
  const dayClass  = `day-${day}`
// console.log(timeClass, dayClass)

  const id = "timetable";
// console.log(`#${id} td.${timeClass}.${dayClass}`)
  if(
    !(period < 1 || 5 < period || day < 0 || 4 < day)
  ){
// console.log("t")
    $(`#${id} td.${timeClass}.${dayClass}`)?.dispatchEvent(clickEvent)
    // console.log(START, END);
    // drawLineByTime(id, date, START, END);
  }
  drawLineByTime(id, date, START, END);
}

// 何限目かを返す
function getPeriodIndex(targetDate, periodTimeArray) {
  // 1. 引数のDateから「時:分」を取り出し、比較しやすい数値（分換算）にする
  const targetMinutes = targetDate.getHours() * 60 + targetDate.getMinutes();

  // 2. 配列の各時間帯とループで比較する
  const convertToTime = time => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }

  const result = periodTimeArray
    .map(([start, end])=>[
      convertToTime(start),
      convertToTime(end)
    ])
    .findIndex(([startMinutes, endMinutes], i) => targetMinutes >= startMinutes && targetMinutes <= endMinutes)
  // console.log("getPeriodIndex", result)

  return result;

}


/*
 * クリックされたtd及びその上下左右全てをハイライト
 * クリックされたtdは濃くハイライト
 * 別の場所がクリックされたら一度ハイライトを全て解除する
 */// ハイライト付与
function crosshairHighlight(e) {
  const td = e.target.closest("td");
  const table = e.target.closest("table");

  // 同じtdなら何もしない
  if(td.matches("#target-marker")) return;

  // 初期化
  clearCrosshairHighlight(table.id);

  // 対象検索
  const targetTR = [...td.closest("tr").children];
  const targetTDs = $$(`td:nth-child(${td.cellIndex + 1})`, td.closest("table"));

  // id, class付与
  ([...targetTR, ...targetTDs]).map(e=>e.classList.add("marker"))
  td.id = "target-marker";
}

// ハイライト解除
function clearCrosshairHighlight(tableId) {
  $$(`#${tableId} :is(td,th)`).map(td=>td.classList.remove("marker"));
  $(`#${tableId} #target-marker`)?.removeAttribute("id");
}

// 空の時間割を作る関数
function createEmptyTimetable(id, periodTimeArray) {
  const week = "月火水木金".split("").map(Wrap("td", {classList: "day"}));
  week.unshift(create("td", null, {classList: ["day", "time"]}));

  const time = range(5, 1)// 1, 2, 3, 4, 5
    .map((n, i) => [
      create("span", periodTimeArray[i][0], {classList: `start-${n}`}),
      create("span", n),
      create("span", periodTimeArray[i][1], {classList: `end-${n}`})
    ])
    .map(Wrap("div"))
    .map(Wrap("th", {classList: "time"}));

  const table = range(5).map(_=>range(5));

  const tdClickAdapter = e => {
    crosshairHighlight(e);
    showDiscription(e);
  };

  const trs = table
    .map((e, time) => {
      return e.map((_, day) => create("td", null, {classList: [`time-${time + 1}`, `day-${day}`], events: { click: tdClickAdapter }}))
    })
    .map(Wrap("tr"));

  // 曜日追加
  const thead = create("thead", create("tr", week));

  // 時間追加
  trs.map((e,i)=>e.firstChild.before(time[i]));
  const tbody = create("tbody", trs)


  const timetable_table = create("table", [thead, tbody], {id: id, classList: "timetable"});

  const d = new Date()
  d.setHours(8)
  crosshairAndLineAdapter(d, periodTimeArray)

  return timetable_table;
}

// 1つの時間割データを反映させる関数
function registerTimetable(tableId, day, time, course, others) {
  const [place, teacher, some] = others;
  const classNames = ["courseName", "place", "teacher", "discription"]
  const courseInfo = [course, place, teacher].map((e,i)=>create("span", e, {classList: classNames[i]}));
  append(
    $(`#${tableId} td.day-${day}.time-${time}`),
    create("div", courseInfo, {classList: "course"})
  );
}

const courseInformation = BottomSheet("#container");

function showDiscription(e) {
  const parentTD = e.target.closest("td:has(div.course)");
  if(!parentTD) {
    courseInformation.hide();
    return;
  }
if(e.timeTest) return;
  const parent = $("div.course", parentTD);
  const [course, place, teacher, some] = [...parent.children].map(e=>e.textContent);
console.log(course, place, teacher, some)
  const discriptionDiv = create("div", [
    create("h1", course, {classList: "courseName"}),
    create("span", place, {classList: "place"}),
    create("span", teacher, {classList: "teacher"}),
    create("p", some, {classList: "discription"})
  ], {id: "discriptionDiv"})

  courseInformation.show(discriptionDiv);
}


// 授業データ配列を変換しつつ、反映させる関数
// [曜日,時限,科目名] => [曜日の数字, 時限, 科目名]
function registerAllTimetable(tableId, array) {
  array
    .map(([day, time, course, ...others]) => ["月火水木金土".indexOf(day), time, course, others])
    .map(([day, time, course, others]) => registerTimetable(tableId, day, time, course, others));
}

// 時間割データ削除
function clearTimetable(tableId) {
  $$(`#${tableId} td > *`).map(e=>e.remove());
}


// table上に引数の時刻のラインを引く
function drawLineByTime(tableId, targetHour, startTime, endTime) {
  // 赤い線の位置を更新
  let line = $("#time-line");
  if (!line) {
    line = create("div", null, {id: "time-line"});
    append("body", line);
  }

  const totalHours = endTime - startTime;

  const targetMinutes = targetHour.getHours() * 60 + targetHour.getMinutes();
  const startMinutes = startTime.getHours() * 60 + startTime.getMinutes();
  const endMinutes = endTime.getHours() * 60 + endTime.getMinutes();
  const totalMinutes = endMinutes - startMinutes;

  // console.log(targetMinutes < startMinutes || targetMinutes > endMinutes)
  if (targetMinutes < startMinutes || targetMinutes > endMinutes) {
    clearLine()
    // console.error(`時間は\n${startTime}から\n${endTime}の間で指定してください\n`, targetHour, startTime, endTime);
    return;
  }
if(!$(`#${tableId}`)) return;
  const tableTopOffset = $(`#${tableId}`).offsetTop;
  // console.log(tableTopOffset)

  // 【修正ポイント1】テーブル全体ではなく、中身（tbody）を基準にする
  const tbody = $(`#${tableId} tbody`);
  const tbodyHeight = tbody.offsetHeight;
  // console.log(tbody)
  // console.log("tbodyHeight", tbodyHeight)

  // 【修正ポイント2】親要素（container）の「一番上」から「tbodyの一番上」までのズレ（ヘッダー等の高さ）を取得
  const tbodyTopOffset = tbody.offsetTop;
  // console.log("tbodyTopOffset",tbodyTopOffset)

  // 割合の計算
  const currentProgress = (targetMinutes - startMinutes) / totalMinutes;
  // console.log("currentProgress",targetHour, startTime, totalHours)
  // console.log("currentProgress",currentProgress)

  // 【修正ポイント3】tbody内の位置に、ヘッダー分のズレ（offsetTop）を足す
  const topPosition = (tbodyHeight * currentProgress) + tbodyTopOffset;
  // console.log("tbodyHeight * currentProgress", tbodyHeight * currentProgress)
  // console.log("topPosition", topPosition)
  // console.log("topPosition + 120", topPosition + 120)


  line.style.top = topPosition + tableTopOffset - 1 + 'px';
  line.style.display = 'block';
}
/*
drawLineByTime("timetable", 18, 9, 18)
*/

// ライン解除
function clearLine() {
  $("#time-line").style.display = "none";
}
// drawLineByTime("timetable", 18, 9, 18)
