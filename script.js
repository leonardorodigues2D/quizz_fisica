const quizData = [
    {
        question: "Se uma força constante de 10N atua sobre um corpo por 3 segundos, qual é o Impulso gerado?",
        formula: "i = f * t",
        options: ["3.33 N.s", "30 N.s", "13 N.s", "7 N.s"],
        correct: 1
    },
    {
        question: "Um objeto de 2kg se move a 15 m/s. Qual é a sua quantidade de movimento (Q)?",
        formula: "Q = m * v",
        options: ["7.5 kg.m/s", "30 kg.m/s", "17 kg.m/s", "60 kg.m/s"],
        correct: 1
    },
    {
        question: "[Avançada] Um carrinho A (m1 = 2kg) a 6 m/s colide com um carrinho B (m2 = 4kg) parado. Eles sofrem colisão inelástica e grudam. Qual a velocidade final (vf) do conjunto?",
        formula: "m1*v1 + m2*v2 = (m1 + m2)*vf",
        options: ["2 m/s", "3 m/s", "4 m/s", "1.5 m/s"],
        correct: 0
    },
    {
        question: "[Avançada] Um bloco de 4kg inicialmente em repouso é empurrado até atingir 5 m/s. Qual foi a variação da Energia Cinética (ec) desse corpo?",
        formula: "Ec = m*v²/2  e  ec = Ecf - Eci",
        options: ["10 J", "20 J", "50 J", "100 J"],
        correct: 2
    },
    {
        question: "Em uma colisão perfeitamente inelástica onde dois corpos grudam após o impacto, o coeficiente de restituição (e) vale:",
        formula: "e = 0 (inelástica)",
        options: ["e = 1", "0 < e < 1", "e = 0", "e > 1"],
        correct: 2
    },
    {
        question: "Se a velocidade final e inicial de afastamento forem iguais em módulo (retorno perfeito), o coeficiente de restituição define uma colisão:",
        formula: "e = 1 (perfeitamente elástica)",
        options: ["Inelástica", "Perfeitamente elástica", "Parcialmente elástica", "Explosiva"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const formulaDisplay = document.getElementById("formula-display");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressText = document.getElementById("progress");
const nextButton = document.getElementById("btn-next");
const quizContainer = document.getElementById("quiz");
const progressBarFill = document.getElementById("progress-bar-fill");

// Sincronização do tema da tela de perguntas
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
    document.getElementById("theme-toggle").innerText = newTheme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}

function loadQuestion() {
    answered = false;
    nextButton.style.display = "none";
    optionsContainer.innerHTML = "";

    // Reinicia animação fade-in
    quizContainer.classList.remove("fade-in");
    void quizContainer.offsetWidth; 
    quizContainer.classList.add("fade-in");

    const currentQuestion = quizData[currentQuestionIndex];
    
    questionText.innerText = currentQuestion.question;
    formulaDisplay.innerText = `Fórmula relacionada: ${currentQuestion.formula}`;
    progressText.innerText = `Pergunta ${currentQuestionIndex + 1} de ${quizData.length}`;

    // Atualiza a barra de progresso animada
    const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
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

// Mensagens motivacionais baseadas no aproveitamento final do estudante
function getMotivationalMessage(score, total) {
    const ratio = score / total;
    if (ratio === 1) return { title: "Excelente! Magnífico! 🌟", text: "Você dominou totalmente os conceitos de colisões e conservação da dinâmica!" };
    if (ratio >= 0.7) return { title: "Muito bom! 🚀", text: "Excelente desempenho. Você compreende bem a relação de impulso e quantidade de movimento." };
    if (ratio >= 0.5) return { title: "Bom progresso! 🗒️", text: "Você acertou metade! Uma breve revisão das equações de colisões elásticas garantirá a nota máxima." };
    return { title: "Não desista! 💡", text: "A física dinâmica exige treino. Revise os conceitos de colisões inelásticas e tente novamente!" };
}

function saveAndShowResults() {
    const existingScores = JSON.parse(localStorage.getItem("physics_quiz_scores")) || [];
    const formattedDate = new Date().toLocaleDateString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    existingScores.push({
        score: score,
        total: quizData.length,
        date: formattedDate
    });
    
    localStorage.setItem("physics_quiz_scores", JSON.stringify(existingScores));

    const msg = getMotivationalMessage(score, quizData.length);

    quizContainer.innerHTML = `
        <div class="score-container text-center">
            <h2>${msg.title}</h2>
            <p class="subtitle" style="margin-top: 10px; margin-bottom: 15px;">${msg.text}</p>
            <p class="subtitle">Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas.</p>
            <a href="dashboard.html" class="btn-primary">Voltar ao Painel</a>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    if (questionText) {
        loadQuestion();
    }
});
