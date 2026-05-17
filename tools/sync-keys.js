const fs = require("fs");

function syncKeys(refObj, targetObj, prefix) {
  prefix = prefix || "";
  const result = {};

  for (let key in refObj) {
    const fullKey = prefix ? prefix + "." + key : key;
    const refVal = refObj[key];
    const targetVal = targetObj ? targetObj[key] : undefined;

    if (fullKey.startsWith("translations.authors")) {
      if (targetVal !== undefined) result[key] = targetVal;
      continue;
    }

    if (typeof refVal === "object" && refVal !== null) {
      result[key] = syncKeys(refVal, typeof targetVal === "object" ? targetVal : {}, fullKey);
    } else if (targetVal !== undefined) {
      result[key] = targetVal;
    } else {
      result[key] = "[TRANSLATE] " + refVal;
    }
  }

  return result;
}

function countAdded(ref, tgt, prefix) {
  prefix = prefix || "";
  for (let key in ref) {
    const fullKey = prefix ? prefix + "." + key : key;
    const refVal = ref[key];
    const tgtVal = tgt ? tgt[key] : undefined;
    if (fullKey.startsWith("translations.authors")) continue;
    if (typeof refVal === "object" && refVal !== null) {
      countAdded(refVal, typeof tgtVal === "object" ? tgtVal : {}, fullKey);
    } else if (tgtVal === undefined) {
      added.push(fullKey);
    }
  }
}

const targetFile = process.argv[2];
if (!targetFile) {
  console.log("Usage: node sync-keys.js <target-translation-file>");
  process.exit(1);
}

const referenceFile = "locales/en.json";
const reference = JSON.parse(fs.readFileSync(referenceFile, "utf8"));
const target = JSON.parse(fs.readFileSync(targetFile, "utf8"));

const added = [];
countAdded(reference, target);

const synced = syncKeys(reference, target);

fs.writeFileSync(targetFile, JSON.stringify(synced, null, 2), "utf8");

if (added.length === 0) {
  console.log("All keys already present, nothing to sync.");
} else {
  console.log(added.length + " key(s) added (marked [TRANSLATE]):");
  added.forEach((k) => console.log("  - " + k));
  console.log("\nFile updated: " + targetFile);
}