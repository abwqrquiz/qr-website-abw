function answerQuestion(questionId, isCorrect) {
    localStorage.setItem('question_' + questionId, isCorrect);

    let correctCount = localStorage.getItem('correctAnswersCount') || 0;
    correctCount = parseInt(correctCount);

    if (isCorrect) {
        correctCount += 1;
        localStorage.setItem('correctAnswersCount', correctCount);
        console.log('Aktuelle richtige Antworten:', correctCount);
    }

    if (correctCount >= 10) {
        alert('Herzlichen Glückwunsch! Du hast alle 10 Fragen richtig beantwortet.');
        // window.location.href = 'gewinnerseite.html';
    }

    if (!isCorrect) {
        window.location.replace("quizfail.html");
        localStorage.setItem('quizFailed', 'true');
        document.getElementById('failed-container').style.display = 'block';
    }
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Dropdown per Klick auf Mobilgeräten
document.querySelectorAll('.has-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = link.nextElementSibling;
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});
