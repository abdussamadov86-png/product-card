export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = this.modal.querySelector('.overlay');
    this.closeBtn = this.modal.querySelector('.modal__close');
    this.#listenClose();
  }

  open() {
    this.modal.classList.add('modal-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #listenClose() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());
  }
}