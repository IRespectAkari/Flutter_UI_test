


function createCalendar(month) {

  





  return create("table", days, {id: "calendar"})
}























// クリック以外から呼び出せるように、外部に作成
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
  $$(`#${tableId} td`).map(td=>td.classList.remove("marker"));
  $(`#${tableId} #target-marker`)?.removeAttribute("id");
}

// 空の時間割を作る関数
function createEmptyTimetable(id) {
  const week = "月火水木金".split("").map(Wrap("td", {classList: "day"}))
  const time = range(6).map(n => create("td", n==0 ? "" : n, {classList: "time"}));

  const table = range(5).map(_=>range(5))

  const trs = table
    .map((e, time) => {
      return e.map((_, day) => create("td", null, {classList: [`time-${time + 1}`, `day-${day}`], events: { click: crosshairHighlight }}))
    })
    .map(Wrap("tr"));

  // 曜日追加
  trs.unshift(create("tr", week));

  // 時間追加
  trs.map((e,i)=>e.firstChild.before(time[i]));


  const timetable_table = create("table", trs, {id: id, classList: "timetable"});

  return timetable_table;
}

// 1つの時間割データを反映させる関数
function registerTimetable(tableId, day, time, course) {
  append(
    $(`#${tableId} td.day-${day}.time-${time}`),
    create("span", course, {classList: "course"})
  )
}

// 授業データ配列を変換しつつ、反映させる関数
// [曜日,時限,科目名] => [曜日の数字, 時限, 科目名]
function registerAllTimetable(tableId, array) {
  array
    .map(([day, time, course]) => ["月火水木金土".indexOf(day), time, course])
    .map(([day, time, course]) => registerTimetable(tableId, day, time, course));
}

// 時間割データ削除
function clearTimetable(tableId) {
  $$(`#${tableId} td > *`).map(e=>e.remove());
}