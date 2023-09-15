import i18n from 'i18next';

export const getActiveLanguage = () => {
  return (
    i18n.language ||
    (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
    'en'
  );
};

export const getAvailableLanguages = () => [
  {
    name: 'English',
    flag: '🇺🇸',
    code: 'en',
    formatedName: '🇺🇸 English',
  },
  {
    name: 'Français',
    flag: '🇫🇷',
    code: 'fr',
    formatedName: '🇫🇷 Français',
  },
];
