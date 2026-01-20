import "./styles.css";

import HomePage from "./components/HomePage.js";
import MenuPage from "./components/MenuPage.js";
import AboutPage from "./components/AboutPage.js";
import Navbar from "./components/Navbar.js";

const header_root = document.querySelector("header");
const content_root = document.getElementById("content");

const navbar = Navbar();
const homePage = HomePage();
const menuPage = MenuPage();
const aboutPage = AboutPage();

header_root.appendChild(navbar);
// start with Home page
content_root.appendChild(homePage);

function switchPage(pageEl) {
    content_root.innerHTML = "";
    content_root.appendChild(pageEl);
}

const homeBtn = navbar.querySelector('button[data-page="home"]');
const menuBtn = navbar.querySelector('button[data-page="menu"]');
const aboutBtn = navbar.querySelector('button[data-page="about"]');

if (homeBtn) homeBtn.addEventListener("click", () => switchPage(homePage));
if (menuBtn) menuBtn.addEventListener("click", () => switchPage(menuPage));
if (aboutBtn) aboutBtn.addEventListener("click", () => switchPage(aboutPage));