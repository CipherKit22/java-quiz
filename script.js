let currentQuiz = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;
let allDisplayedQuestions = [];
let currentFilter = 'all';

function showLoader() {
    document.getElementById('loader').classList.remove('hidden');
}

function hideLoader() {
    document.getElementById('loader').classList.add('hidden');
}

function showPage(pageId) {
    showLoader();
    setTimeout(() => {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
        hideLoader();
    }, 800);
}

function goHome() {
    showPage('homePage');
    resetQuiz();
}

function selectCategory(category) {
    currentQuiz = category;
    const categoryName = getCategoryDisplayName(category);
    document.getElementById('selectedCategoryName').textContent = categoryName;
    showPage('quizSetupPage');
}

function getCategoryDisplayName(category) {
    switch(category) {
        case 'chapter10-11':
            return 'Chapter 10 & 11 Testing';
        case 'gui':
            return 'GUI Part I & II';
        case 'sql':
            return 'Collection and SQL Testing';
        case 'all':
            return 'All Categories';
        default:
            return category;
    }
}

function startQuiz() {
    const questionOrder = document.querySelector('input[name="questionOrder"]:checked').value;
    
    if (currentQuiz === 'all') {
        currentQuestions = getAllQuestions();
    } else {
        currentQuestions = quizData[currentQuiz].questions.map((q, index) => ({
            ...q,
            category: currentQuiz,
            categoryTitle: quizData[currentQuiz].title,
            globalId: index + 1
        }));
    }
    
    if (questionOrder === 'shuffle') {
        currentQuestions = shuffleArray(currentQuestions);
    }
    
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = new Date();
    
    document.getElementById('categoryName').textContent = getCategoryDisplayName(currentQuiz);
    
    showQuestion();
    showPage('quizPage');
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const totalQuestions = currentQuestions.length;
    
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('answerFeedback').classList.add('hidden');
}

function selectOption(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.classList.add('disabled');
        option.onclick = null;
    });
    
    options[selectedIndex].classList.add('selected');
    
    options[question.correct].classList.add('correct');
    if (selectedIndex !== question.correct) {
        options[selectedIndex].classList.add('incorrect');
    }
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selectedOption: selectedIndex,
        correctOption: question.correct,
        isCorrect: selectedIndex === question.correct,
        question: question.question,
        options: question.options
    });
    
    showAnswerFeedback(selectedIndex === question.correct, question);
}

function showAnswerFeedback(isCorrect, question) {
    const feedback = document.getElementById('answerFeedback');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackText = document.getElementById('feedbackText');
    const correctAnswer = document.getElementById('correctAnswer');
    const nextButton = document.getElementById('nextButton');
    
    if (isCorrect) {
        feedbackIcon.textContent = '[✓]';
        feedbackText.textContent = 'Correct!';
        feedbackText.className = 'feedback-text correct';
        correctAnswer.textContent = '';
    } else {
        feedbackIcon.textContent = '[✗]';
        feedbackText.textContent = 'Incorrect';
        feedbackText.className = 'feedback-text incorrect';
        correctAnswer.innerHTML = `<strong>Correct answer:</strong> ${question.options[question.correct]}`;
    }
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextButton.textContent = 'View Results';
    } else {
        nextButton.textContent = 'Next Question';
    }
    
    feedback.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
    } else {
        showQuestion();
    }
}

function showResults() {
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const totalQuestions = userAnswers.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('scoreText').textContent = `You scored ${correctAnswers} out of ${totalQuestions}`;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('incorrectAnswers').textContent = totalQuestions - correctAnswers;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    const scoreCircle = document.querySelector('.score-circle');
    if (percentage >= 80) {
        scoreCircle.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    } else if (percentage >= 60) {
        scoreCircle.style.background = 'linear-gradient(135deg, #ffc107, #fd7e14)';
    } else {
        scoreCircle.style.background = 'linear-gradient(135deg, #dc3545, #e83e8c)';
    }
    
    showPage('resultsPage');
}

