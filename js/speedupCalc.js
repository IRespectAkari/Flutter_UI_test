
function speedupCalcAdapter(e) {
  remove("#speedupResult > *")
  const input = $("#speedupCalc input.hour");
  if (!input.value) return;

  const isMinutes = $("#speedupCalc input.isMinutes");
  const [hour, minutes] = speedupCalc(input.value, isMinutes.checked);

  const list = [];
  let h = hour;
  let m = minutes;
  let zeroPrinted = false;

  const nowH = new Date().getHours();
  const nowM = new Date().getMinutes();

  const LENGTH = 15;

  for (let i = 1; i <= LENGTH; i++) {
    if (zeroPrinted) break;
    if (!h && !m) zeroPrinted = true;

    const expectH = ((nowM + m) >= 60 ? nowH + h + 1 : nowH + h) % 24;
    const expectM = (nowM + m) % 60;

    const tdList = [
      `${i}回目`,
      `残り${h}時間${m}分`,
      `予定時刻${expectH}時${expectM}分`,
      zeroPrinted ? "完了" : "",
    ].map(Wrap("td"));
    const tr = create("tr", tdList);
    list.push(tr);
    [h, m] = speedupCalc(h * 60 + m, true);
  }

  append("#speedupResult", create("table", list));
}

function speedupCalc(hour, isMinutes = false) {
  if (isMinutes) hour = hour / 60;
  // console.log(hour, isMinutes);

  // const maxTimeArray = [0.5, 1, 3, 6, 12, 18, 24, 9999];
  const maxTimeArray = [0.5, 1, 2, 3, 6, 8, 12, 24, 9999];
  const getApplyTime = maxTimeArray.reduce((acc, val) => hour <= val && !acc ? acc = val : acc = acc, 0);
  const inverseRatio = (getApplyTime <= 0.5 ? 0 : maxTimeArray.indexOf(getApplyTime) + 1);

  const nokoriTime = hour * 60 * inverseRatio / 10;
  const nokoriHour = Math.floor(nokoriTime / 60)
  const nokoriMinutes = Math.floor(nokoriTime % 60)
  // console.log(nokoriHour, nokoriMinutes);

  return [nokoriHour, nokoriMinutes];
/*"36,20%",
"24,30％",
"18,40%",
"12,50％",
"6,60%",
"3,70％",
"1,80%",
"0.5,100％",*/
}

$("#speedupCalc button.calc").addEventListener("click", speedupCalcAdapter);
$("#speedupCalc input.hour").addEventListener("change", speedupCalcAdapter);

const input = $("#speedupCalc input.hour");
$("#speedupCalc input.hour").addEventListener("wheel", e=>{
  e.preventDefault();
  const v =  Number(input.value) + e.deltaY / 100;
  if(v < 1) return;

  input.value = v;
  speedupCalcAdapter();
})

