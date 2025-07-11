function answerQuestion(questionId, isCorrect, btnElement) {
    if (localStorage.getItem('quizFailed') === 'true') {
        return;
    }

    localStorage.setItem('question_' + questionId, isCorrect);

    const questionDiv = btnElement.closest('.question');
    questionDiv.querySelectorAll('.quizbuttons').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.6';
        btn.style.cursor = 'not-allowed';
    });

    let correctCount = localStorage.getItem('correctAnswersCount') || 0;
    correctCount = parseInt(correctCount);

    if (isCorrect) {
        correctCount += 1;
        localStorage.setItem('correctAnswersCount', correctCount);
        console.log('Aktuelle richtige Antworten:', correctCount);
    }

    if (correctCount >= 10) {
        window.location.href = 'xqzvnm.html';
    }

    if (!isCorrect) {
        window.location.replace("quizfail.html");
        localStorage.setItem('quizFailed', 'true');
    }
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

document.querySelectorAll('.has-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = link.nextElementSibling;
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});

function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function updateBilder() {
    const now = new Date();
    const options = { timeZone: 'Europe/Berlin' };
    const hour = parseInt(now.toLocaleString('de-DE', { ...options, hour: 'numeric', hour12: false }));
    const day = now.getDay(); // 0 = Sonntag, 5 = Freitag, 6 = Samstag

    // Bilder-Pfade anpassen!
    const freitagMorgen = 'wappen-mars1.png';
    const freitagNachmittag = 'wappen-mars2.png';
    const samstagMorgen = 'wappen-mars3.png';
    const samstagNachmittag = 'wappen-mars4.png';

    // Erst alle Bilder ausblenden
    ['freitag-morgen', 'freitag-nachmittag', 'samstag-morgen', 'samstag-nachmittag'].forEach(id => {
        const img = document.getElementById(id);
        if (img) img.style.display = 'none';
    });

    // Samstag
    if (day === 5) {
        if (hour >= 9 && hour < 14) {
            const img = document.getElementById('freitag-morgen');
            if (img) {
                img.src = freitagMorgen;
                img.style.display = 'inline';
            }
        } else if (hour >= 14 && hour < 18) { // ab 12 Uhr bis Mitternacht
            const img = document.getElementById('freitag-nachmittag');
            if (img) {
                img.src = freitagNachmittag;
                img.style.display = 'inline';
            }
        }
    }

    // Sonntag
    if (day === 0) {
        if (hour >= 9 && hour < 14) {
            const img = document.getElementById('samstag-morgen');
            if (img) {
                img.src = samstagMorgen;
                img.style.display = 'inline';
            }
        } else if (hour >= 14 && hour < 18) {
            const img = document.getElementById('samstag-nachmittag');
            if (img) {
                img.src = samstagNachmittag;
                img.style.display = 'inline';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', updateBilder);

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.question').forEach(questionDiv => {
        const buttons = questionDiv.querySelectorAll('.quizbuttons');
        let answered = false;
        buttons.forEach(btn => {
            const qid = btn.getAttribute('onclick').match(/answerQuestion\((\d+),/);
            if (qid && localStorage.getItem('question_' + qid[1]) !== null) {
                answered = true;
            }
        });
        if (answered) {
            buttons.forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
            });
        }
        else {
            buttons.forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('quizFailed') === 'true') {
        var hint = document.getElementById('quiz-locked-hint');
        if (hint) hint.style.display = 'block';
        var quiz = document.querySelector('.quiz-container');
        if (quiz) quiz.style.display = 'none';
        var quiznote = document.getElementById('quiz-scan-note');
        if (quiznote) quiznote.style.display = 'none';
    }
});