# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Localizzazione / i18n ✅

- Librerie: `i18next`, `react-i18next`, `i18next-browser-languagedetector`
- File principali:
  - `src/i18n.js` — inizializza i18n e carica le risorse
  - `src/locales/{en,it,es}/translation.json` — file di traduzione
- Uso:
  - `import './i18n'` è già importato in `src/main.jsx`
  - Usa la select nella navbar per cambiare lingua (Italiano, Español, English)
  - Per aggiungere nuove stringhe: aggiungere chiavi in `src/locales/*/translation.json` e usare `t('path.key')` nei componenti (importa `useTranslation` e usa `const { t } = useTranslation()`)

- Testing: avvia il dev server con `npm run dev`, prova a cambiare lingua dalla navbar e verifica che i testi cambino.
