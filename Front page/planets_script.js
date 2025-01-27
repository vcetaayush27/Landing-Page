document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");
    const detailsBox = document.querySelector(".planet-details");
    const nameElem = document.getElementById("planet-name");
    const ageElem = document.getElementById("planet-age");
    const radiusElem = document.getElementById("planet-radius");
    const rotationElem = document.getElementById("planet-rotation");
    const revolutionElem = document.getElementById("planet-revolution");

    planets.forEach(planet => {
        planet.addEventListener("mouseover", () => {
            const name = planet.dataset.name;
            const age = planet.dataset.age;
            const radius = planet.dataset.radius;
            const rotation = planet.dataset.rotation;
            const revolution = planet.dataset.revolution;

            nameElem.textContent = `Name: ${name}`;
            ageElem.textContent = `Age: ${age}`;
            radiusElem.textContent = `Radius: ${radius}`;
            rotationElem.textContent = `Rotation Period: ${rotation}`;
            revolutionElem.textContent = `Revolution Period: ${revolution}`;

            detailsBox.style.display = "block";
        });

        planet.addEventListener("mouseout", () => {
            detailsBox.style.display = "none";
        });
    });
});
