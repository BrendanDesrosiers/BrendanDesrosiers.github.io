// ########## FANCY TEXT CODE ########## //
// blue-glow
let elements = document.getElementsByClassName("blue-glow");

function initSpans(element) {
  let text = element.textContent;
  element.textContent = "";
  console.log("\"" + text + "\" rendering in blue glow.");
  for (let i = 0; i < text.length; i++) {
    let child = document.createElement("span");
    child.textContent = text[i];
    element.append(child);
  }
}

function blueGlow(element) {
  let sub = element.children;
  // change style of each sub-element accordingly
  time = Date.now();
  for (let i = 0; i < sub.length; i++) {
    sub[i].style = "color: hsl(" + (Math.round(20 * Math.sin(0.2 * (time / 1000) * 2 * Math.PI + i * 0.5) + 200)) + " 100% 50%);"
  }
}

for (let elem of elements) {
  initSpans(elem);
}

setInterval(() => {for (let elem of elements) {blueGlow(elem);}}, 1000/30); // update 30 times a second