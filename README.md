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
node tools/validate.js locales/your-language.json
node tools/missing-keys.js locales/your-language.json

## Contributing

1. Check existing issues for translation requests
2. Read our Contributing Guidelines
3. Follow our Style Guide
4. Join our Discord server for support

## Translation Team

### Current Translators
- English: MiauDex Team
- Polish: Looking for volunteers!
- Norwegian: Looking for volunteers!
- Italian: Looking for volunteers!
- French: Looking for volunteers!

Want to help? Open an issue or join our Discord!

## Repository Structure

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