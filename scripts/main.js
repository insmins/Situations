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
 let indA = getRandomInt(18);
 let indD = getRandomInt(18);
typeA.setAttribute("src", "images/" + L[indA]);
typeD.setAttribute("src", "images/" + L[indD]);

function Reponse(A, D) {
  if ((A == 0 or A == 1) and D == 7) or (A == 3 and D == 8) or (A == 4 and D == 2) or (A == 7 and D == 0) or (A == 12 and D == 4) or (A == 13 and D == 16) or (A == 15 and D == 17) {
    Rep = "Inefficace";
  }
  else if (A == 0 and (D == 5 or D == 8)) or (A == 1 and (D == 2 or D == 3 or D == 6 or D == 13 or D == 17)) or (A == 2 and (D == 5 or D == 8 or D == 12)) or (A == 3 and (D == 3 or D == 4 or D == 5 or D == 7)) or (A == 4 and (D == 6 or D == 11)) or (A == 5 and (D == 1 or D == 4 or D == 8)) or (A == 6 and (D == 1 or D == 2 or D == 3 or D == 7 or D == 8 or D == 9 or D == 17)) or (A == 7 and D == 16) or (A == 8 and (D == 8 or D == 9 or D == 10 or D == 12)) or (A == 9 and (D == 5 or D == 9 or D == 10 or D == 15)) or (A == 10 and (D == 10 or D == 11 or D == 15)) or (A == 11 and (D == 2 or D == 3 or D == 6 or D == 8 or D == 9 or D == 11 or D == 15)) or (A == 12 and (D == 11 or D == 12 or D == 15)) or (A == 13 and (D == 8 or D == 13)) or (A == 14 and (D == 8 or D == 9 or D == 10 or D == 14)) or (A == 15 and D == 8) or (A == 16 and (D == 1 or D == 16 or D == 17)) or (A == 17 and (D == 3 or D == 8 or D == 9)) {
    Rep = "Peu efficace";
  }
  else if (A == 1 and (D == 0 or D == 5 or D == 8 or D == 14 or D == 16)) or (A == 2 and (D == 1 or D == 6 or D == 11)) or (A == 3 and (D == 11 or D == 17)) or (A == 4 and (D == 3 or D == 5 or D == 8 or D == 9 or D == 12)) or (A == 5 and (D == 2 or D == 6 or D == 9 or D == 14)) or (A == 6 and (D == 11 or D == 13 or D == 16)) or (A == 7 and (D == 7 or D == 13)) or (A == 8 and (D == 5 or D == 14 or D == 17)) or (A == 9 and (D == 6 or D == 8 or D == 11 or D == 14)) or (A == 10 and (D == 4 or D == 5 or D == 9)) or (A == 11 and (D == 4 or D == 5 or D == 10)) or (A == 12 and (D == 2 or D == 10)) or (A == 13 and (D == 1 or D == 3)) or (A == 14 and (D == 2 or D == 4 or D == 11 or D == 15)) or (A == 15 and D == 15) or (A == 16 and (D == 7 or D == 13)) or (A == 17 and (D == 1 or D == 15 or D == 16)) {
    Rep = "Très efficace";
  }
  else {
    Rep = "Efficace";
  }
}

console.log(Rep);
