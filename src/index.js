import "./styles.css";

import HomePage from "./components/HomePage.js";
import Navbar from "./components/Navbar.js";

const root = document.querySelector("header");

const homePage = HomePage();
const navbar = Navbar();

root.appendChild(navbar);
root.appendChild(homePage);