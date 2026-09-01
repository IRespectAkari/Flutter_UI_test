

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

  // link.id = "bottom-sheet-style";
  // link.rel = "stylesheet";
  // link.href = "./css/bottomSheet.css";

  append("head", link);
}

function BottomSheet(selector) {
  injectBottomSheetStyle();

  const backdrop = create("div", null, {
    classList: "bottom-sheet-backdrop",
    events: { click: hide }
  });

  const sheet = create("div", null, {
    classList: "bottom-sheet"
  });


  function show(content) {
    sheet.replaceChildren(content);

    backdrop.classList.add("show");
    sheet.classList.add("show");
  }

  function hide() {
    backdrop.classList.remove("show");
    sheet.classList.remove("show");
  }

  append(selector, backdrop);
  append(selector, sheet);

  return {
    show,
    hide
  };
}

