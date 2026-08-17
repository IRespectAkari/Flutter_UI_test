function updateList(parent, data, render) {
  const children = parent.children;

  data.forEach((item, i) => {
    if (!children[i]) {
      parent.append(render(item));
    } else if (children[i].textContent !== item) {
      children[i].textContent = item;
    }
  });

  while (children.length > data.length) {
    parent.lastChild.remove();
  }
}

const test = $("#test");

function createCostCalc() {
  function costCalc() {
    console.log("costCalc");
  }
  function wheelCalc(e) {
    e.preventDefault();
    const val = Number(e.target.value) + e.deltaY / 100;
    e.target.value = val < 1 ? 1 : val;
    costCalc();
  }

  const levelInput = create("input", null, { type: "number", value: 1, min: 1, events: { wheel: wheelCalc, change: costCalc } });
  const resultSpan = create("span", atk("sword", 1, 1), {id: "atk_value"})
}
append(test, createCostCalc())
