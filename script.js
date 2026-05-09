// Kitobning to'liq mazmuni
const bookContent = {
    chapters: [
        {
            id: 1,
            number: '1-BOB',
            titleUz: 'Modellashturish Nazariyasi va Uning Nazariy Asoslari',
            titleRu: 'Теория моделирования и его теоретические основы',
            sections: [
                {
                    id: '1.1',
                    titleUz: 'Matematik modellashturish fanining maqsad va vazifalari',
                    titleRu: 'Цель и задачи математического моделирования',
                    contentUz: 'Matematik modellashturish - bu murakkab jarayonlarni va tizimlarni soddalashtirish va ularni matematik formulalar bilan ifodalash sanoati.',
                    contentRu: 'Математическое моделирование - это искусство упрощения сложных процессов и систем с помощью математических формул.',
                    diagram: 'model-cycle'
                },
                {
                    id: '1.2',
                    titleUz: 'Tizimlarni tadbiq qilishda modellashtirishning o\'rni',
                    titleRu: 'Роль моделирования в управлении системами',
                    contentUz: 'Modellashturish tizimlarning xavfsiz va samarali boshqarish uchun muhim asbob hisoblanadi.',
                    contentRu: 'Моделирование является важным инструментом для безопасного и эффективного управления системами.'
                },
                {
                    id: '1.3',
                    titleUz: 'Model tushunchasi va modellashturish',
                    titleRu: 'Понятие модели и моделирования',
                    contentUz: 'Model - bu haqiqiy ob\'ektning soddalashtirilgan ifodasidir. U asosiy xususiyatlarni saqlab, detalllarni chuqur tushuntirmaydi.',
                    contentRu: 'Модель - это упрощенное представление реального объекта. Она сохраняет основные характеристики, но не описывает все детали.'
                },
                {
                    id: '1.4',
                    titleUz: 'Bilish va boshqarish jarayonlarida modellashturish',
                    titleRu: 'Моделирование в процессах познания и управления',
                    contentUz: 'Modellashturish insonning yangi narsani tushunish va boshqarishning asosiy usuli hisoblanadi.',
                    contentRu: 'Моделирование является основным методом понимания человеком нового и управления им.'
                },
                {
                    id: '1.5',
                    titleUz: 'Modellashturish ob\'ektlarini sinflari',
                    titleRu: 'Классы объектов моделирования',
                    contentUz: 'Modellashturish ob\'ektlari: fizik sistemalar, biologik sistemalar, iqtisodiy sistemalar, ijtimoiy sistemalar va boshqalarga bo\'linadi.',
                    contentRu: 'Объекты моделирования: физические системы, биологические системы, экономические системы, социальные системы и т.д.'
                },
                {
                    id: '1.6',
                    titleUz: 'Modellashtirishning asosiy bosqichlari',
                    titleRu: 'Основные этапы моделирования',
                    contentUz: '1. Masalani qo\'yish\n2. Model yaratish\n3. Modani tekshirish\n4. Natijalarni analiz qilish\n5. Modelni yaxshilash',
                    contentRu: '1. Постановка задачи\n2. Создание модели\n3. Проверка модели\n4. Анализ результатов\n5. Совершенствование модели'
                }
            ]
        },
        {
            id: 2,
            number: '2-BOB',
            titleUz: 'Modellashtirishni Masalalari va Ularni Varatish Texnologiyasi',
            titleRu: 'Задачи моделирования и технологии их решения',
            sections: [
                {
                    id: '2.1',
                    titleUz: 'Kontseptual model tushunchasi',
                    titleRu: 'Понятие концептуальной модели',
                    contentUz: 'Kontseptual model - bu tizim tuzilishining umumiy tasavvuridir. U ob\'ekt haqida asosiy g\'oyalarni tafsir etadi.',
                    contentRu: 'Концептуальная модель - это общее представление структуры системы. Она интерпретирует основные идеи об объекте.'
                },
                {
                    id: '2.2',
                    titleUz: 'Model yaratishda ma\'lumotlarni tayyorlash',
                    titleRu: 'Подготовка данных для создания модели',
                    contentUz: 'Ma\'lumotlarni tayyorlash: to\'plash, tozalash, tasnifrlash va normallashtirish jarayonlarini o\'z ichiga oladi.',
                    contentRu: 'Подготовка данных включает: сбор, очистку, классификацию и нормализацию данных.'
                },
                {
                    id: '2.3',
                    titleUz: 'Modellashturish usullarini tanlanishi',
                    titleRu: 'Выбор методов моделирования',
                    contentUz: 'Usullar: analitik, raqamli, simulation, heuristic va boshqalar. Tanlanish muammoning turiga bog\'liq.',
                    contentRu: 'Методы: аналитические, численные, имитационные, эвристические и т.д. Выбор зависит от типа задачи.'
                },
                {
                    id: '2.4',
                    titleUz: 'Modelni sozlash va kalibratsiya',
                    titleRu: 'Настройка модели и калибровка',
                    contentUz: 'Modelni parametrlarini real ma\'lumotlarga moslashtirish jarayoni.',
                    contentRu: 'Процесс согласования параметров модели с реальными данными.'
                },
                {
                    id: '2.5',
                    titleUz: 'Modellashturish natijallarini tahlili',
                    titleRu: 'Анализ результатов моделирования',
                    contentUz: 'Natijalarni tensor, grafik, jadval shaklida ifodalash va ularning ma\'nosi.',
                    contentRu: 'Представление результатов в виде диаграмм, графиков, таблиц и их значение.'
                },
                {
                    id: '2.6',
                    titleUz: 'Modellashturish xatolari',
                    titleRu: 'Ошибки моделирования',
                    contentUz: 'Xatolar: strukturaviy, parametrik, ma\'lumot va hisoblash xatolari.',
                    contentRu: 'Ошибки: структурные, параметрические, данные и вычислительные ошибки.'
                },
                {
                    id: '2.7',
                    titleUz: 'Identifikatsiya masalasi',
                    titleRu: 'Задача идентификации',
                    contentUz: 'Real ma\'lumotlardan model parametrlarini aniqlash jarayoni.',
                    contentRu: 'Процесс определения параметров модели из реальных данных.'
                },
                {
                    id: '2.8',
                    titleUz: 'Identifikatsiyalash usullari',
                    titleRu: 'Методы идентификации',
                    contentUz: 'Usullar: least squares, maximum likelihood, Bayesian va boshqalar.',
                    contentRu: 'Методы: наименьших квадратов, максимального правдоподобия, Байесовы и т.д.'
                }
            ]
        },
        {
            id: 3,
            number: '3-BOB',
            titleUz: 'Hayotiy va Amaliy Masalalarning Matematik Modellari',
            titleRu: 'Математические модели реальных и практических задач',
            sections: [
                {
                    id: '3.1',
                    titleUz: 'Muhandislik masalalarining matematik modellari',
                    titleRu: 'Математические модели инженерных задач',
                    contentUz: 'Muhandislik masalalarida matematik modellashturish asosiy rol o\'ynaydi.',
                    contentRu: 'Математическое моделирование играет ключевую роль в инженерных задачах.'
                },
                {
                    id: '3.2',
                    titleUz: 'Murakkab tizimlarning modelllari',
                    titleRu: 'Модели сложных систем',
                    contentUz: 'Murakkab sistemalar: ekologik, iqtisodiy, ijtimoiy tizimlar.',
                    contentRu: 'Сложные системы: экологические, экономические, социальные системы.'
                },
                {
                    id: '3.3',
                    titleUz: 'O\'lchamlari analizi',
                    titleRu: 'Анализ размеров',
                    contentUz: 'O\'lchamlari analizi - model soddalashtirishning kuchli usuli.',
                    contentRu: 'Анализ размеров - мощный метод упрощения модели.'
                },
                {
                    id: '3.4',
                    titleUz: 'Model adekvatigi',
                    titleRu: 'Адекватность модели',
                    contentUz: 'Model haqiqiy dunyoni qancha yaxshi ifodalashini baholash.',
                    contentRu: 'Оценка того, насколько хорошо модель представляет реальный мир.'
                },
                {
                    id: '3.5',
                    titleUz: 'Sodda matematik modellar',
                    titleRu: 'Простые математические модели',
                    contentUz: 'Chiziqli, eksponensial, stepenli va boshqa sodda modellar.',
                    contentRu: 'Линейные, экспоненциальные, степенные и другие простые модели.'
                },
                {
                    id: '3.6',
                    titleUz: 'Iqtisodiy jarayonlarning modellari',
                    titleRu: 'Модели экономических процессов',
                    contentUz: 'Talab-taklifni modellanish, o\'sish modellari.',
                    contentRu: 'Моделирование спроса-предложения, модели роста.'
                },
                {
                    id: '3.7',
                    titleUz: 'Kompyuter modellashturishi',
                    titleRu: 'Компьютерное моделирование',
                    contentUz: 'MATLAB, Python, Simulation xizmatlarini foydalanish.',
                    contentRu: 'Использование MATLAB, Python, инструментов моделирования.'
                },
                {
                    id: '3.8',
                    titleUz: 'MathCad orqali masalalar yechish',
                    titleRu: 'Решение задач через MathCad',
                    contentUz: 'MathCad - matematik hisoblashlar uchun kuchli vosita.',
                    contentRu: 'MathCad - мощный инструмент для математических вычислений.'
                }
            ]
        }
    ]
};

