const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.ts', 'utf8');

const icons = new Set();
const regex = /icon: '(.*?)'/g;
let match;
while ((match = regex.exec(content)) !== null) {
    icons.add(match[1]);
}

fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\icons_list.json', JSON.stringify(Array.from(icons), null, 2), 'utf8');
