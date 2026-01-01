const fs = require('fs');

const content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.ts', 'binary');
const fixed = Buffer.from(content, 'binary').toString('utf8');

fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.utf8.ts', fixed, 'utf8');
console.log('Fixed constants saved using Buffer.');
