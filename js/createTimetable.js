// 1年後期
const timetable_1_second = [
  /* 月 */["", "", '消費者行動論', '社会学', ""],
  /* 火 */["", '宗教学', '情報リテラシー演習２', "", ""],
  /* 水 */['キャリアデザイン2', '情報ネットワーク入門', "", '情報数学１', 'インターンシップ実習'],
  /* 木 */["", 'プレゼミ2（競プロ）', "", "", 'Webデザイン'],
  /* 金 */['プログラミング初歩Ⅱ', "", '情報倫理', "", ""],
// 2年前期
  /* 月 */["統計学入門", "", "", "プログラミング実践1", "プログラミング実践1"],
  /* 火 */["アプリ共同開発実践", "初級韓国語", "", "データベース論", "スイッチング技術"],
  /* 水 */["ビジネスプログラミング", "", "情報処理技術演習1", "経営情報学1", "情報数学2"],
  /* 木 */["", "", "基礎ゼミ", "", ""],
  /* 金 */["", "経済学", "ネットワークアプリケーション構築", "", "法学"],
];

// 1年後期
const timetable_1_second_csv = [
// 曜日,時限,科目名
`月,3,消費者行動論
月,4,社会学
火,2,宗教学
火,3,情報リテラシー演習２
水,1,キャリアデザイン2
水,2,情報ネットワーク入門
水,4,情報数学１
水,5,インターンシップ実習
木,2,プレゼミ2（競プロ）
木,5,Webデザイン
金,1,プログラミング初歩Ⅱ
金,3,情報倫理`][0];

// 2年前期
const timetable_2_first_csv = [
// 曜日,時限,科目名
`月,1,統計学入門
月,4,プログラミング実践1
月,5,プログラミング実践1
火,1,アプリ共同開発実践
火,2,初級韓国語
火,4,データベース論
火,5,スイッチング技術
水,1,ビジネスプログラミング
水,3,情報処理技術演習1
水,4,経営情報学1
水,5,情報数学2
木,3,基礎ゼミ
金,2,経済学
金,3,ネットワークアプリケーション構築
金,5,法学`][0];

// サンプルデータ
const sampleCSV = [
// 曜日,時限,講義名,講義室,先生名,メモ
`月,1,統計学入門,3号館 301室,佐藤 健一,出席カードあり・教科書持参
月,4,プログラミング実践1,メディアセンター 実習室A,田中 裕子,演習課題は次回までに提出
月,5,プログラミング実践1,メディアセンター 実習室A,田中 裕子,連続講義（4限の続き）
火,1,アプリ共同開発実践,2号館 PC室2,鈴木 誠,チーム分け発表・GitHub要準備
火,2,初級韓国語,1号館 105室,金 敏智,小テストの頻度高め
火,4,データベース論,3号館 204室,高橋 隆,SQLの基本復習をしておく
火,5,スイッチング技術,4号館 ネットワーク演習室,渡辺 浩,実機（Cisco）を使った実習
水,1,ビジネスプログラミング,2号館 PC室1,伊藤 恵子,レポート課題あり
水,3,情報処理技術演習1,メディアセンター 実習室B,中村 昭夫,タイピング練習あり
水,4,経営情報学1,1号館 202室,小林 直樹,ケーススタディ中心
水,5,情報数学2,3号館 102室,加藤 洋子,グラフ理論の小テスト注意
木,3,基礎ゼミ,研究棟 会議室3,山本 哲也,プレゼン準備期間
金,2,経済学,1号館 大講義室,松本 圭介,マクロ経済の基礎・出席重視
金,3,ネットワークアプリケーション構築,2号館 PC室2,井上 健太郎,API連携のデモあり
金,5,法学,1号館 303室,清水 美紀,六法（またはスマホで条文）持参`][0];

