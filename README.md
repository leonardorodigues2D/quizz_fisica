#  Quiz de Física - Dinâmica e Colisões

Criei esse quiz interativo pra salvar a galera que tá estudando Dinâmica na escola. Tem tudo sobre impulso, quantidade de movimento e aquelas colisões chatas de física.

##  O que o projeto faz?
*   **Dashboard:** Uma tela inicial pra ver suas fórmulas e acompanhar sua evolução.
*   **Gráfico de Notas:** Um gráfico automático que mostra se você tá melhorando ou piorando no quiz.
*   **Histórico:** Suas pontuações ficam salvas no navegador (mesmo se você fechar a aba).
*   **Modo Escuro / Modo Claro:** Pra não queimar os olhos jogando de madrugada.
*   **Gabarito em PDF:** No final dá pra baixar um PDF com todas as respostas explicadas pra estudar pra prova.

## 🧠 Fórmulas do Jogo
*   **Impulso:** i = f * t (Força e tempo) e i = Q (Teorema do Impulso)
*   **Quantidade de Movimento:** Q = m * v (Massa e velocidade)
*   **Colisões (Bateu e grudou):** m1 * v1 + m2 * v2 = (m1 + m2) * vf
*   **Energia Cinética:** Ec = (m * v^2) / 2
*   **Coeficiente de Restituição (e):** 
    *   Perfeitamente Elástica (e = 1) -> Bate e volta perfeito (zero perda de energia)
    *   Inelástica (e = 0) -> Bateu, grudou e os corpos andam juntos
    *   Elástica (0 a 1) -> Parcialmente elástica (perde um pouco de velocidade e energia)



##  O que usei pra criar?
*   HTML5 / CSS3 / JavaScript (puro, sem enrolação)
*   Biblioteca `html2pdf.js` (só pra mágica do PDF funcionar)

##  Como organizar as pastas
Deixe tudo solto na mesma pasta pra não dar erro nos links:
*   `dashboard.html` (Tela de início)
*   `perguntas.html` (O jogo rolando)
*   `style.css` (O visual e as cores)
*   `script.js` (A lógica e as perguntas)
