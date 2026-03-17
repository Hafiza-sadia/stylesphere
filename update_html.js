const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const headerLogoRegex = /<a href="index\.html" class="logo">Style<span>Sphere<\/span><\/a>/g;
const newHeaderLogo = `<a href="index.html" class="logo-link"><img src="logo.png" alt="StyleSphere Logo" class="logo-img"></a>`;

const footerLogoRegex = /<a href="index\.html" class="logo" style="[^"]*">Style<span style="[^"]*">Sphere<\/span><\/a>/g;
const newFooterLogo = `<a href="index.html" class="logo-link"><img src="logo.png" alt="StyleSphere Logo" class="footer-logo-img"></a>`;

const disclosureRegex = /As an Amazon Associate, StyleSphere earns from qualifying purchases\./g;
const newDisclosure = `As an Amazon Associate I earn from qualifying purchases.`;

const btnAmazonRegex = /<a href="\$\{product\.amazonLink\}" target="_blank" class="btn-amazon"/g;
const newBtnAmazon = `<a href="\${product.amazonLink}" target="_blank" rel="nofollow sponsored" class="btn-amazon"`;

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(headerLogoRegex, newHeaderLogo);
    content = content.replace(footerLogoRegex, newFooterLogo);
    content = content.replace(disclosureRegex, newDisclosure);
    content = content.replace(btnAmazonRegex, newBtnAmazon);
    fs.writeFileSync(f, content);
});
console.log('HTML files modified');
