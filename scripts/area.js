const input=document.querySelectorAll(".base-height");
const areaButton=document.querySelector("#area-btn");
const Output= document.querySelector("#output");


function multiplicationofBaseAndHeight(a,b){
    const areaofTriangle= (a*b)/2;
    return areaofTriangle;
    }
    function calculateArea(){
      if(input[0].value<0||input[1].value<0||input[0].value==""||input[1].value==""){
         Output.innerText="Please enter a valid value";
     }else{
      const areaofTriangle= multiplicationofBaseAndHeight(Number(input[0].value),Number(input[1].value));
      Output.innerText="Your area is "+ areaofTriangle;
     }
       
    }
       areaButton.addEventListener('click',calculateArea);