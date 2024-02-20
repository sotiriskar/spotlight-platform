// place files you want to import through the `$lib` alias in this folder.
import { init, register } from 'svelte-i18n';
import en from '../en.json';
import gr from '../gr.json';

// Register the translation files
register('en', () => Promise.resolve(en));
register('gr', () => Promise.resolve(gr));

// Initialize the library with the default locale
init({ fallbackLocale: 'en' });
