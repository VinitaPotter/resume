window.onscroll = function() {stickyNav()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

