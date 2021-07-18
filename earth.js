const buttons = document.querySelectorAll('.lead__button');
const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelector(".lead__image");
const planetGeologyView = document.querySelector(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");
const sourceLink = document.querySelector(".lead__source-link");

const earthOverview = {
    alt: "earth Planet",
    image: "./assets/earth/planet-earth.svg",
    link: "https://en.wikipedia.org/wiki/earth",
    description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
}

const earthInternal = {
    alt: "earth Planet Internal View",
    image: "./assets/earth/planet-earth-internal.svg",
    link: "https://en.wikipedia.org/wiki/earth#Internal_structure",
    description: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
}

const earthGeology = {
    alt: "earth Planet Geology View",
    image: "./assets/earth/planet-earth.svg",
    link: "https://en.wikipedia.org/wiki/Earth#Surface",
    description: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
}

function addActive(button) {
    button.style.backgroundColor = "#6D2ED5";
}

function removeActive() {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    })
}

function addPlanetDetails(planetObject) {
    planetImage.src = planetObject.image;
    planetImage.alt = planetObject.alt;
    planetDescription.textContent = planetObject.description;
    sourceLink.href = planetObject.link;
}

function geologyActive(button) {
    if (button === buttonGeology) {
        planetGeologyView.classList.add('image-active');
    } else {
        planetGeologyView.classList.remove('image-active');

    }
};


buttonOverview.addEventListener('click', () => {
    addPlanetDetails(earthOverview);
    geologyActive(buttonOverview);
    removeActive();
    addActive(buttonOverview);
})

buttonInternal.addEventListener('click', () => {
    addPlanetDetails(earthInternal);
    geologyActive(buttonInternal);
    removeActive();
    addActive(buttonInternal);
})


buttonGeology.addEventListener('click', () => {
    addPlanetDetails(earthGeology);
    geologyActive(buttonGeology);
    removeActive();
    addActive(buttonGeology);
})