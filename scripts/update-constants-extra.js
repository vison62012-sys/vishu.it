
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONSTANTS_PATH = path.join(__dirname, '../constants.ts');

let content = fs.readFileSync(CONSTANTS_PATH, 'utf8');

// Update STYLIST_DATA
content = content.replace(
  /image:\s*"https:\/\/images\.unsplash\.com\/photo-1522071820081-009f0129c71c[^"]*"/,
  'image: "/images/services/stylist-profile-desktop.webp"'
);

// Update LATEST_WORK_DATA
// Work 1
content = content.replace(
  /beforeImage:\s*"https:\/\/images\.unsplash\.com\/photo-1454165804606-c3d57bc86b40[^"]*"/,
  'beforeImage: "/images/services/work-1-before-desktop.webp"'
);
content = content.replace(
  /afterImage:\s*"https:\/\/images\.unsplash\.com\/photo-1460925895917-afdab827c52f[^"]*"/,
  'afterImage: "/images/services/4-desktop.webp"'
);

// Work 2
content = content.replace(
  /beforeImage:\s*"https:\/\/images\.unsplash\.com\/photo-1486312338219-ce68d2c6f44d[^"]*"/,
  'beforeImage: "/images/services/work-2-before-desktop.webp"'
);
content = content.replace(
  /afterImage:\s*"https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71[^"]*"/,
  'afterImage: "/images/services/1-desktop.webp"'
);

fs.writeFileSync(CONSTANTS_PATH, content, 'utf8');
console.log('constants.ts extras updated successfully.');
