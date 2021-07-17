const buttonOverview = document.querySelector(".lead__button_type_overview");
const buttonInternal = document.querySelector(".lead__button_type_internal");
const buttonGeology = document.querySelector(".lead__button_type_geology");
const planetImage = document.querySelector(".lead__image");
const planetGeologyView = document.querySelector(".lead__geology-image");
const planetDescription = document.querySelector(".lead__description");

const mercuryOverview = {
    alt: "Mercury Planet",
    image: "./assets/mercury/planet-mercury.svg",
    description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
}

const mercuryInternal = {
    alt: "Mercury Planet Internal View",
    image: "./assets/mercury/planet-mercury-internal.svg",
    description: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
}

const mercuryGeology = {
    alt: "Mercury Planet Geology View",
    image: "./assets/mercury/geology-mercury.png",
    description: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
}


buttonOverview.addEventListener('click', () => {
    planetImage.src = mercuryOverview.image;
    planetImage.alt = mercuryOverview.alt;
    planetGeologyView.classList.remove('image-active');
    planetDescription.textContent = mercuryOverview.description;
    buttonOverview.classList.add("lead__button-active");
    buttonInternal.classList.remove("lead__button-active");
    buttonGeology.classList.remove("lead__button-active");
})

buttonInternal.addEventListener('click', () => {
    planetImage.src = mercuryInternal.image;
    planetImage.alt = mercuryInternal.alt;
    planetGeologyView.classList.remove('image-active');
    planetDescription.textContent = mercuryInternal.description;
    buttonOverview.classList.remove("lead__button-active");
    buttonInternal.classList.add("lead__button-active");
    buttonGeology.classList.remove("lead__button-active");
})


buttonGeology.addEventListener('click', () => {
    planetImage.src = mercuryOverview.image;
    planetImage.alt = mercuryGeology.alt;
    planetGeologyView.classList.add('image-active');
    planetDescription.textContent = mercuryGeology.description;
    buttonOverview.classList.remove("lead__button-active");
    buttonInternal.classList.remove("lead__button-active");
    buttonGeology.classList.add("lead__button-active");
})

