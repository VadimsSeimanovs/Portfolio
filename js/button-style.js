function changeButton(button){
    var currentButton = document.querySelector(button);
    var newElement = document.createElement('header');
    newElement.innerHTML = 'About Me';
    currentButton.replaceChild(newElement, currentButton);
}