const questions = [
  {
    question: "Which is largest animal in the world?",
    options: ["Shark", "Blue whale", "Elephant", "Giraffe"],
    answer: "Blue whale",
  },
  {
    question: "Which is the smallest country in the world?",
    options: ["Vatican City", "Bhutan", "Nepal", "Shri Lanka"],
    answer: "Vatican City",
  },
  {
    question: "Which is the largest desert in the world?",
    options: ["Kalahari", "Gobi", "Sahara", "Antarctica"],
    answer: "Antarctica",
  },
  {
    question: "Which is the smallest continent in the world?",
    options: ["Asia", "Australia", "Arctic", "Africa"],
    answer: "Australia",
  },
];

const quizBox = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;

function showQuestion() {
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";

  const q = questions[currentIndex];
  questionEl.textContent = currentIndex + 1 + ". " + q.question;

  q.options.forEach(function (option) {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", function () {
      checkAnswer(btn, q.answer);
    });
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(clickedBtn, correctAnswer) {
  const allButtons = document.querySelectorAll(".option-btn");

  if (clickedBtn.textContent === correctAnswer) {
    clickedBtn.classList.add("correct");
    score++;
  } else {
    clickedBtn.classList.add("wrong");
    allButtons.forEach(function (btn) {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  allButtons.forEach(function (btn) {
    btn.disabled = true;
  });

  nextBtn.style.display = "inline-block";
}

function showResult() {
  nextBtn.style.display = "none";
  quizBox.innerHTML =
    '<p id="result">You scored ' +
    score +
    " out of " +
    questions.length +
    "!</p>";

  nextBtn.textContent = "Play Again";
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", function () {
  if (nextBtn.textContent === "Play Again") {
    location.reload();
    return;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

showQuestion();
