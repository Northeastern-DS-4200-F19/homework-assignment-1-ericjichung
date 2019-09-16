let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

let toggle = true;
myImage.onclick = function () {
    if (toggle) {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
    toggle = !toggle
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name')
    sessionStorage.setItem('name',myName)
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!sessionStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = sessionStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}