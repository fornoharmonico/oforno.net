import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'pages/Home.tsx',
];

const replacements = [
  { from: /<img\s+src="https:\/\/i\.postimg\.cc\/RhpFKdKb\/LOGO-FORNO-branco-sem-fundo\.png"\s+alt="O Forno"\s+className="w-32 md:w-48 h-auto object-contain opacity-90"/g, to: '<img src="https://i.postimg.cc/RhpFKdKb/LOGO-FORNO-branco-sem-fundo.png" alt="O Forno" className="w-32 md:w-48 h-auto object-contain opacity-90 [.light_&]:invert [.light_&]:brightness-0"' },
  { from: /<img\s+src="https:\/\/i\.postimg\.cc\/RhpFKdKb\/LOGO-FORNO-branco-sem-fundo\.png"\s+alt="O Forno"\s+className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity mb-8"/g, to: '<img src="https://i.postimg.cc/RhpFKdKb/LOGO-FORNO-branco-sem-fundo.png" alt="O Forno" className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity mb-8 [.light_&]:invert [.light_&]:brightness-0"' },
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
