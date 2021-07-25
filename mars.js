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

function addActiveMobile(button) {
    button.style.borderBottom = "4px solid #D14C32";
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
    addPlanetDetails(marsOverview);
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
    addPlanetDetails(marsInternal);
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
    addPlanetDetails(marsGeology);
    geologyActive(buttonGeology);
    if (windowWidth.matches) {
        removeActiveMobile()
        addActiveMobile(buttonGeology);
    } else {
        removeActive();
        addActive(buttonGeology);
    }
});

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