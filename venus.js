const buttons = document.querySelectorAll('.lead__button');
const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelector(".lead__image");
const planetGeologyView = document.querySelector(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");
const sourceLink = document.querySelector(".lead__source-link");

const venusOverview = {
    alt: "Venus Planet",
    image: "./assets/venus/planet-venus.svg",
    link: "https://en.wikipedia.org/wiki/Venus",
    description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
}

const venusInternal = {
    alt: "Venus Planet Internal View",
    image: "./assets/venus/planet-venus-internal.svg",
    link: "https://en.wikipedia.org/wiki/Venus#Internal_structure",
    description: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."
}

const venusGeology = {
    alt: "Venus Planet Geology View",
    image: "./assets/venus/planet-venus.svg",
    link: "https://en.wikipedia.org/wiki/Geology_of_Venus",
    description: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
}

function addActive(button) {
    button.style.backgroundColor = "#EDA249";
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
    addPlanetDetails(venusOverview);
    geologyActive(buttonOverview);
    removeActive();
    addActive(buttonOverview);
})

buttonInternal.addEventListener('click', () => {
    addPlanetDetails(venusInternal);
    geologyActive(buttonInternal);
    removeActive();
    addActive(buttonInternal);
})


buttonGeology.addEventListener('click', () => {
    addPlanetDetails(venusGeology);
    geologyActive(buttonGeology);
    removeActive();
    addActive(buttonGeology);
})

