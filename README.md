# MiauDex Translations

Welcome to the official translation repository for MiauDex - the ultimate Discord cat collection bot!

## Supported Languages

- English - en.json (Reference)
- Polish - pl.json 
- Norwegian - no.json
- Italian - it.json
- French - fr.json

## Quick Start for Translators

1. Fork this repository
2. Create a branch for your language (e.g., update-french)
3. Edit the appropriate JSON file in /locales/
4. Test your changes using our validation tools
5. Submit a pull request

## Translation Guidelines

### Key Rules
- Keep the same JSON structure as en.json
- Translate content but preserve special formatting (e.g., {{username}}, **bold**)
- Don't translate command names or technical terms
- Maintain the tone: friendly, playful, cat-themed

### What NOT to translate
- Variable placeholders: {{username}}, {{count}}, etc.
- Discord markdown: **bold**, *italic*, __underline__
- Command names: /cat, /gallery, etc.
- Emoji codes and Unicode characters
- URLs and links

## Tools & Validation

Run validation before submitting:
```
node tools/validate.js locales/your-language.json
node tools/missing-keys.js locales/your-language.json
```

## Contributing

1. Check existing issues for translation requests
2. Read our Contributing Guidelines
3. Follow our Style Guide
4. Join our Discord server for support

## Translation Team

### Current Translators
| Language       | Contributor | Status |
|----------------|-------------|--------|
| ![GB](https://flagcdn.com/16x12/gb.png) English    | [ItsAlex](https://github.com/ItsAlexIK) | ✅ |
| ![PL](https://flagcdn.com/16x12/pl.png) Polish     | [ItsAlex](https://github.com/ItsAlexIK) | ✅ |
| ![ES](https://flagcdn.com/16x12/es.png) Spanish    |             | ❌ |
| ![FR](https://flagcdn.com/16x12/fr.png) French     | [Zer0Two](https://github.com/NotZer0Two) | ✅ |
| ![DE](https://flagcdn.com/16x12/de.png) German     |             | ❌ |
| ![RO](https://flagcdn.com/16x12/ro.png) Romanian   |             | ❌ |
| ![SE](https://flagcdn.com/16x12/se.png) Swedish    |             | ❌ |
| ![RU](https://flagcdn.com/16x12/ru.png) Russian    |             | ❌ |
| ![KR](https://flagcdn.com/16x12/kr.png) Korean     |             | ❌ |
| ![NO](https://flagcdn.com/16x12/no.png) Norwegian  | [Kf637](https://github.com/Kf637) | ✅ |
| ![DK](https://flagcdn.com/16x12/dk.png) Danish     |             | ❌ |
| ![HR](https://flagcdn.com/16x12/hr.png) Croatian   |             | ❌ |
| ![IT](https://flagcdn.com/16x12/it.png) Italian    | [Zer0Two](https://github.com/NotZer0Two) | ✅ |
| ![HU](https://flagcdn.com/16x12/hu.png) Hungarian  |             | ❌ |

Want to help? Open an issue or join our Discord!

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
│   └── README.md
├── tools/
│   ├── validate.js
│   └── missing-keys.js
└── docs/
    ├── translation-guide.md
    └── style-guide.md
```