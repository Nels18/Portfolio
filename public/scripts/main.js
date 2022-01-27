"use strict";
const navbar = document.getElementById("navbar");
const burger = document.getElementById("burger");
const navbarLinks = document.querySelectorAll(".nav__link");
const toggleMenu = () => {
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("active");
};
const hideMenu = () => {
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("active");
};
navbarLinks.forEach((link) => {
    link.onclick = () => {
        hideMenu();
    };
});
burger.onclick = () => {
    toggleMenu();
};
/******************/
const wrapper = document.querySelector(".slider__wrapper");
const slideImg = document.querySelector(".slider__wrapper img");
let pressed = false;
let startX = 0;
const moveSliderItem = (event) => {
    if (!pressed)
        return;
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
/*********************/
const controlPrev = document.getElementById("crl__prev");
const controlNext = document.getElementById("crl__next");
const sliderItems = document.getElementsByClassName("slider__item");
const movePer = wrapper.scrollWidth / sliderItems.length;
const maxMove = wrapper.style.width;
let currentItem = 0;
const enableControl = (control) => {
    control.classList.remove("disabled");
};
const disableControl = (control) => {
    control.classList.add("disabled");
};
const right_mover = () => {
    if (currentItem > sliderItems.length) {
        return (currentItem = sliderItems.length);
    }
    wrapper.scrollLeft += movePer;
    currentItem++;
};
const left_mover = () => {
    if (currentItem <= 0) {
        return (currentItem = 0);
    }
    wrapper.scrollLeft -= movePer;
    currentItem--;
};
controlNext.onclick = () => {
    if (controlNext === null || controlNext === void 0 ? void 0 : controlNext.classList.contains("disabled"))
        return;
    right_mover();
    if (currentItem === sliderItems.length) {
        disableControl(controlNext);
    }
};
controlPrev.onclick = () => {
    if (controlPrev === null || controlPrev === void 0 ? void 0 : controlPrev.classList.contains("disabled"))
        return;
    left_mover();
    if (currentItem === 0) {
        disableControl(controlPrev);
    }
};
document.onload = () => {
    if (currentItem === sliderItems.length) {
        disableControl(controlNext);
    }
    if (currentItem === 0) {
        disableControl(controlPrev);
    }
};
