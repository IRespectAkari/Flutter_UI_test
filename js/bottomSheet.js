

function injectBottomSheetStyle() {
  if ($("#bottom-sheet-style")) {
    return;
  }

  const link = create("link", null, {
    id: "bottom-sheet-style",
    rel: "stylesheet",
    // href: "./css/bottomSheet.css",
    href: "./js/bottomSheet.css",
  });

  append("head", link);
}

function BottomSheet(parentSelector) {
  injectBottomSheetStyle();

  const backdrop = create("div", null, {id: "bottom-sheet-backdrop", events: { click: hide }});
  const sheet    = create("div", null, {id: "bottom-sheet"});


  function show(content) {
    sheet.replaceChildren(content);

    backdrop.classList.add("show");
    sheet.classList.add("show");
  }

  function hide() {
    backdrop.classList.remove("show");
    sheet.classList.remove("show");
  }

  append(parentSelector, backdrop);
  append(parentSelector, sheet);

  return { show, hide };
}

