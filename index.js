const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll('.nav_links li');




  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ' ';
      } else {
        link.style.animation = ' NavLinkFade 0.5s ease forwards ${index / 7 + 0.5}s';
      }
    });
    //burger Animation
    burger.classList.toggle('toggle');
    
  });

}

navslide();
