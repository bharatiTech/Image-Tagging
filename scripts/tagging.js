export default class Tagging {
  constructor(targetContainer, coordinateX, coordinateY) {
    this.targetContainer = targetContainer;
    this.coordinateX = coordinateX - 30;
    this.coordinateY = coordinateY - 25;
    this.tagName = "";
  }

  isValidTagName() {
    this.tagName = prompt("Enter tag name here:");
    if (this.tagName !== "" && this.tagName !== null) {
      return true;
    } else {
      return false;
    }
  }

  createTag() {
    let tagDiv = document.createElement("div");
    tagDiv.classList.add("tagHidden");
    tagDiv.classList.add("tag");
    tagDiv.style.left = this.coordinateX + "px";
    tagDiv.style.top = this.coordinateY + "px";

    this.createTagName(tagDiv);

    return tagDiv;
  }

  createTagName(tagDiv) {
    let tagContent = document.createElement("p");
    tagContent.innerText = this.tagName;
    tagContent.setAttribute("style", "color: #000");
    tagDiv.appendChild(tagContent);
  }

  addTag() {
    if (this.isValidTagName()) {
      let tagDiv = this.createTag();

      this.hideTag(tagDiv);
      this.showTag(tagDiv);

      this.targetContainer.appendChild(tagDiv);
    }
  }

  hideTag(tagDiv) {
    tagDiv.addEventListener("mouseleave", () => {
      tagDiv.classList.remove("tagVisible");
      tagDiv.classList.add("tagHidden");
    });
  }

  showTag(tagDiv) {
    tagDiv.addEventListener("mouseenter", () => {
      tagDiv.classList.remove("tagHidden");
      tagDiv.classList.add("tagVisible");
    });
  }
}
