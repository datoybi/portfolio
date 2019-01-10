var typed = new Typed('#typed', {
    strings: ["fullstack developer.", "web developer.", "front-end developer."],             
    typeSpeed: 50,
    loop: true,
    backDelay: 2000,
    backSpeed: 25
});

const viewworksbtn = document.querySelector("#viewworksbtn");
const span = viewworksbtn.querySelector("span");

viewworksbtn.addEventListener("mouseover", function() {
     span.classList.add("rotate");
});

viewworksbtn.addEventListener("mouseout", function() {
    span.classList.remove("rotate");
});