"use strict";
/* Variables */
const navbar = document.getElementById("navbar");
const burger = document.getElementById("burger");
const navbarLinks = document.querySelectorAll(".nav__link");
const wrapper = document.querySelector(".slider__wrapper");
const slideImg = document.querySelector(".slider__wrapper img");
const controlPrev = document.getElementById("crl__prev");
const controlNext = document.getElementById("crl__next");
const sliderItems = document.getElementsByClassName("slider__item");
let movePer;
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
  navbar === null || navbar === void 0
    ? void 0
    : navbar.classList.toggle("active");
};
const hideMenu = () => {
  navbar === null || navbar === void 0
    ? void 0
    : navbar.classList.remove("active");
};
const moveSliderItem = (event) => {
  if (!pressed) return;
  wrapper.scrollLeft += startX - event.clientX;
};
const dropSliderItem = () => {
  pressed = false;
  wrapper.style.cursor = "grab";
};
const dragSliderItem = (event) => {
  pressed = true;
  startX = event.clientX;
  wrapper.style.cursor = "grabbing";
};
const enableControl = (control) => {
  control.classList.remove("disabled");
};
const disableControl = (control) => {
  control.classList.add("disabled");
};
const rightMover = () => {
  movePer = wrapper.scrollWidth / sliderItems.length;
  if (currentItem > sliderItems.length) {
    return (currentItem = sliderItems.length);
  }
  wrapper.scrollLeft += movePer;
  currentItem++;
};
const leftMover = () => {
  movePer = wrapper.scrollWidth / sliderItems.length;
  if (currentItem <= 0) {
    return (currentItem = 0);
  }
  wrapper.scrollLeft -= movePer;
  currentItem--;
};
const openModal = () => {
  modalResume.classList.add("visible");
};
const closeModal = () => {
  modalResume.classList.remove("visible");
};
/* Code */
// Menu
navbarLinks.forEach((link) => {
  link.onclick = () => {
    hideMenu();
  };
});
burger.onclick = () => {
  toggleMenu();
};
// Slider
wrapper.onmousedown = (event) => {
  dragSliderItem(event);
};
wrapper.onmouseup = () => {
  dropSliderItem();
};
wrapper.onmousemove = (event) => {
  moveSliderItem(event);
};
wrapper.onmouseleave = () => {
  pressed = false;
};
// Control
controlNext.onclick = () => {
  if (
    controlNext === null || controlNext === void 0
      ? void 0
      : controlNext.classList.contains("disabled")
  )
    return;
  rightMover();
  if (currentItem === sliderItems.length) {
    disableControl(controlNext);
  }
  if (currentItem !== 0) {
    enableControl(controlPrev);
  }
};
controlPrev.onclick = () => {
  if (
    controlPrev === null || controlPrev === void 0
      ? void 0
      : controlPrev.classList.contains("disabled")
  )
    return;
  leftMover();
  if (currentItem === 0) {
    disableControl(controlPrev);
  }
  if (currentItem !== sliderItems.length) {
    enableControl(controlNext);
  }
};
window.onload = () => {
  if (currentItem === sliderItems.length) {
    disableControl(controlNext);
  }
  if (currentItem === 0) {
    disableControl(controlPrev);
  }
};
// Modal
btnOpenModal.onclick = () => {
  openModal();
};
btnCloseModal.onclick = () => {
  closeModal();
};
overlayResume.onclick = () => {
  closeModal();
};
modalBody.onclick = (event) => {
  closeModal();
};
modalImg.onclick = (event) => {
  event.stopPropagation();
};
