import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'pages/Home.tsx',
];

const replacements = [
  { from: /hover:border-blue-900\/50/g, to: 'hover:border-gold/50' },
  { from: /border-blue-500\/30/g, to: 'border-gold/30' },
  { from: /text-blue-400/g, to: 'text-gold' },
  { from: /group-hover:text-blue-400/g, to: 'group-hover:text-gold' },
  { from: /bg-blue-600/g, to: 'bg-gold' },
  { from: /hover:bg-blue-700/g, to: 'hover:bg-gold/80' },
  { from: /from-blue-900\/20/g, to: 'from-gold/20' },
  { from: /border-blue-500\/10/g, to: 'border-gold/10' },
  { from: /bg-blue-500/g, to: 'bg-gold' },
  { from: /group-hover:text-blue-500/g, to: 'group-hover:text-gold' },
];

filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
