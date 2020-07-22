var documentHeight = document.body.offsetTop;

var first = document.getElementById("first-screen");
var second = document.getElementById("second-screen");
var third = document.getElementById("third-screen");
var fourth = document.getElementById("sixth-screen");
var fifth = document.getElementById("fourth-screen");

function screenScroll() {
    window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 50) {
           //document.getElementById("second-screen").scrollIntoView(true9)

        }else{
           //document.getElementById("second-screen").scrollIntoView(false);
        }
    })
}

function getHeight() {
    window.addEventListener('scroll', function () {
        console.log(document.documentElement.scrollTop);
    })
}