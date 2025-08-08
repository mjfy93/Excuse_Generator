

let who = ["My dog", "A thief", "My grandfather", "I", "My sister"];
let action = ["destroyed", "broke", "lost", "fell off", "jumped off"];
let what = ["our roof", "our house", "my dad's car", "my bike", "my laptop"];
let when = ["today.", "last night.", "a few hours ago.", "yesterday.", "this weekend."];


let randomWho = who[Math.floor(Math.random() * who.length)];
let randomAction = action[Math.floor(Math.random() * action.length)];
let randomWhat = what[Math.floor(Math.random() * what.length)];
let randomWhen = when[Math.floor(Math.random() * when.length)];

window.onload = function () {
  document.querySelector('#excuse').innerHTML = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`
};






