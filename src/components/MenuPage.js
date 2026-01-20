function createMenuItem(name, desc, price) {
    const row = document.createElement("div");
    row.classList.add("menu-row");

    const info = document.createElement("div");
    info.classList.add("menu-info");

    const title = document.createElement("h3");
    title.textContent = name;

    const description = document.createElement("p");
    description.textContent = desc;

    const cost = document.createElement("div");
    cost.classList.add("menu-price");
    cost.textContent = `$${price}`;

    info.append(title, description);
    row.append(info, cost);

    return row;
}

function createMenuColumn(titleText, items) {
    const column = document.createElement("div");
    column.classList.add("menu-column");

    const title = document.createElement("h2");
    title.textContent = titleText;

    column.appendChild(title);

    items.forEach(item => {
        column.appendChild(
            createMenuItem(item.name, item.desc, item.price)
        );
    });

    return column;
}

function MenuPage() {
    const content = document.createElement("div");
    content.id = "menu-content";

    const apps = createMenuColumn("Appetizers", [
        {
            name: "Bread",
            desc: "Mmmm tasty bread yeah",
            price: "7.99",
        },
        {
            name: "More Bread",
            desc: "MMMmm yeah more tasty bread yeah",
            price: "11.90",
        },
        {
            name: "Chippies",
            desc: "MMmM crispy and crunchy chippies",
            price: "8.99",
        },
    ]);

    const entrees = createMenuColumn("Entrees", [
        {
            name: "BIG BREAD",
            desc: "MMMMM OH THAT BREAD IS BIGGG",
            price: "15.89",
        },
        {
            name: "Noodles",
            desc: "mmm slurp slurp yummy in my tummy",
            price: "14.99",
        },
        {
            name: "What is that?!",
            desc: "MMM WHAT IS THAT?! SO TASTY",
            price: "19.99",
        },
    ]);

    content.append(apps, entrees);
    return content;
}

export default MenuPage;
