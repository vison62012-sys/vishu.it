const fs = require('fs');

const content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.ts', 'utf8');

function fix(str) {
    try {
        // This often fixes double-encoded UTF-8
        return Buffer.from(str, 'latin1').toString('utf8');
    } catch (e) {
        return str;
    }
}

const fixed = fix(content);

fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.fixed.ts', fixed, 'utf8');
console.log('Fixed constants saved using latin1->utf8.');
