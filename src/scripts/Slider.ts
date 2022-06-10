export class Slider {
  wrapper: HTMLElement | null;
  controlPrev: HTMLElement | null;
  controlNext: HTMLElement | null;
  sliderItems: NodeListOf<Element> | null;
  movePer: number | undefined;


  pressed = false;
  startX = 0;

  currentItem = 0;

  constructor(name: string) {
    this.wrapper = document.querySelector<HTMLElement>(
      `#${name}__slider__wrapper`
    );
    this.controlPrev = document.getElementById(`${name}__crl__prev`);
    this.controlNext = document.getElementById(`${name}__crl__next`);
    this.sliderItems = document.querySelectorAll(
      `#${name}__slider__wrapper .slider__item`
    );

    // console.log("`#${name}__slider__wrapper` :", `#${name}__slider__wrapper`);

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

    window.onload = () => {
      if (this.currentItem === this.sliderItems!.length) {
        this.disableControl(this.controlNext!);
      }

      if (this.currentItem === 0) {
        this.disableControl(this.controlPrev!);
      }
    };

    this.controlNext!.onclick = () => {
      this.handlerControlNext();
    };

    this.controlPrev!.onclick = () => {
      this.handlerControlPrev();
    };

    // console.log('controlPrev :', this.controlPrev);
    // console.log('controlNext :', this.controlNext);
    // console.log("sliderItems :", this.sliderItems);
    // console.log(
    //   "`${name}slider__item`) :",
    //   `.${name}__slider__wrapper .slider__item`
    // );
    // console.log("this.wrapper!.scrollLeft  :", this.wrapper!.scrollLeft);
    // console.log("this.wrapper!.scrollLeft  :", this.wrapper!.scrollLeft);
  }

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
    // console.log("this.startX :", this.startX);
  };

  enableControl = (control: HTMLElement) => {
    control.classList.remove("disabled");
  };

  disableControl = (control: HTMLElement) => {
    control.classList.add("disabled");
  };

  rightMover = () => {
    this.movePer = this.wrapper!.scrollWidth / this.sliderItems!.length;
    if (this.currentItem > this.sliderItems!.length) {
      return (this.currentItem = this.sliderItems!.length);
    }

    this.wrapper!.scrollLeft += this.movePer;
    this.currentItem++;
    // console.log("this.wrapper!.scrollWidth :", this.wrapper!.scrollWidth);
    // console.log("this.sliderItems!.length :", this.sliderItems!.length);
    // console.log("this.movePer :", this.movePer);
    // console.log("this.wrapper!.scrollLeft  :", this.wrapper!.scrollLeft);
    // console.log('----');
  };

  leftMover = () => {
    this.movePer = this.wrapper!.scrollWidth / this.sliderItems!.length;
    if (this.currentItem <= 0) {
      return (this.currentItem = 0);
    }

    this.wrapper!.scrollLeft -= this.movePer;
    this.currentItem--;
    // console.log("this.wrapper!.scrollWidth :", this.wrapper!.scrollWidth);
    // console.log("this.sliderItems!.length :", this.sliderItems!.length);
    // console.log("this.movePer :", this.movePer);
    // console.log("this.wrapper!.scrollLeft  :", this.wrapper!.scrollLeft);
    // console.log('++++');
  };

  handlerControlNext = () => {
    if (this.controlNext?.classList.contains("disabled")) return;

    this.rightMover();

    if (this.currentItem === this.sliderItems!.length) {
      this.disableControl(this.controlNext!);
    }

    if (this.currentItem !== 0) {
      this.enableControl(this.controlPrev!);
    }
  };

  handlerControlPrev = () => {
    if (this.controlPrev?.classList.contains("disabled")) return;

    this.leftMover();

    if (this.currentItem === 0) {
      this.disableControl(this.controlPrev!);
    }

    if (this.currentItem !== this.sliderItems!.length) {
      this.enableControl(this.controlNext!);
    }
  };
}
