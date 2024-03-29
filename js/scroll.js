var currentScreen = "first-screen";
function pageUpCheck(){
    switch (currentScreen) {
        case "first-screen":
            setTimeout(function(){
                document.getElementById("first-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "first-screen";
            }, 500);
            break;
        case "second-screen":
            setTimeout(function () {
                document.getElementById("first-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "first-screen";
            }, 500)
            break;
        case "third-screen":
            setTimeout(function () {
                document.getElementById("second-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "second-screen";
            }, 500)
            break;
        case "fourth-screen":
            setTimeout(function () {
                document.getElementById("third-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "third-screen";
            },500)
            break;
        case "fifth-screen":
            setTimeout(function () {
                document.getElementById("fourth-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "fourth-screen";
            }, 500)
            break;
        case "sixth-screen":
            setTimeout(function () {
                document.getElementById("fifth-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "fifth-screen";
            }, 500)
            break;
    }
}

function pageDownCheck(){
    switch (currentScreen) {
        case "first-screen":
            setTimeout(function () {
                document.getElementById("second-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "second-screen";
            }, 500);
            break;
        case "second-screen":
            setTimeout(function () {
                document.getElementById("third-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "third-screen";
            }, 500)
            break;
        case "third-screen":
            setTimeout(function () {
                document.getElementById("fourth-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "fourth-screen";
            }, 500)
            break;
        case "fourth-screen":
            setTimeout(function () {
                document.getElementById("fifth-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "fifth-screen";
            }, 500)
            break;
        case "fifth-screen":
            setTimeout(function () {
                document.getElementById("sixth-screen").scrollIntoView({behavior: "smooth"});
                currentScreen = "sixth-screen";
            }, 500)
            break;
    }
}

function mouseScroll(event){
    if (event.deltaY <= -25){
        pageUpCheck();
    }
    if (event.deltaY >= 25){
        pageDownCheck();
    }
}

function buttonScroll(screen){
    if(screen === "second-screen"){
        document.getElementById("second-screen").scrollIntoView({behavior: "smooth"});
        currentScreen = "second-screen";
    }
    if(screen === "third-screen"){
        document.getElementById("third-screen").scrollIntoView({behavior: "smooth"});
        currentScreen = "third-screen";
    }

    if(screen === "fourth-screen"){
        document.getElementById("fourth-screen").scrollIntoView({behavior: "smooth"});
        currentScreen = "fourth-screen";
    }

    if(screen === "fifth-screen"){
        document.getElementById("fifth-screen").scrollIntoView({behavior: "smooth"});
        currentScreen = "fifth-screen";
    }

    if(screen === "sixth-screen"){
        document.getElementById("sixth-screen").scrollIntoView({behavior: "smooth"});
        currentScreen = "sixth-screen";
    }
}

