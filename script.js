const quiz = [
  {
    q: "What does HTML stand for?",
    o: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Markup", "None"],
    a: 0
  },
  {
    q: "Which is used for styling?",
    o: ["HTML", "Java", "CSS", "Python"],
    a: 2
  },
  {
    q: "JavaScript is used for?",
    o: ["Structure", "Styling", "Logic", "Database"],
    a: 2
  }
];

let index = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.querySelectorAll(".opt");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

loadQuestion();

function loadQuestion() {
  result.innerText = "";
  nextBtn.style.display = "none";

  question.innerText = quiz[index].q;
  options.forEach((btn, i) => {
    btn.innerText = quiz[index].o[i];
    btn.disabled = false;
  });
}

function checkAnswer(choice) {
  if (choice === quiz[index].a) {
    result.innerText = "Correct!";
    result.style.color = "green";
    score++;
  } else {
    result.innerText = "Wrong!";
    result.style.color = "red";
  }

  options.forEach(btn => btn.disabled = true);
  nextBtn.style.display = "block";
}

function nextQuestion() {
  index++;
  if (index < quiz.length) {
    loadQuestion();
  } else {
    question.innerText = "Quiz Completed!";
    document.querySelector(".options").innerHTML =
      `<h3>Your Score: ${score}/${quiz.length}</h3>`;
    nextBtn.style.display = "none";
    result.innerText = "";
  }
}
