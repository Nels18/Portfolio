/* Variables */

const navbar = document.getElementById("navbar");
const burger = document.getElementById("burger");
const navbarLinks = document.querySelectorAll<HTMLElement>(".nav__link");

const wrapper = document.querySelector<HTMLElement>(".slider__wrapper");
const slideImg = document.querySelector<HTMLElement>(".slider__wrapper img");

const controlPrev = document.getElementById("crl__prev");
const controlNext = document.getElementById("crl__next");
const sliderItems = document.getElementsByClassName("slider__item");
const movePer = wrapper!.scrollWidth / sliderItems.length;
const maxMove = wrapper!.style.width;

const btnCloseModal = document.getElementById("btn-close-modal");
const btnOpenModal = document.getElementById("btn-open-modal");
const modalResume = document.getElementById("modal-resume");
const overlayResume = document.querySelector("#modal-resume .modal__overlay");
const modalBody = document.querySelector("#modal-resume .modal__body");
const modalImg = document.querySelector("#modal-resume img");

let pressed = false;
let startX = 0;

let currentItem = 0;

/* Fonctions */

const toggleMenu = () => {
  navbar?.classList.toggle("active");
};

const hideMenu = () => {
  navbar?.classList.remove("active");
};

const moveSliderItem = (event: MouseEvent) => {
  if (!pressed) return;
  wrapper!.scrollLeft += startX - event.clientX;
};

const dropSliderItem = () => {
  pressed = false;
  wrapper!.style.cursor = "grab";
};

const dragSliderItem = (event: MouseEvent) => {
  pressed = true;
  startX = event.clientX;
  wrapper!.style.cursor = "grabbing";
};

const enableControl = (control: HTMLElement) => {
  control.classList.remove("disabled");
};

const disableControl = (control: HTMLElement) => {
  control.classList.add("disabled");
};

const rightMover = () => {
  if (currentItem > sliderItems.length) {
    return (currentItem = sliderItems.length);
  }

  wrapper!.scrollLeft += movePer;
  currentItem++;
};

const leftMover = () => {
  if (currentItem <= 0) {
    return (currentItem = 0);
  }

  wrapper!.scrollLeft -= movePer;
  currentItem--;
};

const openModal = () => {
  console.log('open :', open);
  modalResume!.classList.add("visible");
};

const closeModal = () => {
  console.log('close :', close);
  modalResume!.classList.remove("visible");
};

/* Code */

// Menu

navbarLinks.forEach((link) => {
  link!.onclick = () => {
    hideMenu();
  };
});

burger!.onclick = () => {
  toggleMenu();
};

// Slider

wrapper!.onmousedown = (event: MouseEvent) => {
  dragSliderItem(event);
};

wrapper!.onmouseup = () => {
  dropSliderItem();
};

wrapper!.onmousemove = (event: MouseEvent) => {
  moveSliderItem(event);
};

wrapper!.onmouseleave = () => {
  pressed = false;
};

// Control

controlNext!.onclick = () => {
  if (controlNext?.classList.contains("disabled")) return;

  rightMover();

  if (currentItem === sliderItems.length) {
    disableControl(controlNext!);
  }

  if (currentItem !== 0) {
    enableControl(controlPrev!);
  }
};

controlPrev!.onclick = () => {
  if (controlPrev?.classList.contains("disabled")) return;

  leftMover();

  if (currentItem === 0) {
    disableControl(controlPrev!);
  }

  if (currentItem !== sliderItems.length) {
    enableControl(controlNext!);
  }
};

window.onload = () => {
  if (currentItem === sliderItems.length) {
    disableControl(controlNext!);
  }

  if (currentItem === 0) {
    disableControl(controlPrev!);
  }
};

// Modal
btnOpenModal!.onclick = () => {
  openModal();
};

btnCloseModal!.onclick = () => {
  closeModal();
};

(overlayResume as HTMLElement).onclick = () => {
  closeModal();
};

(modalBody as HTMLElement).onclick = (event) => {
  closeModal();
};

(modalImg as HTMLElement).onclick = (event) => {
  event.stopPropagation();
};