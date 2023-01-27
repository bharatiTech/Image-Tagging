export default class Tagging {
  constructor(targetContainer, coordinateX, coordinateY) {
    this.targetContainer = targetContainer;
    this.coordinateX = coordinateX - 25;
    this.coordinateY = coordinateY - 25;
    this.tagName = "";
  }

  /**
   * @method createInput
   * @description Create an input text field to enter the tag name
   */
  createInput() {
    let tagInput = document.createElement("input");
    tagInput.setAttribute("placeholder", "Enter tag name here");
    tagInput.style.position = "fixed";
    tagInput.style.left = this.coordinateX + "px";
    tagInput.style.top = this.coordinateY + "px";

    tagInput.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    tagInput.addEventListener("keydown", (e) => {
      this.tagName = e.target.value;

      if (e.key == "Enter") {
        tagInput.remove();
        this.addTag();
      }
      if (e.key == "Escape") {
        tagInput.remove();
      }
    });

    this.targetContainer.appendChild(tagInput);
    return tagInput;
  }

  /**
   * @method createTag
   * @description Create a tag
   * @returns a DIV element
   */
  createTag() {
    let tagDiv = document.createElement("div");
    tagDiv.setAttribute("id", "tag");
    tagDiv.setAttribute("data-before", this.tagName);
    tagDiv.classList.add("tagHidden");
    tagDiv.classList.add("tag");
    tagDiv.style.left = this.coordinateX + "px";
    tagDiv.style.top = this.coordinateY + "px";

    return tagDiv;
  }

  /**
   * @method addTag
   * @description add a tag
   */
  addTag() {
    if (this.tagName !== "" && this.tagName !== null) {
      let tagDiv = this.createTag();
      this.targetContainer.appendChild(tagDiv);
    }
  }

  /**
   * @method calculatePosition
   * @description Calculates the distance between cursor position and the nearest tags
   * @param  node
   * @param  pointerX
   * @param  pointerY
   */
  calculatePosition(node, pointerX, pointerY) {
    /** X and Y coordinates of the tag */
    const nodeX = node.offsetLeft + node.offsetWidth / 2;
    const nodeY = node.offsetTop + node.offsetHeight / 2;

    /**
     * calculate the distance using the formula:
     * distance = √((X2 - x1)² + (Y2 - Y1)²)
     */
    const x2minusx1 = Math.pow(pointerX - nodeX, 2);
    const y2minusy1 = Math.pow(pointerY - nodeY, 2);
    const distance = Math.sqrt(x2minusx1 + y2minusy1).toFixed(0);

    if (distance < 40) {
      /** if cursor is at a distance less than 60, show the nearest tags */
      node.classList.remove("tagHidden");
      node.classList.add("tagVisible");
    } else {
      /** hide the tags */
      node.classList.remove("tagVisible");
      node.classList.add("tagHidden");
    }
  }
}

export const throttling = (callBackFunction, delay) => {
  let wait = false;
  let waitingArgs = null;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      wait = false;
    } else {
      callBackFunction(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (wait) {
      waitingArgs = args;
      return;
    }

    callBackFunction(...args);
    wait = true;

    setTimeout(timeoutFunc, delay);
  };
};
