
const SIZE = 15;

function saveReview(e) {
  const checkedList = $$("section#review table td > label").filter(e=>e.firstChild.checked);
  console.log(checkedList)
  localStorage
    .setItem("review", checkedList.map(e=>e.firstChild.id).join(splitStr));
}

const subjects = ["プレゼミ", "プロ初歩", "情報リテラシー", "社会学", "情報数学"];

// createRow専用input生成関数
// 科目名と回数を基にinputを生成
function createI_review(subject, i){
  const eventObj = {
    type: "change",
    func: saveReview
  }
  const id = `${subject}_${i}`;// プロ初歩_1
  const isSelected = reviews.includes(id);
  return create("input", null, {
    type: "checkbox",
    checked: isSelected,
    id: id,
    event: eventObj
  });
}

const review = localStorage.getItem("review") || "";
const reviews = review.split(splitStr);

function createRow(subject){
  const subjectTd = create("td", subject);// 左端の科目名td生成

  // const numbers = Array(SIZE).fill(0).map((_,i)=>create("span", i));// label内に置くspanの配列生成
  // const numberLabel = numbers.map(e=>create("label", [createI(subject, e, reviews.includes(e.textContent)), e]))// label配列生成

  const numberTds = Array(SIZE).fill(0)
    .map((_,i)=>i+1)// 1 to 15
    .map(i=>createI_review(subject, i))// label内に置くinputの配列生成
    .map(Wrap("label"))// label配列生成
    .map(Wrap("td"));// td配列生成
  const row = [subjectTd, numberTds].flat();// 一行完成
  return row;
}

const table = $("section#review > table");

subjects
  .map(createRow)
  .map(Wrap("tr"))
  .forEach(e=>table.appendChild(e));


/*
sub1 1 2 3 ... 14 15
sub2 1 2 3 ... 14 15
sub3 1 2 3 ... 14 15
 .
 .
 .
*/