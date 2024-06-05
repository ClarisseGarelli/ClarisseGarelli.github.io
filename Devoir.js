// Message de bienvenu personnnalisé

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'Genshin_Impact.webp') {
    myImage.setAttribute ('src','Genshin-Impact-Logo.png');
  } else {
    myImage.setAttribute ('src','Genshin_Impact.webp');
  }
}


// Indication du personnage préféré

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Quel est ton nom voyageur ?');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Bienvenue en Teyvat, '
}}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bienvenue en Teyvat, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
