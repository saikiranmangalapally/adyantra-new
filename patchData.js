const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to replace rating: X with initials: "XX" in testimonials
  content = content.replace(/rating:\s*\d+/g, 'initials: "XX"');

  // Regex to add icon: "target" to subServices if not present
  // It looks for { title: "...", description: "..." }
  content = content.replace(/(\{[\s\n]*title:\s*"[^"]*",[\s\n]*description:\s*"[^"]*"[\s\n]*)\}/g, '$1, icon: "target" }');

  fs.writeFileSync(filePath, content);
  console.log(`Processed ${filePath}`);
}

processFile(path.join(__dirname, 'lib/data/marketing-services.ts'));
processFile(path.join(__dirname, 'lib/data/ai-services.ts'));
