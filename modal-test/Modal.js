export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.buttonId = document.getElementById(buttonId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.buttonId.addEventListener('click', () => this.open());
    this.modal.querySelector(".modal__close").addEventListener('click', () => this.close());
    this.closeOverlay = () => this.close();
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeOverlay);
    }
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.overlay.removeEventListener('click', this.closeOverlay);
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }
}

