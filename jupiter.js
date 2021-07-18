const buttons = document.querySelectorAll('.lead__button');
const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelector(".lead__image");
const planetGeologyView = document.querySelector(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");
const sourceLink = document.querySelector(".lead__source-link");

const jupiterOverview = {
    alt: "Jupiter Planet",
    image: "./assets/jupiter/planet-jupiter.svg",
    link: "https://en.wikipedia.org/wiki/Jupiter",
    description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
}

const jupiterInternal = {
    alt: "Jupiter Planet Internal View",
    image: "./assets/jupiter/planet-jupiter-internal.svg",
    link: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure",
    description: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
}

const jupiterGeology = {
    alt: "Jupiter Planet Geology View",
    image: "./assets/jupiter/planet-jupiter.svg",
    link: "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices",
    description: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
}

function addActive(button) {
    button.style.backgroundColor = "#D83A34";
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
    addPlanetDetails(jupiterOverview);
    geologyActive(buttonOverview);
    removeActive();
    addActive(buttonOverview);
})

buttonInternal.addEventListener('click', () => {
    addPlanetDetails(jupiterInternal);
    geologyActive(buttonInternal);
    removeActive();
    addActive(buttonInternal);
})

buttonGeology.addEventListener('click', () => {
    addPlanetDetails(jupiterGeology);
    geologyActive(buttonGeology);
    removeActive();
    addActive(buttonGeology);
})