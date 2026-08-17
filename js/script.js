// 1年後期
const timetable_1_second = [
  /* 月 */["", "", '消費者行動論', '社会学', ""],
  /* 火 */["", '宗教学', '情報リテラシー演習２', "", ""],
  /* 水 */['キャリアデザイン2', '情報ネットワーク入門', "", '情報数学１', 'インターンシップ実習'],
  /* 木 */["", 'プレゼミ2（競プロ）', "", "", 'Webデザイン'],
  /* 金 */['プログラミング初歩Ⅱ', "", '情報倫理', "", ""]
]
// 2年前期
const timetable_2_first = [
  /* 月 */["統計学入門", "", "", "プログラミング実践1", "プログラミング実践1"],
  /* 火 */["アプリ共同開発実践", "初級韓国語", "", "データベース論", "スイッチング技術"],
  /* 水 */["ビジネスプログラミング", "", "情報処理技術演習1", "経営情報学1", "情報数学2"],
  /* 木 */["", "", "基礎ゼミ", "", ""],
  /* 金 */["", "経済学", "ネットワークアプリケーション構築", "", "法学"],
];
// 上部トグルボタン作成
function timetableToggle(e) {
  const toggle = toggleGen(timetable_1_second, timetable_2_first);

  return function(e) {
    $("table#timetable").remove();
    timetable = toggle.next().value;
    $("#container").append(createTimetable(timetable));
  }
}
const toggle = create("input", null, {type: "checkbox", event: {type: "change", func: timetableToggle()}})
const toggleLabel = create("label", [toggle, "時間割切り替え"])
const header = $("header")
header.append(toggleLabel)

// 時間割作成および追加
append(`#container`, createTimetable(timetable_2_first));

