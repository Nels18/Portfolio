export class Slider {
  constructor(name: string) {
    this.wrapper = document.querySelector<HTMLElement>(
      `#${name}__slider__wrapper`,
    );
    this.controlPrev = document.getElementById(
      `${name}__crl__prev`
    );
    console.log("this.controlPrev :", this.controlPrev);
    this.controlNext = document.getElementById(
      `${name}__crl__next`
    );
    console.log('Slider');
      // Slider

  this.wrapper!.onmousedown = (event: MouseEvent) => {
    this.dragSliderItem(event);
  };

  this.wrapper!.onmouseup = () => {
    this.dropSliderItem();
  };

  this.wrapper!.onmousemove = (event: MouseEvent) => {
    this.moveSliderItem(event);
  };

  this.wrapper!.onmouseleave = () => {
    this.pressed = false;
  };

  // Control

  this.controlNext!.onclick = () => {
    if (this.controlNext?.classList.contains("disabled")) return;

    this.rightMover();

    if (this.currentItem === this.sliderItems.length) {
      this.disableControl(this.controlNext!);
    }

    if (this.currentItem !== 0) {
      this.enableControl(this.controlPrev!);
    }
  };

  this.controlPrev!.onclick = () => {
    if (this.controlPrev?.classList.contains("disabled")) return;

    this.leftMover();

    if (this.currentItem === 0) {
      this.disableControl(this.controlPrev!);
    }

    if (this.currentItem !== this.sliderItems.length) {
      this.enableControl(this.controlNext!);
    }
  };

  window.onload = () => {
    if (this.currentItem === this.sliderItems.length) {
      this.disableControl(this.controlNext!);
    }

    if (this.currentItem === 0) {
      this.disableControl(this.controlPrev!);
    }
  };
  }
  
  wrapper: any;
  controlPrev: any;
  controlNext: any;
  sliderItems = document.getElementsByClassName("slider__item");
  movePer: number | undefined;

  pressed = false;
  startX = 0;

  currentItem = 0;

  moveSliderItem = (event: MouseEvent) => {
    if (!this.pressed) return;
    this.wrapper!.scrollLeft += this.startX - event.clientX;
  };

  dropSliderItem = () => {
    this.pressed = false;
    this.wrapper!.style.cursor = "grab";
  };

  dragSliderItem = (event: MouseEvent) => {
    this.pressed = true;
    this.startX = event.clientX;
    this.wrapper!.style.cursor = "grabbing";
  };

  enableControl = (control: HTMLElement) => {
    control.classList.remove("disabled");
  };

  disableControl = (control: HTMLElement) => {
    control.classList.add("disabled");
  };

  rightMover = () => {
    this.movePer = this.wrapper!.scrollWidth / this.sliderItems.length;
    if (this.currentItem > this.sliderItems.length) {
      return (this.currentItem = this.sliderItems.length);
    }

    this.wrapper!.scrollLeft += this.movePer;
    this.currentItem++;
    console.log("this.movePer :", this.movePer);
  };

  leftMover = () => {
    this.movePer = this.wrapper!.scrollWidth / this.sliderItems.length;
    if (this.currentItem <= 0) {
      return (this.currentItem = 0);
    }

    this.wrapper!.scrollLeft -= this.movePer;
    this.currentItem--;
    console.log("this.movePer :", this.movePer);
  };


}
