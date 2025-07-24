const fs = require('fs');
const pdfParse = require('pdf-parse');

module.exports = async function parseResume(filePath) {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);

  const text = data.text;

  return {
    name: /Name[:\-]?\s*(.*)/i.exec(text)?.[1] || '',
    email: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.exec(text)?.[0] || '',
    phone: /\b\d{10,13}\b/.exec(text)?.[0] || '',
    skills: ['JavaScript', 'React', 'Node.js'], // placeholder
    experience: '',
    education: ''
  };
};
