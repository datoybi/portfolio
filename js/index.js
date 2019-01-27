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
// 움직이는 효과
$(document).ready(function() {
    $('body').scrollspy({target: ".myNavbar", offset:50});
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
//네비바 떨어트리는 효과
function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}