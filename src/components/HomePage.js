import counterTop from "../assets/counter-top.jpg";

function HomePage() {
    const content = document.createElement("div");
    content.id = "content";

    const sideImage = document.createElement("img");
    sideImage.src = counterTop;
    sideImage.classList.add("home-image");

    const textBox = document.createElement("div");
    textBox.classList.add("textbox");

    const heading = document.createElement("h1");
    heading.textContent = "Mmmm!";

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "Wow, the Good Food Place has good food! Amazing, order now!";

    textBox.append(heading, paragraph);
    content.append(sideImage, textBox);

    return content;
}

export default HomePage;