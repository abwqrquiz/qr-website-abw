if (localStorage.getItem('quizFailed') === 'true') {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('message').innerText = 'Sie haben das Quiz bereits falsch beantwortet. Leider können Sie es nicht erneut versuchen.';
}

function answerQuestion(questionNumber, isCorrect) {
    if (localStorage.getItem('quizFailed') === 'true') {
        return;
    }

    if (isCorrect) {
        alert('Richtig!');
        document.getElementById('quizbuttons').style.property = backgroundColor = 'green';
        document.getElementById('message').innerText = 'Richtig!';
    } else {
        window.location.replace("quizfail.html");
        localStorage.setItem('quizFailed', 'true');

        document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('failed-container').style.display = 'flex';
        });

        document.getElementsById('quiz-container').style.display = 'none';
        // document.getElementById('message').innerText = 'Sie haben das Quiz bereits falsch beantwortet. Leider können Sie es nicht erneut versuchen.';
    }
}

function saveAnswer() {
    
}
