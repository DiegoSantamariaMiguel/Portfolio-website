function myFunction(x) {
    if (x.matches) { // If media query matches

        document.getElementById("navbarToggleExternalContent").classList.remove("d-flex");
        document.getElementById("navbarToggleExternalContent").classList.remove("justify-content-end");
        document.getElementById("reactive-center-p").classList.remove("d-flex");
        document.getElementById("reactive-center-p").classList.remove("justify-content-center");
        document.getElementById("reactive-center-btn").classList.remove("d-flex");
        document.getElementById("reactive-center-btn").classList.remove("justify-content-center");
        document.getElementById("query-big-image").src = "/starter-code/images/homepage/mobile/image-homepage-hero.jpg";


    } else {

        document.getElementById("navbarToggleExternalContent").classList.add("d-flex");
        document.getElementById("navbarToggleExternalContent").classList.add("justify-content-end");
        document.getElementById("reactive-center-p").classList.add("d-flex");
        document.getElementById("reactive-center-p").classList.add("justify-content-center");
        document.getElementById("reactive-center-btn").classList.add("d-flex");
        document.getElementById("reactive-center-btn").classList.add("justify-content-center");
        document.getElementById("query-big-image").src = "/starter-code/images/homepage/desktop/image-homepage-hero.jpg";



    }
}

let x = window.matchMedia("(max-width: 768px)")
myFunction(x)
x.addListener(myFunction) // Attach listener function on state changes



