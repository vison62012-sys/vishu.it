const fs = require('fs');

// We need to read the files we generated.
// Since they are TS, we can't require them directly in valid JS node environment without compilation or strip-types.
// But we can regex parse them again since we just wrote them cleanly.

const activityContent = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\activities.ts', 'utf8');
const servicesContent = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');

// Parse Categories
const catRegex = /id: '([^']*)'/g;
let match;
const categories = new Set();
while ((match = catRegex.exec(activityContent)) !== null) {
    if (match[1] !== 'all') categories.add(match[1]);
}

// Parse Services
// Services also have 'id', but we want to count them by 'activityType'
// format: activityType: 'wellness'
const svcRegex = /activityType: '([^']*)'/g;
const counts = {};
while ((match = svcRegex.exec(servicesContent)) !== null) {
    const type = match[1];
    counts[type] = (counts[type] || 0) + 1;
}

const analysis = [];
for (const cat of categories) {
    analysis.push({
        id: cat,
        current: counts[cat] || 0,
        needed: Math.max(0, 10 - (counts[cat] || 0))
    });
}

// Sort by needed descending
analysis.sort((a, b) => b.needed - a.needed);

console.log(JSON.stringify(analysis, null, 2));

// Also generate a simple summary
const totalNeeded = analysis.reduce((sum, item) => sum + item.needed, 0);
console.log(`\nTotal new services needed: ${totalNeeded}`);