// Language translations
const translations = {
    uz: {
        'title': 'Matematik Modellashturish',
        'subtitle': 'O\'zbek va Rus tilida chiroyli tushuntirish va vizual misollar',
        'cta-text': 'Boshlash',
        'chapters-title': 'Bo\'limlar',
        'footer-text': '© 2026 Matematik Modellashturish | M.Olimov, O.Jakbarov',
        'calc-title': 'Matematik Kalkulyator',
        'calc-linear': 'Chiziqli Tenglama Yechish',
        'calc-linear-desc': 'ax + b = 0 tenglamasini yeching',
        'solve-btn': 'Yechish',
        'calc-quadratic': 'Kvadratik Tenglama',
        'calc-quad-desc': 'ax² + bx + c = 0 tenglamasini yeching',
        'solve-quad-btn': 'Yechish'
    },
    ru: {
        'title': 'Математическое моделирование',
        'subtitle': 'Красивое объяснение на узбекском и русском языках с визуальными примерами',
        'cta-text': 'Начать',
        'chapters-title': 'Главы',
        'footer-text': '© 2026 Математическое моделирование | М.Олимов, О.Джабаров',
        'calc-title': 'Математический калькулятор',
        'calc-linear': 'Решение линейного уравнения',
        'calc-linear-desc': 'Решите уравнение ax + b = 0',
        'solve-btn': 'Решить',
        'calc-quadratic': 'Квадратное уравнение',
        'calc-quad-desc': 'Решите уравнение ax² + bx + c = 0',
        'solve-quad-btn': 'Решить'
    }
};

