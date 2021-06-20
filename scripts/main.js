let myHeading = document.querySelector('h1');
myHeading.textContent = 'Pokemon situations';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
 alert(String(getRandomInt(10)));
  
  
 var Rep = 0;
 let L = [];
 for(let i=0; i<18; i=i+1) {
   L.push(String(i) + ".png");
 }
console.log(L);

let typeA = document.getElementById("imgA");
let typeD = document.getElementById("imgD");

var ancienne = document.getElementById("rep");
var Score = document.getElementById("score");
var score = 0;

 let indA = getRandomInt(18);
 let indD = getRandomInt(18);
typeA.setAttribute("src", "images/" + L[indA]);
typeD.setAttribute("src", "images/" + L[indD]);

function Reponse(A, D) {
  if (((A == 0 || A == 1) && D == 7) || (A == 3 && D == 8) || (A == 4 && D == 2) || (A == 7 && D == 0) || (A == 12 && D == 4) || (A == 13 && D == 16) || (A == 15 && D == 17)) {
    Rep = "Inefficace";
  }
  else if ((A == 0 && (D == 5 || D == 8)) || (A == 1 && (D == 2 || D == 3 || D == 6 || D == 13 || D == 17)) || (A == 2 && (D == 5 || D == 8 || D == 12)) || (A == 3 && (D == 3 || D == 4 || D == 5 || D == 7)) || (A == 4 && (D == 6 || D == 11)) || (A == 5 && (D == 1 || D == 4 || D == 8)) || (A == 6 && (D == 1 || D == 2 || D == 3 || D == 7 || D == 8 || D == 9 || D == 17)) || (A == 7 && D == 16) || (A == 8 && (D == 8 || D == 9 || D == 10 || D == 12)) || (A == 9 && (D == 5 || D == 9 || D == 10 || D == 15)) || (A == 10 && (D == 10 || D == 11 || D == 15)) || (A == 11 && (D == 2 || D == 3 || D == 6 || D == 8 || D == 9 || D == 11 || D == 15)) || (A == 12 && (D == 11 || D == 12 || D == 15)) || (A == 13 && (D == 8 || D == 13)) || (A == 14 && (D == 8 || D == 9 || D == 10 || D == 14)) || (A == 15 && D == 8) || (A == 16 && (D == 1 || D == 16 || D == 17)) || (A == 17 && (D == 3 || D == 8 || D == 9))) {
    Rep = "Peu efficace";
  }
  else if ((A == 1 && (D == 0 || D == 5 || D == 8 || D == 14 || D == 16)) || (A == 2 && (D == 1 || D == 6 || D == 11)) || (A == 3 && (D == 11 || D == 17)) || (A == 4 && (D == 3 || D == 5 || D == 8 || D == 9 || D == 12)) || (A == 5 && (D == 2 || D == 6 || D == 9 || D == 14)) || (A == 6 && (D == 11 || D == 13 || D == 16)) || (A == 7 && (D == 7 || D == 13)) || (A == 8 && (D == 5 || D == 14 || D == 17)) || (A == 9 && (D == 6 || D == 8 || D == 11 || D == 14)) || (A == 10 && (D == 4 || D == 5 || D == 9)) || (A == 11 && (D == 4 || D == 5 || D == 10)) || (A == 12 && (D == 2 || D == 10)) || (A == 13 && (D == 1 || D == 3)) || (A == 14 && (D == 2 || D == 4 || D == 11 || D == 15)) || (A == 15 && D == 15) || (A == 16 && (D == 7 || D == 13)) || (A == 17 && (D == 1 || D == 15 || D == 16))) {
    Rep = "Très efficace";
  }
  else {
    Rep = "Efficace";
  }
}

function clic0() {
  E = Reponse(indA, indD);
  if (E == 'Inefficace') {
    ancienne.textContent = "Oui";
    score = score + 1;
  } else {
    ancienne.textContent = "Non ! La réponse était : " + Rep;
    score = score - 2;
  }
  Score.textContent = "Score" + String(score);
}


function clic05() {
  E = Reponse(indA, indD);
  if (E == 'Peu efficace') {
    ancienne.textContent = "Oui";
    score = score + 1;
  } else {
    ancienne.textContent = "Non ! La réponse était : " + Rep;
    score = score - 2;
  }
  Score.textContent = "Score" + String(score);
}



function clic1() {
  E = Reponse(indA, indD);
  if (E == 'Efficace') {
    ancienne.textContent = "Oui";
    score = score + 1;
  } else {
    ancienne.textContent = "Non ! La réponse était : " + Rep;
    score = score - 2;
  }
  Score.textContent = "Score" + String(score);
}



function clic2() {
  E = Reponse(indA, indD);
  if (E == 'Très efficace') {
    ancienne.textContent = "Oui";
    score = score + 1;
  } else {
    ancienne.textContent = "Non ! La réponse était : " + Rep;
    score = score - 2;
  }
  Score.textContent = "Score" + String(score);
}
