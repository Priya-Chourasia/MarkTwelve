const quizForm=document.querySelector(".quiz-form")
const submitBtn=document.querySelector("#submit-answer-btn");
const Output=document.querySelector("#output");

const correctAnswer=["90°","right angled","one right angle","12, 16, 20","Equilateral triangle","100°","30°","a + b + c","no","45°"];

function calculateScore(){
let score=0;
let index=0;
const formResults= new FormData(quizForm);
for(let value of formResults.values()){
    if(value===correctAnswer[index]){
        score=score + 1;
    }
    index=index+1;
}
Output.innerText="Your score is:"+ score;
}
submitBtn.addEventListener('click',calculateScore);