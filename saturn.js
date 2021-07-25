const buttons = document.querySelectorAll('.lead__button');
const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelectorAll(".lead__image");
const planetGeologyView = document.querySelectorAll(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");
const sourceLink = document.querySelector(".lead__source-link");
const windowWidth = window.matchMedia("(max-width: 605px)");
const hamburgerButton = document.querySelector(".header__menu-btn");
const mobileMenu = document.querySelector(".menu");
let isClosed = true;

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

function addActiveMobile(button) {
    button.style.borderBottom = "4px solid #CD5120";
}

function removeActiveMobile() {
    buttons.forEach(button => {
        button.style.borderBottom = "transparent";
    })
}

function mobileButtonTextChange() {
    if (windowWidth.matches) {
        buttonOverview.textContent = "overview";
        buttonInternal.textContent = "structure";
        buttonGeology.textContent = "surface";
    }
}

function addPlanetDetails(planetObject) {
    planetImage.forEach(planet => {
        planet.src = planetObject.image;
        planet.alt = planetObject.alt;
    })
    planetDescription.textContent = planetObject.description;
    sourceLink.href = planetObject.link;
}

function geologyActive(button) {
    planetGeologyView.forEach(geologyView => {
        if (button === buttonGeology) {
            geologyView.classList.add('image-active');
        } else {
            geologyView.classList.remove('image-active');
        }
    })
};


mobileButtonTextChange();

window.addEventListener('load', () => {
    if (windowWidth.matches) {
        addActiveMobile(buttonOverview);
    } else {
        addActive(buttonOverview);
    }
});

buttonOverview.addEventListener('click', () => {
    addPlanetDetails(saturnOverview);
    geologyActive(buttonOverview);
    if (windowWidth.matches) {
        removeActiveMobile()
        addActiveMobile(buttonOverview);
    } else {
        removeActive();
        addActive(buttonOverview);
    }
})

buttonInternal.addEventListener('click', () => {
    addPlanetDetails(saturnInternal);
    geologyActive(buttonInternal);
    if (windowWidth.matches) {
        removeActiveMobile()
        addActiveMobile(buttonInternal);
    } else {
        removeActive();
        addActive(buttonInternal);
    }
})

buttonGeology.addEventListener('click', () => {
    addPlanetDetails(saturnGeology);
    geologyActive(buttonGeology);
    if (windowWidth.matches) {
        removeActiveMobile()
        addActiveMobile(buttonGeology);
    } else {
        removeActive();
        addActive(buttonGeology);
    }
})

function toggleMenu() {
    if (isClosed) {
        mobileMenu.classList.add('menu-active');
        mobileMenu.classList.remove('menu-inactive');
        isClosed = !isClosed;
    } else {
        mobileMenu.classList.remove('menu-active');
        mobileMenu.classList.add('menu-inactive');
        isClosed = !isClosed;
    }
}

hamburgerButton.addEventListener('click', toggleMenu);