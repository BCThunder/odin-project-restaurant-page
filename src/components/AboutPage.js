function AboutPage() {
    const content = document.createElement("div");
    content.id = "about-content";

    const header = document.createElement("h1");
    header.textContent = "About"

    const locationHeader = document.createElement("h3");
    locationHeader.classList.add("about-subheader");
    locationHeader.textContent = "Address";

    const locationInfo = document.createElement("p");
    locationInfo.classList.add("about-caption");
    locationInfo.textContent = "1234 Good Place Ave., California";

    const hoursHeader = document.createElement("h3");
    hoursHeader.classList.add("about-subheader");
    hoursHeader.textContent = "Hours of Operation";

    const hoursInfo = document.createElement("p");
    hoursInfo.classList.add("about-caption");
    hoursInfo.textContent =
        `Monday - Thursday: 11am - 8pm\n
        Friday - Saturday: 11am - 10pm\n
        Sunday: 12am - 6pm`;

    const contactHeader = document.createElement("h3");
    contactHeader.classList.add("about-subheader");
    contactHeader.textContent = "Contact Info";

    const contactInfo = document.createElement("p");
    contactInfo.classList.add("about-caption");
    contactInfo.textContent =
        "Email: goodfoodplace@mmmmmmmm.com";

    content.append(header,
        locationHeader, locationInfo,
        hoursHeader, hoursInfo,
        contactHeader, contactInfo);

    return content;
}

export default AboutPage;