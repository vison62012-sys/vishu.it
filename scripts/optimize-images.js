
import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to download image
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

// Configuration
const SERVICES = [
  // Wellness
  { id: 'W1', url: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=1600&q=80' },
  { id: 'W2', url: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1600&q=80' },
  { id: 'W3', url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80' },
  { id: 'W4', url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80' },
  { id: 'W5', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80' },
  { id: 'W6', url: 'https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=1600&q=80' },
  { id: 'W7', url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80' },
  
  // Auto
  { id: 'A1', url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80' },
  { id: 'A2', url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80' },
  { id: 'A3', url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80' },
  { id: 'A4', url: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1600&q=80' },
  { id: 'A5', url: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1600&q=80' },
  { id: 'A6', url: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1600&q=80' },
  { id: 'A7', url: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=80' },
  
  // General
  { id: '1', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80' },
  { id: '2', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80' },
  { id: '3', url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80' },
  { id: '4', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80' },
  
  // Beach
  { id: '5', url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1600&q=80' },
  { id: '6', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80' },
  { id: '10', url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1600&q=80' },
  
  // Restaurant
  { id: '7', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80' },
  
  // Events
  { id: '8', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80' },
  
  // Sports
  { id: '9', url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80' },

  // Stylist & Works
  { id: 'stylist-profile', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80' },
  { id: 'work-1-before', url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80' },
  { id: 'work-2-before', url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80' },
];

const OUTPUT_DIR = path.join(__dirname, '../public/images/services');

async function processImages() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`Starting image optimization for ${SERVICES.length} services...`);

  for (const service of SERVICES) {
    const tempPath = path.join(OUTPUT_DIR, `temp-${service.id}.jpg`);
    
    try {
      console.log(`Downloading ${service.id}...`);
      await downloadImage(service.url, tempPath);

      // Desktop version (WebP, 1200px)
      await sharp(tempPath)
        .resize(1200, 800, { fit: 'cover', position: 'center' })
        .webp({ quality: 80 })
        .toFile(path.join(OUTPUT_DIR, `${service.id}-desktop.webp`));

      // Tablet version (WebP, 800px)
      await sharp(tempPath)
        .resize(800, 600, { fit: 'cover', position: 'center' })
        .webp({ quality: 80 })
        .toFile(path.join(OUTPUT_DIR, `${service.id}-tablet.webp`));

      // Mobile version (WebP, 600px)
      await sharp(tempPath)
        .resize(600, 400, { fit: 'cover', position: 'center' })
        .webp({ quality: 80 })
        .toFile(path.join(OUTPUT_DIR, `${service.id}-mobile.webp`));

      console.log(`✓ Processed ${service.id}`);
      
      // Clean up temp file
      fs.unlinkSync(tempPath);
    } catch (error) {
      console.error(`✗ Error processing ${service.id}:`, error.message);
    }
  }

  console.log('Done!');
}

processImages();
