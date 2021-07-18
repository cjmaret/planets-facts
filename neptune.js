const buttons = document.querySelectorAll('.lead__button');
const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelector(".lead__image");
const planetGeologyView = document.querySelector(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");
const sourceLink = document.querySelector(".lead__source-link");

const neptuneOverview = {
    alt: "Neptune Planet",
    image: "./assets/neptune/planet-neptune.svg",
    link: "https://en.wikipedia.org/wiki/Neptune",
    description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
}

const neptuneInternal = {
    alt: "Neptune Planet Internal View",
    image: "./assets/neptune/planet-neptune-internal.svg",
    link: "https://en.wikipedia.org/wiki/Neptune#Internal_structure",
    description: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
}

const neptuneGeology = {
    alt: "Neptune Planet Geology View",
    image: "./assets/neptune/planet-neptune.svg",
    link: "https://en.wikipedia.org/wiki/Neptune#Atmosphere",
    description: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
}

function addActive(button) {
    button.style.backgroundColor = "#2D68F0";
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
    addPlanetDetails(neptuneOverview);
    geologyActive(buttonOverview);
    removeActive();
    addActive(buttonOverview);
})

buttonInternal.addEventListener('click', () => {
    addPlanetDetails(neptuneInternal);
    geologyActive(buttonInternal);
    removeActive();
    addActive(buttonInternal);
})

buttonGeology.addEventListener('click', () => {
    addPlanetDetails(neptuneGeology);
    geologyActive(buttonGeology);
    removeActive();
    addActive(buttonGeology);
})