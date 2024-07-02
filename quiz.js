const quizData = [
    {
        question: "Que signifie PHP ?",
        a: "Personal Home Page",
        b: "PHP: Hypertext Preprocessor",
        c: "Programming Home Platform",
        d: "Preprocessor for Hypertext Pages",
        correct: "b"
    },
    {
        question: "Quelle est la bonne façon de démarrer une session PHP ?",
        a: "session_start();",
        b: "$_SESSION.start();",
        c: "Session::begin();",
        d: "start_session();",
        correct: "a"
    },
    {
        question: "Quelle fonction est utilisée pour vérifier si une variable est vide en PHP ?",
        a: "is_null()",
        b: "isset()",
        c: "empty()",
        d: "is_empty()",
        correct: "c"
    },
    {
        question: "Quelle est la bonne façon de créer une fonction en PHP ?",
        a: "function maFonction()",
        b: "new function maFonction()",
        c: "create maFonction()",
        d: "def maFonction()",
        correct: "a"
    },
    {
        question: "Lequel des éléments suivants est utilisé pour concaténer des chaînes en PHP ?",
        a: "+",
        b: ".",
        c: "&",
        d: ",",
        correct: "b"
    },
    {
        question: "Que fait la fonction isset() ?",
        a: "Vérifie si une variable est définie et n'est pas NULL",
        b: "Initialise une variable",
        c: "Détruit une variable",
        d: "Vérifie si une variable est vide",
        correct: "a"
    },
    {
        question: "Comment créez-vous un tableau en PHP ?",
        a: "$tableau = array();",
        b: "$tableau = [];",
        c: "Les deux a et b",
        d: "Ni a ni b",
        correct: "c"
    },
    {
        question: "Quelle fonction est utilisée pour obtenir la longueur d'une chaîne en PHP ?",
        a: "len()",
        b: "length()",
        c: "strlen()",
        d: "strlength()",
        correct: "c"
    },
    {
        question: "Quelle est la bonne façon d'ajouter un commentaire en PHP ?",
        a: "// Ceci est un commentaire",
        b: "# Ceci est un commentaire",
        c: "/* Ceci est un commentaire */",
        d: "Toutes les réponses ci-dessus",
        correct: "d"
    },
    {
        question: "Quelle fonction est utilisée pour inclure le contenu d'un autre fichier PHP ?",
        a: "include()",
        b: "require()",
        c: "import()",
        d: "Les deux a et b",
        correct: "d"
    },
    {
        question: "Quel est le but de la fonction die() en PHP ?",
        a: "Terminer l'exécution d'un script",
        b: "Supprimer un fichier",
        c: "Détruire une variable",
        d: "Fermer une connexion à une base de données",
        correct: "a"
    },
    {
        question: "Quelle variable superglobale est utilisée pour collecter les données de formulaire après avoir soumis un formulaire HTML avec la méthode POST ?",
        a: "$_GET",
        b: "$_POST",
        c: "$_REQUEST",
        d: "$_FORM",
        correct: "b"
    },
    {
        question: "Quelle est la bonne façon de créer une constante en PHP ?",
        a: "const MA_CONSTANTE = valeur;",
        b: "define(\"MA_CONSTANTE\", valeur);",
        c: "constant MA_CONSTANTE = valeur;",
        d: "Les deux a et b",
        correct: "b"
    },
    {
        question: "Que fait la fonction unset() en PHP ?",
        a: "Détruit une variable",
        b: "Définit une variable à NULL",
        c: "Vérifie si une variable est définie",
        d: "Réinitialise un tableau",
        correct: "a"
    },
    {
        question: "Quelle fonction est utilisée pour rediriger vers une autre page en PHP ?",
        a: "redirect()",
        b: "header()",
        c: "location()",
        d: "goto()",
        correct: "b"
    },
    {
        question: "Quel est le but de la fonction mysqli_connect() ?",
        a: "Se connecter à une base de données MySQL",
        b: "Créer une nouvelle base de données MySQL",
        c: "Exécuter une requête MySQL",
        d: "Fermer une connexion MySQL",
        correct: "a"
    },
    
];

const quiz = document.getElementById('quiz');
const quizInfo = document.getElementById('quiz-info');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    quizInfo.innerHTML = `Question ${currentQuiz + 1} sur ${quizData.length}`;
    quiz.innerHTML = `<br>
        <div class="question">${currentQuizData.question}</div><br>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuizData.a}<br><br>
        </label>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuizData.b}<br><br>
        </label>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuizData.c}<br><br>
        </label>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuizData.d}<br><br>
        </label>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer = undefined;

    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.value;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            results.innerHTML = `<h2>Vous avez obtenu ${score} sur ${quizData.length}.</h2>`;
        }
    }
});

loadQuiz();
