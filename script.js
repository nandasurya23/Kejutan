document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        document.getElementById('userName').textContent = name;
        document.getElementById('intro').classList.add('hidden');
        const message = document.getElementById('message');
        message.classList.remove('hidden');
        message.classList.add('animate__fadeIn');
    });
});

function startQuiz() {
    document.getElementById('message').classList.add('hidden');
    const quiz = document.getElementById('quiz');
    quiz.classList.remove('hidden');
    quiz.classList.add('animate__zoomIn');
}

function checkAnswer() {
    const correctAnswer = 'D';
    const form = document.getElementById('quizForm');
    const selectedAnswer = form.querySelector('input[name="answer"]:checked');
    const hint = document.getElementById('hint');

    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            document.getElementById('quiz').classList.add('hidden');
            const surprise = document.getElementById('surprise');
            surprise.classList.remove('hidden');
            surprise.classList.add('animate__heartBeat');
            showLoveMessage();
        } else {
            // Alert untuk jawaban salah
            alert('Jawaban salah! Coba lagi.');
            
            // Berikan hint
            switch (selectedAnswer.value) {
                case 'A':
                    hint.textContent = 'Hint: Jawaban ini berbicara tentang cinta pertama.';
                    break;
                case 'B':
                    hint.textContent = 'Hint: Jawaban ini tentang menyebut seseorang milikmu.';
                    break;
                case 'C':
                    hint.textContent = 'Hint: Jawaban ini melibatkan menulis nama di langit.';
                    break;
                case 'D':
                    hint.textContent = ''; // Jangan tampilkan hint jika jawaban benar
                    break;
                default:
                    hint.textContent = '';
            }
        }
    } else {
        hint.textContent = 'Silakan pilih salah satu jawaban!';
    }
}

function showLoveMessage() {
    const name = document.getElementById('name').value;
    const loveText = document.getElementById('loveText');
    const message = `I LOVE YOU ${name}`;
    let index = 0;

    loveText.textContent = ''; // Clear any previous message
    loveText.parentElement.classList.remove('hidden');
    
    function typeMessage() {
        if (index < message.length) {
            loveText.textContent += message.charAt(index);
            index++;
            setTimeout(typeMessage, 100); // Adjust typing speed here
        }
    }

    typeMessage();
}
