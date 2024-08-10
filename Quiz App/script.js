const quizData = [
    {
        question: "What is 5 + 3?",
        a: "6",
        b: "8",
        c: "10",
        d: "7",
        correct: "b"
    },
    {
        question: "What is 12 / 4?",
        a: "3",
        b: "4",
        c: "6",
        d: "8",
        correct: "a"
    },
    {
        question: "What is 7 * 6?",
        a: "42",
        b: "36",
        c: "48",
        d: "54",
        correct: "a"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadNextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        document.getElementById('quiz').innerHTML = `
            <div class="question">
                <h2>${currentQuestion.question}</h2>
                <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
                <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
                <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
                <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label>
            </div>
        `;
        currentQuestionIndex++;
    } else {
        showResults();
    }
}

function showResults() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer && selectedAnswer.value === quizData[currentQuestionIndex - 1].correct) {
        score++;
    }

    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('score').innerText = `You scored ${score} out of ${quizData.length}`;
}

function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    loadNextQuestion();
}

// Load the first question when the page loads
loadNextQuestion();