function reviewAnswers() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const statusClass = answer.isCorrect ? 'correct' : 'incorrect';
        const statusText = answer.isCorrect ? '[✓] Correct' : '[✗] Incorrect';
        
        reviewItem.innerHTML = `
            <div class="review-header-item">
                <div class="question-number">Question ${index + 1}</div>
                <div class="review-status ${statusClass}">${statusText}</div>
            </div>
            <div class="question-text">${answer.question}</div>
            <div class="user-answer">
                <strong>Your answer:</strong> ${answer.options[answer.selectedOption]}
            </div>
            ${!answer.isCorrect ? `
                <div class="correct-answer-review">
                    <strong>Correct answer:</strong> ${answer.options[answer.correctOption]}
                </div>
            ` : ''}
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
    
    showPage('reviewPage');
}

function quitQuiz() {
    if (confirm('Are you sure you want to quit the quiz? Your progress will be lost.')) {
        goHome();
    }
}

function resetQuiz() {
    currentQuiz = null;
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = null;
}

function showAllQuestions() {
    displayAllQuestions('all');
    showPage('allQuestionsPage');
}

function filterQuestions(category) {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    currentFilter = category;
    document.getElementById('questionSearch').value = '';
    displayAllQuestions(category);
}

function displayAllQuestions(filterCategory) {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    let questionsToShow = [];
    
    if (filterCategory === 'all') {
        questionsToShow = getAllQuestions();
    } else {
        questionsToShow = quizData[filterCategory].questions.map((q, index) => ({
            ...q,
            category: filterCategory,
            categoryTitle: quizData[filterCategory].title,
            globalId: index + 1
        }));
    }
    
    allDisplayedQuestions = questionsToShow;
    renderQuestions(questionsToShow, filterCategory);
}

function renderQuestions(questions, filterCategory) {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    if (questions.length === 0) {
        container.innerHTML = '<div class="no-results">No questions found matching your search.</div>';
        return;
    }
    
    questions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        
        const categoryDisplay = filterCategory === 'all' ? question.categoryTitle : '';
        
        questionItem.innerHTML = `
            <div class="question-header">
                <div class="question-number">Q${question.globalId || index + 1}</div>
                ${categoryDisplay ? `<div class="question-category">${categoryDisplay}</div>` : ''}
            </div>
            <div class="question-text">${question.question}</div>
            <div class="answer-options">
                ${question.options.map((option, optIndex) => `
                    <div class="answer-option ${optIndex === question.correct ? 'correct' : ''}">
                        ${String.fromCharCode(65 + optIndex)}. ${option}
                    </div>
                `).join('')}
            </div>
            <div class="correct-answer-label">
                [✓] Correct Answer: ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}
            </div>
        `;
        
        container.appendChild(questionItem);
    });
}

function searchQuestions() {
    const searchTerm = document.getElementById('questionSearch').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderQuestions(allDisplayedQuestions, currentFilter);
        return;
    }
    
    const filteredQuestions = allDisplayedQuestions.filter(question => {
        const questionText = question.question.toLowerCase();
        return questionText.includes(searchTerm);
    });
    
    renderQuestions(filteredQuestions, currentFilter);
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const activeTab = document.querySelector('.filter-tab.active');
    const currentFilter = activeTab ? activeTab.textContent.toLowerCase() : 'all';
    
    let questionsToDownload = [];
    if (currentFilter === 'all') {
        questionsToDownload = getAllQuestions();
    } else if (currentFilter === 'chapter 10-11') {
        questionsToDownload = quizData['chapter10-11'].questions.map((q, index) => ({
            ...q,
            category: 'chapter10-11',
            categoryTitle: quizData['chapter10-11'].title,
            globalId: index + 1
        }));
    } else if (currentFilter === 'gui') {
        questionsToDownload = quizData['gui'].questions.map((q, index) => ({
            ...q,
            category: 'gui',
            categoryTitle: quizData['gui'].title,
            globalId: index + 1
        }));
    } else if (currentFilter === 'collection & sql') {
        questionsToDownload = quizData['sql'].questions.map((q, index) => ({
            ...q,
            category: 'sql',
            categoryTitle: quizData['sql'].title,
            globalId: index + 1
        }));
    }
    
    doc.setFontSize(16);
    doc.text('Java Quiz Questions & Answers', 20, 20);
    doc.setFontSize(12);
    doc.text(`Category: ${currentFilter === 'all' ? 'All Categories' : 
              currentFilter === 'chapter 10-11' ? 'Chapter 10 & 11 Testing' : 
              currentFilter === 'gui' ? 'GUI Part I & II' : 
              currentFilter === 'collection & sql' ? 'Collection and SQL Testing' : currentFilter}`, 20, 30);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 40);
    
    let yPosition = 55;
    const pageHeight = doc.internal.pageSize.height;
    const marginBottom = 20;
    
    questionsToDownload.forEach((question, index) => {
        if (yPosition > pageHeight - marginBottom - 60) {
            doc.addPage();
            yPosition = 20;
        }
        
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        const questionText = `${index + 1}. ${question.question}`;
        const questionLines = doc.splitTextToSize(questionText, 170);
        doc.text(questionLines, 20, yPosition);
        yPosition += questionLines.length * 5 + 5;
        
        doc.setFont(undefined, 'normal');
        question.options.forEach((option, optIndex) => {
            const optionLetter = String.fromCharCode(65 + optIndex);
            const isCorrect = optIndex === question.correct;
            const optionText = `${optionLetter}. ${option}${isCorrect ? ' ✓' : ''}`;
            
            if (isCorrect) {
                doc.setFont(undefined, 'bold');
            }
            
            const optionLines = doc.splitTextToSize(optionText, 160);
            doc.text(optionLines, 25, yPosition);
            yPosition += optionLines.length * 4 + 2;
            
            if (isCorrect) {
                doc.setFont(undefined, 'normal');
            }
        });
        
        yPosition += 8;
    });
    
    const filename = `java-quiz-${currentFilter === 'all' ? 'all-categories' : 
                     currentFilter === 'chapter 10-11' ? 'chapter-10-11' : 
                     currentFilter === 'gui' ? 'gui-part-1-2' : 
                     currentFilter === 'collection & sql' ? 'collection-sql' : currentFilter}.pdf`;
    doc.save(filename);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        hideLoader();
        showPage('homePage');
    }, 2000);
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            goHome();
        }
        
        if (document.getElementById('quizPage').classList.contains('active')) {
            const num = parseInt(event.key);
            if (num >= 1 && num <= 4) {
                const options = document.querySelectorAll('.option:not(.disabled)');
                if (options[num - 1]) {
                    selectOption(num - 1);
                }
            }
        }
    });
    
    console.log('Java Quiz App initialized successfully!');
    console.log('Available categories:', Object.keys(quizData));
    console.log('Total questions loaded:', getAllQuestions().length);
});
