const inputs= document.querySelectorAll(".angle-input");
const isTriangleBtn=document.querySelector("#istriangle-btn");
const Output= document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){
const sum=angle1+angle2+angle3;
//console.log(sum);
return sum;
}
function isTriangle(){
if(inputs[0].value<0||inputs[1].value<0||inputs[2].value<0||inputs[0].value==""||inputs[1].value==""||inputs[2].value==""){
    Output.innerText="Please enter a valid value";
}else{
    if(inputs[0].value>0 && inputs[1].value>0 && inputs[2].value>0){
    const sum= calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value),Number(inputs[2].value));
    if(sum===180){
        Output.innerText="Yay, this will form a triangle";
    }
    
    else{
        Output.innerText="bad luck, this will  not form a triangle";
    }

}

}
}
isTriangleBtn.addEventListener("click",isTriangle)
