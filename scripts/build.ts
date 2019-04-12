import * as fs from 'fs';
import * as path from 'path';

const eslintrc = fs.readFileSync(path.join(__dirname, '..', '.eslintrc.json'), {
  encoding: 'UTF-8',
});

const eslintrcWithExport = `module.exports = ${eslintrc}`;

fs.writeFileSync(path.join(__dirname, '..', 'index.js'), eslintrcWithExport);
