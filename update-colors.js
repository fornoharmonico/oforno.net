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
  { from: /bg-\[\#0a0a0a\]/g, to: 'bg-background' },
  { from: /bg-\[\#111\]/g, to: 'bg-surface' },
  { from: /bg-\[\#111111\]/g, to: 'bg-surface' },
  { from: /bg-\[\#080808\]/g, to: 'bg-surface2' },
  { from: /bg-\[\#1a1a1a\]/g, to: 'bg-surface3' },
  { from: /bg-\[\#050505\]/g, to: 'bg-background' },
  { from: /bg-\[\#0c0c0c\]/g, to: 'bg-surface2' },
  { from: /text-\[\#F2F2F2\]/g, to: 'text-primary' },
  { from: /border-neutral-800/g, to: 'border-border' },
  { from: /border-neutral-900/g, to: 'border-border-dark' },
  { from: /border-neutral-600/g, to: 'border-border-hover' },
  { from: /border-neutral-700/g, to: 'border-border-hover' },
  { from: /text-neutral-400/g, to: 'text-secondary' },
  { from: /text-neutral-500/g, to: 'text-muted' },
  { from: /text-neutral-300/g, to: 'text-secondary' },
  { from: /bg-neutral-800/g, to: 'bg-border' },
  { from: /bg-neutral-900/g, to: 'bg-border-dark' },
  { from: /bg-\[\#333\]/g, to: 'bg-accent' },
  { from: /from-\[\#0a0a0a\]/g, to: 'from-background' },
  { from: /to-\[\#0a0a0a\]/g, to: 'to-background' },
  { from: /via-\[\#0a0a0a\]/g, to: 'via-background' },
  { from: /from-\[\#080808\]/g, to: 'from-surface2' },
  { from: /to-\[\#0c0c0c\]/g, to: 'to-surface2' },
  { from: /ring-\[\#080808\]/g, to: 'ring-surface2' },
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
