export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.buttonId = document.getElementById(buttonId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeButton = this.modal.querySelector(".modal__close");
    this.closeHandler = () => this.close();
    this.#initOpen();
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.closeHandler);
    }

    this.#initClose();
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.overlay.removeEventListener("click", this.closeHandler);
    this.closeButton.removeEventListener("click", this.closeHandler);
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen() {
    this.buttonId.addEventListener("click", () => this.open());
  }

  #initClose() {
    this.closeButton.addEventListener("click", this.closeHandler);
  }


}
