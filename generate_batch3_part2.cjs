const BATCH_3_PART_2 = [
    // --- MEDICAL (More) ---
    {
        id: 'MED_ADD_1',
        name: 'IoT Monitoraggio Remoto',
        shortDescription: 'Device indossabili che inviano dati al medico',
        icon: '⌚',
        category: 'Automazione',
        activityType: 'medical',
        image: 'https://images.unsplash.com/photo-1551817958-c96353389818?auto=format&fit=crop&w=800&q=80',
        problem: 'Pazienti cronici che richiedono controlli frequenti.',
        solutions: ['Sfigmomanometro connesso', 'Saturimetro Bluetooth', 'Alert valori anomali'],
        economicBenefits: { title: 'Prevenzione', benefits: ['Intervento tempestivo', 'Meno ricoveri'], savings: 'Costi SSN/Privato' }
    },
    {
        id: 'MED_ADD_2',
        name: 'AR Chirurgia Assistita',
        shortDescription: 'Visori per visualizzare dati vitali durante interventi',
        icon: '👓',
        category: 'Automazione',
        activityType: 'medical',
        image: 'https://images.unsplash.com/photo-1584036561566-b9370b809a7b?auto=format&fit=crop&w=800&q=80',
        problem: 'Chirurghi che devono distogliere lo sguardo per vedere monitor.',
        solutions: ['Proiezione dati su paziente', 'Visione 3D organi', 'Precisione millimetrica'],
        economicBenefits: { title: 'Qualità', benefits: ['Meno errori', 'Operazioni più rapide'], savings: 'Rischi assicurativi' }
    },

    // --- INSURANCE (Assicurazioni) ---
    {
        id: 'INS2',
        name: 'Foto-Perizia AI Sinistri',
        shortDescription: 'Fai le foto al danno e l\'AI stima il rimborso',
        icon: '📸',
        category: 'Automazione',
        activityType: 'insurance',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
        problem: 'Tempi biblici per aspettare il perito dopo un incidente.',
        solutions: ['Visione artificiale danni', 'Offerta liquidazione immediata', 'Anti-frode'],
        economicBenefits: { title: 'Velocità', benefits: ['Rimborso in 24h', 'Cliente soddisfatto'], savings: 'Costi periti' }
    },
    {
        id: 'INS3',
        name: 'Micro-Insurance On Demand',
        shortDescription: 'Attiva l\'assicurazione sci solo quando sei in pista',
        icon: '🎿',
        category: 'E-commerce',
        activityType: 'insurance',
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
        problem: 'Polizze annuali costose per rischi occasionali.',
        solutions: ['Attivazione GPS', 'Pay-per-use', 'Copertura istantanea'],
        economicBenefits: { title: 'Nuovi Clienti', benefits: ['Target giovani', 'Volumi alti micropremio'], savings: 'CAC basso' }
    },
    {
        id: 'INS4',
        name: 'Black Box Auto Telematica',
        shortDescription: 'Sconti sulla polizza per chi guida bene',
        icon: '🚗',
        category: 'Analisi Dati',
        activityType: 'insurance',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
        problem: 'Tariffe alte anche per guidatori prudenti.',
        solutions: ['Monitoraggio stile guida', 'Crash detection', 'Ricostruzione incidenti'],
        economicBenefits: { title: 'Rischio', benefits: ['Sinistrosità ridotta', 'Selezione avversa evitata'], savings: 'Risparmio indennizzi' }
    },

    // --- CONSULTING (More) ---
    {
        id: 'CNS_ADD_1',
        name: 'Project Management Dashboard',
        shortDescription: 'Tutto il progetto visibile al cliente in real-time',
        icon: '📊',
        category: 'Digitalizzazione',
        activityType: 'consulting',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che chiamano ogni giorno per chiedere "a che punto siamo?".',
        solutions: ['Gantt condiviso', 'Task status', 'Upload documenti'],
        economicBenefits: { title: 'Trasparenza', benefits: ['Fiducia totale', 'Zero tempo report'], savings: 'Email inutili' }
    },
    {
        id: 'CNS_ADD_2',
        name: 'Lead Generation Funnel',
        shortDescription: 'Sistema automatico per trovare nuovi clienti',
        icon: '🧲',
        category: 'Marketing Digitale',
        activityType: 'consulting',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        problem: 'Passaparola incostante che crea "montagne russe" di fatturato.',
        solutions: ['Landing page', 'Lead magnet ebook', 'Email nurture'],
        economicBenefits: { title: 'Crescita', benefits: ['Flusso costante lead', 'Prevedibilità ricavi'], savings: 'Tempo networking' }
    },

    // --- REAL ESTATE (More) ---
    {
        id: 'RST_ADD_1',
        name: 'Home Staging Virtuale',
        shortDescription: 'Arreda le stanze vuote digitalmente nelle foto',
        icon: '🛋️',
        category: 'Marketing Digitale',
        activityType: 'realestate',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        problem: 'Case vuote o arredate male che sembrano piccole e tristi.',
        solutions: ['Rendering fotorealistico', 'Rimozione mobili vecchi', 'Stili diversi'],
        economicBenefits: { title: 'Click-through', benefits: ['+100% click su annuncio', 'Effetto WOW'], savings: 'Costo home staging fisico' }
    },
    {
        id: 'RST_ADD_2',
        name: 'Asta Immobiliare Online',
        shortDescription: 'Piattaforma sicura per offerte al rialzo',
        icon: '🔨',
        category: 'E-commerce',
        activityType: 'realestate',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
        problem: 'Vendite lente e trattative al ribasso.',
        solutions: ['Gara competitiva', 'Trasparenza offerte', 'Tempo limitato'],
        economicBenefits: { title: 'Prezzo', benefits: ['Max prezzo mercato', 'Vendita in 30gg'], savings: 'Tempo trattativa' }
    }
];

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_3_PART_2.map(service => {
        return `  {
    id: '${service.id}',
    name: "${service.name}",
    shortDescription: "${service.shortDescription}",
    icon: '${service.icon}',
    category: '${service.category}',
    activityType: '${service.activityType}',
    image: '${service.image}',
    problem: "${service.problem}",
    solutions: ${JSON.stringify(service.solutions)},
    economicBenefits: ${JSON.stringify(service.economicBenefits)}
  },`;
    }).join('\n');

    const newContent = content.slice(0, closingBracketIndex) +
        "\n  // --- BATCH 3 PART 2 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 3 Part 2 services injected successfully.");
}
