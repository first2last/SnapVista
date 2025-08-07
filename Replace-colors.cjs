const fs = require('fs');
const path = require('path');

// ⚠️ Full path to your SVG folder (Windows-style path with double backslashes)
const svgDir = 'D:\\Social_Media_app\\public\\assets\\icons';

// Common purple shades to replace (feel free to add more)
const colorsToReplace = [
  '#877EFF',
  '#6C5DD3',
  '#800080',
  '#A855F7',
  '#9A6AFF',
  '#7F5AF0',
  '#9370DB'
];

const newColor = '#1E90FF'; // Electric Blue

fs.readdirSync(svgDir).forEach((file) => {
  if (path.extname(file).toLowerCase() === '.svg') {
    const filePath = path.join(svgDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    let replaced = false;

    colorsToReplace.forEach((oldColor) => {
      const regex = new RegExp(oldColor, 'gi'); // case-insensitive
      if (regex.test(content)) {
        content = content.replace(regex, newColor);
        replaced = true;
      }
    });

    if (replaced) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ Updated ${file}`);
    } else {
      console.log(`⏭ No changes in ${file}`);
    }
  }
});
