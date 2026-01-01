const fs = require('fs');

function fix(str) {
    const map = {
        0x178: 0x9F, 0x152: 0x8C, 0x160: 0x8A, 0x161: 0x9A, 0x17D: 0x8E, 0x17E: 0x9E,
        0x192: 0x83, 0x2C6: 0x88, 0x2DC: 0x98, 0x2013: 0x96, 0x2014: 0x97,
        0x2018: 0x91, 0x2019: 0x92, 0x201A: 0x82, 0x201C: 0x93, 0x201D: 0x94,
        0x201E: 0x84, 0x2020: 0x86, 0x2021: 0x87, 0x2022: 0x95, 0x2026: 0x85,
        0x2030: 0x89, 0x2039: 0x8B, 0x203A: 0x9B, 0x20AC: 0x80, 0x2122: 0x99
    };
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        bytes.push(map[code] || (code & 0xFF));
    }
    return Buffer.from(bytes).toString('utf8');
}

const rawContent = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.ts', 'utf8');
const fixed = fix(rawContent);

// Split helpers
function extractArray(name) {
    const regex = new RegExp(`export const ${name}: .*? = ([\\s\\S]*?);\\n\\n`, 'm');
    const match = fixed.match(regex);
    if (match) return match[1];
    const regexEnd = new RegExp(`export const ${name}: .*? = ([\\s\\S]*?);$`, 'm');
    const matchEnd = fixed.match(regexEnd);
    if (matchEnd) return matchEnd[1];
    return null;
}

const activityCategories = extractArray('ACTIVITY_CATEGORIES');
if (activityCategories) {
    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\activities.ts', `import { ActivityCategory } from '../types';\n\nexport const ACTIVITY_CATEGORIES: ActivityCategory[] = ${activityCategories};\n`, 'utf8');
}

const consultingServices = extractArray('CONSULTING_SERVICES');
if (consultingServices) {
    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', `import { ConsultingService } from '../types';\n\nexport const CONSULTING_SERVICES: ConsultingService[] = ${consultingServices};\n`, 'utf8');
}

const techCategories = extractArray('TECH_CATEGORIES');
const welcomeMessages = extractArray('WELCOME_MESSAGES');

let uiDataContent = "import { Category } from '../types';\n\n";
if (techCategories) uiDataContent += `export const TECH_CATEGORIES: Category[] = ${techCategories};\n\n`;
if (welcomeMessages) uiDataContent += `export const WELCOME_MESSAGES = ${welcomeMessages};\n\n`;

const stylistMatch = fixed.match(/export const STYLIST_DATA = ({[\s\S]*?});/);
if (stylistMatch) uiDataContent += `export const STYLIST_DATA = ${stylistMatch[1]};\n\n`;

const workMatch = fixed.match(/export const LATEST_WORK_DATA = (\[[\s\S]*?\]);/);
if (workMatch) uiDataContent += `export const LATEST_WORK_DATA = ${workMatch[1]};\n\n`;

fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\ui_data.ts', uiDataContent, 'utf8');

console.log('Final split completed with byte-fix.');
