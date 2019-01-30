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
    $("#myNavbar a, .navbar-header a, #viewworksbtn a, footer > a").on('click', function(event){
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

// 필터
filter("all")
function filter(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-btn");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
