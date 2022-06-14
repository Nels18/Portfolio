export class Modal {
    constructor() {
        this.btnCloseModal = document.getElementById("btn-close-modal");
        this.btnOpenModal = document.getElementById("btn-open-modal");
        this.modalResume = document.getElementById("modal-resume");
        this.overlayResume = document.querySelector("#modal-resume .modal__overlay");
        this.modalBody = document.querySelector("#modal-resume .modal__body");
        this.modalImg = document.querySelector("#modal-resume img");
        this.openModal = () => {
            console.log("open :", open);
            this.modalResume.classList.add("visible");
        };
        this.closeModal = () => {
            console.log("close :", close);
            this.modalResume.classList.remove("visible");
        };
        this.btnOpenModal.onclick = () => {
            this.openModal();
        };
        this.btnCloseModal.onclick = () => {
            this.closeModal();
        };
        this.overlayResume.onclick = () => {
            this.closeModal();
        };
        this.modalBody.onclick = (event) => {
            this.closeModal();
        };
        this.modalImg.onclick = (event) => {
            event.stopPropagation();
        };
    }
}
