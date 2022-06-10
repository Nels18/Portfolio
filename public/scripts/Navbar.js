export class Navbar {
    constructor() {
        this.navbar = document.getElementById("navbar");
        this.burger = document.getElementById("burger");
        this.navbarLinks = document.querySelectorAll(".nav__link");
        this.toggleMenu = () => {
            var _a;
            (_a = this.navbar) === null || _a === void 0 ? void 0 : _a.classList.toggle("active");
        };
        this.hideMenu = () => {
            var _a;
            (_a = this.navbar) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
        };
        this.navbarLinks.forEach((link) => {
            link.onclick = () => {
                this.hideMenu();
            };
        });
        this.burger.onclick = () => {
            this.toggleMenu();
        };
    }
}
