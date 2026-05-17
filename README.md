# MiauDex Translations

Welcome to the official translation repository for MiauDex - the ultimate Discord cat collection bot!

## Supported Languages

| Language | Contributor | Status |
|----------|-------------|--------|
| ![GB](https://flagcdn.com/16x12/gb.png) English | [ItsAlex](https://github.com/ItsAlexIK) | Done |
| ![PL](https://flagcdn.com/16x12/pl.png) Polish | [ItsAlex](https://github.com/ItsAlexIK) | Done |
| ![FR](https://flagcdn.com/16x12/fr.png) French | [Zer0Two](https://github.com/NotZer0Two) | Done |
| ![IT](https://flagcdn.com/16x12/it.png) Italian | [Zer0Two](https://github.com/NotZer0Two) | Done |
| ![NO](https://flagcdn.com/16x12/no.png) Norwegian | [Kf637](https://github.com/Kf637) | Done |
| ![NL](https://flagcdn.com/16x12/nl.png) Dutch | [Quincy](https://github.com/JustCallMeQuincy) | Done |
| ![ES](https://flagcdn.com/16x12/es.png) Spanish | | Needed |
| ![DE](https://flagcdn.com/16x12/de.png) German | | Needed |
| ![RO](https://flagcdn.com/16x12/ro.png) Romanian | | Needed |
| ![SE](https://flagcdn.com/16x12/se.png) Swedish | | Needed |
| ![RU](https://flagcdn.com/16x12/ru.png) Russian | | Needed |
| ![KR](https://flagcdn.com/16x12/kr.png) Korean | | Needed |
| ![DK](https://flagcdn.com/16x12/dk.png) Danish | | Needed |
| ![HR](https://flagcdn.com/16x12/hr.png) Croatian | | Needed |
| ![HU](https://flagcdn.com/16x12/hu.png) Hungarian | | Needed |

Want to help? Open an issue or join our Discord!

## Quick Start

1. Fork this repository
2. Create a branch for your language (e.g. `update-french`)
3. Edit the appropriate JSON file in `/locales/`
4. Run the validation tools before submitting
5. Submit a pull request

## Translation Guidelines

- Keep the same JSON structure as `en.json`
- Preserve placeholders like `{{username}}`, `{{count}}`, etc.
- Preserve Discord markdown: `**bold**`, `*italic*`, `__underline__`
- Don't translate technical terms, emoji, or URLs
- Maintain the tone: friendly, playful, cat-themed

## Validation Tools

Run these before submitting a pull request:

```
node tools/validate.js locales/your-language.json
node tools/missing-keys.js locales/your-language.json
node tools/validate-placeholders.js locales/your-language.json
```

`validate.js` checks that the file is valid JSON. `missing-keys.js` checks that no keys from the reference file are missing. `validate-placeholders.js` checks that all `{{variables}}` are preserved in every string.

These same checks run automatically on every pull request via GitHub Actions. PRs targeting `main` validate all locale files. PRs targeting other branches only validate the files changed in that PR.

## Contributing

Read the Contributing Guidelines and Style Guide in `/docs/` before starting. Join our Discord if you have questions.

## Repository Structure

```
miaudex-translations/
├── README.md
├── CONTRIBUTING.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── translation-request.md
│   │   └── translation-error.md
│   └── workflows/
│       └── validate-translations.yml
├── locales/
│   ├── en.json (reference file)
│   ├── pl.json
│   ├── no.json
│   ├── it.json
│   ├── fr.json
│   ├── nl.json
│   └── README.md
├── tools/
│   ├── validate.js
│   ├── missing-keys.js
│   └── validate-placeholders.js
└── docs/
    ├── translation-guide.md
    └── style-guide.md
```