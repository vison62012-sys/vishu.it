
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONSTANTS_PATH = path.join(__dirname, '../constants.ts');

const UPDATES = {
  // Wellness
  'W1': { alt: 'Receptionist che utilizza tablet per check-in digitale in spa' },
  'W2': { alt: 'Calendario su smartphone per prenotazione appuntamento estetico' },
  'W3': { alt: 'Consulenza video su smartphone per cura della pelle' },
  'W4': { alt: 'Menu trattamenti spa visualizzato su tablet' },
  'W5': { alt: 'Cliente felice in accappatoio che si rilassa in spa' },
  'W6': { alt: 'Notifica smartphone per offerta last minute centro estetico' },
  'W7': { alt: 'Tablet con scheda cliente e storico trattamenti' },

  // Auto
  'A1': { alt: 'Meccanico che mostra un pezzo di ricambio e usa lo smartphone' },
  'A2': { alt: "Chiavi dell'auto in una cassetta di sicurezza" }, // Double quotes for apostrophe
  'A3': { alt: 'Smartphone con notifica scadenza manutenzione auto' },
  'A4': { alt: 'Meccanico al lavoro su auto in officina moderna' },
  'A5': { alt: 'Consegna chiavi auto di cortesia pulita' },
  'A6': { alt: 'Autista che ritira auto per servizio a domicilio' },
  'A7': { alt: 'Tablet che mostra storico manutenzione auto in officina' },

  // General
  '1': { alt: 'Ufficio moderno con team che lavora su processi digitali' },
  '2': { alt: 'Server room moderna e sicura con luci blu' },
  '3': { alt: 'Persona che fa acquisti online con carta di credito e laptop' },
  '4': { alt: 'Dashboard di marketing digitale su tablet e smartphone' },

  // Beach
  '5': { alt: 'Ombrelloni in spiaggia ordinati con cielo azzurro' },
  '6': { alt: "Cocktail e cibo serviti sotto l'ombrellone in spiaggia" }, // Double quotes
  '10': { alt: 'QR code su tavolo spiaggia per informazioni servizi' },

  // Restaurant
  '7': { alt: 'Cliente che scansiona QR code menu al ristorante' },

  // Events
  '8': { alt: 'Folla che festeggia in discoteca con luci colorate' },

  // Sports
  '9': { alt: "Persone che praticano yoga all'aperto con tappetini" } // Double quotes
};

let content = fs.readFileSync(CONSTANTS_PATH, 'utf8');

const servicesStartIndex = content.indexOf('export const CONSULTING_SERVICES');
if (servicesStartIndex === -1) {
  console.error('Could not find CONSULTING_SERVICES');
  process.exit(1);
}

// Split content into header and services part to avoid matching IDs in header
const header = content.substring(0, servicesStartIndex);
let servicesContent = content.substring(servicesStartIndex);

// Iterate through updates
for (const [id, data] of Object.entries(UPDATES)) {
  // Regex matches id: 'ID' ... image: 'URL'
  // We use [^}]+? to match content inside the object but be careful about nested braces.
  // Actually, simple regex is fine if we are in the services array part.
  
  const regex = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?image:\\s*)'[^']+'`, 'g');
  
  if (regex.test(servicesContent)) {
    servicesContent = servicesContent.replace(regex, (match, prefix) => {
      // Use double quotes for alt to avoid issues with single quotes in text
      return `${prefix}'/images/services/${id}-desktop.webp',\n    alt: "${data.alt}"`;
    });
    console.log(`Updated service ${id}`);
  } else {
    console.warn(`Could not find service ${id}`);
  }
}

fs.writeFileSync(CONSTANTS_PATH, header + servicesContent, 'utf8');
console.log('constants.ts updated successfully.');
