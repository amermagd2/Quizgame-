const questions = [
    { question: "هل كان عيسى يعبد الله الواحد؟", options: ["نعم", "لا"], answer: "نعم", color: ["#4CAF50", "#2E7D32"] },
    { question: "ما الديانة الوحيدة التي تعبد الله الواحد؟", options: ["المسيحية", "اليهودية", "الإسلام"], answer: "الإسلام", color: ["#FF9800", "#E65100"] },
    { question: "هل قال عيسى إنه رسول الله؟", options: ["نعم", "لا"], answer: "نعم", color: ["#2196F3", "#0D47A1"] },
    { question: "ما الديانة التي تؤمن أن عيسى رسول؟", options: ["المسيحية", "الإسلام"], answer: "الإسلام", color: ["#9C27B0", "#6A1B9A"] },
    { question: "هل كان عيسى يأكل لحم الخنزير؟", options: ["نعم", "لا"], answer: "لا", color: ["#F44336", "#D32F2F"] },
    { question: "ما الديانة التي تحرم أكل الخنزير؟", options: ["المسيحية", "اليهودية", "الإسلام"], answer: "الإسلام", color: ["#FFEB3B", "#FBC02D"] },
    { question: "هل كان عيسى يشرب الخمر؟", options: ["نعم", "لا"], answer: "لا", color: ["#3F51B5", "#1A237E"] },
    { question: "ما الديانة التي تنهى عن شرب الخمر؟", options: ["المسيحية", "الإسلام"], answer: "الإسلام", color: ["#607D8B", "#455A64"] }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const askButton = document.getElementById("ask-btn");
    const body = document.getElementById("quiz-body");

    if (currentQuestionIndex >= questions.length) {
        questionElement.textContent = "🎉 تهانينا! لقد أكملت الاختبار.";
        optionsElement.innerHTML = "";
        askButton.style.display = "block";
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    body.style.background = `linear-gradient(to right, ${currentQuestion.color[0]}, ${currentQuestion.color[1]})`;
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    feedbackElement.textContent = "";
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        nextQuestion();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

loadQuestion();