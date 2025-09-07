const fs = require("fs");
const path = require("path");

function validateTranslation(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(content);

    console.log(`✅ ${filePath} - Valid JSON structure`);

    const jsonString = JSON.stringify(data);
    const issues = [];

    if (
      jsonString.includes('"Click here"') ||
      jsonString.includes('"undefined"')
    ) {
      issues.push("Possible untranslated English text found");
    }

    if (issues.length > 0) {
      console.log(`⚠️  Warnings for ${filePath}:`);
      issues.forEach((issue) => console.log(`   - ${issue}`));
    }

    return true;
  } catch (error) {
    console.log(`❌ ${filePath} - Invalid: ${error.message}`);
    return false;
  }
}

const filePath = process.argv[2];
if (!filePath) {
  console.log("Usage: node validate.js <path-to-json>");
  process.exit(1);
}

validateTranslation(filePath);