const fs = require('fs');

// Read the file as a "binary" string (each byte is a character 0-255)
const content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.ts', 'binary');

// Now we have a string where each character's charCode is the byte value.
// But wait, if the file was saved as UTF-8, then a multi-byte sequence like F0 9F 8C 9F 
// might have been read correctly IF it was UTF-8.
// BUT since we see "ðŸŒŸ", it means the file LITERALLY contains the bytes for those 4 characters.

// Let's try to decode it.
function fix(str) {
    // If it's double encoded:
    // Original (🌟) = F0 9F 8C 9F
    // Saved as UTF-8 of the latin1 chars of those bytes.
    // So the file has: C3 B0 (ð)  C5 B8 (Ÿ)  C5 92 (Œ)  C5 B8 (Ÿ)

    // Step 1: Read the file correctly as UTF-8 (this gives us the string "ðŸŒŸ")
    // Step 2: Convert those characters back to the bytes they represent in latin1.
    const buf = Buffer.from(str, 'utf8'); // This is wrong if it's already "ðŸŒŸ"

    // Let's try this:
    return Buffer.from(str, 'latin1').toString('utf8');
}

// Actually, let's use a more robust way to fix the double encoding.
// Many of the "ðŸ" sequences are 4 bytes.
const utf8Content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.ts', 'utf8');

// This function fixes "Ã " -> "à" and also the emojis.
function decodeutf8(str) {
    try {
        return decodeURIComponent(escape(str));
    } catch (e) {
        return str;
    }
}

const fixed = decodeutf8(utf8Content);

fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\constants.fixed.ts', fixed, 'utf8');
console.log('Fixed using escape/decodeURIComponent');
