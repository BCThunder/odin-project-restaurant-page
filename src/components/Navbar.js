/*
<nav id="navbar">
    <p>Good Food Place</p>
    <div>
        <button>Home</button>
        <button>Menu</button>
        <button>About</button>
    </div>
</nav>
*/

function Navbar() {
    const nav = document.createElement("nav");
    nav.id = "navbar";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Good Food Place";

    const buttons = document.createElement("div");
    buttons.id = "nav-buttons";

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    const menuButton = document.createElement("button");
    menuButton.textContent = "menu";
    const aboutButton = document.createElement("button");
    aboutButton.textContent = "about";

    buttons.append(homeButton, menuButton, aboutButton);
    nav.append(paragraph, buttons);

    return nav;
}

export default Navbar;