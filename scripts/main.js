import Tagging from "./tagging.js";

let tagArea = document.getElementById("tagArea");

tagArea.addEventListener("click", (event) => {
  var coordinateX = event.clientX;
  var coordinateY = event.clientY;
  const instance = new Tagging(tagArea, coordinateX, coordinateY);
  instance.addTag();
});
