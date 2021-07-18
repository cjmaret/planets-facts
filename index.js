const buttons = document.querySelectorAll('.lead__button');
const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelector(".lead__image");
const planetGeologyView = document.querySelector(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");
const sourceLink = document.querySelector(".lead__source-link");

const mercuryOverview = {
    alt: "Mercury Planet",
    image: "./assets/mercury/planet-mercury.svg",
    link: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
}

const mercuryInternal = {
    alt: "Mercury Planet Internal View",
    image: "./assets/mercury/planet-mercury-internal.svg",
    link: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
    description: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
}

const mercuryGeology = {
    alt: "Mercury Planet Geology View",
    image: "./assets/mercury/planet-mercury.svg",
    link: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
    description: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
}

function addActive(button) {
    button.style.backgroundColor = "#419EBB";
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
    addPlanetDetails(mercuryOverview);
    geologyActive(buttonOverview);
    removeActive();
    addActive(buttonOverview);
})

buttonInternal.addEventListener('click', () => {
    addPlanetDetails(mercuryInternal);
    geologyActive(buttonInternal);
    removeActive();
    addActive(buttonInternal);
})


buttonGeology.addEventListener('click', () => {
    addPlanetDetails(mercuryGeology);
    geologyActive(buttonGeology);
    removeActive();
    addActive(buttonGeology);
})

