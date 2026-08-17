const quizData = [
    {
        question: "Se uma força constante de 10N atua sobre um corpo por 3 segundos, qual é o Impulso gerado?",
        formula: "i = f * t",
        options: ["3.33 N.s", "30 N.s", "13 N.s", "7 N.s"],
        correct: 1,
        explanation: "O Impulso (i) é a multiplicação da força pelo tempo (10N * 3s). Logo, i = 30 N.s."
    },
    {
        question: "Um objeto de 2kg se move a 15 m/s. Qual é a sua quantidade de movimento (Q)?",
        formula: "Q = m * v",
        options: ["7.5 kg.m/s", "30 kg.m/s", "17 kg.m/s", "60 kg.m/s"],
        correct: 1,
        explanation: "A quantidade de movimento (Q) é o produto da massa pela velocidade (2kg * 15 m/s = 30 kg.m/s)."
    },
    {
        question: "[Avançada] Um carrinho A (m1 = 2kg) a 6 m/s colide com um carrinho B (m2 = 4kg) parado. Eles sofrem colisão inelástica e grudam. Qual a velocidade final (vf) do conjunto?",
        formula: "m1*v1 + m2*v2 = (m1 + m2)*vf",
        options: ["2 m/s", "3 m/s", "4 m/s", "1.5 m/s"],
        correct: 0,
        explanation: "Pela conservação da quantidade de movimento: (2*6) + (4*0) = (2+4)*vf -> 12 = 6*vf -> vf = 2 m/s."
    },
    {
        question: "[Avançada] Um bloco de 4kg inicialmente em repouso é empurrado até atingir 5 m/s. Qual foi a variação da Energia Cinética (ec) desse corpo?",
        formula: "Ec = m*v²/2  e  ec = Ecf - Eci",
        options: ["10 J", "20 J", "50 J", "100 J"],
        correct: 2,
        explanation: "Energia inicial é 0. Energia final = (4 * 5²) / 2 = (4 * 25) / 2 = 50J. Variação = 50J - 0J = 50J."
    },
    {
        question: "Em uma colisão perfeitamente inelástica onde dois corpos grudam após o impacto, o coeficiente de restituição (e) vale:",
        formula: "e = 0 (inelástica)",
        options: ["e = 1", "0 < e < 1", "e = 0", "e > 1"],
        correct: 2,
        explanation: "Nas colisões perfeitamente inelásticas, não há afastamento após o impacto. Portanto, o coeficiente 'e' é igual a 0."
    },
    {
        question: "Se a velocidade final e inicial de afastamento forem iguais em módulo (retorno perfeito), o coeficiente de restituição define uma colisão:",
        formula: "e = 1 (perfeitamente elástica)",
        options: ["Inelástica", "Perfeitamente elástica", "Parcialmente elástica", "Explosiva"],
        correct: 1,
        explanation: "Quando a energia e as velocidades relativas se mantêm perfeitamente conservadas, o coeficiente 'e' é igual a 1."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let userAnswers = []; // Armazena o que o aluno marcou para montar o PDF

const formulaDisplay = document.getElementById("formula-display");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressText = document.getElementById("progress");
const nextButton = document.getElementById("btn-next");
const quizContainer = document.getElementById("quiz");
const progressBarFill = document.getElementById("progress-bar-fill");

function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.innerText = savedTheme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.innerText = newTheme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}

function loadQuestion() {
    answered = false;
    nextButton.style.display = "none";
    optionsContainer.innerHTML = "";

    quizContainer.classList.remove("fade-in");
    void quizContainer.offsetWidth; 
    quizContainer.classList.add("fade-in");

    const currentQuestion = quizData[currentQuestionIndex];
    
    questionText.innerText = currentQuestion.question;
    formulaDisplay.innerText = `Fórmula relacionada: ${currentQuestion.formula}`;
    progressText.innerText = `Pergunta ${currentQuestionIndex + 1} de ${quizData.length}`;

    const progressPercent = (currentQuestionIndex / quizData.length) * 100;
    if (progressBarFill) progressBarFill.style.width = `${progressPercent}%`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn-option");
        button.addEventListener("click", () => selectOption(index, button));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedIndex, selectedButton) {
    if (answered) return;
    answered = true;

    const currentQuestion = quizData[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll(".btn-option");

    // Salva a resposta selecionada pelo usuário
    userAnswers.push(selectedIndex);

    if (selectedIndex === currentQuestion.correct) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
        allButtons[currentQuestion.correct].classList.add("correct");
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        if (progressBarFill) progressBarFill.style.width = "100%";
        saveAndShowResults();
    }
}

function getMotivationalMessage(score, total) {
    const ratio = score / total;
    if (ratio === 1) return { title: "Excelente! Magnífico! 🌟", text: "Você dominou totalmente os conceitos de colisões e dinâmica!" };
    if (ratio >= 0.7) return { title: "Muito bom! 🚀", text: "Excelente desempenho. Compreende bem impulso e movimento linear." };
    if (ratio >= 0.5) return { title: "Bom progresso! 🗒️", text: "Você acertou metade! Uma breve revisão garantirá nota máxima." };
    return { title: "Não desista! 💡", text: "A física dinâmica exige treino. Baixe o gabarito explicativo para estudar!" };
}

function saveAndShowResults() {
    const existingScores = JSON.parse(localStorage.getItem("physics_quiz_scores")) || [];
    const formattedDate = new Date().toLocaleDateString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    existingScores.push({ score: score, total: quizData.length, date: formattedDate });
    localStorage.setItem("physics_quiz_scores", JSON.stringify(existingScores));

    const msg = getMotivationalMessage(score, quizData.length);

    quizContainer.innerHTML = `
        <div class="score-container text-center">
            <h2>${msg.title}</h2>
            <p class="subtitle" style="margin-top: 10px; margin-bottom: 15px;">${msg.text}</p>
            <p class="subtitle">Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas.</p>
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                <button onclick="generateGabaritoPDF()" class="btn-primary" style="background-color: #12a454;">📄 Baixar Gabarito PDF</button>
                <a href="index.html"primary">Voltar ao Painel</a>
            </div>
        </div>
    `;
}

// Compila as respostas marcadas e gera o arquivo PDF estruturado para impressão
function generateGabaritoPDF() {
    const scoreText = document.getElementById("pdf-score");
    const questionsList = document.getElementById("pdf-questions-list");
    
    scoreText.innerText = `Resultado Final: ${score} de ${quizData.length} acertos.`;
    questionsList.innerHTML = "";

    quizData.forEach((q, index) => {
        const userSelection = userAnswers[index];
        const isCorrect = userSelection === q.correct;
        
        const qDiv = document.createElement("div");
        qDiv.style.marginBottom = "25px";
        qDiv.style.padding = "10px";
        qDiv.style.borderLeft = isCorrect ? "4px solid #12a454" : "4px solid #e52e4d";
        qDiv.style.backgroundColor = "#f8f9fa";

        qDiv.innerHTML = `
            <h4 style="margin: 0 0 8px 0;">Pergunta ${index + 1}: ${q.question}</h4>
            <p style="margin: 4px 0; font-size: 0.9rem;"><strong>Sua resposta:</strong> ${q.options[userSelection]} ${isCorrect ? '✅' : '❌'}</p>
            <p style="margin: 4px 0; font-size: 0.9rem;"><strong>Resposta correta:</strong> ${q.options[q.correct]}</p>
            <p style="margin: 8px 0 0 0; font-size: 0.9rem; color: #555555; font-style: italic;"><strong>Explicação:</strong> ${q.explanation}</p>
        `;
        questionsList.appendChild(qDiv);
    });

    const element = document.getElementById("pdf-template");
    element.style.display = "block"; // Ativa temporariamente para captura

    const opt = {
        margin:       10,
        filename:     'gabarito_quiz_fisica.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        element.style.display = "none"; // Oculta novamente após salvar
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    if (questionText) {
        loadQuestion();
    }
});
