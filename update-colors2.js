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
  { from: /text-white/g, to: 'text-primary' },
  { from: /bg-white/g, to: 'bg-primary' },
  { from: /text-black/g, to: 'text-background' },
  { from: /border-white/g, to: 'border-primary' },
  { from: /fill-white/g, to: 'fill-primary' },
  { from: /ring-white/g, to: 'ring-primary' },
  { from: /selection:bg-white/g, to: 'selection:bg-primary' },
  { from: /selection:text-black/g, to: 'selection:text-background' },
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
