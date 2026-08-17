
/** #createTable(data, dataTitle)
* rawData  @String  splitLine and splitStr of Default assume csv(line break and comma).
* title    @String  this is table caption.
*
* rawData's Example
* ```csv
* a,sss
* b,ccc
* ```
*/
function createTable(rawData, title, tableOptions = {}, splitStr = ",", splitLine = "\n") {
  const data = rawData.split(splitLine).filter(Boolean).map(e=>e.split(splitStr));
  // [["a","sss"], ["b", "ccc"]]

  const tdlist = data.map(rowData => rowData.map(Wrap("td")));
  const rows = tdlist.map(Wrap("tr"));
  if (title) rows.push(create("caption", title));

  return create("table", rows, tableOptions);
}
