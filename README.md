# Quiz App

A simple, interactive quiz web application built with plain HTML, CSS and JavaScript. Created as part of the Trainlyze Frontend Development internship (Week 1, Project 2).

## Features

- 4 multiple-choice questions loaded dynamically from a JavaScript array
- 15-second countdown timer per question with a progress bar
- Progress bar and timer turn red in the last 5 seconds
- Auto-move to the next question when time runs out
- Randomized option order on every question
- Instant visual feedback: correct answer turns green, wrong answer turns red
- Correct answer is highlighted when the user picks a wrong option
- All options lock after one choice is made
- Final score screen with percentage (for example, "You scored 3 out of 4!")
- "Play Again" button to restart without reloading the page
- Clean, centered card layout with a responsive design

## Tech Stack

- HTML5 (semantic structure)
- CSS3 (Flexbox, transitions, state styling, responsive layout)
- JavaScript (DOM manipulation, event listeners, timers, array traversal)
- Google Fonts (Poppins)

## Project Structure

```
├── index.html
├── style.css
└── script.js
```

## How It Works

1. Questions are stored as an array of objects with the question text, options and correct answer.
2. Each question and its shuffled options are rendered dynamically using DOM manipulation.
3. A 15-second timer starts for every question, with a progress bar that shrinks as time passes.
4. On click, the selected answer is checked, styled green or red, and all buttons are locked.
5. If time runs out, the correct answer is shown and the quiz moves on automatically.
6. After the last question, the final score and percentage are displayed with a restart option.

## How to Run

1. Download or clone the repository
2. Open `index.html` in any browser

No installation or build tools needed.

## Deployment

Deployed on Vercel.

## Author

Hafiz Muhammad Ahmed
