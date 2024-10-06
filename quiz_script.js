function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}

function submitQuiz() {
    const answers = {
        q1: 'b',
        q2: 'a',
        q3: 'c',
        q4: 'b',
        q5: 'c',
        q6: 'a',
        q7: 'b',
        q8: 'a',
        q9: 'a',
        q10: 'a'
    };
    
    let score = 0;
    for (let q in answers) {
        const userAnswer = document.querySelector(`input[name="${q}"]:checked`);
        const questionElement = document.querySelector(`input[name="${q}"]`).closest('.question');
        if (userAnswer) {
            if (userAnswer.value === answers[q]) {
                score++;
                questionElement.classList.add('correct');
                questionElement.classList.remove('incorrect');
            } else {
                questionElement.classList.add('incorrect');
                questionElement.classList.remove('correct');
            }
        } else {
            questionElement.classList.add('incorrect');
        }
    }
    
    let message = "";
    if (score === 10) {
        message = "Excellent! You got a perfect score!";
    } else if (score >= 7) {
        message = "Great job! You scored " + score + "/10.";
    } else if (score >= 4) {
        message = "You scored " + score + "/10. Keep practicing!";
    } else {
        message = "You scored " + score + "/10. Don't give up, review the material and try again!";
    }
    
    document.getElementById('result').innerHTML = `Your score is: ${score}/10<br>${message}`;
}