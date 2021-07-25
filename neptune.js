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

function addActiveMobile(button) {
    button.style.borderBottom = "4px solid #2D68F0";
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
    addPlanetDetails(neptuneOverview);
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
    addPlanetDetails(neptuneInternal);
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
    addPlanetDetails(neptuneGeology);
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