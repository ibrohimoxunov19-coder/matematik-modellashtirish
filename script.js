// Language translations
const translations = {
    uz: {
        'title': 'Matematik Modellashturish',
        'subtitle': 'O\'zbek va Rus tilida chiroyli tushuntirish va vizual misollar',
        'cta-text': 'Boshlash',
        'chapters-title': 'Bo\'limlar',
        'ch1-desc': 'Modellashturish Nazariyasi',
        'ch2-desc': 'Masalalar va Texnologiyalar',
        'ch3-desc': 'Hayotiy va Amaliy Masalalar',
        'ch1-title': '1-BOB: Modellashturish Nazariyasi va Uning Nazariy Asoslari',
        'sec1-1': '1.1 § Matematik modellashturish fanining maqsad va vazifalari',
        'sec1-1-desc': 'Matematik modellashturish - bu murakkab jarayonlarni va tizimlarni soddalashtirish va ularni matematik formulalar bilan ifodalash sanoati.',
        'real-world': 'Real Dunyo',
        'abstract': 'Abstraktlash',
        'model': 'Matematik Model',
        'solution': 'Hal etish',
        'result': 'Natija',
        'verify': 'Tekshirish',
        'sec1-2': '1.2 § Tizimlarni tadbiq qilishda modellashtirishning o\'rni',
        'sec1-2-desc': 'Modellashturish tizimlarning xavfsiz va samarali boshqarish uchun muhim asbob hisoblanadi.',
        'sec1-3': '1.3 § Model tushunchasi va modellashturish',
        'sec1-3-desc': 'Model - bu haqiqiy ob\'ektning soddalashtirilgan ifodasidir.',
        'ch2-title': '2-BOB: Modellashtirishni Masalalari va Ularni Varatish Texnologiyasi',
        'sec2-1': '2.1 § Kontseptual model tushunchasi',
        'sec2-1-desc': 'Kontseptual model - bu tizim tuzilishining umumiy tasavvuridir.',
        'input': 'Kirish',
        'process': 'Jarayon',
        'output': 'Chiqish',
        'feedback': 'Teskari aloqa',
        'ch3-title': '3-BOB: Hayotiy va Amaliy Masalalarning Matematik Modellari',
        'sec3-1': '3.1 § Muhandislik masalalarining matematik modellari',
        'sec3-1-desc': 'Muhandislik masalalarida matematik modellashturish asosiy rol o\'ynaydi.',
        'example-title': 'Misolai: Issiqlik o\'tkazish masalasi',
        'example-desc': 'Agar bir ob\'ekt 100°C da bo\'lib, atrofi 20°C bo\'lsa, ob\'ektning 1 soatdan so\'ng harorati qancha bo\'ladi?',
        'footer-text': '© 2026 Matematik Modellashturish | M.Olimov, O.Jakbarov'
    },
    ru: {
        'title': 'Математическое моделирование',
        'subtitle': 'Красивое объяснение на узбекском и русском языках с визуальными примерами',
        'cta-text': 'Начать',
        'chapters-title': 'Главы',
        'ch1-desc': 'Теория моделирования',
        'ch2-desc': 'Задачи и технологии',
        'ch3-desc': 'Практические задачи',
        'ch1-title': 'ГЛАВА 1: Теория моделирования и её основы',
        'sec1-1': '1.1 § Цель и задачи математического моделирования',
        'sec1-1-desc': 'Математическое моделирование - это искусство упрощения сложных процессов и систем с помощью математических формул.',
        'real-world': 'Реальный мир',
        'abstract': 'Абстракция',
        'model': 'Математическая модель',
        'solution': 'Решение',
        'result': 'Результат',
        'verify': 'Проверка',
        'sec1-2': '1.2 § Роль моделирования в управлении системами',
        'sec1-2-desc': 'Моделирование - важный инструмент безопасного и эффективного управления системами.',
        'sec1-3': '1.3 § Понятие модели и моделирования',
        'sec1-3-desc': 'Модель - это упрощённое представление реального объекта.',
        'ch2-title': 'ГЛАВА 2: Задачи моделирования и технологии их решения',
        'sec2-1': '2.1 § Понятие концептуальной модели',
        'sec2-1-desc': 'Концептуальная модель - это общее представление структуры системы.',
        'input': 'Вход',
        'process': 'Процесс',
        'output': 'Выход',
        'feedback': 'Обратная связь',
        'ch3-title': 'ГЛАВА 3: Математические модели практических задач',
        'sec3-1': '3.1 § Математические модели инженерных задач',
        'sec3-1-desc': 'Математическое моделирование играет ключевую роль в инженерных задачах.',
        'example-title': 'Пример: Задача теплопередачи',
        'example-desc': 'Если объект находится при температуре 100°C, а окружающая среда - 20°C, какова будет температура объекта через 1 час?',
        'footer-text': '© 2026 Математическое моделирование | М.Олимов, О.Джабаров'
    }
};

let currentLang = 'uz';

// Set language
function setLang(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update text
    updateLanguage();
}

// Update all text based on language
function updateLanguage() {
    const trans = translations[currentLang];
    
    for (const [key, value] of Object.entries(trans)) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }
}

// Open chapter modal
function openChapter(chapterId) {
    const modal = document.getElementById(chapterId);
    modal.classList.add('active');
}

// Close chapter modal
function closeChapter(chapterId) {
    const modal = document.getElementById(chapterId);
    modal.classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
});