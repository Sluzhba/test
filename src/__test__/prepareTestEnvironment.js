import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, extname } from 'path'

// Read all JS files from source directory
const sourceDir = join(__dirname, '../')
const jsFiles = readdirSync(sourceDir)
  .filter(file => extname(file) === '.js' && file !== 'main.js')
  .map(file => join(sourceDir, file))

// Combine all JS files content
const combinedContent = jsFiles.map(file => {
  const content = readFileSync(file, 'utf8')
  return content
    .replace(/\b(var|let|const)\b/g, 'global.') // Replace var, let, const with global.
    .replace(/console\.log\(/g, '// console.log(')
}).join('\n\n')

// Write combined content to main.js
writeFileSync(join(sourceDir, 'main.js'), combinedContent, 'utf8')

export { combinedContent as code }
