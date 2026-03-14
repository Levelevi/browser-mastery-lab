
const questions = [
{
  question: "What does HTML stand for?",
  answers: [
    "Hyper Text Markup Language",
    "High Tech Modern Language",
    "Hyper Transfer Machine Language",
    "Home Tool Markup Language"
  ],
  correct: "Hyper Text Markup Language"
},
{
  question: "Which language is used to style web pages?",
  answers: [
    "HTML",
    "CSS",
    "Python",
    "C++"
  ],
  correct: "CSS"
},
{
  question: "Which company developed JavaScript?",
  answers: [
    "Microsoft",
    "Google",
    "Netscape",
    "Apple"
  ],
  correct: "Netscape"
},
{
  question: "Which keyword is used to declare a variable in JavaScript?",
  answers: [
    "var",
    "int",
    "string",
    "define"
  ],
  correct: "var"
},
{
  question: "Which method is used to select an element in JavaScript?",
  answers: [
    "querySelector",
    "getElementById",
    "getElementsByClassName",
    "All of the above"
  ],
  correct: "All of the above"
}
];
const container=document.querySelector(".container");
const allquestions=document.querySelector("questions");
const startgamebtn=document.getElementById("startBtn");
function quizApp(event){
const target=event.target;
if(target.matches("#startBtn"))renderGame();
}
function renderGame(){
console.log("yoo");

startgamebtn.classList.add("hideBtn")
const thisGame=document.createElement("div");
thisGame.classList.add("thisGameContainer");
thisGame.innerHTML = `
  <div class="questionBox">
      <h2 class="question">What is the capital of France?</h2>

      <div class="answers">
          <button class="answer">Berlin</button>
          <button class="answer">Madrid</button>
          <button class="answer">Paris</button>
          <button class="answer">Rome</button>
      </div>

      <p class="result" style="display:none;">Correct!</p>

      <button class="nextBtn">Next Question</button>
  </div>
`;
allquestions.append(thisGame);
};
container.addEventListener("click",quizApp);

