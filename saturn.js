const buttons = document.querySelectorAll('.lead__button');
const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelector(".lead__image");
const planetGeologyView = document.querySelector(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");
const sourceLink = document.querySelector(".lead__source-link");

const saturnOverview = {
    alt: "Saturn Planet",
    image: "./assets/saturn/planet-saturn.svg",
    link: "https://en.wikipedia.org/wiki/Saturn",
    description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth."
}

const saturnInternal = {
    alt: "Saturn Planet Internal View",
    image: "./assets/saturn/planet-saturn-internal.svg",
    link: "https://en.wikipedia.org/wiki/Saturn#Internal_structure",
    description: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
}

const saturnGeology = {
    alt: "Saturn Planet Geology View",
    image: "./assets/saturn/planet-saturn.svg",
    link: "https://en.wikipedia.org/wiki/Saturn#Atmosphere",
    description: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."
}

function addActive(button) {
    button.style.backgroundColor = "#CD5120";
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
    addPlanetDetails(saturnOverview);
    geologyActive(buttonOverview);
    removeActive();
    addActive(buttonOverview);
})

buttonInternal.addEventListener('click', () => {
    addPlanetDetails(saturnInternal);
    geologyActive(buttonInternal);
    removeActive();
    addActive(buttonInternal);
})

buttonGeology.addEventListener('click', () => {
    addPlanetDetails(saturnGeology);
    geologyActive(buttonGeology);
    removeActive();
    addActive(buttonGeology);
})