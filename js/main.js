var img1 = document.getElementById("imgo");

window.addEventListener('scroll', function() {

    // var srcoo = document.getElementById("imgo").src;

    if (window.pageYOffset > 100) {

        img1.src = "images/logo-red.png";


    } else {

        img1.src = "images/logo-white.png";


    }
});