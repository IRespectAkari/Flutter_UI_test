// const tasklist = [
//     ["大学","後期履修登録の確認","履修登録内容と時間割を確認する","2026-09-03","未着手","高"],
//     ["課題","Webデザイン課題を提出","HTML/CSSの課題を完成させて提出する","2026-09-04","進行中","高"],
//     ["大学","データベース講義の予習","次回講義の正規化について教科書を読む","2026-09-02","未着手","中"],
//     ["個人","カレンダーUIを修正","月切り替えとスクロール動作を調整する","2026-09-05","進行中","中"],
//     ["課題","JavaScript演習問題","配布された演習問題を解いて提出用に整理する","2026-09-07","未着手","高"],
//     ["大学","後期ガイダンス参加","後期授業のガイダンスに参加する","2026-09-05","未着手","高"],
//     ["個人","Gitブランチ整理","calendar・timetable・workブランチの状態を整理する","2026-09-08","未着手","低"],
//     ["課題","UXデザインレポート作成","価値シナリオと行動シナリオについてまとめる","2026-09-10","未着手","中"],
//     ["大学","プログラミング講義","講義に参加して課題内容を確認する","2026-09-08","未着手","中"],
//     ["個人","Flutterカレンダーの調査","ListViewとスクロールによる月表示を調べる","2026-09-12","未着手","中"],
//     ["課題","統計データ分析","男女別の都道府県データをグラフ化して考察する","2026-09-14","未着手","高"],
//     ["生活","部屋の整理","机周りとPC周辺の不要なものを片付ける","2026-09-13","未着手","低"],
//     ["個人","タスク一覧UIを改善","タスクの状態・期限・カテゴリを見やすく表示する","2026-09-15","進行中","中"],
//     ["課題","プレゼン資料の確認","発表資料の誤字とレイアウトを確認する","2026-09-16","未着手","高"],
//     ["大学","次回講義の持ち物確認","教科書・ノート・PCなど必要なものを確認する","2026-09-15","未着手","低"],
// ]

const tasklistCSV = [
// カテゴリ,タイトル,詳細,期限,状態,優先度
`
大学,後期履修登録の確認,履修登録内容と時間割を確認する,2026-09-03,未着手,高
課題,Webデザイン課題を提出,HTML/CSSの課題を完成させて提出する,2026-09-04 23:59,進行中,高
大学,データベース講義の予習,次回講義の正規化について教科書を読む,2026-09-02 18:00,未着手,中
個人,カレンダーUIを修正,月切り替えとスクロール動作を調整する,2026-09-05 23:59,進行中,中
課題,JavaScript演習問題,配布された演習問題を解いて提出用に整理する,2026-09-07 23:59,未着手,高
大学,後期ガイダンス参加,後期授業のガイダンスに参加する,2026-09-05 10:30,未着手,高
個人,Gitブランチ整理,calendar・timetable・workブランチの状態を整理する,2026-09-08 23:59,未着手,低
課題,UXデザインレポート作成,価値シナリオと行動シナリオについてまとめる,2026-09-10 23:59,未着手,中
大学,プログラミング講義,講義に参加して課題内容を確認する,2026-09-08 13:00,未着手,中
個人,Flutterカレンダーの調査,ListViewとスクロールによる月表示を調べる,2026-09-12 23:59,未着手,中
課題,統計データ分析,男女別の都道府県データをグラフ化して考察する,2026-09-14 23:59,未着手,高
生活,部屋の整理,机周りとPC周辺の不要なものを片付ける,2026-09-13 15:00,未着手,低
個人,タスク一覧UIを改善,タスクの状態・期限・カテゴリを見やすく表示する,2026-09-15 23:59,進行中,中
課題,プレゼン資料の確認,発表資料の誤字とレイアウトを確認する,2026-09-16 20:00,未着手,高
大学,次回講義の持ち物確認,教科書・ノート・PCなど必要なものを確認する,2026-09-15 21:00,未着手,低`
][0]

