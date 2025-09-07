# Contributing to MiauDex Translations

Thank you for helping make MiauDex accessible to more users worldwide!

## Getting Started

### Prerequisites
- GitHub account
- Basic understanding of JSON format
- Native or fluent proficiency in your target language

### Setting Up
1. Fork this repository
2. Clone your fork locally
3. Create a new branch: git checkout -b improve-french-translations

## Translation Process

### 1. Choose Your Language
Check the /locales/ folder for your target language file. If it doesn't exist, create it based on en.json.

### 2. Translation Guidelines

#### DO:
- Maintain JSON structure exactly
- Preserve placeholders like {{username}}
- Keep Discord formatting (**bold**, *italic*)
- Maintain the playful, cat-loving tone
- Use appropriate cultural references
- Test your translations in context

#### DON'T:
- Change variable names or placeholders
- Remove or add JSON keys without permission
- Use machine translation only
- Change emoji or special characters

### 3. Quality Standards
- Accuracy: Translations should convey the same meaning
- Naturalness: Sound native to your language
- Consistency: Use the same terms throughout
- Context: Consider how text appears in Discord

### 4. Testing
Before submitting:
# Validate JSON structure
node tools/validate.js locales/your-file.json

# Check for missing keys
node tools/missing-keys.js locales/your-file.json

## Submission Process

### Pull Request Guidelines
1. Title: "Update [Language] translations"
2. Description: List major changes made
3. Review: Be responsive to feedback
4. Testing: Confirm your JSON is valid

### Review Process
1. Automated JSON validation
2. Community review (if applicable)
3. Native speaker verification
4. Integration testing
5. Merge and deployment

## Recognition

Contributors will be:
- Listed in the repository credits
- Given a special role in our Discord server
- Mentioned in release notes for major contributions

## Getting Help

- Discord: Join our translator channel
- Issues: Ask questions or report problems
- Documentation: Check /docs/ for detailed guides

## Code of Conduct

- Be respectful to all contributors
- Provide constructive feedback
- Focus on the quality of translations
- Help newcomers learn the process