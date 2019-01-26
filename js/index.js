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

$(document).ready(function() {
    $('body').scrollspy({target: ".myNavbar", offset:30});
    $("#myNavbar a, .navbar-header a, #viewworksbtn a").on('click', function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 500, function(){
                window.location.hash = hash;
            });
        } 
      });
 });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}