const sampleCSV2 = [
// 曜日,時限,講義名,講義室,先生名,メモ
`月,3,消費者行動論,1号館 201室,山田 恒一,消費者心理と購買行動について学ぶ・資料配布あり
月,4,社会学,3号館 203室,佐々木 美香,社会構造と現代社会の課題を扱う・出席重視
火,2,宗教学,1号館 大講義室,中川 恒一,宗教の基礎概念と社会との関係を学ぶ・小レポートあり
火,3,情報リテラシー演習２,2号館 PC室1,吉田 拓也,Officeソフトを使った実習中心・課題提出あり
水,1,キャリアデザイン2,1号館 105室,山口 智子,就職活動やキャリア形成について考える・自己分析課題あり
水,2,情報ネットワーク入門,4号館 ネットワーク演習室,森田 和也,ネットワークの基礎と通信の仕組みを学ぶ・実習あり
水,4,情報数学１,3号館 102室,石井 恒一,集合と論理・確率など情報系の基礎数学を扱う・小テストあり
水,5,インターンシップ実習,キャリア支援室,藤田 直子,インターンシップに向けた事前指導・活動報告書の提出あり
木,2,プレゼミ2（競プロ）,2号館 PC室2,高田 翔太,プログラミングコンテスト形式の演習・C++推奨
木,5,Webデザイン,メディアセンター 実習室A,小川 里奈,HTMLとCSSを使ったWeb制作・制作課題あり
金,1,プログラミング初歩Ⅱ,2号館 PC室1,岡本 恒一,プログラミングの基礎から応用演習まで扱う・課題提出あり
金,3,情報倫理,1号館 303室,西村 真紀,個人情報や著作権など情報社会の倫理を学ぶ・レポート課題あり`][0];

const sample = sampleCSV.trim().split("\n").map(s=>s.split(","));
const sample2 = sampleCSV2.trim().split("\n").map(s=>s.split(","));

// タイプと値を渡すと、該当するレコードを全て返す関数
function searchBy(courseName) {
  // const index = column["en"].indexOf(type);
  return sample.find(row => row[2] === courseName) || sample2.find(row => row[2] === courseName);
}

// ------------------------------------------------

// 時間割の時間
const periodTime = [
  ["8:50", "10:20"],
  ["10:30", "12:00"],
  ["12:50", "14:20"],
  ["14:30", "16:00"],
  ["16:10", "17:40"],
]

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
  const week = "月火水木金".split("").map(Wrap("th", {classList: "day"}));
  week.unshift(create("th", null, {classList: ["day", "time"]}));

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
  // const [place, teacher, some] = others;
  // const classNames = ["courseName", "place", "teacher", "discription"]
  // const courseInfo = [course, place, teacher].map((e,i)=>create("span", e, {classList: classNames[i]}));
  const courseInfo = create("span", course, {classList: "courseName"});
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
  const courseName = $(".courseName", parentTD).textContent

  const record = searchBy(courseName) || [];
  const [day, time, course, place, teacher, some] = record;
  const info = [day, time, place, teacher, some];
  const column = {
    jp: ["曜日", "時限", "場所", "担当", "備考"],
    en: ["course-day", "course-time", "course-place", "course-teacher", "course-some"],
  };

  const data = record
    .map((e,n) => [
      create("th", column["jp"][n], {id: column["en"][n]}),
      create("td", e)
    ])
    .map(Wrap("tr"))
  data.unshift(create("h1", course, {id: "courseName"}))
  const table = create("table", data);
  const div = create("div", data, {id: "discriptionDiv"})

  courseInformation.show(div);
  return;

  const discriptionDiv = create("div", [
    create("h1", course, {classList: "courseName"}),
    create("span", place, {classList: "place"}),
    create("span", teacher, {classList: "teacher"}),
    create("p", some, {classList: "discription"})
  ], {id: "discriptionDiv"})

  courseInformation.show(discriptionDiv);
  return;

//   const parent = $("div.course", parentTD);
//   const [course, place, teacher, some] = [...parent.children].map(e=>e.textContent);
// // console.log(course, place, teacher, some)
//   const discriptionDiv = create("div", [
//     create("h1", course, {classList: "courseName"}),
//     create("span", place, {classList: "place"}),
//     create("span", teacher, {classList: "teacher"}),
//     create("p", some, {classList: "discription"})
//   ], {id: "discriptionDiv"})

//   courseInformation.show(discriptionDiv);
}
// ----------------------------------------------------------------------------------------------
function showInfo(e) {
  const taskDiv = e.target.closest("div.task");
  const title = $(".title", taskDiv).textContent;
  const info = tasklist.find(e=>e[1] == title);

  const data = info
    .map((e,n) => [
      create("th", column["jp"][n], {id: column["en"][n]}),
      create("td", e)
    ])
    .map(Wrap("tr"))
  const table = create("table", data);

  information.show(table);
}
// ----------------------------------------------------------------------------------------------

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
