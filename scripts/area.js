const input=document.querySelectorAll(".base-height");
const areaButton=document.querySelector("#area-btn");
const Output= document.querySelector("#output");


function multiplicationofBaseAndHeight(a,b){
    const areaofTriangle= (a*b)/2;
    return areaofTriangle;
    }
    function calculateArea(){
       const areaofTriangle= multiplicationofBaseAndHeight(Number(input[0].value),Number(input[1].value));
       Output.innerText="Your area is "+ areaofTriangle;
    }
       areaButton.addEventListener('click',calculateArea);