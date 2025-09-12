#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function toPascal(name) {
  return name.replace(/(^\w|[-_]\w)/g, (m) => m.replace(/[-_]/, '').toUpperCase());
}

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: ngg <type> <name>');
  console.log('Types: svc | int | cmp | pipe');
  process.exit(1);
}

const [type, name] = args;
const map = {
  svc: 'service.snippet.json',
  int: 'interceptor.snippet.json',
  cmp: 'component.snippet.json',
  pipe: 'pipe.snippet.json'
};

const snippetFile = map[type];
if (!snippetFile) {
  console.error('❌ Invalid type! Use: svc | int | cmp | pipe');
  process.exit(1);
}

const snippetPath = path.join(__dirname, 'snippets', snippetFile);
const snippet = JSON.parse(fs.readFileSync(snippetPath, 'utf8'));
const body = snippet.body.join('\n');

const NAME = name.toLowerCase();
const NAME_PASCAL = toPascal(NAME);

let output = body.replace(/\$\{NAME_PASCAL\}/g, NAME_PASCAL).replace(/\$\{NAME\}/g, NAME);

let outFile = '';
if (type === 'svc') outFile = `${NAME}.service.ts`;
else if (type === 'int') outFile = `${NAME}.interceptor.ts`;
else if (type === 'cmp') outFile = `${NAME}.component.ts`;
else if (type === 'pipe') outFile = `${NAME}.pipe.ts`;

if (fs.existsSync(outFile)) {
  console.error('❌ File already exists:', outFile);
  process.exit(1);
}

fs.writeFileSync(outFile, output, 'utf8');
console.log(`✅ Created ${outFile}`);
