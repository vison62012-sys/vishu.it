const BATCH_5_PART_2 = [
    // --- WELLNESS (More) ---
    {
        id: 'WEL_ADD_1',
        name: 'Day Spa Configurator',
        shortDescription: 'Crea il tuo percorso relax personalizzato',
        icon: '🧘',
        category: 'E-commerce',
        activityType: 'wellness',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
        problem: 'Pacchetti standard che non soddisfano nessuno.',
        solutions: ['Mix & Match trattamenti', 'Aggiunta pranzo/aperitivo', 'Preventivo live'],
        economicBenefits: { title: 'Upsell', benefits: ['Ticket medio +40%', 'Esperienza unica'], savings: 'Tempo preventivi' }
    },
    {
        id: 'WEL_ADD_2',
        name: 'Corporate Wellness Portal',
        shortDescription: 'Convenzioni aziendali gestite online',
        icon: '🏢',
        category: 'Marketing Digitale',
        activityType: 'wellness',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
        problem: 'Gestione manuale dei voucher aziendali.',
        solutions: ['Portale HR dedicato', 'Codici sconto univoci', 'Fatturazione mensile'],
        economicBenefits: { title: 'B2B', benefits: ['Flusso clienti costante', 'Contratti annuali'], savings: 'Gestione convenzioni' }
    },

    // --- FITNESS (More) ---
    {
        id: 'FIT_ADD_1',
        name: 'Virtual Personal Trainer',
        shortDescription: 'Coaching 1-to-1 via Zoom',
        icon: '📹',
        category: 'Digitalizzazione',
        activityType: 'fitness',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
        problem: 'Impossibilità di andare in palestra per viaggi o lockdown.',
        solutions: ['Videochiamata HD', 'Correzione postura live', 'Timer condiviso'],
        economicBenefits: { title: 'Flessibilità', benefits: ['Clienti ovunque nel mondo', 'Zero costi struttura'], savings: 'Affitto sala' }
    },
    {
        id: 'FIT_ADD_2',
        name: 'Nutrition Plan AI',
        shortDescription: 'Piano alimentare abbinato all\'allenamento',
        icon: '🥗',
        category: 'Automazione',
        activityType: 'fitness',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che si allenano ma mangiano male e non vedono risultati.',
        solutions: ['Calcolo macro', 'Lista spesa auto', 'Ricette fit'],
        economicBenefits: { title: 'Risultati', benefits: ['Miglior retention', 'Upsell servizio nutrizione'], savings: 'Nutrizionista esterno' }
    },

    // --- BARBER (More) ---
    {
        id: 'BRB_ADD_1',
        name: 'Barber Academy Online',
        shortDescription: 'Corsi video per altri barbieri o appassionati',
        icon: '✂️',
        category: 'E-commerce',
        activityType: 'barber',
        image: 'https://images.unsplash.com/photo-1503951914296-2a68255b089c?auto=format&fit=crop&w=800&q=80',
        problem: 'Salone chiuso la domenica/lunedì che non fattura.',
        solutions: ['Video learning', 'Area membri', 'Certificato finale'],
        economicBenefits: { title: 'Scalabilità', benefits: ['Ricavi passivi', 'Brand reputation'], savings: 'Tempo formazione fisica' }
    },
    {
        id: 'BRB_ADD_2',
        name: 'Style Mirror AR',
        shortDescription: 'Prova il taglio o la barba prima di farla',
        icon: '🤳',
        category: 'Digitalizzazione',
        activityType: 'barber',
        image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti indecisi o pentiti del taglio radicale.',
        solutions: ['Filtri AR realistici', 'Catalogo trend', 'Condivisione social'],
        economicBenefits: { title: 'Esperienza', benefits: ['Cliente rassicurato', 'Pubblicità virale'], savings: 'Lamentele' }
    },

    // --- TATTOO (More) ---
    {
        id: 'TAT_ADD_1',
        name: 'Tattoo Aftercare App',
        shortDescription: 'Guida giorno per giorno alla guarigione',
        icon: '🩹',
        category: 'Automazione',
        activityType: 'tattoo',
        image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che chiamano ansiosi per ogni crosticina o rossore.',
        solutions: ['Notifiche cura giornaliera', 'Chat check foto', 'Vendita creme'],
        economicBenefits: { title: 'Qualità', benefits: ['Tatuaggi guariti meglio', 'Upsell creme'], savings: 'Tempo assistenza' }
    },
    {
        id: 'TAT_ADD_2',
        name: 'Merch Store Tatuatore',
        shortDescription: 'Vendi t-shirt e stampe dei tuoi disegni',
        icon: '👕',
        category: 'E-commerce',
        activityType: 'tattoo',
        image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800&q=80',
        problem: 'Guadagno limitato alle ore in cui si tatua.',
        solutions: ['Print on demand', 'Design esclusivi', 'Spedizione auto'],
        economicBenefits: { title: 'Brand', benefits: ['Pubblicità ambulante', 'Entrate extra'], savings: 'Magazzino' }
    },

    // --- PETS (More) ---
    {
        id: 'PET_ADD_1',
        name: 'Lost & Found QR Tag',
        shortDescription: 'Medaglietta intelligente per ritrovare cani smarriti',
        icon: '🏷️',
        category: 'Sicurezza & Cloud',
        activityType: 'pets',
        image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
        problem: 'Cani che scappano e medagliette illeggibili.',
        solutions: ['Profilo online cane', 'Posizione GPS scansionatore', 'Contatto rapido'],
        economicBenefits: { title: 'Premium', benefits: ['Servizio alto valore', 'Tranquillità padrone'], savings: 'Medagliette incise' }
    },
    {
        id: 'PET_ADD_2',
        name: 'Video-Corso Addestramento Base',
        shortDescription: 'Lezioni per educare il cucciolo a casa',
        icon: '🐕',
        category: 'Digitalizzazione',
        activityType: 'pets',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
        problem: 'Padroni inesperti che non riescono a gestire il cane ma non hanno tempo per il campo.',
        solutions: ['Videolezioni step-by-step', 'Supporto remoto', 'Community'],
        economicBenefits: { title: 'Educazione', benefits: ['Cani più gestibili', 'Upsell lezioni campo'], savings: 'Tempo spiegazioni' }
    }
];

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_5_PART_2.map(service => {
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
        "\n  // --- BATCH 5 PART 2 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 5 Part 2 services injected successfully.");
}
