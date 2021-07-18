const buttons = document.querySelectorAll('.lead__button');
const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelector(".lead__image");
const planetGeologyView = document.querySelector(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");
const sourceLink = document.querySelector(".lead__source-link");

const uranusOverview = {
    alt: "Uranus Planet",
    image: "./assets/uranus/planet-uranus.svg",
    link: "https://en.wikipedia.org/wiki/uranus",
    description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
}

const uranusInternal = {
    alt: "Uranus Planet Internal View",
    image: "./assets/uranus/planet-uranus-internal.svg",
    link: "https://en.wikipedia.org/wiki/uranus#Internal_structure",
    description: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."

}

const uranusGeology = {
    alt: "Uranus Planet Geology View",
    image: "./assets/uranus/planet-uranus.svg",
    link: "https://en.wikipedia.org/wiki/Uranus#Atmosphere",
    description: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
}

function addActive(button) {
    button.style.backgroundColor = "#1EC1A2";
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
    addPlanetDetails(uranusOverview);
    geologyActive(buttonOverview);
    removeActive();
    addActive(buttonOverview);
})

buttonInternal.addEventListener('click', () => {
    addPlanetDetails(uranusInternal);
    geologyActive(buttonInternal);
    removeActive();
    addActive(buttonInternal);
})

buttonGeology.addEventListener('click', () => {
    addPlanetDetails(uranusGeology);
    geologyActive(buttonGeology);
    removeActive();
    addActive(buttonGeology);
})