0
const toggleButton = document.getElementById("hamburger");
const navbarLink = document.getElementById("navbar-link");

toggleButton.addEventListener("click", () => {
    if(navbarLink.style.display === "none"){navbarLink.style.display = "block";}
    else{
      navbarLink.style.display = "none";
    }
});

