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

function addActiveMobile(button) {
    button.style.borderBottom = "4px solid #419EBB";
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
    addPlanetDetails(mercuryOverview);
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
    addPlanetDetails(mercuryInternal);
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
    addPlanetDetails(mercuryGeology);
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