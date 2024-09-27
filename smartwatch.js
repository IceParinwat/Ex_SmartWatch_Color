let blackcolor=document.getElementById('black');
let orengecolor=document.getElementById('orenge');
let pinkcolor=document.getElementById('pink');
let purplecolor=document.getElementById('purple');
let watchImage=document.getElementById('watchColor');

blackcolor.addEventListener('click', function (){
 watchImage.src="./image/black-watch.png";
    })
orengecolor.addEventListener('click', function (){
 watchImage.src="./image/orenge-watch.png";
    })
pinkcolor.addEventListener('click', function (){
 watchImage.src="./image/pink-watch.png";
    })
purplecolor.addEventListener('click', function (){
 watchImage.src="./image/purple-watch.png";
    })

