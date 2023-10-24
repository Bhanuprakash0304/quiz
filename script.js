const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Earth"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Giraffe", "Blue Whale"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const resultContainer = document.getElementById("result-container");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsContainer.appendChild(label);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
    }
}

function showResult() {
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = score;
}

nextButton.addEventListener("click", () => {
    checkAnswer();
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
});

displayQuestion();
