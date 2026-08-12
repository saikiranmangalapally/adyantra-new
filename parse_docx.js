const fs = require('fs');

const xml = fs.readFileSync('Adyantra_Content_Extracted/word/document.xml', 'utf8');

// Regex to extract text inside <w:t> tags
const regex = /<w:t[^>]*>(.*?)<\/w:t>/g;
let match;
let textContent = '';

while ((match = regex.exec(xml)) !== null) {
  textContent += match[1] + '\n';
}

fs.writeFileSync('docx_content.txt', textContent);
console.log('Successfully extracted text');
