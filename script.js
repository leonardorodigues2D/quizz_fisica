// Banco de dados completo expandido com 36 perguntas validadas (6 originais + 30 novas)
const questionsPool = [
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
        explanation: "Nas colisões perfeitamente inelásticas, os corpos não se separam após o impacto. Portanto, o coeficiente 'e' é igual a 0."
    },
    {
        question: "Se a velocidade final e inicial de afastamento forem iguais em módulo (retorno perfeito), o coeficiente de restituição define uma colisão:",
        formula: "e = 1 (perfeitamente elástica)",
        options: ["Inelástica", "Perfeitamente elástica", "Parcialmente elástica", "Explosiva"],
        correct: 1,
        explanation: "Quando a energia mecânica e as velocidades relativas se mantêm perfeitamente conservadas, o coeficiente 'e' é igual a 1."
    },
    {
        question: "Uma força de 50N é aplicada por 0.5 segundos. Qual o impulso recebido pelo corpo?",
        formula: "i = f * t",
        options: ["100 N.s", "25 N.s", "10 N.s", "5 N.s"],
        correct: 1,
        explanation: "Multiplicando a força pelo tempo de atuação: 50N * 0.5s = 25 N.s."
    },
    {
        question: "Se o impulso aplicado a um objeto vale 120 N.s e o tempo de contato foi de 4s, qual o valor da força média?",
        formula: "i = f * t -> f = i / t",
        options: ["480 N", "30 N", "40 N", "12 N"],
        correct: 1,
        explanation: "Isolando a força na fórmula do impulso: f = 120 N.s / 4s = 30 N."
    },
    {
        question: "O teorema do impulso afirma que o impulso de uma força resultante é igual a qual variação?",
        formula: "i = Qf - Qi (ΔQ)",
        options: ["Da Energia Cinética", "Da Velocidade", "Da Quantidade de Movimento", "Da Energia Potencial"],
        correct: 2,
        explanation: "O teorema dita que o impulso aplicado a um corpo é numericamente igual à variação da sua quantidade de movimento (ΔQ)."
    },
    {
        question: "Um corpo de massa 5kg possui velocidade de 8 m/s. Sua quantidade de movimento vale:",
        formula: "Q = m * v",
        options: ["40 kg.m/s", "1.6 kg.m/s", "13 kg.m/s", "25 kg.m/s"],
        correct: 0,
        explanation: "Aplicando a equação linear: Q = 5kg * 8 m/s = 40 kg.m/s."
    },
    {
        question: "Para que um projétil de 0.02kg tenha quantidade de movimento igual a 10 kg.m/s, sua velocidade deve ser:",
        formula: "Q = m * v -> v = Q / m",
        options: ["200 m/s", "500 m/s", "50 m/s", "1000 m/s"],
        correct: 1,
        explanation: "Dividindo o momento pela massa do objeto: v = 10 / 0.02 = 500 m/s."
    },
    {
        question: "Se a velocidade de um corpo dobra, mas sua massa permanece constante, o que acontece com a quantidade de movimento?",
        formula: "Q = m * v",
        options: ["Fica constante", "Dobra", "Quadruplica", "Cai pela metade"],
        correct: 1,
        explanation: "Como a quantidade de movimento (Q) é diretamente proporcional à velocidade, se a velocidade dobra, Q também dobra."
    },
    {
        question: "Uma colisão elástica ideal possui coeficiente de restituição (e) exatamente igual a:",
        formula: "e = 1",
        options: ["0", "0.5", "1", "-1"],
        correct: 2,
        explanation: "Colisões perfeitamente elásticas devolvem toda a velocidade de aproximação na separação, logo e = 1."
    },
    {
        question: "Em um sistema isolado onde ocorre uma colisão parcial, o que acontece com a quantidade de movimento total?",
        formula: "Q_inicial = Q_final",
        options: ["Diminui", "Aumenta", "Permanece conservada", "Zera completamente"],
        correct: 2,
        explanation: "Em qualquer sistema isolado (sem forças externas), a quantidade de movimento total SEMPRE se conserva, independente do tipo de colisão."
    },
    {
        question: "Um objeto de 3kg com velocidade de 4 m/s tem qual energia cinética (Ec)?",
        formula: "Ec = (m * v^2) / 2",
        options: ["12 J", "24 J", "6 J", "48 J"],
        correct: 1,
        explanation: "Ec = (3 * 4^2) / 2 = (3 * 16) / 2 = 48 / 2 = 24 Joules."
    },
    {
        question: "Se a massa de um corpo é triplicada e a velocidade mantida constante, a energia cinética:",
        formula: "Ec = (m * v^2) / 2",
        options: ["Triplica", "Fica 9 vezes maior", "Permanece igual", "Cai por um terço"],
        correct: 0,
        explanation: "A energia cinética possui relação linear direta com a massa do corpo. Se triplica a massa, a energia também triplica."
    },
    {
        question: "Uma força constante age sobre um objeto em repouso mudando sua Q de 0 para 35 kg.m/s. Qual o módulo do Impulso?",
        formula: "i = Qf - Qi",
        options: ["0 N.s", "35 N.s", "70 N.s", "17.5 N.s"],
        correct: 1,
        explanation: "Como i = ΔQ, e a variação foi de 0 para 35, o impulso aplicado vale exatamente 35 N.s."
    },
    {
        question: "Duas esferas de massas iguais colidem elasticamente (e=1). Se a esfera A se movia a 5 m/s e B estava parada, após o impacto:",
        formula: "e = 1 (Troca de velocidades)",
        options: ["A e B grudam a 2.5 m/s", "A para e B assume 5 m/s", "Ambas voltam a 5 m/s", "A continua a 5 m/s"],
        correct: 1,
        explanation: "Em colisões elétricas perfeitas entre corpos de massas idênticas, ocorre a troca completa de velocidades: A para e B sai a 5 m/s."
    },
    {
        question: "Se o coeficiente de restituição (e) de uma batida de carros deu 0.45, essa colisão é classificada como:",
        formula: "0 < e < 1",
        options: ["Perfeitamente elástica", "Inelástica", "Parcialmente elástica", "Explosiva"],
        correct: 2,
        explanation: "Valores de 'e' situados estritamente entre 0 e 1 configuram colisões parcialmente elásticas."
    },
    {
        question: "Uma bola de 0.5kg atinge uma parede a 10 m/s e volta na mesma direção com 10 m/s. Qual o módulo da variação da quantidade de movimento (ΔQ)?",
        formula: "ΔQ = m * (vf - vi)",
        options: ["0 kg.m/s", "5 kg.m/s", "10 kg.m/s", "20 kg.m/s"],
        correct: 2,
        explanation: "Adotando referencial: vi = 10 m/s e vf = -10 m/s. ΔQ = m * (vf - vi) = 0.5 * (-10 - 10) = -10 kg.m/s. O módulo da variação vale exatamente 10 kg.m/s."
    },
    {
        question: "A unidade de medida de Impulso no Sistema Internacional (SI) também pode ser descrita de forma equivalente por:",
        formula: "N.s = kg.m/s",
        options: ["J.s", "kg.m/s", "N/m", "W.s"],
        correct: 1,
        explanation: "Como o Impulso é igual à variação da quantidade de movimento, a unidade Newton-segundo (N.s) equivale a kg.m/s."
    },
    {
        question: "Um corpo tem Ec = 100 J e velocidade 10 m/s. Qual é a massa desse corpo?",
        formula: "m = (2 * Ec) / v^2",
        options: ["2 kg", "1 kg", "5 kg", "10 kg"],
        correct: 0,
        explanation: "Substituindo: m = (2 * 100) / 10^2 = 200 / 100 = 2 kg."
    },
    {
        question: "O teorema do trabalho e energia cinética relaciona a variação da Ec de um corpo diretamente com:",
        formula: "ec = Trabalho total",
        options: ["O Impulso sofrido", "O Trabalho total realizado", "A Força média centrípeta", "O tempo de contato"],
        correct: 1,
        explanation: "O Teorema do Trabalho-Energia Cinética dita que a variação da Ec é igual à soma dos trabalhos realizados pelas forças atuantes."
    },
    {
        question: "Duas pessoas em repouso sobre patins se empurram em uma pista sem atrito. O que se pode afirmar sobre a quantidade de movimento total?",
        formula: "Q_inicial = 0 -> Q_final = 0",
        options: ["Diminui linearmente", "Continua igual a zero", "Aumenta com o impulso", "Fica indeterminável"],
        correct: 1,
        explanation: "Como as forças geradas pelo empurrão são internas e o sistema estava em repouso, a quantidade de movimento total (Q) deve continuar zero."
    },
{
        question: "Se um corpo de 10kg tem velocidade de 2 m/s e passa a se mover a 4 m/s, qual foi a variação de sua energia cinética (ec)?",
        formula: "ec = Ecf - Eci",
        options: ["20 J", "40 J", "60 J", "80 J"],
        correct: 2,
        explanation: "Eci = (10*2^2)/2 = 20J. Ecf = (10*4^2)/2 = 80J. Variação (ec) = 80J - 20J = 60 Joules."
    },
    {
        question: "Uma colisão onde os corpos se separam e há perda parcial de energia cinética residual é do tipo:",
        formula: "0 < e < 1",
        options: ["Perfeitamente elástica", "Parcialmente elástica", "Inelástica", "Nenhuma das anteriores"],
        correct: 1,
        explanation: "Quando os corpos se separam sofrendo amortecimento e perda de energia mecânica, a colisão é parcialmente elástica."
    },
    {
        question: "Um motorista aplica os freios e reduz a velocidade de 20 m/s para 10 m/s. A Ec final em relação à inicial é:",
        formula: "Ec proporcional a v^2",
        options: ["A metade", "Um terço", "Um quarto", "Igual"],
        correct: 2,
        explanation: "Como a velocidade caiu pela metade (10 é metade de 20), o quadrado da velocidade cai por um quarto (1/2)^2 = 1/4."
    },
    {
        question: "Um taco de beisebol aplica uma força média de 400N em uma bola durante 0.01 segundos. O impulso gerado foi de:",
        formula: "i = f * t",
        options: ["4 N.s", "40 N.s", "400 N.s", "0.4 N.s"],
        correct: 0,
        explanation: "Calculando o produto simples: i = 400N * 0.01s = 4 N.s."
    },
    {
        question: "Qual a velocidade de um objeto de 8kg cuja energia cinética é igual a 16 Joules?",
        formula: "v = sqrt((2 * Ec) / m)",
        options: ["4 m/s", "2 m/s", "1 m/s", "8 m/s"],
        correct: 1,
        explanation: "v = sqrt((2 * 16) / 8) = sqrt(32 / 8) = sqrt(4) = 2 m/s."
    },
    {
        question: "O coeficiente de restituição pode ser calculated pela divisão de quais módulos de velocidades relativas?",
        formula: "e = v_afastamento / v_aproximacao",
        options: ["Aproximação por Afastamento", "Afastamento por Aproximação", "Inicial por Final", "Final por Inicial"],
        correct: 1,
        explanation: "O coeficiente 'e' estabelece o quão rápido os corpos se afastam comparado com a velocidade com que se aproximavam antes do choque."
    },
    {
        question: "Um projétil de 1kg viaja a 100 m/s e atinge um bloco de madeira de 9kg em repouso. Eles grudam. Qual a velocidade final do conjunto?",
        formula: "m1*v1 = (m1 + m2)*vf",
        options: ["10 m/s", "5 m/s", "20 m/s", "1 m/s"],
        correct: 0,
        explanation: "1 * 100 = (1 + 9) * vf -> 100 = 10 * vf -> vf = 10 m/s."
    },
    {
        question: "A área sob o gráfico de Força versus Tempo (F x t) fornece numericamente o valor de qual grandeza?",
        formula: "Área = F * t",
        options: ["Trabalho", "Quantidade de movimento", "Impulso", "Energia cinética"],
        correct: 2,
        explanation: "A integração gráfica de uma curva de força em função do tempo fornece a magnitude do Impulso gerado pela força."
    },
    {
        question: "Um caminhão de 10 toneladas (10000kg) e um carro de 1 tonelada (1000kg) correm com a mesma velocidade. O caminhão tem uma Q quantas vezes maior?",
        formula: "Q = m * v",
        options: ["2 vezes", "5 vezes", "10 vezes", "100 vezes"],
        correct: 2,
        explanation: "Como a velocidade é igual, a proporção de Q depende apenas da massa. 10 toneladas é 10 vezes maior que 1 tonelada."
    },
    {
        question: "Se um sistema físico não sofre a ação de forças externas resultantes, dizemos que ele é um sistema:",
        formula: "F_externa = 0",
        options: ["Isolado", "Aberto", "Acelerado", "Cinético"],
        correct: 0,
        explanation: "Sistemas onde forças externas são nulas ou desprezíveis são chamados de sistemas mecanicamente isolados."
    },
    {
        question: "A variação da quantidade de movimento de um corpo (ΔQ) ocorreu de 20 kg.m/s para 60 kg.m/s. O impulso resultante vale:",
        formula: "i = Qf - Qi",
        options: ["80 N.s", "40 N.s", "20 N.s", "60 N.s"],
        correct: 1,
        explanation: "Calculando a variação do momento linear: 60 - 20 = 40 N.s."
    },
    {
        question: "Uma colisão inelástica real difere de uma elástica principalmente porque a energia cinética é convertida em:",
        formula: "Perda mecânica",
        options: ["Velocidade linear", "Massa extra", "Calor e deformação", "Impulso mecânico"],
        correct: 2,
        explanation: "Nas colisões reais inelásticas, a energia mecânica do impacto é dissipada em forma de energia térmica (calor) e deformação plástica dos materiais."
    }
];
let quizData = []; 
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let userAnswers = [];

