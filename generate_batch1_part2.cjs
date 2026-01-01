const BATCH_1_PART_2 = [
    // --- EVENTS (Target: 9 more) ---
    {
        id: 'EVT2',
        name: 'Ticket Sales Booster',
        shortDescription: 'Pagina vendita biglietti ottimizzata per conversioni',
        icon: '🎟️',
        category: 'E-commerce',
        activityType: 'events',
        image: 'https://images.unsplash.com/photo-1492684223066-81342eefaecf?auto=format&fit=crop&w=800&q=80',
        problem: 'Siti di biglietteria lenti che fanno abbandonare l\'acquisto.',
        solutions: ['Checkout in 2 click', 'Integrazione social', 'Scarsità (posti rimasti)'],
        economicBenefits: { title: 'Vendite', benefits: ['+30% conversion rate', 'Incasso immediato'], savings: 'Commissioni biglietterie terze' }
    },
    {
        id: 'EVT3',
        name: 'Live Streaming Setup',
        shortDescription: 'Regia mobile per trasmettere eventi ibridi',
        icon: '🎥',
        category: 'Marketing Digitale',
        activityType: 'events',
        image: 'https://images.unsplash.com/photo-1598550476439-cce86041e8c3?auto=format&fit=crop&w=800&q=80',
        problem: 'Capienza limitata della location fisica.',
        solutions: ['Streaming HD pay-per-view', 'Chat interattiva', 'Registrazione cloud'],
        economicBenefits: { title: 'Audience', benefits: ['Illimitati partecipanti online', 'Ricavi extra biglietti virtuali'], savings: 'Costo affitto sala più grande' }
    },
    {
        id: 'EVT4',
        name: 'Guest List Manager',
        shortDescription: 'App check-in invitati con QR code rapido',
        icon: '📋',
        category: 'Digitalizzazione',
        activityType: 'events',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        problem: 'File lunghe all\'ingresso e liste cartacee illeggibili.',
        solutions: ['Scan QR 1 secondo', 'Sincronizzazione real-time', 'VIP alert'],
        economicBenefits: { title: 'Esperienza', benefits: ['Ingresso fluido', 'Dati precisi presenze'], savings: 'Staff all\'ingresso' }
    },
    {
        id: 'EVT5',
        name: 'Sponsorship ROI Dashboard',
        shortDescription: 'Report dati per dimostrare il valore agli sponsor',
        icon: '📊',
        category: 'Analisi Dati',
        activityType: 'events',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        problem: 'Difficoltà a trovare sponsor perché non si hanno dati certi sulla visibilità.',
        solutions: ['Tracciamento impression', 'Dati demografici pubblico', 'Report automatico PDF'],
        economicBenefits: { title: 'Sponsorizzazioni', benefits: ['Sponsor pagano di più', 'Rinnovi facili'], savings: 'Tempo reportistica' }
    },

    // --- KIDS (Ludoteche, High Priority for expanding list) ---
    {
        id: 'KDS2',
        name: 'Party Planner Configurator',
        shortDescription: 'Genitori configurano la festa online (torta, tema, animazione)',
        icon: '🎂',
        category: 'E-commerce',
        activityType: 'kids',
        image: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?auto=format&fit=crop&w=800&q=80',
        problem: 'Ore al telefono per spiegare i pacchetti festa e le opzioni.',
        solutions: ['Configuratore visivo', 'Preventivo immediato', 'Acconto online'],
        economicBenefits: { title: 'Vendite', benefits: ['Genitori comprano extra', 'Meno tempo preventivi'], savings: '+20% valore festa' }
    },
    {
        id: 'KDS3',
        name: 'Safe Check-in/out',
        shortDescription: 'Sistema sicurezza ritiro bambini con foto autorizzati',
        icon: '🛡️',
        category: 'Sicurezza & Cloud',
        activityType: 'kids',
        image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
        problem: 'Ansia sulla sicurezza e verifica di chi viene a prendere il bambino.',
        solutions: ['Database deleghe con foto', 'Firma digitale ritiro', 'SMS notifica genitore'],
        economicBenefits: { title: 'Reputazione', benefits: ['Fiducia totale mamme', 'Zero rischi legali'], savings: 'Assicurazione' }
    },

    // --- GELATERIA ---
    {
        id: 'GEL2',
        name: 'Gelato Delivery Box',
        shortDescription: 'Vaschette termiche con consegna express',
        icon: '🍨',
        category: 'E-commerce',
        activityType: 'gelateria',
        image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80',
        problem: 'Il gelato si scioglie nel delivery standard, clienti insoddisfatti.',
        solutions: ['Packaging termico brandizzato', 'Rider diretti', 'Ordine gusti drag&drop'],
        economicBenefits: { title: 'Asporto', benefits: ['Vendite serali +40%', 'Scontrino medio alto (kg)'], savings: 'Commissioni app' }
    },
    {
        id: 'GEL3',
        name: 'Fila Virtuale',
        shortDescription: 'Prendi il numero dallo smartphone e aspetta seduto',
        icon: '🎫',
        category: 'Digitalizzazione',
        activityType: 'gelateria',
        image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d1?auto=format&fit=crop&w=800&q=80',
        problem: 'Assembramenti davanti alla vetrina che scoraggiano nuovi clienti.',
        solutions: ['Eliminacode digitale', 'Notifica "è il tuo turno"', 'Display tempi attesa'],
        economicBenefits: { title: 'Flusso', benefits: ['Nessuno rinuncia per la fila', 'Attesa più piacevole'], savings: 'Clienti persi riserve' }
    },

    // --- BAKERY ---
    {
        id: 'BAK2',
        name: 'Too Good To Waste App',
        shortDescription: 'Vendita last minute dell\'invenduto a prezzo scontato',
        icon: '♻️',
        category: 'E-commerce',
        activityType: 'bakery',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
        problem: 'Tanto spreco di pane e dolci a fine giornata.',
        solutions: ['Magic Box digitale', 'Notifica push ai vicini', 'Pagamento anticipato'],
        economicBenefits: { title: 'Recupero', benefits: ['Ricavo da merce persa', 'Nuovi clienti che provano'], savings: 'Costi smaltimento' }
    },
    {
        id: 'BAK3',
        name: 'abbonamento Pane Fresco',
        shortDescription: 'Il pane caldo ogni mattina senza dover ordinare',
        icon: '🥖',
        category: 'E-commerce',
        activityType: 'bakery',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=800&q=80',
        problem: 'Incassi altalenanti e clienti che dimenticano di passare.',
        solutions: ['Addebito mensile', 'Ritiro salt-coda', 'Borsa tela in omaggio'],
        economicBenefits: { title: 'Fidelizzazione', benefits: ['Incasso sicuro mensile', 'Cross-selling colazione'], savings: 'Tempo cassa' }
    }
];

const fs = require('fs');

// Read current services
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');

const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_1_PART_2.map(service => {
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
        "\n  // --- BATCH 1 PART 2 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 1 Part 2 services injected successfully.");
} else {
    console.log("Could not find closing bracket in services.ts");
}
