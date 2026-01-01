const fs = require('fs');

const content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.fixed.ts', 'utf8');
const lines = content.split('\n');

const markers = {
    ACTIVITY_CATEGORIES_START: -1,
    TECH_CATEGORIES_START: -1,
    WELCOME_MESSAGES_START: -1,
    CONSULTING_SERVICES_START: -1,
    STYLIST_DATA_START: -1,
    LATEST_WORK_DATA_START: -1
};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('export const ACTIVITY_CATEGORIES')) markers.ACTIVITY_CATEGORIES_START = i;
    else if (line.includes('export const TECH_CATEGORIES')) markers.TECH_CATEGORIES_START = i;
    else if (line.includes('export const WELCOME_MESSAGES')) markers.WELCOME_MESSAGES_START = i;
    else if (line.includes('export const CONSULTING_SERVICES')) markers.CONSULTING_SERVICES_START = i;
    else if (line.includes('export const STYLIST_DATA') && !line.includes('import')) markers.STYLIST_DATA_START = i;
    else if (line.includes('export const LATEST_WORK_DATA')) markers.LATEST_WORK_DATA_START = i;
}

function getBlock(start, end) {
    // Extract lines, removing the "export const NAME: TYPE =" part to get just the array/object
    // Actually, we want to Keep the array/object structure but remove the variable declaration if we are re-exporting it
    // BUT the previous file format was `export const NAME = [...]`. 
    // We want to export it as a variable from the new file.

    // Let's just grab the whole block including the export, but maybe strip the type annotation if it causes issues 
    // (though it shouldn't if we import types).
    // The safest way is to take the content from the start line to the end line.

    let blockLines = lines.slice(start, end).join('\n');

    // We need to remove the trailing semicolon if it exists at the very end of the block 
    // to avoid duplication or just keep it.

    return blockLines;
}

// 1. ACTIVITY_CATEGORIES
const activityBlock = lines.slice(markers.ACTIVITY_CATEGORIES_START, markers.TECH_CATEGORIES_START).join('\n').trim();
// Fix potential trailing semicolon/comma issues if there are any weird artifacts, 
// but straight slicing is usually safest for preserving structure.
// We need to make sure we don't include the empty lines before the next block.
// Let's refine the end index by looking backwards from the next start.
let activityEnd = markers.TECH_CATEGORIES_START;
while (lines[activityEnd - 1].trim() === '') activityEnd--;

fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\activities.ts',
    `import { ActivityCategory } from '../types';

${lines.slice(markers.ACTIVITY_CATEGORIES_START, activityEnd).join('\n')}
`, 'utf8');


// 2. CONSULTING_SERVICES
let servicesEnd = markers.STYLIST_DATA_START;
while (lines[servicesEnd - 1].trim() === '') servicesEnd--;

fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts',
    `import { ConsultingService } from '../types';

${lines.slice(markers.CONSULTING_SERVICES_START, servicesEnd).join('\n')}
`, 'utf8');


// 3. UI_DATA
let techEnd = markers.WELCOME_MESSAGES_START;
while (lines[techEnd - 1].trim() === '') techEnd--;

let welcomeEnd = markers.CONSULTING_SERVICES_START;
while (lines[welcomeEnd - 1].trim() === '') welcomeEnd--;

let stylistEnd = markers.LATEST_WORK_DATA_START; // STYLIST_DATA ends before LATEST_WORK_DATA (plus derived SERVICES_DATA in between?)
// Wait, looking at file: 
// STYLIST_DATA
// SERVICES_DATA (derived) -> We probably don't need to save this to ui_data if it's derived?
// Actually constant.ts has it using `CONSULTING_SERVICES.slice...`. 
// If we move STYLIST_DATA to ui_data.ts, we should just move the static data.
// SERVICES_DATA depends on CONSULTING_SERVICES, so it should probably stay in constants.ts or go to a helper.
// But STYLIST_DATA is static.

// Let's look at the markers again.
// LATEST_WORK_DATA starts after STYLIST_DATA.
// But there is `NEARBY_SALONS` after LATEST_WORK_DATA.

// Let's just grab everything from TECH to WELCOME
const techBlock = lines.slice(markers.TECH_CATEGORIES_START, techEnd).join('\n');
const welcomeBlock = lines.slice(markers.WELCOME_MESSAGES_START, welcomeEnd).join('\n');

// STYLIST_DATA
// It is followed by SERVICES_DATA export.
// We need to find where STYLIST_DATA ends.
// It's an object, so it ends with `};`.
let stylistBlockEnd = markers.STYLIST_DATA_START;
while (!lines[stylistBlockEnd].trim().endsWith('};')) stylistBlockEnd++;
const stylistBlock = lines.slice(markers.STYLIST_DATA_START, stylistBlockEnd + 1).join('\n');

// LATEST_WORK_DATA
let workBlockEnd = markers.LATEST_WORK_DATA_START;
while (!lines[workBlockEnd].trim().endsWith('];')) workBlockEnd++;
const workBlock = lines.slice(markers.LATEST_WORK_DATA_START, workBlockEnd + 1).join('\n');

fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\ui_data.ts',
    `import { Category } from '../types';

${techBlock}

${welcomeBlock}

${stylistBlock}

${workBlock}
`, 'utf8');

console.log('Repair completed.');