const tasklistCSV2 = [
// カテゴリ,タイトル,詳細,期限,状態,優先度
`
数学,数学の宿題（練習問題15〜20）,教科書の練習問題15〜20を解いて提出する,2026-09-05 17:00,未着手,高
英語,英語プレゼン準備用のスライド作成,英語プレゼンで使用するスライドを作成する,2026-09-05 23:59,未着手,中
経済学,レポート提出:日本経済の現状分析,日本経済の現状について分析したレポートを提出する,2026-09-06 12:00,完了,高
プログラミング,アルゴリズム演習課題 提出,指定されたアルゴリズム演習問題を解いて提出する,2026-09-08 23:59,未着手,中
大学,後期履修登録の確認,履修登録内容と時間割を確認する,2026-09-03,未着手,高
課題,Webデザイン課題を提出,HTML/CSSの課題を完成させて提出する,2026-09-04 23:59,進行中,高
大学,データベース講義の予習,次回講義の正規化について教科書を読む,2026-09-02 18:00,未着手,中
個人,カレンダーUIを修正,月切り替えとスクロール動作を調整する,2026-09-05 23:59,進行中,中
課題,JavaScript演習問題,配布された演習問題を解いて提出用に整理する,2026-09-07 23:59,未着手,高
大学,後期ガイダンス参加,後期授業のガイダンスに参加する,2026-09-05 10:30,未着手,高
個人,Gitブランチ整理,calendar・timetable・workブランチの状態を整理する,2026-09-08 23:59,未着手,低
課題,UXデザインレポート作成,価値シナリオと行動シナリオについてまとめる,2026-09-10 23:59,未着手,中
大学,プログラミング講義,講義に参加して課題内容を確認する,2026-09-08 13:00,未着手,中
個人,Flutterカレンダーの調査,ListViewとスクロールによる月表示を調べる,2026-09-12 23:59,未着手,中
課題,統計データ分析,男女別の都道府県データをグラフ化して考察する,2026-09-14 23:59,未着手,高
生活,部屋の整理,机周りとPC周辺の不要なものを片付ける,2026-09-13 15:00,未着手,低
個人,タスク一覧UIを改善,タスクの状態・期限・カテゴリを見やすく表示する,2026-09-15 23:59,進行中,中
課題,プレゼン資料の確認,発表資料の誤字とレイアウトを確認する,2026-09-16 20:00,未着手,高
大学,次回講義の持ち物確認,教科書・ノート・PCなど必要なものを確認する,2026-09-15 21:00,未着手,低`
][0]

const tasklist = tasklistCSV2.trim().split("\n").map(s=>s.split(","));

const categoryColorCSV = [
// カテゴリ名, 色
`
カテゴリ名,色
数学,blue
英語,green
経済学,yellow
プログラミング,purple
大学,black
課題,red
個人,orange
生活,teal
`][0];

const priorityColorCSV = [
// カテゴリ名, 色
`高,red
中,orange
低,blue`][0];

const categoryColor = Object.fromEntries(categoryColorCSV.trim().split("\n").map(s=>s.split(",")));
const priorityColor = Object.fromEntries(priorityColorCSV.trim().split("\n").map(s=>s.split(",")));

const column = {
  jp: ["カテゴリ","タイトル","詳細","期限","状態","優先度"],
  en: ["category","title","info","limit","status","priority"]
}

// タイプと値を渡すと、該当するレコードを全て返す関数
function searchAll(type, item) {
  const index = column["en"].indexOf(type);
  return tasklist.filter(row => row[index] === item);
}


function updateTasklist(e) {
  e.stopPropagation();

  const elm = e.target;
  const value = elm.textContent;
  const type = elm.className;
  const records = searchAll(type, value);

  clearTasklist();
  append("#tasklist", createTasklist(records));
}

