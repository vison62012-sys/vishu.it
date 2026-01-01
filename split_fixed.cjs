const fs = require('fs');

const content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.fixed.ts', 'utf8');

function extractArray(name) {
    const startRegex = new RegExp(`export const ${name}(: .*?)? = (\\[|{)`);
    const match = content.match(startRegex);
    if (!match) return null;
    const startIndex = match.index + match[0].length - 1; // index of [ or {
    const startChar = content[startIndex];
    const endChar = startChar === '[' ? ']' : '}';
    let balance = 0;
    let inString = false;
    let stringChar = '';

    for (let i = startIndex; i < content.length; i++) {
        const char = content[i];
        if (!inString) {
            if (char === "'" || char === '"' || char === '`') {
                inString = true;
                stringChar = char;
            } else if (char === startChar) {
                balance++;
            } else if (char === endChar) {
                balance--;
                if (balance === 0) {
                    return content.substring(startIndex, i + 1);
                }
            }
        } else {
            if (char === stringChar && content[i - 1] !== '\\') {
                inString = false;
            }
        }
    }
    return null;
}

function fixIcons(data) {
    // Be more aggressive: match until the comma
    return data.replace(/icon: '(.*?)',/g, (m, p1) => {
        return `icon: "${p1.replace(/"/g, '\\"')}",`;
    });
}

const activityCategories = extractArray('ACTIVITY_CATEGORIES');
if (activityCategories) {
    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\activities.ts', `import { ActivityCategory } from '../types';\n\nexport const ACTIVITY_CATEGORIES: ActivityCategory[] = ${fixIcons(activityCategories)};\n`, 'utf8');
}

const consultingServices = extractArray('CONSULTING_SERVICES');
if (consultingServices) {
    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', `import { ConsultingService } from '../types';\n\nexport const CONSULTING_SERVICES: ConsultingService[] = ${fixIcons(consultingServices)};\n`, 'utf8');
}

const techCategories = extractArray('TECH_CATEGORIES');
const welcomeMessages = extractArray('WELCOME_MESSAGES');
const stylistData = extractArray('STYLIST_DATA');
const workData = extractArray('LATEST_WORK_DATA');

let uiDataContent = "import { Category } from '../types';\n\n";
if (techCategories) uiDataContent += `export const TECH_CATEGORIES: Category[] = ${fixIcons(techCategories)};\n\n`;
if (welcomeMessages) uiDataContent += `export const WELCOME_MESSAGES = ${welcomeMessages};\n\n`;
if (stylistData) uiDataContent += `export const STYLIST_DATA = ${stylistData};\n\n`;
if (workData) uiDataContent += `export const LATEST_WORK_DATA = ${workData};\n\n`;

fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\ui_data.ts', uiDataContent, 'utf8');

console.log('Split with aggressive icon fix completed.');
