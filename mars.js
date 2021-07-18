const buttons = document.querySelectorAll('.lead__button');
const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelector(".lead__image");
const planetGeologyView = document.querySelector(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");
const sourceLink = document.querySelector(".lead__source-link");

const marsOverview = {
    alt: "Mars Planet",
    image: "./assets/mars/planet-mars.svg",
    link: "https://en.wikipedia.org/wiki/Mars",
    description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'."
}

const marsInternal = {
    alt: "Mars Planet Internal View",
    image: "./assets/mars/planet-mars-internal.svg",
    link: "https://en.wikipedia.org/wiki/Mars#Internal_structure",
    description: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
}

const marsGeology = {
    alt: "Mars Planet Geology View",
    image: "./assets/mars/planet-mars.svg",
    link: "https://en.wikipedia.org/wiki/Mars#Surface_geology",
    description: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
}

function addActive(button) {
    button.style.backgroundColor = "#D14C32";
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
    addPlanetDetails(marsOverview);
    geologyActive(buttonOverview);
    removeActive();
    addActive(buttonOverview);
})

buttonInternal.addEventListener('click', () => {
    addPlanetDetails(marsInternal);
    geologyActive(buttonInternal);
    removeActive();
    addActive(buttonInternal);
})


buttonGeology.addEventListener('click', () => {
    addPlanetDetails(marsGeology);
    geologyActive(buttonGeology);
    removeActive();
    addActive(buttonGeology);
})