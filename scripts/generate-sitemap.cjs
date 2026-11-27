const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = { window: {}, localStorage: { getItem: () => null } };
vm.runInNewContext(fs.readFileSync(path.join(root, 'catalogue-data.js'), 'utf8'), context);
const books = context.window.CATALOGUE || [];
const authors = [...new Set(books.map(book => book.author).filter(Boolean))];
const staticPages = ['index.html', 'maison.html', 'catalogue.html', 'auteurs.html', 'actualites.html', 'galerie.html', 'contact.html'];
const entries = [
  ...staticPages.map(file => `https://13797a-creator.github.io/afrique_eclat/${file}`),
  ...books.map(book => `https://13797a-creator.github.io/afrique_eclat/livre.html?id=${encodeURIComponent(book.title)}`),
  ...authors.map(author => `https://13797a-creator.github.io/afrique_eclat/auteur.html?id=${encodeURIComponent(author)}`),
];
const xmlEscape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map(url => `  <url><loc>${xmlEscape(url)}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(root, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(root, 'docs', 'sitemap.xml'), xml);
console.log(`Generated sitemap for ${staticPages.length} pages, ${books.length} books and ${authors.length} author profiles.`);
