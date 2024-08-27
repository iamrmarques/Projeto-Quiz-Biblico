const questions = [
    {
        question: 'Qual o rio onde Naamã mergulhou?',
        options: ['Sena', 'Jordão', 'Pisom', 'Eufrates'],
        correctAnswer: 'Jordão'

    },
    {
        question: 'Quem matou Judas?',
        options: ['Pedro', 'Judas', 'Lucas', 'Mateus'],
        correctAnswer: 'Judas'
    },
    {
        question: 'Onde Jesus suou sangue?',
        options: ['Na Cruz', 'No Templo', 'No Monte Sinai', 'No Getsêmani' ],
        correctAnswer: 'No Getsêmani'
    },
    {
        question: 'Quem foi jogado na cova dos leões?',
        options: ['Daniel', 'Jonas', 'Ezequiel', 'Elias' ],
        correctAnswer: 'Daniel'

    }

]

let currentQuestionIndex = 0

function loadQuestion() {
    const questionContainer = document.getElementById('question')
    const questionData = questions[currentQuestionIndex]

    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul class="options">
            ${questionData.options.map(option => `<li><button onclick="checkAnswer(this)">${option}</button></li>`).join('')}
        </ul>
    `

}

function checkAnswer(button) {
    const questionData = questions[currentQuestionIndex]
    const resultContainer = document.getElementById('result')
    const resultText = document.getElementById('result-text')

    if (button.innerText === questionData.correctAnswer) {
        resultText.innerText = 'Correto!'
        currentQuestionIndex++
        if (currentQuestionIndex < questions.length) {
            setTimeout(loadQuestion, 2000)
        } else {
            resultText.innerText = `Parabéns, você completou o quiz.`
        }

    } else {
        resultText.innerText = 'Errado.'
        
    }

    resultContainer.classList.remove('hidden')
    setTimeout(() => resultContainer.classList.add('hidden'), 2000)
}

document.addEventListener('DOMContentLoaded', loadQuestion)