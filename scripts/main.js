import Tagging from "./tagging.js";

let tagArea = document.getElementById("tagArea");

tagArea.addEventListener("click", (event) => {
  var x = event.clientX;
  var y = event.clientY;
  const instance = new Tagging(tagArea, x, y);
  instance.addTag();
});
