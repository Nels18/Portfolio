export class Slider {
    constructor(name) {
        this.sliderItems = document.getElementsByClassName("slider__item");
        this.pressed = false;
        this.startX = 0;
        this.currentItem = 0;
        this.moveSliderItem = (event) => {
            if (!this.pressed)
                return;
            this.wrapper.scrollLeft += this.startX - event.clientX;
        };
        this.dropSliderItem = () => {
            this.pressed = false;
            this.wrapper.style.cursor = "grab";
        };
        this.dragSliderItem = (event) => {
            this.pressed = true;
            this.startX = event.clientX;
            this.wrapper.style.cursor = "grabbing";
        };
        this.enableControl = (control) => {
            control.classList.remove("disabled");
        };
        this.disableControl = (control) => {
            control.classList.add("disabled");
        };
        this.rightMover = () => {
            this.movePer = this.wrapper.scrollWidth / this.sliderItems.length;
            if (this.currentItem > this.sliderItems.length) {
                return (this.currentItem = this.sliderItems.length);
            }
            this.wrapper.scrollLeft += this.movePer;
            this.currentItem++;
            console.log("this.movePer :", this.movePer);
        };
        this.leftMover = () => {
            this.movePer = this.wrapper.scrollWidth / this.sliderItems.length;
            if (this.currentItem <= 0) {
                return (this.currentItem = 0);
            }
            this.wrapper.scrollLeft -= this.movePer;
            this.currentItem--;
            console.log("this.movePer :", this.movePer);
        };
        this.wrapper = document.querySelector(`#${name}__slider__wrapper`);
        this.controlPrev = document.getElementById(`${name}__crl__prev`);
        console.log("this.controlPrev :", this.controlPrev);
        this.controlNext = document.getElementById(`${name}__crl__next`);
        console.log('Slider');
        // Slider
        this.wrapper.onmousedown = (event) => {
            this.dragSliderItem(event);
        };
        this.wrapper.onmouseup = () => {
            this.dropSliderItem();
        };
        this.wrapper.onmousemove = (event) => {
            this.moveSliderItem(event);
        };
        this.wrapper.onmouseleave = () => {
            this.pressed = false;
        };
        // Control
        this.controlNext.onclick = () => {
            var _a;
            if ((_a = this.controlNext) === null || _a === void 0 ? void 0 : _a.classList.contains("disabled"))
                return;
            this.rightMover();
            if (this.currentItem === this.sliderItems.length) {
                this.disableControl(this.controlNext);
            }
            if (this.currentItem !== 0) {
                this.enableControl(this.controlPrev);
            }
        };
        this.controlPrev.onclick = () => {
            var _a;
            if ((_a = this.controlPrev) === null || _a === void 0 ? void 0 : _a.classList.contains("disabled"))
                return;
            this.leftMover();
            if (this.currentItem === 0) {
                this.disableControl(this.controlPrev);
            }
            if (this.currentItem !== this.sliderItems.length) {
                this.enableControl(this.controlNext);
            }
        };
        window.onload = () => {
            if (this.currentItem === this.sliderItems.length) {
                this.disableControl(this.controlNext);
            }
            if (this.currentItem === 0) {
                this.disableControl(this.controlPrev);
            }
        };
    }
}
