import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'pages/Home.tsx',
  'pages/Secret.tsx',
  'components/Header.tsx',
  'components/EmbedCard.tsx',
  'components/FloatingPlayer.tsx',
  'components/Forms.tsx',
  'components/Modal.tsx',
];

const replacements = [
  { from: /hover:bg-neutral-200/g, to: 'hover:opacity-80' },
  { from: /text-neutral-600/g, to: 'text-muted' },
  { from: /bg-neutral-700/g, to: 'bg-border' },
  { from: /bg-neutral-500/g, to: 'bg-muted' },
  { from: /text-neutral-700/g, to: 'text-muted' },
  { from: /text-neutral-800/g, to: 'text-muted' },
  { from: /bg-neutral-100/g, to: 'bg-black/10' },
  { from: /border-neutral-800/g, to: 'border-border' },
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
