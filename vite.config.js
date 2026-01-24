import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                // Root
                main: resolve(__dirname, 'index.html'),

                // English pages
                'en-index': resolve(__dirname, 'en/index.html'),
                'en-about': resolve(__dirname, 'en/about.html'),
                'en-skills': resolve(__dirname, 'en/skills.html'),
                'en-projects': resolve(__dirname, 'en/projects.html'),
                'en-contact': resolve(__dirname, 'en/contact.html'),

                // Turkish pages
                'tr-index': resolve(__dirname, 'tr/index.html'),
                'tr-about': resolve(__dirname, 'tr/about.html'),
                'tr-skills': resolve(__dirname, 'tr/skills.html'),
                'tr-projects': resolve(__dirname, 'tr/projects.html'),
                'tr-contact': resolve(__dirname, 'tr/contact.html'),
            },
        },
    },
    publicDir: 'public',
});
