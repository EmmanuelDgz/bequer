//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hola pinche putita';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/RedHat.png') {
      myImage.setAttribute ('src','images/Matlab_Logo.png');
    } else {
      myImage.setAttribute ('src','images/RedHat.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Bienvenido, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bienvenido, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
