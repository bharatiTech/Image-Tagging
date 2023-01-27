import Tagging, { throttling } from "./tagging.js";

let tagArea = document.getElementById("tagArea");

tagArea.addEventListener("click", (event) => {
  var coordinateX = event.clientX;
  var coordinateY = event.clientY;
  const instance = new Tagging(tagArea, coordinateX, coordinateY);
  const inputNode = instance.createInput();
  inputNode.focus();
});

let tagInstance = new Tagging();

const onMouseMove = (event) => {
  console.log("calc");

  const childNodes = event.target.childNodes;
  if (childNodes.length > 0) {
    childNodes.forEach((node) => {
      if (node.id === "tag") {
        tagInstance.calculatePosition(node, event.clientX, event.clientY);
      }
    });
  }
};

tagArea.addEventListener("mousemove", throttling(onMouseMove, 600));
