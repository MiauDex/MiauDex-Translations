# Translation Guide

This guide provides detailed instructions for translating MiauDex.

## Understanding the Context

MiauDex is a Discord bot for collecting virtual cats. The tone should be:
- Friendly and welcoming
- Playful and fun
- Cat-themed where appropriate
- Encouraging for collectors

## Key Translation Principles

### 1. Preserve Functionality
Never translate:
- Variable placeholders: `{{username}}`, `{{count}}`, `{{rarity}}`
- Discord markdown: `**bold**`, `*italic*`, `__underline__`
- Technical terms: JSON keys, file extensions

### 2. Maintain Structure
- Keep exact JSON structure
- Don't add or remove keys
- Preserve nested objects and arrays

### 3. Cultural Adaptation
- Use appropriate cultural references
- Adapt humor to your culture
- Use native expressions and idioms
- Consider local Discord culture

### 4. Consistency
- Use same terms throughout
- Be consistent with tone and style

## Special Formatting

### Variables
Keep these exactly as-is:
- `{{username}}` - User's name
- `{{count}}` - Numbers
- `{{rarity}}` - Cat rarity
- `{{date}}` - Dates

### Discord Formatting
Preserve these:
- `**bold text**`
- `*italic text*`
- `__underline__`
- `~~strikethrough~~`
- `` `code` ``

### Emojis
You can translate emoji descriptions but keep Unicode emojis as-is.

## Testing Your Translation

1. Validate JSON syntax
2. Check for missing keys
3. Test in context if possible
4. Ask native speakers to review

## Getting Help

- Join our Discord for real-time help
- Ask questions in GitHub issues
- Review other language files for examples