
function save_web(e) {
  // const list = e.target.closest(".tasks")
  const list = $$("#webLearning .tasks label").filter(e=>e.firstChild.checked).map(e=>e.textContent)
  localStorage
    .setItem("webLearning", list.join(splitStr));
}

const createI_web = isChecked => create("input", null, { type: "checkbox" , checked: isChecked, event: { type: "click", func: save_web } });

const webLearning = localStorage.getItem("webLearning") || "";
const webLearnings = webLearning.split(splitStr);

const isIncludes_web = txt => webLearnings.includes(txt);

const list = Array(5).fill(0)
  .map((_,i) => `${i+1}回目 学習`)
  .map(Wrap("span"))
  .map(e => [createI_web(isIncludes_web(e.textContent)), e])
  .map(Wrap("label"));

const wl = $("#webLearning .tasks");
list.forEach(e => wl.appendChild(e));

function reset_web(e) {
  $$("#webLearning input").forEach(e => e.checked = false);
  save_web();
}
$("#webLearning .reset").addEventListener("click", reset_web);