// Lightweight i18n system for bilingual portfolio

import translations from './translations.js';

class I18n {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.translations = translations;
    }

    // Detect language from URL path
    detectLanguage() {
        const path = window.location.pathname;
        if (path.includes('/tr/')) return 'tr';
        if (path.includes('/en/')) return 'en';

        // Fallback to browser language
        const browserLang = navigator.language.split('-')[0];
        return browserLang === 'tr' ? 'tr' : 'en';
    }

    // Get translation by key path (e.g., 'nav.home')
    t(keyPath) {
        const keys = keyPath.split('.');
        let value = this.translations[this.currentLang];

        for (const key of keys) {
            if (value && typeof value === 'object') {
                value = value[key];
            } else {
                return keyPath; // Return key if translation not found
            }
        }

        return value || keyPath;
    }

    // Get current language
    getCurrentLang() {
        return this.currentLang;
    }

    // Switch language and redirect
    switchLanguage(lang) {
        const currentPath = window.location.pathname;
        let newPath;

        if (currentPath.includes('/en/')) {
            newPath = currentPath.replace('/en/', `/${lang}/`);
        } else if (currentPath.includes('/tr/')) {
            newPath = currentPath.replace('/tr/', `/${lang}/`);
        } else {
            // If on root, redirect to language-specific page
            newPath = `/${lang}/`;
        }

        window.location.href = newPath;
    }

    // Get opposite language for switcher
    getOtherLang() {
        return this.currentLang === 'en' ? 'tr' : 'en';
    }
}

// Create global instance
const i18n = new I18n();

// Initialize language switcher
export function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentLang = i18n.getCurrentLang();

    langButtons.forEach(btn => {
        const btnLang = btn.dataset.lang;

        // Set active state
        if (btnLang === currentLang) {
            btn.classList.add('active');
        }

        // Add click handler
        btn.addEventListener('click', () => {
            i18n.switchLanguage(btnLang);
        });
    });
}

// Translate all elements with data-i18n attribute
export function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.dataset.i18n;
        const translation = i18n.t(key);

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translation;
        } else {
            el.textContent = translation;
        }
    });
}

export default i18n;
