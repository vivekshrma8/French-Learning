<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>French Learning Hub</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-card: #ffffff;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --accent: #4361ee;
            --accent-hover: #3651d4;
            --border: #dee2e6;
            --success: #28a745;
            --error: #dc3545;
            --warning: #ffc107;
            --shadow: rgba(0, 0, 0, 0.1);
        }

        [data-theme="dark"] {
            --bg-primary: #1a1a1a;
            --bg-secondary: #2d2d2d;
            --bg-card: #252525;
            --text-primary: #e9ecef;
            --text-secondary: #adb5bd;
            --border: #495057;
            --shadow: rgba(0, 0, 0, 0.3);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            transition: background 0.3s, color 0.3s;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 8px var(--shadow);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }

        .logo {
            font-size: 24px;
            font-weight: 700;
            color: var(--accent);
        }

        .header-controls {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s;
            background: var(--accent);
            color: white;
        }

        .btn:hover {
            background: var(--accent-hover);
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: var(--bg-secondary);
            color: var(--text-primary);
        }

        .btn-secondary:hover {
            background: var(--border);
        }

        .btn-icon {
            width: 40px;
            height: 40px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }

        .search-section {
            margin: 30px 0;
        }

        .search-box {
            position: relative;
            margin-bottom: 20px;
        }

        .search-input {
            width: 100%;
            padding: 16px 120px 16px 20px;
            border: 2px solid var(--border);
            border-radius: 12px;
            font-size: 16px;
            background: var(--bg-card);
            color: var(--text-primary);
            transition: border 0.3s;
        }

        .search-input:focus {
            outline: none;
            border-color: var(--accent);
        }

        .search-buttons {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            gap: 8px;
        }

        .card {
            background: var(--bg-card);
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px var(--shadow);
            border: 1px solid var(--border);
        }

        .card-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--accent);
        }

        .tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .tab {
            padding: 10px 20px;
            background: var(--bg-secondary);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary);
            transition: all 0.3s;
        }

        .tab.active {
            background: var(--accent);
            color: white;
        }

        .tab:hover {
            transform: translateY(-2px);
        }

        .result-section {
            display: none;
            animation: fadeIn 0.3s;
        }

        .result-section.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-right: 8px;
            margin-bottom: 8px;
        }

        .badge-verb { background: #e3f2fd; color: #1976d2; }
        .badge-noun { background: #f3e5f5; color: #7b1fa2; }
        .badge-adj { background: #fff3e0; color: #f57c00; }
        .badge-group { background: #e8f5e9; color: #388e3c; }

        [data-theme="dark"] .badge-verb { background: #1565c0; color: #e3f2fd; }
        [data-theme="dark"] .badge-noun { background: #6a1b9a; color: #f3e5f5; }
        [data-theme="dark"] .badge-adj { background: #ef6c00; color: #fff3e0; }
        [data-theme="dark"] .badge-group { background: #2e7d32; color: #e8f5e9; }

        .conjugation-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-top: 16px;
        }

        .conjugation-item {
            padding: 12px;
            background: var(--bg-secondary);
            border-radius: 8px;
        }

        .pronoun {
            font-weight: 600;
            color: var(--accent);
        }

        .word-of-day {
            background: linear-gradient(135deg, var(--accent), #7209b7);
            color: white;
            padding: 24px;
            border-radius: 12px;
            cursor: pointer;
            transition: transform 0.3s;
        }

        .word-of-day:hover {
            transform: scale(1.02);
        }

        .history-item {
            padding: 12px;
            background: var(--bg-secondary);
            border-radius: 8px;
            margin-bottom: 8px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .history-item:hover {
            background: var(--border);
            transform: translateX(4px);
        }

        .quiz-question {
            padding: 20px;
            background: var(--bg-secondary);
            border-radius: 8px;
            margin-bottom: 16px;
        }

        .quiz-options {
            display: grid;
            gap: 12px;
            margin-top: 16px;
        }

        .quiz-option {
            padding: 12px 20px;
            background: var(--bg-card);
            border: 2px solid var(--border);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .quiz-option:hover {
            border-color: var(--accent);
        }

        .quiz-option.correct {
            background: var(--success);
            color: white;
            border-color: var(--success);
        }

        .quiz-option.wrong {
            background: var(--error);
            color: white;
            border-color: var(--error);
        }

        .status-indicator {
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 12px;
        }

        .status-offline {
            background: var(--warning);
            color: #000;
        }

        .status-online {
            background: var(--success);
            color: white;
        }

        .loading {
            text-align: center;
            padding: 20px;
            color: var(--text-secondary);
        }

        .spinner {
            border: 3px solid var(--border);
            border-top: 3px solid var(--accent);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .grid-2 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .tense-explanation {
            background: var(--bg-secondary);
            padding: 16px;
            border-radius: 8px;
            margin-top: 12px;
            border-left: 4px solid var(--accent);
        }

        @media (max-width: 768px) {
            .container {
                padding: 12px;
            }

            .header-content {
                flex-direction: column;
            }

            .search-input {
                padding: 14px 60px 14px 16px;
                font-size: 14px;
            }

            .tabs {
                overflow-x: auto;
                flex-wrap: nowrap;
            }

            .card {
                padding: 16px;
            }

            .conjugation-grid {
                grid-template-columns: 1fr;
            }
        }

        .empty-state {
            text-align: center;
            padding: 40px 20px;
            color: var(--text-secondary);
        }

        .error-message {
            background: rgba(220, 53, 69, 0.1);
            border: 1px solid var(--error);
            color: var(--error);
            padding: 12px 16px;
            border-radius: 8px;
            margin-top: 12px;
        }

        .success-message {
            background: rgba(40, 167, 69, 0.1);
            border: 1px solid var(--success);
            color: var(--success);
            padding: 12px 16px;
            border-radius: 8px;
            margin-top: 12px;
        }

        .sentence-input {
            width: 100%;
            padding: 12px;
            border: 2px solid var(--border);
            border-radius: 8px;
            font-size: 14px;
            background: var(--bg-card);
            color: var(--text-primary);
            margin-bottom: 12px;
            min-height: 80px;
            font-family: inherit;
        }

        .sentence-input:focus {
            outline: none;
            border-color: var(--accent);
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">🇫🇷 French Learning Hub</div>
                <div class="header-controls">
                    <span id="connectionStatus" class="status-indicator status-online">Online</span>
                    <button class="btn btn-icon btn-secondary" id="themeToggle" title="Toggle Theme">🌓</button>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="search-section">
            <div class="search-box">
                <input type="text" class="search-input" id="searchInput" placeholder="Search for French words, verbs, or enter sentences...">
                <div class="search-buttons">
                    <button class="btn btn-icon" id="voiceBtn" title="Voice Search">🎤</button>
                    <button class="btn btn-icon" id="searchBtn" title="Search">🔍</button>
                </div>
            </div>
            <div class="tabs">
                <button class="tab active" data-mode="dictionary">Dictionary</button>
                <button class="tab" data-mode="conjugation">Conjugation</button>
                <button class="tab" data-mode="tense">Tense Analyzer</button>
                <button class="tab" data-mode="correction">Correction</button>
                <button class="tab" data-mode="practice">DELF/DALF Practice</button>
            </div>
        </div>

        <div class="grid-2">
            <div>
                <div id="resultsCard" class="card" style="display: none;">
                    <div class="card-title">Results</div>
                    <div id="resultsContent"></div>
                </div>

                <div class="card word-of-day" id="wordOfDay">
                    <h3 style="margin-bottom: 8px;">📅 Word of the Day</h3>
                    <div style="font-size: 28px; font-weight: 700;" id="wodWord"></div>
                    <div style="opacity: 0.9; margin-top: 8px;" id="wodMeaning"></div>
                    <div style="font-size: 12px; opacity: 0.8; margin-top: 8px;">Click to search</div>
                </div>
            </div>

            <div>
                <div class="card">
                    <div class="card-title">📜 Search History</div>
                    <div id="historyContent"></div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const OFFLINE_DICTIONARY = {
            'bonjour': { word: 'bonjour', pos: 'interjection', meaning: 'hello, good morning', examples: ['Bonjour madame!'] },
            'merci': { word: 'merci', pos: 'interjection', meaning: 'thank you', examples: ['Merci beaucoup!'] },
            'oui': { word: 'oui', pos: 'adverb', meaning: 'yes', examples: ['Oui, bien sûr!'] },
            'non': { word: 'non', pos: 'adverb', meaning: 'no', examples: ['Non, merci.'] },
            'au revoir': { word: 'au revoir', pos: 'interjection', meaning: 'goodbye', examples: ['Au revoir, à bientôt!'] },
            'parler': { word: 'parler', pos: 'verb', meaning: 'to speak, to talk', group: 'ER', examples: ['Je parle français.'] },
            'manger': { word: 'manger', pos: 'verb', meaning: 'to eat', group: 'ER', examples: ['Je mange une pomme.'] },
            'aimer': { word: 'aimer', pos: 'verb', meaning: 'to love, to like', group: 'ER', examples: ['J\'aime le chocolat.'] },
            'finir': { word: 'finir', pos: 'verb', meaning: 'to finish', group: 'IR', examples: ['Je finis mes devoirs.'] },
            'choisir': { word: 'choisir', pos: 'verb', meaning: 'to choose', group: 'IR', examples: ['Je choisis un livre.'] },
            'vendre': { word: 'vendre', pos: 'verb', meaning: 'to sell', group: 'RE', examples: ['Je vends ma voiture.'] },
            'attendre': { word: 'attendre', pos: 'verb', meaning: 'to wait', group: 'RE', examples: ['J\'attends le bus.'] },
            'beau': { word: 'beau', pos: 'adjective', meaning: 'beautiful, handsome', examples: ['C\'est un beau jour.'] },
            'petit': { word: 'petit', pos: 'adjective', meaning: 'small, little', examples: ['Un petit chat.'] },
            'grand': { word: 'grand', pos: 'adjective', meaning: 'big, tall', examples: ['Une grande maison.'] },
            'bon': { word: 'bon', pos: 'adjective', meaning: 'good', examples: ['C\'est bon!'] },
            'maison': { word: 'maison', pos: 'noun', meaning: 'house, home', examples: ['Ma maison est grande.'] },
            'chat': { word: 'chat', pos: 'noun', meaning: 'cat', examples: ['Le chat est mignon.'] },
            'chien': { word: 'chien', pos: 'noun', meaning: 'dog', examples: ['Mon chien est gentil.'] },
            'livre': { word: 'livre', pos: 'noun', meaning: 'book', examples: ['Je lis un livre.'] },
            'eau': { word: 'eau', pos: 'noun', meaning: 'water', examples: ['Je bois de l\'eau.'] },
            'pain': { word: 'pain', pos: 'noun', meaning: 'bread', examples: ['Le pain français est délicieux.'] },
            'vin': { word: 'vin', pos: 'noun', meaning: 'wine', examples: ['Un verre de vin rouge.'] },
            'fromage': { word: 'fromage', pos: 'noun', meaning: 'cheese', examples: ['Le fromage français.'] },
            'danser': { word: 'danser', pos: 'verb', meaning: 'to dance', group: 'ER', examples: ['Je danse avec mes amis.'] },
            'chanter': { word: 'chanter', pos: 'verb', meaning: 'to sing', group: 'ER', examples: ['Elle chante bien.'] },
            'étudier': { word: 'étudier', pos: 'verb', meaning: 'to study', group: 'ER', examples: ['J\'étudie le français.'] },
            'travailler': { word: 'travailler', pos: 'verb', meaning: 'to work', group: 'ER', examples: ['Je travaille à Paris.'] },
            'regarder': { word: 'regarder', pos: 'verb', meaning: 'to watch, to look at', group: 'ER', examples: ['Je regarde la télévision.'] },
            'écouter': { word: 'écouter', pos: 'verb', meaning: 'to listen', group: 'ER', examples: ['J\'écoute de la musique.'] },
            'jouer': { word: 'jouer', pos: 'verb', meaning: 'to play', group: 'ER', examples: ['Je joue au football.'] },
            'nager': { word: 'nager', pos: 'verb', meaning: 'to swim', group: 'ER', examples: ['Je nage dans la piscine.'] },
            'voyager': { word: 'voyager', pos: 'verb', meaning: 'to travel', group: 'ER', examples: ['J\'aime voyager.'] },
            'acheter': { word: 'acheter', pos: 'verb', meaning: 'to buy', group: 'ER', examples: ['J\'achète du pain.'] },
            'donner': { word: 'donner', pos: 'verb', meaning: 'to give', group: 'ER', examples: ['Je donne un cadeau.'] },
            'trouver': { word: 'trouver', pos: 'verb', meaning: 'to find', group: 'ER', examples: ['Je trouve la solution.'] },
            'remplir': { word: 'remplir', pos: 'verb', meaning: 'to fill', group: 'IR', examples: ['Je remplis le verre.'] },
            'réussir': { word: 'réussir', pos: 'verb', meaning: 'to succeed', group: 'IR', examples: ['Je réussis mon examen.'] },
            'bâtir': { word: 'bâtir', pos: 'verb', meaning: 'to build', group: 'IR', examples: ['Ils bâtissent une maison.'] },
            'réfléchir': { word: 'réfléchir', pos: 'verb', meaning: 'to think, to reflect', group: 'IR', examples: ['Je réfléchis à la question.'] },
            'répondre': { word: 'répondre', pos: 'verb', meaning: 'to answer', group: 'RE', examples: ['Je réponds à la question.'] },
            'entendre': { word: 'entendre', pos: 'verb', meaning: 'to hear', group: 'RE', examples: ['J\'entends de la musique.'] },
            'descendre': { word: 'descendre', pos: 'verb', meaning: 'to go down, to descend', group: 'RE', examples: ['Je descends l\'escalier.'] },
            'perdre': { word: 'perdre', pos: 'verb', meaning: 'to lose', group: 'RE', examples: ['Je perds mes clés.'] },
            'ami': { word: 'ami', pos: 'noun', meaning: 'friend', examples: ['Mon ami Paul.'] },
            'famille': { word: 'famille', pos: 'noun', meaning: 'family', examples: ['Ma famille est grande.'] },
            'père': { word: 'père', pos: 'noun', meaning: 'father', examples: ['Mon père travaille.'] },
            'mère': { word: 'mère', pos: 'noun', meaning: 'mother', examples: ['Ma mère cuisine bien.'] },
            'enfant': { word: 'enfant', pos: 'noun', meaning: 'child', examples: ['L\'enfant joue.'] },
            'homme': { word: 'homme', pos: 'noun', meaning: 'man', examples: ['Un homme âgé.'] },
            'femme': { word: 'femme', pos: 'noun', meaning: 'woman', examples: ['Une femme élégante.'] },
            'jour': { word: 'jour', pos: 'noun', meaning: 'day', examples: ['Un beau jour.'] },
            'temps': { word: 'temps', pos: 'noun', meaning: 'time, weather', examples: ['Le temps passe vite.'] },
            'année': { word: 'année', pos: 'noun', meaning: 'year', examples: ['Bonne année!'] },
            'rouge': { word: 'rouge', pos: 'adjective', meaning: 'red', examples: ['Une voiture rouge.'] },
            'bleu': { word: 'bleu', pos: 'adjective', meaning: 'blue', examples: ['Le ciel bleu.'] },
            'vert': { word: 'vert', pos: 'adjective', meaning: 'green', examples: ['L\'herbe verte.'] },
            'jaune': { word: 'jaune', pos: 'adjective', meaning: 'yellow', examples: ['Un citron jaune.'] },
            'blanc': { word: 'blanc', pos: 'adjective', meaning: 'white', examples: ['La neige blanche.'] },
            'noir': { word: 'noir', pos: 'adjective', meaning: 'black', examples: ['Un chat noir.'] },
            'nouveau': { word: 'nouveau', pos: 'adjective', meaning: 'new', examples: ['Un nouveau livre.'] },
            'vieux': { word: 'vieux', pos: 'adjective', meaning: 'old', examples: ['Un vieux château.'] },
            'jeune': { word: 'jeune', pos: 'adjective', meaning: 'young', examples: ['Un jeune homme.'] },
            'joli': { word: 'joli', pos: 'adjective', meaning: 'pretty', examples: ['Une jolie fleur.'] },
            'ville': { word: 'ville', pos: 'noun', meaning: 'city, town', examples: ['Une grande ville.'] },
            'pays': { word: 'pays', pos: 'noun', meaning: 'country', examples: ['Un beau pays.'] },
            'école': { word: 'école', pos: 'noun', meaning: 'school', examples: ['Je vais à l\'école.'] },
            'voiture': { word: 'voiture', pos: 'noun', meaning: 'car', examples: ['Une voiture rapide.'] },
            'train': { word: 'train', pos: 'noun', meaning: 'train', examples: ['Le train arrive.'] },
            'avion': { word: 'avion', pos: 'noun', meaning: 'airplane', examples: ['Un avion dans le ciel.'] }
        };

        const WORD_OF_DAY_LIST = [
            { word: 'parler', meaning: 'to speak' },
            { word: 'manger', meaning: 'to eat' },
            { word: 'beau', meaning: 'beautiful' },
            { word: 'maison', meaning: 'house' },
            { word: 'aimer', meaning: 'to love' },
            { word: 'voyager', meaning: 'to travel' },
            { word: 'ami', meaning: 'friend' }
        ];

        const DELF_QUESTIONS = {
            A1: [
                { q: 'Complete: Je ___ (parler) français.', options: ['parle', 'parles', 'parlons', 'parlent'], correct: 0, explanation: 'First person singular present tense of parler is "parle"' },
                { q: 'Complete: Nous ___ (finir) le travail.', options: ['finis', 'finit', 'finissons', 'finissent'], correct: 2, explanation: 'First person plural present tense of finir is "finissons"' },
                { q: 'Complete: Il ___ (être) content.', options: ['es', 'est', 'sommes', 'sont'], correct: 1, explanation: 'Third person singular of être is "est"' },
                { q: 'Complete: Tu ___ (avoir) un chat.', options: ['ai', 'as', 'a', 'ont'], correct: 1, explanation: 'Second person singular of avoir is "as"' }
            ],
            A2: [
                { q: 'Complete: Hier, je ___ (manger) au restaurant.', options: ['mange', 'mangeais', 'ai mangé', 'mangerai'], correct: 2, explanation: 'Passé composé is used for completed actions: "ai mangé"' },
                { q: 'Complete: Quand j\'étais jeune, je ___ (jouer) au football.', options: ['joue', 'jouais', 'ai joué', 'jouerai'], correct: 1, explanation: 'Imparfait is used for habitual past actions: "jouais"' },
                { q: 'Complete: Demain, nous ___ (partir) en vacances.', options: ['partons', 'partions', 'sommes partis', 'partirons'], correct: 3, explanation: 'Future simple for future actions: "partirons"' }
            ],
            B1: [
                { q: 'Complete: Si j\'avais de l\'argent, je ___ (voyager).', options: ['voyage', 'voyageais', 'voyagerais', 'voyagerai'], correct: 2, explanation: 'Conditionnel présent after "si" + imparfait: "voyagerais"' },
                { q: 'Complete: Il faut que tu ___ (finir) tes devoirs.', options: ['finis', 'finisses', 'finiras', 'finirais'], correct: 1, explanation: 'Subjonctif after "il faut que": "finisses"' },
                { q: 'Complete: Nous ___ (étudier) depuis deux heures.', options: ['étudions', 'étudiions', 'avons étudié', 'étudierons'], correct: 0, explanation: 'Present tense with "depuis" for ongoing actions: "étudions"' }
            ],
            B2: [
                { q: 'Complete: Bien qu\'il ___ (pleuvoir), nous sommes sortis.', options: ['pleut', 'pleuvait', 'pleuve', 'a plu'], correct: 2, explanation: 'Subjonctif after "bien que": "pleuve"' },
                { q: 'Complete: Je ___ (finir) avant qu\'il arrive.', options: ['finis', 'finirais', 'aurai fini', 'aurais fini'], correct: 2, explanation: 'Futur antérieur before future event: "aurai fini"' },
                { q: 'Complete: Si j\'avais su, je ___ (venir) plus tôt.', options: ['viens', 'venais', 'serais venu', 'viendrai'], correct: 2, explanation: 'Conditionnel passé after "si" + plus-que-parfait: "serais venu"' }
            ]
        };

        let currentMode = 'dictionary';
        let searchHistory = [];
        let isOnline = navigator.onLine;
        let currentQuizLevel = 'A1';
        let currentQuizIndex = 0;

        function initApp() {
            loadTheme();
            loadHistory();
            updateWordOfDay();
            updateConnectionStatus();
            attachEventListeners();
        }

        function attachEventListeners() {
            document.getElementById('searchBtn').addEventListener('click', performSearch);
            document.getElementById('searchInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') performSearch();
            });
            document.getElementById('themeToggle').addEventListener('click', toggleTheme);
            document.getElementById('voiceBtn').addEventListener('click', startVoiceSearch);
            document.getElementById('wordOfDay').addEventListener('click', searchWordOfDay);

            document.querySelectorAll('.tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    e.target.classList.add('active');
                    currentMode = e.target.dataset.mode;
                    document.getElementById('resultsCard').style.display = 'none';
                    
                    if (currentMode === 'practice') {
                        showPracticeMode();
                    }
                });
            });

            window.addEventListener('online', () => {
                isOnline = true;
                updateConnectionStatus();
            });

            window.addEventListener('offline', () => {
                isOnline = false;
                updateConnectionStatus();
            });
        }

        function updateConnectionStatus() {
            const status = document.getElementById('connectionStatus');
            if (isOnline) {
                status.textContent = 'Online';
                status.className = 'status-indicator status-online';
            } else {
                status.textContent = 'Offline';
                status.className = 'status-indicator status-offline';
            }
        }

        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }

        function loadTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', savedTheme);
        }

        function updateWordOfDay() {
            const today = new Date().getDate();
            const wod = WORD_OF_DAY_LIST[today % WORD_OF_DAY_LIST.length];
            document.getElementById('wodWord').textContent = wod.word;
            document.getElementById('wodMeaning').textContent = wod.meaning;
        }

        function searchWordOfDay() {
            const word = document.getElementById('wodWord').textContent;
            document.getElementById('searchInput').value = word;
            performSearch();
        }

        function startVoiceSearch() {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                alert('Voice search not supported in this browser');
                return;
            }

            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'fr-FR';
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onstart = () => {
                document.getElementById('voiceBtn').textContent = '🔴';
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('searchInput').value = transcript;
                performSearch();
            };

            recognition.onend = () => {
                document.getElementById('voiceBtn').textContent = '🎤';
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error', event);
                document.getElementById('voiceBtn').textContent = '🎤';
            };

            recognition.start();
        }

        async function performSearch() {
            const query = document.getElementById('searchInput').value.trim().toLowerCase();
            if (!query) return;

            addToHistory(query);
            showLoading();

            let result = null;

            switch (currentMode) {
                case 'dictionary':
                    result = await searchDictionary(query);
                    break;
                case 'conjugation':
                    result = await searchConjugation(query);
                    break;
                case 'tense':
                    result = analyzeTense(query);
                    break;
                case 'correction':
                    result = correctSentence(query);
                    break;
                default:
                    result = await searchDictionary(query);
            }

            displayResults(result);
        }

        function showLoading() {
            const card = document.getElementById('resultsCard');
            const content = document.getElementById('resultsContent');
            card.style.display = 'block';
            content.innerHTML = '<div class="loading"><div class="spinner"></div><p>Searching...</p></div>';
        }

        async function searchDictionary(word) {
            let html = '';

            const offlineResult = OFFLINE_DICTIONARY[word];
            if (offlineResult) {
                html += formatOfflineResult(offlineResult);
            }

            const verbInfo = detectVerb(word);
            if (verbInfo.isVerb) {
                html += formatVerbInfo(verbInfo);
            }

            if (isOnline) {
                try {
                    const apiResult = await fetchOnlineDictionary(word);
                    if (apiResult) {
                        html += formatOnlineResult(apiResult);
                    }
                } catch (error) {
                    console.error('Online dictionary error:', error);
                }

                if (!offlineResult && !verbInfo.isVerb) {
                    try {
                        const translation = await translateWord(word);
                        if (translation) {
                            html += formatTranslationResult(translation, word);
                        }
                    } catch (error) {
                        console.error('Translation error:', error);
                    }
                }
            }

            if (!html) {
                html = '<div class="empty-state">❌ No results found. Try another word or check your spelling.</div>';
            }

            return html;
        }

        async function fetchOnlineDictionary(word) {
            try {
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/fr/${word}`);
                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                return null;
            }
            return null;
        }

        async function translateWord(word) {
            try {
                const response = await fetch('https://libretranslate.com/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        q: word,
                        source: 'auto',
                        target: 'en',
                        format: 'text'
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    return data.translatedText;
                }
            } catch (error) {
                return null;
            }
            return null;
        }

        function formatOfflineResult(result) {
            let html = '<div style="margin-bottom: 20px; padding: 16px; background: var(--bg-secondary); border-radius: 8px;">';
            html += '<div style="margin-bottom: 8px;"><span class="badge badge-offline" style="background: var(--success); color: white;">📦 Offline</span></div>';
            html += `<h3 style="font-size: 24px; margin-bottom: 8px;">${result.word}</h3>`;
            
            const posClass = result.pos === 'verb' ? 'badge-verb' : result.pos === 'noun' ? 'badge-noun' : 'badge-adj';
            html += `<span class="badge ${posClass}">${result.pos}</span>`;
            
            if (result.group) {
                html += `<span class="badge badge-group">Group ${result.group}</span>`;
            }
            
            html += `<p style="margin-top: 12px; font-size: 16px;"><strong>Meaning:</strong> ${result.meaning}</p>`;
            
            if (result.examples && result.examples.length > 0) {
                html += `<p style="margin-top: 8px; font-style: italic; color: var(--text-secondary);">"${result.examples[0]}"</p>`;
            }
            
            html += '</div>';
            return html;
        }

        function formatVerbInfo(verbInfo) {
            let html = '<div style="margin-bottom: 20px; padding: 16px; background: var(--bg-secondary); border-radius: 8px;">';
            html += '<div style="margin-bottom: 8px;"><span class="badge badge-verb">🔍 Verb Detected</span></div>';
            html += `<h3 style="font-size: 20px; margin-bottom: 8px;">${verbInfo.verb}</h3>`;
            html += `<span class="badge badge-group">Group ${verbInfo.group}</span>`;
            html += `<p style="margin-top: 12px;">This is a regular French verb ending in <strong>-${verbInfo.ending}</strong></p>`;
            html += '</div>';
            return html;
        }

        function formatOnlineResult(data) {
            if (!data || !Array.isArray(data) || data.length === 0) return '';
            
            let html = '<div style="margin-bottom: 20px; padding: 16px; background: var(--bg-secondary); border-radius: 8px;">';
            html += '<div style="margin-bottom: 8px;"><span class="badge" style="background: var(--accent); color: white;">🌐 Online Dictionary</span></div>';
            
            const entry = data[0];
            html += `<h3 style="font-size: 24px; margin-bottom: 8px;">${entry.word}</h3>`;
            
            if (entry.meanings && entry.meanings.length > 0) {
                entry.meanings.slice(0, 2).forEach(meaning => {
                    html += `<div style="margin-top: 12px;">`;
                    html += `<span class="badge badge-verb">${meaning.partOfSpeech}</span>`;
                    
                    if (meaning.definitions && meaning.definitions.length > 0) {
                        html += `<p style="margin-top: 8px;"><strong>Definition:</strong> ${meaning.definitions[0].definition}</p>`;
                        
                        if (meaning.definitions[0].example) {
                            html += `<p style="margin-top: 4px; font-style: italic; color: var(--text-secondary);">"${meaning.definitions[0].example}"</p>`;
                        }
                    }
                    html += `</div>`;
                });
            }
            
            html += '</div>';
            return html;
        }

        function formatTranslationResult(translation, originalWord) {
            let html = '<div style="margin-bottom: 20px; padding: 16px; background: var(--bg-secondary); border-radius: 8px;">';
            html += '<div style="margin-bottom: 8px;"><span class="badge" style="background: var(--warning); color: #000;">🔄 Translation</span></div>';
            html += `<h3 style="font-size: 24px; margin-bottom: 8px;">${originalWord}</h3>`;
            html += `<p style="font-size: 16px;"><strong>Translation:</strong> ${translation}</p>`;
            html += '</div>';
            return html;
        }

        function detectVerb(word) {
            const endings = {
                'er': 'ER',
                'ir': 'IR',
                're': 'RE'
            };

            for (const [ending, group] of Object.entries(endings)) {
                if (word.endsWith(ending) && word.length > 2) {
                    return {
                        isVerb: true,
                        verb: word,
                        ending: ending,
                        group: group,
                        stem: word.slice(0, -ending.length)
                    };
                }
            }

            return { isVerb: false };
        }

        async function searchConjugation(verb) {
            const verbInfo = detectVerb(verb);
            
            if (!verbInfo.isVerb) {
                return '<div class="empty-state">⚠️ This doesn\'t appear to be a regular verb. Try a verb ending in -er, -ir, or -re.</div>';
            }

            const conjugations = conjugateVerb(verbInfo);
            let html = '<div style="margin-bottom: 20px;">';
            html += `<h3 style="font-size: 24px; margin-bottom: 12px;">Conjugation: ${verb}</h3>`;
            html += `<span class="badge badge-group">Group ${verbInfo.group}</span>`;

            for (const [tense, forms] of Object.entries(conjugations)) {
                html += `<div style="margin-top: 24px;">`;
                html += `<h4 style="color: var(--accent); font-size: 18px; margin-bottom: 12px;">${tense}</h4>`;
                html += '<div class="conjugation-grid">';
                
                for (const [pronoun, form] of Object.entries(forms)) {
                    html += `<div class="conjugation-item">`;
                    html += `<span class="pronoun">${pronoun}</span> ${form}`;
                    html += `</div>`;
                }
                
                html += '</div></div>';
            }

            html += '</div>';
            return html;
        }

        function conjugateVerb(verbInfo) {
            const { stem, group } = verbInfo;
            const conjugations = {};

            if (group === 'ER') {
                conjugations['Présent'] = {
                    'je': stem + 'e',
                    'tu': stem + 'es',
                    'il/elle': stem + 'e',
                    'nous': stem + 'ons',
                    'vous': stem + 'ez',
                    'ils/elles': stem + 'ent'
                };

                conjugations['Imparfait'] = {
                    'je': stem + 'ais',
                    'tu': stem + 'ais',
                    'il/elle': stem + 'ait',
                    'nous': stem + 'ions',
                    'vous': stem + 'iez',
                    'ils/elles': stem + 'aient'
                };

                conjugations['Futur simple'] = {
                    'je': verbInfo.verb + 'ai',
                    'tu': verbInfo.verb + 'as',
                    'il/elle': verbInfo.verb + 'a',
                    'nous': verbInfo.verb + 'ons',
                    'vous': verbInfo.verb + 'ez',
                    'ils/elles': verbInfo.verb + 'ont'
                };
            } else if (group === 'IR') {
                conjugations['Présent'] = {
                    'je': stem + 'is',
                    'tu': stem + 'is',
                    'il/elle': stem + 'it',
                    'nous': stem + 'issons',
                    'vous': stem + 'issez',
                    'ils/elles': stem + 'issent'
                };

                conjugations['Imparfait'] = {
                    'je': stem + 'issais',
                    'tu': stem + 'issais',
                    'il/elle': stem + 'issait',
                    'nous': stem + 'issions',
                    'vous': stem + 'issiez',
                    'ils/elles': stem + 'issaient'
                };

                conjugations['Futur simple'] = {
                    'je': verbInfo.verb + 'ai',
                    'tu': verbInfo.verb + 'as',
                    'il/elle': verbInfo.verb + 'a',
                    'nous': verbInfo.verb + 'ons',
                    'vous': verbInfo.verb + 'ez',
                    'ils/elles': verbInfo.verb + 'ont'
                };
            } else if (group === 'RE') {
                conjugations['Présent'] = {
                    'je': stem + 's',
                    'tu': stem + 's',
                    'il/elle': stem,
                    'nous': stem + 'ons',
                    'vous': stem + 'ez',
                    'ils/elles': stem + 'ent'
                };

                conjugations['Imparfait'] = {
                    'je': stem + 'ais',
                    'tu': stem + 'ais',
                    'il/elle': stem + 'ait',
                    'nous': stem + 'ions',
                    'vous': stem + 'iez',
                    'ils/elles': stem + 'aient'
                };

                conjugations['Futur simple'] = {
                    'je': stem + 'ai',
                    'tu': stem + 'as',
                    'il/elle': stem + 'a',
                    'nous': stem + 'ons',
                    'vous': stem + 'ez',
                    'ils/elles': stem + 'ont'
                };
            }

            return conjugations;
        }

        function analyzeTense(sentence) {
            let html = '<div>';
            html += '<h3 style="font-size: 24px; margin-bottom: 16px;">Tense Analysis</h3>';
            html += `<p style="padding: 12px; background: var(--bg-secondary); border-radius: 8px; margin-bottom: 16px;"><strong>Sentence:</strong> ${sentence}</p>`;

            const detectedTenses = [];

            if (sentence.match(/\b(ai|as|a|avons|avez|ont)\s+\w+é\b/i) || sentence.match(/\b(suis|es|est|sommes|êtes|sont)\s+\w+é\b/i)) {
                detectedTenses.push({
                    tense: 'Passé composé',
                    explanation: 'This tense is used for completed actions in the past. It is formed with avoir/être + past participle.',
                    example: 'J\'ai mangé (I ate/I have eaten)'
                });
            }

            if (sentence.match(/\b\w+ais\b|\b\w+ait\b|\b\w+ions\b|\b\w+iez\b|\b\w+aient\b/i)) {
                detectedTenses.push({
                    tense: 'Imparfait',
                    explanation: 'Used for habitual past actions, descriptions in the past, or ongoing actions.',
                    example: 'Je parlais (I was speaking/I used to speak)'
                });
            }

            if (sentence.match(/\b\w+(erai|eras|era|erons|erez|eront|rai|ras|ra|rons|rez|ront)\b/i)) {
                detectedTenses.push({
                    tense: 'Futur simple',
                    explanation: 'Used to express future actions or intentions.',
                    example: 'Je parlerai (I will speak)'
                });
            }

            if (sentence.match(/\b\w+(erais|erait|erions|eriez|eraient|rais|rait|rions|riez|raient)\b/i)) {
                detectedTenses.push({
                    tense: 'Conditionnel',
                    explanation: 'Used to express hypothetical situations or polite requests.',
                    example: 'Je parlerais (I would speak)'
                });
            }

            if (sentence.match(/\bque\s+(je|tu|il|elle|nous|vous|ils|elles)\s+\w+/i)) {
                detectedTenses.push({
                    tense: 'Possible Subjonctif',
                    explanation: 'Often used after "que" to express doubt, wish, necessity, or emotion.',
                    example: 'Il faut que je parle (I must speak)'
                });
            }

            if (detectedTenses.length > 0) {
                detectedTenses.forEach(item => {
                    html += '<div class="tense-explanation">';
                    html += `<h4 style="color: var(--accent); margin-bottom: 8px;">✓ ${item.tense}</h4>`;
                    html += `<p style="margin-bottom: 8px;">${item.explanation}</p>`;
                    html += `<p style="font-style: italic; color: var(--text-secondary);">Example: ${item.example}</p>`;
                    html += '</div>';
                });
            } else {
                html += '<div class="empty-state">No specific tense pattern detected. Try a more complete sentence.</div>';
            }

            html += '</div>';
            return html;
        }

        function correctSentence(sentence) {
            let html = '<div>';
            html += '<h3 style="font-size: 24px; margin-bottom: 16px;">Sentence Correction</h3>';
            html += `<p style="padding: 12px; background: var(--bg-secondary); border-radius: 8px; margin-bottom: 16px;"><strong>Original:</strong> ${sentence}</p>`;

            const corrections = [];

            if (sentence.match(/\bje\s+est\b/i)) {
                corrections.push({
                    error: 'je est',
                    correction: 'je suis',
                    explanation: 'The verb "être" with "je" is "suis", not "est"'
                });
            }

            if (sentence.match(/\bil\s+a\s+\w+er\b/i)) {
                corrections.push({
                    error: 'il a [infinitive]',
                    correction: 'il a [past participle]',
                    explanation: 'After "avoir", use the past participle, not the infinitive'
                });
            }

            if (sentence.match(/\bles?\s+\w+s\s+est\b/i)) {
                corrections.push({
                    error: 'les ... est',
                    correction: 'les ... sont',
                    explanation: 'Plural subjects require "sont", not "est"'
                });
            }

            if (corrections.length > 0) {
                html += '<div style="margin-bottom: 16px;">';
                html += '<h4 style="color: var(--error); margin-bottom: 12px;">Found Issues:</h4>';
                
                corrections.forEach(item => {
                    html += '<div style="padding: 12px; background: var(--bg-secondary); border-radius: 8px; margin-bottom: 12px; border-left: 4px solid var(--error);">';
                    html += `<p style="margin-bottom: 8px;"><strong>Error:</strong> ${item.error}</p>`;
                    html += `<p style="margin-bottom: 8px; color: var(--success);"><strong>Correction:</strong> ${item.correction}</p>`;
                    html += `<p style="color: var(--text-secondary);">${item.explanation}</p>`;
                    html += '</div>';
                });
                
                html += '</div>';
            } else {
                html += '<div class="success-message">✓ No common errors detected! The sentence looks good.</div>';
            }

            html += '<div style="margin-top: 20px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">';
            html += '<h4 style="margin-bottom: 8px;">💡 Common DELF/DALF Mistakes to Avoid:</h4>';
            html += '<ul style="margin-left: 20px; line-height: 2;">';
            html += '<li>Agreement of adjectives with gender and number</li>';
            html += '<li>Choosing between passé composé and imparfait</li>';
            html += '<li>Using the correct auxiliary (avoir vs être)</li>';
            html += '<li>Subjunctive after expressions of necessity or emotion</li>';
            html += '</ul>';
            html += '</div>';

            html += '</div>';
            return html;
        }

        function showPracticeMode() {
            const card = document.getElementById('resultsCard');
            const content = document.getElementById('resultsContent');
            
            card.style.display = 'block';
            
            let html = '<div>';
            html += '<h3 style="font-size: 24px; margin-bottom: 16px;">DELF/DALF Practice</h3>';
            html += '<div class="tabs" style="margin-bottom: 20px;">';
            html += '<button class="tab active" onclick="selectQuizLevel(\'A1\')">A1</button>';
            html += '<button class="tab" onclick="selectQuizLevel(\'A2\')">A2</button>';
            html += '<button class="tab" onclick="selectQuizLevel(\'B1\')">B1</button>';
            html += '<button class="tab" onclick="selectQuizLevel(\'B2\')">B2</button>';
            html += '</div>';
            html += '<div id="quizContainer"></div>';
            html += '</div>';
            
            content.innerHTML = html;
            loadQuiz();
        }

        function selectQuizLevel(level) {
            currentQuizLevel = level;
            currentQuizIndex = 0;
            
            document.querySelectorAll('#resultsContent .tab').forEach(tab => {
                tab.classList.remove('active');
                if (tab.textContent === level) {
                    tab.classList.add('active');
                }
            });
            
            loadQuiz();
        }

        function loadQuiz() {
            const questions = DELF_QUESTIONS[currentQuizLevel];
            if (!questions || questions.length === 0) return;
            
            const question = questions[currentQuizIndex];
            const container = document.getElementById('quizContainer');
            
            let html = '<div class="quiz-question">';
            html += `<div style="margin-bottom: 12px;"><span class="badge badge-group">Question ${currentQuizIndex + 1}/${questions.length}</span></div>`;
            html += `<h4 style="font-size: 18px; margin-bottom: 16px;">${question.q}</h4>`;
            html += '<div class="quiz-options">';
            
            question.options.forEach((option, index) => {
                html += `<div class="quiz-option" onclick="checkAnswer(${index})">${option}</div>`;
            });
            
            html += '</div>';
            html += '</div>';
            html += '<div id="quizFeedback"></div>';
            
            container.innerHTML = html;
        }

        function checkAnswer(selected) {
            const questions = DELF_QUESTIONS[currentQuizLevel];
            const question = questions[currentQuizIndex];
            const options = document.querySelectorAll('.quiz-option');
            const feedback = document.getElementById('quizFeedback');
            
            options.forEach((opt, index) => {
                opt.style.pointerEvents = 'none';
                if (index === question.correct) {
                    opt.classList.add('correct');
                } else if (index === selected && selected !== question.correct) {
                    opt.classList.add('wrong');
                }
            });
            
            let html = '<div style="margin-top: 16px; padding: 16px; background: var(--bg-secondary); border-radius: 8px;">';
            if (selected === question.correct) {
                html += '<p style="color: var(--success); font-weight: 600; margin-bottom: 8px;">✓ Correct!</p>';
            } else {
                html += '<p style="color: var(--error); font-weight: 600; margin-bottom: 8px;">✗ Incorrect</p>';
            }
            html += `<p>${question.explanation}</p>`;
            html += '<div style="margin-top: 12px;">';
            html += '<button class="btn" onclick="nextQuestion()">Next Question</button>';
            html += '</div>';
            html += '</div>';
            
            feedback.innerHTML = html;
        }

        function nextQuestion() {
            const questions = DELF_QUESTIONS[currentQuizLevel];
            currentQuizIndex = (currentQuizIndex + 1) % questions.length;
            loadQuiz();
        }

        function displayResults(html) {
            const card = document.getElementById('resultsCard');
            const content = document.getElementById('resultsContent');
            card.style.display = 'block';
            content.innerHTML = html;
        }

        function addToHistory(query) {
            searchHistory = searchHistory.filter(item => item !== query);
            searchHistory.unshift(query);
            searchHistory = searchHistory.slice(0, 20);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            updateHistoryDisplay();
        }

        function loadHistory() {
            const saved = localStorage.getItem('searchHistory');
            if (saved) {
                searchHistory = JSON.parse(saved);
            }
            updateHistoryDisplay();
        }

        function updateHistoryDisplay() {
            const container = document.getElementById('historyContent');
            
            if (searchHistory.length === 0) {
                container.innerHTML = '<div class="empty-state" style="padding: 20px;">No search history yet</div>';
                return;
            }
            
            let html = '';
            searchHistory.slice(0, 10).forEach(item => {
                html += `<div class="history-item" onclick="searchFromHistory('${item.replace(/'/g, "\\'")}')">`;
                html += `<span>${item}</span>`;
                html += `<span style="opacity: 0.6;">→</span>`;
                html += `</div>`;
            });
            
            html += '<button class="btn btn-secondary" style="width: 100%; margin-top: 12px;" onclick="clearHistory()">Clear History</button>';
            
            container.innerHTML = html;
        }

        function searchFromHistory(query) {
            document.getElementById('searchInput').value = query;
            performSearch();
        }

        function clearHistory() {
            if (confirm('Clear all search history?')) {
                searchHistory = [];
                localStorage.removeItem('searchHistory');
                updateHistoryDisplay();
            }
        }

        window.selectQuizLevel = selectQuizLevel;
        window.checkAnswer = checkAnswer;
        window.nextQuestion = nextQuestion;
        window.searchFromHistory = searchFromHistory;
        window.clearHistory = clearHistory;

        initApp();
    </script>
</body>
</html>
