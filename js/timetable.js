
// 上部選択ボタン生成
const data = [
  ["前期", sample],
  ["後期", sample2]
];
function updateTimetable() {
  const mode = $$(`input[name="timetable"]`).filter(e=>e.checked)[0].value;
  const timetableData = data.find(d => d[0] == mode)[1];
  console.log(mode, timetableData)

  clearTimetable("timetable");
  clearCrosshairHighlight("timetable");
  clearLine();
  registerAllTimetable("timetable", timetableData);
}
const radios = data
  .map(([txt, val]) => [
    create("input", null, {type: "radio", name: "timetable", value: txt, events: {change: updateTimetable}}),
    create("span", txt),
  ])
  // .map(txt => [create("input", null, {type: "radio", name: "timetable", value: txt, events: {change: updateTimetable}}), create("span", txt)])
  .map(Wrap("label"))
const timetableSelector = create("div", radios, {id: "timetableSelector"})
append("#container", timetableSelector);
$(`[value="前期"]`).checked = "true";


// 空の時間割作成
append("#container", createEmptyTimetable("timetable", periodTime));

// 空の時間割に授業を登録（表示）
registerAllTimetable(
  "timetable",
  sample
  // sample.split("\n").map(e=>e.split(","))
)

// 上部トグルボタン作成
function timetableToggle(e) {
  const toggle = [
    sample,
    sample2,
    // sample.split("\n").map(e=>e.split(",")),
    // sample2.split("\n").map(e=>e.split(",")),
  ]

  return function(e) {
    console.log(e)
    clearTimetable("timetable")
    clearCrosshairHighlight("timetable")
    clearLine()
    registerAllTimetable("timetable", toggle[Math.floor(Math.random() * toggle.length)]);
    // registerAllTimetable("timetable", toggle.next().value);
  }
}
const toggleBtn = create("Button", "時間割切り替え", { event: {type: "click", func: timetableToggle()}})
append("header", toggleBtn);

// append("#container", create("div", [
//   create("h1", null, {classList: "courseName"}),
//   create("span", null, {classList: "place"}),
//   create("span", null, {classList: "teacher"}),
//   create("p", null, {classList: "discription"})
// ], {id: "discriptionDiv"}));


// -----------------------------------------------------------------------------------------------------------------------
(()=>{

// AIモードを活用して作成
const d = new Date();
// d.setHours(8, 50)

/**
 * Dateオブジェクトを指定した曜日に変更する（同じ週の中で移動）
 * @param {Date} date - 変更したいDateオブジェクト
 * @param {number} targetDayIndex - 設定したい曜日 (0:日, 1:月, ..., 6:土)
 */
function setDayOfWeek(date, targetDayIndex) {
  const currentDayIndex = date.getDay(); // 現在の曜日 (0~6)

  // 目標の曜日との差分（日数）を計算
  const distance = targetDayIndex - currentDayIndex;

  // 日付を進める（または戻す）
  date.setDate(date.getDate() + distance);
}

/**
 * ホイールで10分単位で増減するdiv要素を出力する関数
 * @param {string} initialTime - 初期時刻（例: "08:50" や "8:50"）
 * @returns {HTMLElement} 生成されたdiv要素
 */
function createTimeWheelPicker(initialTime) {
  // 初期値を「時」と「分」に分解して数値化
  let [hours, minutes] = initialTime.split(':').map(Number);

  // 表示を「00:00」の形式に整えるヘルパー
  const formatTime = (h, m) => {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  };

  // 1. 最初の一文字（初期表示）を入れたdivを作成
  const timeDiv = create('div', formatTime(hours, minutes), {id: "timeDiv"});

  // スタイルの調整（任意：スクロール時に画面がガタつかないようにする）
  // timeDiv.style.display = 'inline-block';
  // timeDiv.style.cursor = 'ns-resize'; // 上下矢印のカーソル

  // 2. マウスホイールイベントを登録
  timeDiv.addEventListener('wheel', (e) => {
    // ブラウザ自体のスクロールを止める
    e.preventDefault();

    // e.deltaY がマイナスなら上スクロール（時間を進める）、プラスなら下（時間を戻す）
    if (e.deltaY < 0) {
      minutes += 10;
    } else {
      minutes -= 10;
    }

    // 分の繰り上がり・繰り下がり処理
    if (minutes >= 60) {
      minutes = 0;
      hours = (hours + 1) % 24; // 23時の次は0時
    } else if (minutes < 0) {
      minutes = 50;
      hours = (hours - 1 + 24) % 24; // 0時の前は23時
    }

    // 3. 画面の文字を更新
    timeDiv.textContent = formatTime(hours, minutes);

    // 4. dを更新して、crosshairAndLineAdapterの実行
    d.setHours(hours, minutes)
    crosshairAndLineAdapter(d, periodTime)
  }, { passive: false }); // preventDefaultを動かすために必要

  return timeDiv;
}

/**
 * ホイールで曜日をローテーションするdiv要素を出力する関数
 * @param {string} initialDay - 初期曜日（例: "月"）
 * @returns {HTMLElement} 生成されたdiv要素
 */
function createDayWheelPicker(initialDay) {
  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];

  // 初期値のインデックスを探す（見つからない場合は0 = 日曜日）
  let currentIndex = dayNames.indexOf(initialDay);
  if (currentIndex === -1) currentIndex = 0;

  // 1. 初期表示の曜日を入れたdivを作成
  const dayDiv = create('div', dayNames[currentIndex], {id: "dayDiv"});

  // スタイルの調整
  dayDiv.style.display = 'inline-block';
  dayDiv.style.cursor = 'ns-resize'; // 上下矢印のカーソル

  // 2. マウスホイールイベントを登録
  dayDiv.addEventListener('wheel', (e) => {
    // ブラウザ自体のスクロールを止める
    e.preventDefault();

    // e.deltaY がマイナスなら上スクロール（次の曜日）、プラスなら下（前の曜日）
    if (e.deltaY < 0) {
      // 6の次は0に戻るループ処理
      currentIndex = (currentIndex + 1) % 7;
    } else {
      // 0の前は6に戻るループ処理
      currentIndex = (currentIndex - 1 + 7) % 7;
    }

    // 3. 画面の文字を更新
    dayDiv.textContent = dayNames[currentIndex];

    // 4. dを更新して、crosshairAndLineAdapterの実行
    console.log(currentIndex + 1);
    setDayOfWeek(d, currentIndex + 1);
    crosshairAndLineAdapter(d, periodTime)
  }, { passive: false });

  return dayDiv;
}

// -----------------------------------------------------------------------------------------------------------------------

// 関数を実行して要素を作る
const myTimePicker = createTimeWheelPicker("8:50");
// 「月」を初期値として要素を作成
const myDayPicker = createDayWheelPicker("月");

// 画面の好きな場所（例: body）に追加する
append("body", create("div", null, {id: "test1"}));
append("#test1", myTimePicker);
append("#test1", myDayPicker);

crosshairAndLineAdapter(d, periodTime)
})()
