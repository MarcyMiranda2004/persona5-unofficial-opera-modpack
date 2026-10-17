const url = (f: string) => chrome.runtime.getURL(`assets/${f}`);

const style = document.createElement("style");
style.textContent = `
  html, body, * {
    cursor: url("${url("normal.cur")}"), auto !important;
  }
`;
document.documentElement.appendChild(style);