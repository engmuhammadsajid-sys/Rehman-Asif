const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

if (fs.existsSync(publicDir)) {
  fs.rmSync(publicDir, { recursive: true, force: true });
}
fs.mkdirSync(publicDir, { recursive: true });

const files = ['index.html', 'favicon.png', 'LICENSE'];
const folders = ['assets', 'projects'];

for (const file of files) {
  copyRecursive(path.join(root, file), path.join(publicDir, file));
}
for (const folder of folders) {
  copyRecursive(path.join(root, folder), path.join(publicDir, folder));
}

console.log('Built static files into /public');
