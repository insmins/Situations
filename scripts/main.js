let myHeading = document.querySelector('h1');
myHeading.textContent = 'Pokemon situations';
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
  
 alert(String(getRandomInt(10)));
  
  
 let Rep = 0;
 let L = [];
 for(let i=0; i<18; i=i+1) {
   L.push(String(i) + ".png");
 }
 let indA = getRandomInt(18);
 let indD = getRandomInt(18);
