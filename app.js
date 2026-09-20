// Question data - Replace this with your actual questions from the PDF
const questions = [
    {
        id: 1,
        question: "Sample question 1: What is the scientific method?",
        options: [
            "A way to cook food",
            "A systematic approach to scientific investigation",
            "A type of microscope",
            "A chemical reaction"
        ],
        correct: 1,
        rationale: "The scientific method is a systematic approach to scientific investigation that involves observation, hypothesis formation, experimentation, and conclusion."
    },
    {
        id: 2,
        question: "Sample question 2: What is the unit of force?",
        options: [
            "Joule",
            "Watt",
            "Newton",
            "Pascal"
        ],
        correct: 2,
        rationale: "Newton is the SI unit of force, named after Sir Isaac Newton."
    },
    {
        id: 3,
        question: "Sample question 3: What is photosynthesis?",
        options: [
            "Process of breaking down food",
            "Process by which plants make food using sunlight",
            "Process of cell division",
            "Process of protein synthesis"
        ],
        correct: 1,
        rationale: "Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose."
    }
];

// State management
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let wrongQuestions = [];
let isReviewMode = false;
let reviewIndex = 0;

// DOM Elements
const questionCard = document.getElementById('question-card');
const emptyState = document.getElementById('empty-state');
const noWrongState = document.getElementById('no-wrong-state');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const rationale = document.getElementById('rationale');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressCircle = document.getElementById('progress-circle');
const progressText = document.getElementById('progress-text');
const questionCount = document.getElementById('question-count');
const correctCount = document.getElementById('correct-count');
const wrongCount = document.getElementById('wrong-count');
const reviewBtn = document.getElementById('review-btn');
const practiceModeBtn = document.getElementById('practice-mode');
const reviewModeBtn = document.getElementById('review-mode');
const restartBtn = document.getElementById('restart-btn');
const backToPracticeBtn = document.getElementById('back-to-practice');

// Initialize
function init() {
    renderQuestion();
    updateStats();
    setupEventListeners();
}

// Render current question
function renderQuestion() {
    const currentQuestions = isReviewMode ? wrongQuestions : questions;
    const currentIndex = isReviewMode ? reviewIndex : currentQuestionIndex;
    
    if (currentQuestions.length === 0) {
        if (isReviewMode) {
            questionCard.classList.add('hidden');
            noWrongState.classList.remove('hidden');
        } else {
            questionCard.classList.add('hidden');
            emptyState.classList.remove('hidden');
        }
        return;
    }

    questionCard.classList.remove('hidden');
    emptyState.classList.add('hidden');
    noWrongState.classList.add('hidden');

    const question = currentQuestions[currentIndex];
    const userAnswer = isReviewMode ? null : userAnswers[question.id - 1];

    questionNumber.textContent = isReviewMode 
        ? `Wrong Question ${currentIndex + 1} of ${wrongQuestions.length}`
        : `Question ${currentIndex + 1} of ${questions.length}`;
    
    questionText.textContent = question.question;

    // Render options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-purple-400 font-medium';
        button.innerHTML = `
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 mr-3 text-sm font-bold">
                ${String.fromCharCode(65 + index)}
            </span>
            ${option}
        `;
        
        // Check if this option was selected
        if (userAnswer === index) {
            button.classList.add('selected');
        }
        
        // Show correct/wrong if answered
        if (userAnswer !== null) {
            if (index === question.correct) {
                button.classList.add('correct');
            } else if (index === userAnswer && userAnswer !== question.correct) {
                button.classList.add('wrong');
            }
            button.disabled = true;
        } else {
            button.addEventListener('click', () => selectAnswer(index));
        }

        optionsContainer.appendChild(button);
    });

    // Show feedback if answered
    if (userAnswer !== null && !isReviewMode) {
        feedback.classList.remove('hidden');
        const isCorrect = userAnswer === question.correct;
        feedback.className = `mt-6 p-4 rounded-xl ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`;
        feedbackText.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
        feedbackText.className = `font-semibold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`;
        rationale.textContent = question.rationale;
    } else {
        feedback.classList.add('hidden');
    }

    // Update navigation buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentQuestions.length - 1;
}

// Select answer
function selectAnswer(index) {
    const currentQuestions = isReviewMode ? wrongQuestions : questions;
    const currentIndex = isReviewMode ? reviewIndex : currentQuestionIndex;
    const question = currentQuestions[currentIndex];

    if (!isReviewMode) {
        userAnswers[question.id - 1] = index;
        
        // Track wrong answers
        if (index !== question.correct) {
            if (!wrongQuestions.find(q => q.id === question.id)) {
                wrongQuestions.push(question);
            }
        } else {
            // Remove from wrong if corrected
            wrongQuestions = wrongQuestions.filter(q => q.id !== question.id);
        }
    }

    renderQuestion();
    updateStats();
}

// Update statistics
function updateStats() {
    const answered = userAnswers.filter(a => a !== null).length;
    const correct = userAnswers.filter((a, i) => a === questions[i].correct).length;
    const wrong = answered - correct;

    questionCount.textContent = `${answered} / ${questions.length} Questions`;
    correctCount.textContent = correct;
    wrongCount.textContent = wrong;

    // Update progress circle
    const progress = (answered / questions.length) * 100;
    const circumference = 2 * Math.PI * 28;
    const offset = circumference - (progress / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    progressText.textContent = `${Math.round(progress)}%`;

    // Update review button
    if (wrongQuestions.length > 0) {
        reviewBtn.classList.remove('hidden');
        reviewBtn.innerHTML = `<i class="fas fa-redo"></i> Review Wrong (${wrongQuestions.length})`;
    } else {
        reviewBtn.classList.add('hidden');
    }
}

// Setup event listeners
function setupEventListeners() {
    prevBtn.addEventListener('click', () => {
        if (isReviewMode) {
            reviewIndex--;
        } else {
            currentQuestionIndex--;
        }
        renderQuestion();
    });

    nextBtn.addEventListener('click', () => {
        if (isReviewMode) {
            reviewIndex++;
        } else {
            currentQuestionIndex++;
        }
        renderQuestion();
    });

    practiceModeBtn.addEventListener('click', () => {
        isReviewMode = false;
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
    });

    reviewModeBtn.addEventListener('click', () => {
        isReviewMode = true;
        reviewIndex = 0;
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
    });

    reviewBtn.addEventListener('click', () => {
        isReviewMode = true;
        reviewIndex = 0;
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
    });

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        userAnswers = new Array(questions.length).fill(null);
        wrongQuestions = [];
        isReviewMode = false;
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
        updateStats();
    });

    backToPracticeBtn.addEventListener('click', () => {
        isReviewMode = false;
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
       renderQuestion();
    });
}

// Start the app
init();
