const ioB = $("#io-background");
const io = $("#io");
const closeBtn = $("#close");
const textarea = $("textarea", io);
const b = $("button", io);


closeBtn.addEventListener("click", ()=>{
  [ioB, io].map(e=>e.classList.remove("open"));
  isShowExportData = false;
});


function importSettings(e) {
  const s_data = textarea.value;
  if (!s_data.length) {
    console.log("empty!!");
    return;
  }
  console.log(s_data);

  if (isNotJson(s_data)) {
    console.log("not JSON text!!");
    return;
  }

  const parseData = JSON.parse(s_data);

  console.log(parseData);
  chrome.storage.local.set(parseData);

  window.location.reload();
}

function copy2clipboard(e) {
  console.log(textarea.value);
  console.warn("未完成！！");

}

function allSettingReset(e) {
  if (textarea.value !== "初期化を実行") return;

  if (textarea.value === "初期化を実行") {
    console.log("初期化！");
    // chrome.storage.local.clear();
  }
}

const text = {
  import: {
    explanation: "バックアップしたテキストの内容を貼り付けて、「読み込み」ボタンをクリックしてください。",
    button: "読み込み",
    func: importSettings,
  },
  export: {
    explanation: "下部のボタンをクリックして内容をコピーし、新しいテキストファイルに張り付けてください。",
    button: "クリップボードにコピー",
    func: copy2clipboard,
  },
  allReset: {
    explanation: "すべての設定を初期化します。この操作は取り消せません。初期化しても良い場合は下に「初期化を実行」と入力して下さい。",
    button: "初期化実行",
    func: allSettingReset,
  }
};


/**
* 設定の読み出し、書き出しコード
*
* 書き出しを押下すると、exportテキストエリアに設定のjsonコードが出力されて、手動または自動でクリップボードにコピーされる
* 読み出しでは、テキストエリアが出るので、そこに先ほどの設定を張り付けする
* ok等を押すと、jsonコードを読みこんで現在の設定にしてくれる
*
* 読み出しを押下すると、
*
* ioSetting / 読み込みまたは書き出しがクリックされると、textを基にdivに内容を書き込む
* 閉じるときはそのままで、非表示にするだけ
**/
function ioSetting(e) {
  const type = e.target.id;
  const context = text[type];
  const explanation = $(".explanation", io);
  const btn = $("button:not(#close)", io);

  explanation.textContent = context["explanation"];
  btn.textContent = context["button"];
  [io, ioB].map(e=>e.classList.toggle("open"));
  explanation.style.color = "white";
  btn.style = "";
  textarea.value = "";

  if (type == "allReset") {
    explanation.style.color = "red";
    btn.style.color = "red";
    btn.style.fontWeight = "bold";
    btn.style.backgroundColor = "blue";
  }

  if (type == "export") {
    chrome.storage.local.get(null, (data) => {
      const rawData = JSON.stringify(data, null, "  ");
      const keys = rawData.match(/(?<= +").+(?=":)/g);
      const val = rawData.replace(/\n +/g, " ").replace(new RegExp(`"(${keys.join("|")})"`, "g"), `\n  "$1"`)
      textarea.value = val;
    });
  }

  Object.keys(text).map(e => text[e]["func"]).map(e => btn.removeEventListener("click", e));

  btn.addEventListener("click", context["func"]);

}

$$("#in-ex > button").map(e=>e.addEventListener("click", ioSetting));

