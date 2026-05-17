import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const mdPath = resolve(root, 'HOW_IT_WORKS.md');
const htmlPath = resolve(root, 'HOW_IT_WORKS.html');
const pdfPath = resolve(root, 'HOW_IT_WORKS.pdf');

const md = readFileSync(mdPath, 'utf8');
const body = marked.parse(md);

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>How the BITCOLLAGE Cutting Tool Platform Works</title>
<style>
  @page { size: A4; margin: 22mm 18mm; }
  * { box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', 'Inter', 'Helvetica Neue', Arial, sans-serif;
    color: #1a1a2e;
    line-height: 1.55;
    font-size: 11pt;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 26pt; color: #e63946;
    border-bottom: 3px solid #e63946;
    padding-bottom: 10px; margin: 0 0 8px;
    letter-spacing: -0.5px;
  }
  h1 + p strong {
    font-size: 13pt; color: #2e7d32; display: inline-block; margin-top: 4px;
  }
  h2 {
    font-size: 16pt; color: #1a1a2e;
    margin: 28px 0 12px;
    padding-bottom: 6px;
    border-bottom: 2px solid #e5e7eb;
    page-break-after: avoid;
  }
  h3 {
    font-size: 13pt; color: #e63946;
    margin: 20px 0 8px;
    page-break-after: avoid;
  }
  h4 { font-size: 11.5pt; margin: 14px 0 6px; color: #1a1a2e; }
  p { margin: 8px 0; }
  strong { color: #1a1a2e; }
  em { color: #6b7280; }
  ul, ol { padding-left: 22px; margin: 8px 0; }
  li { margin: 4px 0; }
  a { color: #e63946; text-decoration: none; }

  /* Tables */
  table {
    width: 100%; border-collapse: collapse; margin: 12px 0;
    font-size: 10pt;
    page-break-inside: avoid;
  }
  th, td {
    border: 1px solid #e5e7eb;
    padding: 8px 10px; text-align: left; vertical-align: top;
  }
  th {
    background: #f7f8fa;
    color: #1a1a2e; font-weight: 600;
    border-bottom: 2px solid #e63946;
  }
  tr:nth-child(even) td { background: #fafbfc; }

  /* Code & pre */
  code {
    background: #f3f4f6;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: 9.5pt;
    color: #1a1a2e;
  }
  pre {
    background: #1a1a2e;
    color: #e5e7eb;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: 9pt;
    line-height: 1.5;
    page-break-inside: avoid;
    border-left: 4px solid #e63946;
  }
  pre code { background: transparent; color: inherit; padding: 0; }

  hr {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 24px 0;
  }
  blockquote {
    border-left: 4px solid #2e7d32;
    background: #f0fdf4;
    margin: 12px 0;
    padding: 10px 16px;
    color: #1a1a2e;
  }

  .footer-note {
    margin-top: 32px; padding-top: 16px;
    border-top: 1px solid #e5e7eb;
    font-size: 9pt; color: #6b7280;
    text-align: center;
  }
</style>
</head>
<body>
${body}
<div class="footer-note">BITCOLLAGE® Consulting Services LLP · info@bitcollage.in · www.bitcollageconsulting.com</div>
</body>
</html>
`;

writeFileSync(htmlPath, html, 'utf8');
console.log('[OK] HTML written:', htmlPath);

// Find Edge
const candidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];
const fs = await import('node:fs');
const edge = candidates.find((p) => fs.existsSync(p));
if (!edge) {
  console.error('Microsoft Edge not found. Open HOW_IT_WORKS.html in any browser and use Ctrl+P → Save as PDF.');
  process.exit(1);
}

const fileUrl = pathToFileURL(htmlPath).href;
console.log('[..] Running Edge headless to print PDF...');
execFileSync(
  edge,
  [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${pdfPath}`,
    fileUrl,
  ],
  { stdio: 'inherit' }
);
console.log('[OK] PDF written:', pdfPath);
