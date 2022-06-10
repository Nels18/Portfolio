export class Navbar {
  navbar = document.getElementById("navbar");
  burger = document.getElementById("burger");
  navbarLinks = document.querySelectorAll<HTMLElement>(".nav__link");

  constructor() {
    this.navbarLinks.forEach((link) => {
      link!.onclick = () => {
        this.hideMenu();
      };
    });

    this.burger!.onclick = () => {
      this.toggleMenu();
    };
  }

  toggleMenu = () => {
    this.navbar?.classList.toggle("active");
  };

  hideMenu = () => {
    this.navbar?.classList.remove("active");
  };
}
