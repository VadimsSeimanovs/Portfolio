function mouseScroll(event){
    var currentScreen = "first-screen";
    var startTime = null;
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startingPosition = window.pageYOffset;
    var distance = targetPosition - startingPosition;
    if (event.deltaY <= -25){
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
            case "sixth-screen":
                setTimeout(function () {
                    document.getElementById("third-screen").scrollIntoView({behavior: "smooth"});
                    currentScreen = "third-screen";
                },500)
                break;
            case "fourth-screen":
                setTimeout(function () {
                    document.getElementById("sixth-screen").scrollIntoView({behavior: "smooth"});
                    currentScreen = "sixth-screen";
                }, 500)
                break;
        }
    }
    if (event.deltaY >= 25){
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
                    document.getElementById("sixth-screen").scrollIntoView({behavior: "smooth"});
                    currentScreen = "sixth-screen";
                }, 500)
                break;
            case "sixth-screen":
                setTimeout(function () {
                    document.getElementById("fourth-screen").scrollIntoView({behavior: "smooth"});
                    currentScreen = "fourth-screen";
                }, 500)
                break;
        }
    }
    
    function animation(currentTime){
        if(startTime === null){
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startingPosition, distance, duration)
    }

    function ease(t, b, c ,d){
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * b;
        t--;
        return  -c / 2 * (t * (t - 2) - 1) +b;
    }
    requestAnimationFrame(animation);
}