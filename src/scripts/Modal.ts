export class Modal {
  btnCloseModal = document.getElementById("btn-close-modal");
  btnOpenModal = document.getElementById("btn-open-modal");
  modalResume = document.getElementById("modal-resume");
  overlayResume = document.querySelector("#modal-resume .modal__overlay");
  modalBody = document.querySelector("#modal-resume .modal__body");
  modalImg = document.querySelector("#modal-resume img");

  constructor() {
    this.btnOpenModal!.onclick = () => {
      this.openModal();
    };

    this.btnCloseModal!.onclick = () => {
      this.closeModal();
    };

    (this.overlayResume as HTMLElement).onclick = () => {
      this.closeModal();
    };

    (this.modalBody as HTMLElement).onclick = (event) => {
      this.closeModal();
    };

    (this.modalImg as HTMLElement).onclick = (event) => {
      event.stopPropagation();
    };
  }

  openModal = () => {
    console.log("open :", open);
    this.modalResume!.classList.add("visible");
  };

  closeModal = () => {
    console.log("close :", close);
    this.modalResume!.classList.remove("visible");
  };
}
