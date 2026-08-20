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

// 1年後期
const timetable_1_second_csv =
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
金,3,情報倫理`;

// 2年前期
const timetable_2_first_csv =
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
金,5,法学`;

// 空の時間割作成
append("#container", createEmptyTimetable("timetable"));

// 空の時間割に授業を登録（表示）
registerAllTimetable(
  "timetable",
  timetable_2_first_csv.split("\n").map(e=>e.split(","))
)

// 上部トグルボタン作成
function timetableToggle(e) {
  const toggle = toggleGen(
    timetable_1_second_csv.split("\n").map(e=>e.split(",")),
    timetable_2_first_csv.split("\n").map(e=>e.split(","))
  );

  return function(e) {
    clearTimetable("timetable")
    registerAllTimetable("timetable", toggle.next().value);
  }
}
const toggle = create("input", null, {type: "checkbox", event: {type: "change", func: timetableToggle()}})
const toggleLabel = create("label", [toggle, "時間割切り替え"])
const header = $("header")
header.append(toggleLabel)

