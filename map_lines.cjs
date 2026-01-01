const fs = require('fs');

const content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.fixed.ts', 'utf8');
const lines = content.split('\n');

const markers = {
    ACTIVITY_CATEGORIES_START: -1,
    ACTIVITY_CATEGORIES_END: -1,
    TECH_CATEGORIES_START: -1,
    TECH_CATEGORIES_END: -1,
    WELCOME_MESSAGES_START: -1,
    WELCOME_MESSAGES_END: -1,
    CONSULTING_SERVICES_START: -1,
    CONSULTING_SERVICES_END: -1,
    STYLIST_DATA_START: -1,
    LATEST_WORK_DATA_START: -1
};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('export const ACTIVITY_CATEGORIES')) markers.ACTIVITY_CATEGORIES_START = i;
    if (line.includes('export const TECH_CATEGORIES')) markers.TECH_CATEGORIES_START = i;
    if (line.includes('export const WELCOME_MESSAGES')) markers.WELCOME_MESSAGES_START = i;
    if (line.includes('export const CONSULTING_SERVICES')) markers.CONSULTING_SERVICES_START = i;
    if (line.includes('export const STYLIST_DATA')) markers.STYLIST_DATA_START = i;
    if (line.includes('export const LATEST_WORK_DATA')) markers.LATEST_WORK_DATA_START = i;
}

// Determine ends based on starts of next items or EOF
markers.ACTIVITY_CATEGORIES_END = markers.TECH_CATEGORIES_START - 1;
markers.TECH_CATEGORIES_END = markers.WELCOME_MESSAGES_START - 1;
markers.WELCOME_MESSAGES_END = markers.CONSULTING_SERVICES_START - 1;
markers.CONSULTING_SERVICES_END = markers.STYLIST_DATA_START - 1;

console.log(JSON.stringify(markers, null, 2));