const formulaDisplay = document.getElementById("formula-display");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressText = document.getElementById("progress");
const nextButton = document.getElementById("btn-next");
const quizContainer = document.getElementById("quiz");
const progressBarFill = document.getElementById("progress-bar-fill");

function generateRandomQuiz() {
    let poolCopy = [...questionsPool];
    for (let i = poolCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [poolCopy[i], poolCopy[j]] = [poolCopy[j], poolCopy[i]];
    }
    quizData = poolCopy.slice(0, 6);
}

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
    if (!questionText || !optionsContainer || quizData.length === 0) return;
    
    answered = false;
    if (nextButton) nextButton.style.display = "none";
    optionsContainer.innerHTML = "";

    if (quizContainer) {
        quizContainer.classList.remove("fade-in");
        void quizContainer.offsetWidth; 
        quizContainer.classList.add("fade-in");
    }

    const currentQuestion = quizData[currentQuestionIndex];
    
    questionText.innerText = currentQuestion.question;
    if (formulaDisplay) formulaDisplay.innerText = `Fórmula relacionada: ${currentQuestion.formula}`;
    if (progressText) progressText.innerText = `Pergunta ${currentQuestionIndex + 1} de ${quizData.length}`;

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

    userAnswers.push(selectedIndex);

    if (selectedIndex === currentQuestion.correct) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
        if (allButtons[currentQuestion.correct]) {
            allButtons[currentQuestion.correct].classList.add("correct");
        }
    }

    if (nextButton) nextButton.style.display = "block";
}

