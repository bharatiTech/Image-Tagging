export default class Tagging {
  constructor(targetContainer, coordinateX, coordinateY) {
    this.targetContainer = targetContainer;
    this.coordinateX = coordinateX - 33;
    this.coordinateY = coordinateY - 25;
    this.tagName = "";
  }

  isValidTagName() {
    this.tagName = prompt("Enter Tag name here:");
    if (this.tagName !== "" && this.tagName !== null) {
      return true;
    } else {
      return false;
    }
  }

  createTag() {
    let id = crypto.randomUUID().split("-")[0];
    let tagDiv = document.createElement("div");
    tagDiv.setAttribute("id", id);
    tagDiv.setAttribute("title", this.tagName);
    tagDiv.classList.add("tagHidden");
    tagDiv.classList.add("tag");
    tagDiv.style.left = this.coordinateX + "px";
    tagDiv.style.top = this.coordinateY + "px";

    return tagDiv;
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
