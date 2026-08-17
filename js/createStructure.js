
// section { h2, button.reset, div[span.checkedNum, "/", span.totalNum], div.tasks[label[input, span]...] }
// function createStructure(id, name, taskList, localStorageKey, sortable = true, labelOptions = {}) {
/* createStructureの引数
dataObject {
  id: null,
  name: null,
  taskList: [],
  localStorageKey: null,
  sortable: true,
  labelOptions: {}
}
*/
function createStructure(dataObject) {
  const {
    id = null,
    name = null,
    taskList = [],
    localStorageKey = null,
    sortable = true,
    labelOptions = {},
    type = "checkbox",
    inputName = null,
  } = dataObject;
// console.log(dataObject);
// console.log(id, name, taskList, localStorageKey, sortable, labelOptions);
  const checkedTaskList = taskList.filter(Boolean);

  function sort() {
    const checkedList = $$(`#${id} label`).filter(e => e.firstChild.checked);
    const parent = $(`#${id} div.tasks`);

    $(`#${id} span.checkedNum`).textContent = checkedList.length;
    append(parent, checkedList);
    localStorage.setItem(localStorageKey, checkedList.map(e => e.textContent).join(splitStr));
  }
  function reset(e) {
    const parentSection = e.target.closest("section");
    $$("div.tasks input", parentSection).map(e => e.checked = false);
    localStorage.setItem(localStorageKey, "");
    $(`#${id} span.checkedNum`).textContent = 0;
  }

  const raw = localStorage.getItem(localStorageKey);
  const checkedList = raw ? raw.split(splitStr) : [];

  const h2       = create("h2", name);
  const button   = create("button", "リセット", { events: { click: reset }, classList: "reset" });
  const counter  = create("span", String(checkedList.length), { classList: "checkedNum" });
  const countDiv = create("div", [counter, "/", create("span", checkedTaskList.length, { classList: "totalNum" })]);
  // const taskDiv = create("div", null, { classList: "tasks" });

  //                       abstract_createLIS(txt, isInclude, func, labelOptions = {})
  const createLIS = txt => abstract_createLIS(txt, checkedList.includes(txt), sort, labelOptions);

  const taskElementList = checkedTaskList
    .sort((a,b) => checkedList.includes(a) - checkedList.includes(b))
    .map(createLIS)
  const taskDiv = create("div", taskElementList, { classList: "tasks" });

  return create("section", [h2, button, countDiv, taskDiv], { id: id });
}
// --------------------------------------------------------------------------------------

