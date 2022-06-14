export class Slider {
    constructor(name) {
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
            // console.log("this.startX :", this.startX);
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
            // console.log("this.wrapper!.scrollWidth :", this.wrapper!.scrollWidth);
            // console.log("this.sliderItems!.length :", this.sliderItems!.length);
            // console.log("this.movePer :", this.movePer);
            // console.log("this.wrapper!.scrollLeft  :", this.wrapper!.scrollLeft);
            // console.log('----');
        };
        this.leftMover = () => {
            this.movePer = this.wrapper.scrollWidth / this.sliderItems.length;
            if (this.currentItem <= 0) {
                return (this.currentItem = 0);
            }
            this.wrapper.scrollLeft -= this.movePer;
            this.currentItem--;
            // console.log("this.wrapper!.scrollWidth :", this.wrapper!.scrollWidth);
            // console.log("this.sliderItems!.length :", this.sliderItems!.length);
            // console.log("this.movePer :", this.movePer);
            // console.log("this.wrapper!.scrollLeft  :", this.wrapper!.scrollLeft);
            // console.log('++++');
        };
        this.handlerControlNext = () => {
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
        this.handlerControlPrev = () => {
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
        this.wrapper = document.querySelector(`#${name}__slider__wrapper`);
        this.controlPrev = document.getElementById(`${name}__crl__prev`);
        this.controlNext = document.getElementById(`${name}__crl__next`);
        this.sliderItems = document.querySelectorAll(`#${name}__slider__wrapper .slider__item`);
        if (this.sliderItems.length <= 1) {
            this.disableControl(this.controlPrev);
            this.disableControl(this.controlNext);
        }
        // console.log("`#${name}__slider__wrapper` :", `#${name}__slider__wrapper`);
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
        window.onload = () => {
            if (this.currentItem === this.sliderItems.length) {
                this.disableControl(this.controlNext);
            }
            if (this.currentItem === 0) {
                this.disableControl(this.controlPrev);
            }
        };
        this.controlNext.onclick = () => {
            this.handlerControlNext();
        };
        this.controlPrev.onclick = () => {
            this.handlerControlPrev();
        };
    }
}
