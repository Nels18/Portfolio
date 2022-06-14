import { Slider } from "./Slider.js";
import { Navbar } from "./Navbar.js";
import { Modal } from "./Modal.js";

/* Variables */
const projects = document.querySelectorAll("#project-section .card.shadow");
const technologySlider = new Slider('technology');

// Slider
projects.forEach((project) => {
  console.log('project.id :', project.id);
  console.log('!project.id :', !project.id);
  if (!project.id) return;
  const projectSlider = new Slider(project.id);

  const sliderWrapper = project?.querySelector('.slider__wrapper');


  sliderWrapper!.scrollLeft = 0;
  setTimeout(() => {
    
    console.log('sliderWrapper!.scrollLeft :', sliderWrapper!.scrollLeft);
  }, 500);

  projectSlider.sliderItems!.forEach((item) => {
    (item.children[0] as HTMLImageElement).style.width =
      item.clientWidth.toString() + "px";
  });
});

window.onresize = () => {
  projects.forEach((project) => {
    const slider = project.querySelector('.slider');
    const sliderWrapper = slider?.querySelector('.slider__wrapper');
    const sliderItems = sliderWrapper?.querySelectorAll('.slider__item');

    function resizeElement(sliderItem: HTMLElement) {
      sliderItem.style.width =
      sliderWrapper?.clientWidth.toString() + "px";
    }

    if (!sliderItems) return;

    sliderItems.forEach(sliderItem => {
      resizeElement(sliderItem as HTMLElement);

      const image = sliderItem.querySelector('img');

      if (!image) return;

      resizeElement(image);
    });
  });
};

// Menu
const navbar = new Navbar();

// Modal
const modal = new Modal();