let currentLang = 'uz';

// Initialize page
function initializePage() {
    renderChapters();
    setupSearch();
    updateLanguage();
}

// Render chapters
function renderChapters() {
    const grid = document.getElementById('chapterGrid');
    const container = document.getElementById('modalsContainer');
    grid.innerHTML = '';
    container.innerHTML = '';

    bookContent.chapters.forEach((chapter, idx) => {
        // Card
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.onclick = () => openChapter(`chapter${chapter.id}`);
        
        const titleKey = currentLang === 'uz' ? 'titleUz' : 'titleRu';
        card.innerHTML = `
            <h3>${chapter.number}</h3>
            <p>${chapter[titleKey]}</p>
            <span class="badge">${chapter.sections.length} mavzu</span>
        `;
        grid.appendChild(card);

        // Modal
        const modal = document.createElement('div');
        modal.id = `chapter${chapter.id}`;
        modal.className = 'modal';
        
        let sectionsHTML = '';
        chapter.sections.forEach(section => {
            const sTitle = currentLang === 'uz' ? section.titleUz : section.titleRu;
            const sContent = currentLang === 'uz' ? section.contentUz : section.contentRu;
            sectionsHTML += `
                <div class="section">
                    <h3>${section.id} § ${sTitle}</h3>
                    <p>${sContent}</p>
                    ${section.diagram ? getdiagram(section.diagram) : ''}
                </div>
            `;
        });

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeChapter('chapter${chapter.id}')">&times;</span>
                <h2>${chapter.number}: ${chapter[titleKey]}</h2>
                ${sectionsHTML}
            </div>
        `;
        container.appendChild(modal);
    });
}

// Get diagram HTML
function getdiagram(type) {
    const diagrams = {
        'model-cycle': `
            <div class="diagram">
                <svg width="100%" height="300" viewBox="0 0 500 300" style="min-width: 400px;">
                    <rect x="20" y="20" width="150" height="80" fill="#3498db" stroke="#2c3e50" stroke-width="2" rx="5"/>
                    <text x="95" y="65" font-size="16" fill="white" text-anchor="middle" font-weight="bold">Real Dunyo</text>
                    <path d="M 170 60 L 220 60" stroke="#e74c3c" stroke-width="3" marker-end="url(#arrowhead)"/>
                    <rect x="220" y="20" width="150" height="80" fill="#2ecc71" stroke="#2c3e50" stroke-width="2" rx="5"/>
                    <text x="295" y="65" font-size="16" fill="white" text-anchor="middle" font-weight="bold">Model</text>
                    <path d="M 295 100 L 295 130" stroke="#9b59b6" stroke-width="3" marker-end="url(#arrowhead)"/>
                    <rect x="220" y="130" width="150" height="80" fill="#f39c12" stroke="#2c3e50" stroke-width="2" rx="5"/>
                    <text x="295" y="175" font-size="16" fill="white" text-anchor="middle" font-weight="bold">Natija</text>
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="#2c3e50" />
                        </marker>
                    </defs>
                </svg>
            </div>
        `
    };
    return diagrams[type] || '';
}

// Set language
function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderChapters();
    updateLanguage();
}

// Update text
function updateLanguage() {
    const trans = translations[currentLang];
    for (const [key, value] of Object.entries(trans)) {
        const element = document.getElementById(key);
        if (element) element.textContent = value;
    }
}

// Open/Close modal
function openChapter(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
}

function closeChapter(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// Search functionality
function setupSearch() {
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('keyup', function(e) {
        const query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.chapter-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.classList.toggle('hidden', !text.includes(query));
        });
    });
}

// Calculator functions
function solveLinear() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const resultDiv = document.getElementById('linearResult');
    
    if (a === 0) {
        resultDiv.innerHTML = '❌ a ning qiymati 0 bo\'lmasligi kerak!';
    } else {
        const x = -b / a;
        resultDiv.innerHTML = `✅ x = ${x.toFixed(4)}`;
    }
}

function solveQuadratic() {
    const a = parseFloat(document.getElementById('qa').value);
    const b = parseFloat(document.getElementById('qb').value);
    const c = parseFloat(document.getElementById('qc').value);
    const resultDiv = document.getElementById('quadraticResult');
    
    const discriminant = b * b - 4 * a * c;
    
    if (a === 0) {
        resultDiv.innerHTML = '❌ Bu chiziqli tenglama, a ≠ 0 bo\'lishi kerak!';
    } else if (discriminant < 0) {
        resultDiv.innerHTML = '❌ Haqiqiy yechim yo\'q (D < 0)';
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        resultDiv.innerHTML = `✅ x = ${x.toFixed(4)}`;
    } else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultDiv.innerHTML = `✅ x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`;
    }
}

// PDF Download
function downloadPDF() {
    const element = document.body;
    const opt = {
        margin: 10,
        filename: 'Matematik-Modellashturish.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    html2pdf().set(opt).from(element).save();
}

// Open calculator
function openCalculator() {
    openChapter('calculator');
}

// Initialize
document.addEventListener('DOMContentLoaded', initializePage);