// --------------------------------------------------------------------------
function filterByDate(task, mode) {
  const limit = new Date(task[3]);

  const now = new Date();

  // 今日 0:00
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  // 明日 0:00
  const tomorrowStart = new Date(todayStart);
  tomorrowStart.setDate(tomorrowStart.getDate() + 1);

  // 今週の月曜日 0:00
  const weekStart = new Date(todayStart);
  const day = weekStart.getDay();
  const diff = day === 0 ? 6 : day - 1;
  weekStart.setDate(weekStart.getDate() - diff);

  // 来週の月曜日 0:00
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);


  switch (mode) {
    case "all":
      return true;
    case "today":
      return limit >= todayStart && limit < tomorrowStart;
    case "week":
      return limit >= weekStart && limit < weekEnd;
  }
}
// --------------------------------------------------------------------------

function tasklistTypeFilter() {
  clearTasklist();

  const mode = $$(`input[name="type"]`).filter(e=>e.checked)[0].value;
  const records = tasklist.filter(task => filterByDate(task, mode));
  append("#tasklist", createTasklist(records));

  return;

  switch(value){
    case "today":
      append("#tasklist", createTasklist(tasklist.filter(task => filterByDate(task, "today"))));
      break;
    case "week":
      append("#tasklist", createTasklist(tasklist.filter(task => filterByDate(task, "week"))));
      break;
    case "all":
    default:
      append("#tasklist", createTasklist(tasklist));
      break;
  }
}



// 期限の状態を日時から変換
function getRemainingTime(limit) {
  const now = new Date();
  const deadline = new Date(limit);

  const diff = deadline - now;

  // 期限切れ
  if (diff <= 0) {
    return "期限切れ";
  }

  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;

  // 1日以上
  if (diff >= day) {
    return `あと${Math.floor(diff / day)}日`;
  }

  // 1日未満
  const hours = Math.floor(diff / hour);
  const minutes = Math.floor((diff % hour) / minute);

  if (hours > 0) {
    return `あと${hours}時間${minutes}分`;
  }

  return `あと${minutes}分`;
}

const information = BottomSheet("#container");

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

function hideInfo() {
  information.hide();
}


function createTasklist(tasklist) {
  const list = tasklist
    .toSorted(([, , , limit], [, , , limit2]) => new Date(limit) - new Date(limit2))
    .map(([category,title,info,limit,status,priority]) => [
      create("input", status, {type: "checkbox"}),
      create("div", [
        create("div", [
          // create("div", category, {classList: "category", dataset: {bgcolor: getCategoryColor(category)}}),
          create("div", category, {classList: "category", style: {"--color": categoryColor[category]}, events: {click: updateTasklist} }),
          create("div", priority, {classList: "priority", style: {"--color": priorityColor[priority]}, events: {click: updateTasklist} }),
        ], {classList: "categoryAndPriority"}),
        create("span", title, {classList: "title"}),
        create("span", ["🕒期限：", getRemainingTime(limit)], {classList: "limit"}),
      ], {classList: "data", events: {click: showInfo}})
    ])
    .map(Wrap("div", {classList: "task"}))

// console.log(list)

  return list;
}

function clearTasklist() {
  remove("#tasklist > .task");
}


// const types = [...Object.keys(categoryColor), ...Object.keys(priorityColor)].map(Wrap("span", {classList: "type"}));
const types = Object.entries({
  all: "全て",
  today: "今日",
  week: "今週",
}).map(([key, val])=>[create("input", val, {type: "radio", name: "type", value: key, events: {click: tasklistTypeFilter}}), val])
.map(([child, val]) => create("label", [child, val], {classList: "type"}))
const typeSelector = create("div", types, {id: "typeSelector"});
append("#container", typeSelector);
$(`[value="all"]`).checked = "true";

const tasklistDiv = create("div", null, {id: "tasklist"});
append("#container", tasklistDiv);

append("#tasklist", createTasklist(tasklist));



// append("#container", createAddTaskBtn());
// append("#container", create("input", null, {type: "checkbox"}));
