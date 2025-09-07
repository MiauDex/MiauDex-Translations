# Translation Files

This directory contains all translation files for MiauDex.

## Files

- `en.json` - English (reference file)
- `pl.json` - Polish
- `no.json` - Norwegian  
- `it.json` - Italian
- `fr.json` - French

## File Format

All files must be valid JSON with the same structure as `en.json`.

## Adding New Languages

1. Copy `en.json` to a new file with the appropriate language code
2. Translate all values while preserving:
   - JSON structure
   - Variable placeholders ({{username}}, {{count}}, etc.)
   - Discord formatting (**bold**, *italic*, etc.)
   - Command names and technical terms
3. Test with validation tools
4. Submit a pull request