function mergeHistory(score, total) {
    const existingScores = JSON.parse(localStorage.getItem("physics_quiz_scores")) || [];
    const formattedDate = new Date().toLocaleDateString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    existingScores.push({ score: score, total: total, date: formattedDate });
    localStorage.setItem("physics_quiz_scores", JSON.stringify(existingScores));
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

function saveAndShowResults() {
    mergeHistory(score, quizData.length);
    const msg = getMotivationalMessage(score, quizData.length);

    if (quizContainer) {
        quizContainer.innerHTML = `
            <div class="score-container text-center">
                <h2>${msg.title}</h2>
                <p class="subtitle" style="margin-top: 10px; margin-bottom: 15px;">${msg.text}</p>
                <p class="subtitle">Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas.</p>
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                    <button onclick="generateGabaritoPDF()" class="btn-primary" style="background-color: #12a454; border: none; cursor: pointer;">📄 Baixar Gabarito PDF</button>
                    <a href="index.html" class="btn-primary">Voltar ao Painel</a>
                </div>
            </div>
        `;
    }
}

function getMotivationalMessage(score, total) {
    const ratio = score / total;
    if (ratio === 1) return { title: "Excelente! Magnífico! 🌟", text: "Você dominou totalmente os conceitos de colisões e dinâmica!" };
    if (ratio >= 0.7) return { title: "Muito bom! 🚀", text: "Excelente desempenho. Compreende bem impulso e movimento linear." };
    if (ratio >= 0.5) return { title: "Bom progresso! 🗒️", text: "Você acertou metade! Uma breve revisão garantirá nota máxima." };
    return { title: "Não desista! 💡", text: "A física dinâmica exige treino. Baixe o gabarito explicativo para estudar!" };
}

function generateGabaritoPDF() {
    const scoreText = document.getElementById("pdf-score");
    const questionsList = document.getElementById("pdf-questions-list");
    const element = document.getElementById("pdf-template");
    
    if (!scoreText || !questionsList || !element) {
        alert("Erro técnico: Elementos do PDF não encontrados na página.");
        return;
    }

    scoreText.innerText = `Resultado Final: ${score} de ${quizData.length} acertos.`;
    questionsList.innerHTML = "";

    quizData.forEach((q, index) => {
        const userSelection = userAnswers[index] !== undefined ? userAnswers[index] : 0;
        const isCorrect = userSelection === q.correct;
        
        const qDiv = document.createElement("div");
        qDiv.style.marginBottom = "25px";
        qDiv.style.padding = "10px";
        qDiv.style.borderLeft = isCorrect ? "4px solid #12a454" : "4px solid #e52e4d";
        qDiv.style.backgroundColor = "#f8f9fa";
        qDiv.style.color = "#000000";

        qDiv.innerHTML = `
            <h4 style="margin: 0 0 8px 0; color: #000000;">Pergunta ${index + 1}: ${q.question}</h4>
            <p style="margin: 4px 0; font-size: 0.9rem; color: #000000;"><strong>Sua resposta:</strong> ${q.options[userSelection]} ${isCorrect ? '✅' : '❌'}</p>
            <p style="margin: 4px 0; font-size: 0.9rem; color: #000000;"><strong>Resposta correta:</strong> ${q.options[q.correct]}</p>
            <p style="margin: 8px 0 0 0; font-size: 0.9rem; color: #555555; font-style: italic;"><strong>Explicação:</strong> ${q.explanation}</p>
        `;
        questionsList.appendChild(qDiv);
    });

    element.style.display = "block"; 

    const opt = {
        margin:       10,
        filename:     'gabarito_quiz_fisica.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save()
        .then(() => {
            element.style.display = "none"; 
        })
        .catch((err) => {
            element.style.display = "none";
            alert("Não foi possível gerar o arquivo. Tente usar uma aba anônima.");
            console.error(err);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    if (questionText) {
        generateRandomQuiz(); 
        loadQuestion();
    }
});