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

const sample = [
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

// 時間割の時間
const periodTime = [
  ["8:50", "10:20"],
  ["10:30", "12:00"],
  ["12:50", "14:20"],
  ["14:30", "16:00"],
  ["16:10", "17:40"],
]

// 空の時間割作成
// append("#container", createEmptyTimetable("timetable"));
append("#container", createEmptyTimetable("timetable", periodTime));

// 空の時間割に授業を登録（表示）
registerAllTimetable(
  "timetable",
  timetable_2_first_csv.split("\n").map(e=>e.split(","))
)

// 上部トグルボタン作成
function timetableToggle(e) {
  // const toggle = toggleGen(
  //   timetable_1_second_csv.split("\n").map(e=>e.split(",")),
  //   timetable_2_first_csv.split("\n").map(e=>e.split(",")),
  // );
  const toggle = [
    timetable_1_second_csv.split("\n").map(e=>e.split(",")),
    timetable_2_first_csv.split("\n").map(e=>e.split(",")),
    sample.split("\n").map(e=>e.split(",")),
  ]

  return function(e) {
    console.log(e)
    clearTimetable("timetable")
    clearCrosshairHighlight("timetable")
    clearLine()
    registerAllTimetable("timetable", toggle[Math.floor(Math.random() * 3)]);
    // registerAllTimetable("timetable", toggle.next().value);
  }
}
// const toggle = create("input", null, {type: "checkbox", event: {type: "change", func: timetableToggle()}})
// const toggleLabel = create("label", [toggle, "時間割切り替え"])
// const header = $("header")
// header.append(toggleLabel);
const toggleBtn = create("Button", "時間割切り替え", { event: {type: "click", func: timetableToggle()}})
append("header", toggleBtn);

append("#container", create("div", [
  create("h1", null, {classList: "courseName"}),
  create("span", null, {classList: "place"}),
  create("span", null, {classList: "teacher"}),
  create("p", null, {classList: "discription"})
], {id: "discriptionDiv"}));


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
    // const d = new Date()
    d.setHours(hours, minutes)
    // setDayOfWeek(d, )
    // d.set
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
