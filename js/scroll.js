
var documentHeight = document.body.offsetTop;

var first = document.getElementById("first-screen");
var second = document.getElementById("second-screen");
var third = document.getElementById("third-screen");
var fourth = document.getElementById("sixth-screen");
var fifth = document.getElementById("fourth-screen");
var currentScreen = "first-screen";
var previuosScreen;

function screenScroll() {
    window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 50) {
           //document.getElementById("second-screen").scrollIntoView(true)
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

function test(event) {
    window.addEventListener('wheel', function () {
        /*
            To create this algorithm I need to make sure that
             - Check the current page
             - Then decided where to redict the user
             -
         */

        if(event.deltaY >= 25 && currentScreen === "first-screen") {
            setTimeout(function () {
                document.getElementById("second-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "second-screen";
            }, 200);
        }
        if (event.deltaY >= 25 && currentScreen === "second-screen"){
            setTimeout(function () {
                document.getElementById("third-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "third-screen";
            }, 200)
        }
        if (event.deltaY >= 25 && currentScreen === "third-screen"){
            setTimeout(function () {
                document.getElementById("sixth-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "sixth-screen";
            }, 200)
        }
        if (event.deltaY >= 25 && currentScreen === "sixth-screen"){
            setTimeout(function () {
                document.getElementById("fourth-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "fourth-screen";
            }, 200)
        }
        if (event.deltaY <= -25 && currentScreen === "second-screen"){
            setTimeout(function () {
                document.getElementById("first-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "first-screen";
            }, 200)
        }
        if (event.deltaY <= -25 && currentScreen === "third-screen"){
            setTimeout(function () {
                document.getElementById("second-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "second-screen";
            }, 200)
        }
        if (event.deltaY <= -25 && currentScreen === "sixth-screen"){
            setTimeout(function () {
                document.getElementById("third-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "third-screen";
            },200)
        }
        if (event.deltaY <= -25 && currentScreen === "fourth-screen"){
            setTimeout(function () {
                document.getElementById("sixth-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "sixth-screen";
            }, 200)
        }

        //console.log(currentScreen);
        console.log(event.deltaY);
    })
}

function smoothScroll() {

}