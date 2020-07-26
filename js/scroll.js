var currentScreen = "first-screen";

function mouseScroll(event) {
    window.addEventListener('wheel', function () {
        if (event.deltaY >= -25 && currentScreen === "first-screen"){
            setTimeout(function(){
                document.getElementById("first-screen").scrollIntoView(true);
                currentScreen = "first-screen";
            }, 500);
        }
        if(event.deltaY >= 25 && currentScreen === "first-screen") {
            setTimeout(function () {
                document.getElementById("second-screen").scrollIntoView(true);
                currentScreen = "second-screen";
            }, 500);
        }
        if (event.deltaY >= 25 && currentScreen === "second-screen"){
            setTimeout(function () {
                document.getElementById("third-screen").scrollIntoView(true);
                currentScreen = "third-screen";
            }, 500)
        }
        if (event.deltaY >= 25 && currentScreen === "third-screen"){
            setTimeout(function () {
                document.getElementById("sixth-screen").scrollIntoView(true);
                currentScreen = "sixth-screen";
            }, 500)
        }
        if (event.deltaY >= 25 && currentScreen === "sixth-screen"){
            setTimeout(function () {
                document.getElementById("fourth-screen").scrollIntoView(true);
                currentScreen = "fourth-screen";
            }, 500)
        }
        if (event.deltaY <= -25 && currentScreen === "second-screen"){
            setTimeout(function () {
                document.getElementById("first-screen").scrollIntoView(true);
                currentScreen = "first-screen";
            }, 500)
        }
        if (event.deltaY <= -25 && currentScreen === "third-screen"){
            setTimeout(function () {
                document.getElementById("second-screen").scrollIntoView(true);
                currentScreen = "second-screen";
            }, 500)
        }
        if (event.deltaY <= -25 && currentScreen === "sixth-screen"){
            setTimeout(function () {
                document.getElementById("third-screen").scrollIntoView(true);
                currentScreen = "third-screen";
            },500)
        }
        if (event.deltaY <= -25 && currentScreen === "fourth-screen"){
            setTimeout(function () {
                document.getElementById("sixth-screen").scrollIntoView(true);
                currentScreen = "sixth-screen";
            }, 500)
        }
    })
}
/*
function buttonScroll() {
    document.getElementById("about-title").addEventListener('click', function () {
        document.getElementById("second-screen").scrollIntoView(true);
    })
}
 */