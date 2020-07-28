var currentScreen = "first-screen";
function mouseScroll(event){
    if (event.deltaY <= -25){
        switch (currentScreen) {
            case "first-screen":
                setTimeout(function(){
                    document.getElementById("first-screen").scrollIntoView(true);
                    currentScreen = "first-screen";
                }, 500);
                break;
            case "second-screen":
                setTimeout(function () {
                    document.getElementById("first-screen").scrollIntoView(true);
                    currentScreen = "first-screen";
                }, 500)
                break;
            case "third-screen":
                setTimeout(function () {
                    document.getElementById("second-screen").scrollIntoView(true);
                    currentScreen = "second-screen";
                }, 500)
                break;
            case "sixth-screen":
                setTimeout(function () {
                    document.getElementById("third-screen").scrollIntoView(true);
                    currentScreen = "third-screen";
                },500)
                break;
            case "fourth-screen":
                setTimeout(function () {
                    document.getElementById("sixth-screen").scrollIntoView(true);
                    currentScreen = "sixth-screen";
                }, 500)
                break;
        }
    }
    if (event.deltaY >= 25){
        switch (currentScreen) {
            case "first-screen":
                setTimeout(function () {
                    document.getElementById("second-screen").scrollIntoView(true);
                    currentScreen = "second-screen";
                }, 500);
                break;
            case "second-screen":
                setTimeout(function () {
                    document.getElementById("third-screen").scrollIntoView(true);
                    currentScreen = "third-screen";
                }, 500)
                break;
            case "third-screen":
                setTimeout(function () {
                    document.getElementById("sixth-screen").scrollIntoView(true);
                    currentScreen = "sixth-screen";
                }, 500)
                break;
            case "sixth-screen":
                setTimeout(function () {
                    document.getElementById("fourth-screen").scrollIntoView(true);
                    currentScreen = "fourth-screen";
                }, 500)
                break;
        }
    }
    console.log(currentScreen);
}