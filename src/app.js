import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    // Call your excuse-generating function here
  const excuse = generateExcuse(); // Assuming your function is named generateExcuse
  document.getElementById('excuse').innerHTML = excuse
}
 function generateExcuse(){
  let who = ["My dog", "A thief", "My grandfather", "I", "My sister"];
  let action = ["destroyed", "broke", "lost", "fell off", "lost"];
  let what = ["our roof", "our house", "my dad's car", "my bike", "my laptop"];
  let when = ["today.", "last night.", "a few hours ago.", "yesterday.", "this weekend."];
  
  let randomWho= who[Math.floor (Math.random()*who.length)];
  let randomAction= action[Math.floor (Math.random()*action.length)];
  let randomWhat= what[Math.floor(Math.random()*what.length)];
  let randomWhen= when[Math.floor (Math.random()*when.length)];

let excuse = "I'm so sorry!" + " " + `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
return excuse;
}
console.log (generateExcuse);
