const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.ts', 'utf8');
const s = "ðŸŒŸ";
for (let i = 0; i < s.length; i++) {
    console.log(s[i], s.charCodeAt(i).toString(16));
}
