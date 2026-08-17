
function initialize_weekTasks() {
  const weeksTxt_jp = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "日曜日"];
  const weeksTxt_en = ["Mon", "Tue", "Wed", "Tur", "Fri", "Sat", "Sun"];
  const weeks = weeksTxt_jp.map((txt, i) => create("div", [create("span", txt), create("div", null, { classList: ["dayTaskList"]})], { classList: ["day", weeksTxt_en[i]] }))
  const div = $("div#weekTasks")
  weeks.forEach(day => div.appendChild(day));
}
initialize_weekTasks();
