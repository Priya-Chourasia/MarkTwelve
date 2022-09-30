const sides= document.querySelectorAll(".side-input");
const hypotenusBtn= document.querySelector("#hypotenus-btn");
const Output= document.querySelector("#output");

function calculateSumofSquares(a,b){
const sum= a*a + b*b;
return sum;
}
function calculateHypotenus(){
   const sum= calculateSumofSquares(Number(sides[0].value),Number(sides[1].value));
   const hypotenus= Math.sqrt(sum);
   Output.innerText="Your hypotenus is" + hypotenus.toFixed(2);
}

hypotenusBtn.addEventListener('click',calculateHypotenus);
