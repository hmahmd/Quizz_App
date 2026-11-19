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

const TIME_LIMIT = 15;

const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const countEl = document.getElementById("question-count");
const timerEl = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;
let timeLeft = 0;
let timerId = null;
let autoNextId = null;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showQuestion() {
  const q = questions[currentIndex];

  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";
  questionEl.textContent = currentIndex + 1 + ". " + q.question;
  countEl.textContent =
    "Question " + (currentIndex + 1) + " of " + questions.length;

  shuffle(q.options).forEach(function (option) {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", function () {
      checkAnswer(btn, q.answer);
    });
    optionsEl.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  stopTimer();
  timeLeft = TIME_LIMIT * 10;
  updateTimerUI();

  timerId = setInterval(function () {
    timeLeft--;
    updateTimerUI();

    if (timeLeft <= 0) {
      stopTimer();
      timeUp();
    }
  }, 100);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function updateTimerUI() {
  const percent = (timeLeft / (TIME_LIMIT * 10)) * 100;
  progressBar.style.width = percent + "%";
  timerEl.textContent = Math.ceil(timeLeft / 10) + "s";

  const low = timeLeft <= 50;
  timerEl.classList.toggle("warning", low);
  progressBar.classList.toggle("warning", low);
}

function lockButtons(correctAnswer) {
  document.querySelectorAll(".option-btn").forEach(function (btn) {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });
}

function checkAnswer(clickedBtn, correctAnswer) {
  stopTimer();

  if (clickedBtn.textContent === correctAnswer) {
    score++;
  } else {
    clickedBtn.classList.add("wrong");
  }

  lockButtons(correctAnswer);
  nextBtn.style.display = "inline-block";
}

function timeUp() {
  lockButtons(questions[currentIndex].answer);
  autoNextId = setTimeout(goNext, 1500);
}

function goNext() {
  clearTimeout(autoNextId);
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  stopTimer();
  quizEl.style.display = "none";

  const percent = Math.round((score / questions.length) * 100);
  resultEl.innerHTML =
    "You scored " +
    score +
    " out of " +
    questions.length +
    "!" +
    "<span>Percentage: " +
    percent +
    "%</span>";
  resultEl.style.display = "block";

  nextBtn.textContent = "Play Again";
  nextBtn.style.display = "inline-block";
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  resultEl.style.display = "none";
  quizEl.style.display = "block";
  nextBtn.textContent = "Next";
  showQuestion();
}

nextBtn.addEventListener("click", function () {
  if (nextBtn.textContent === "Play Again") {
    restartQuiz();
  } else {
    goNext();
  }
});

showQuestion();
