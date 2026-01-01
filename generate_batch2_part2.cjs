
const BATCH_2_PART_2 = [
    // --- RETAIL (General Retail & Clothing) (Adding more to reach 10) ---
    {
        id: 'RTL_ADD_1',
        name: 'Virtual Showroom Tour',
        shortDescription: 'Esplora il negozio in 3D dal divano',
        icon: '🏢',
        category: 'Marketing Digitale',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti distanti che non visitano lo store fisico.',
        solutions: ['Tour Matterport 3D', 'Tag prodotti cliccabili', 'Chat live'],
        economicBenefits: { title: 'Visite', benefits: ['+200% tempo sul sito', 'Vendite a distanza'], savings: 'Affitto location' }
    },
    {
        id: 'RTL_ADD_2',
        name: 'Size Recommendation AI',
        shortDescription: 'Trova la taglia perfetta con una foto',
        icon: '📏',
        category: 'Automazione',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
        problem: 'Alti tassi di reso per taglie sbagliate nell\'e-commerce.',
        solutions: ['Scan corpo AI', 'Matching tabelle taglie', 'Profilo cliente'],
        economicBenefits: { title: 'Resi', benefits: ['-40% resi', 'Fiducia acquisto'], savings: 'Logistica inversa' }
    },

    // --- GROCERY (Adding more) ---
    {
        id: 'GRO_ADD_1',
        name: 'Recipe Kit Bundle',
        shortDescription: 'Compra tutti gli ingredienti di una ricetta in 1 click',
        icon: '🥘',
        category: 'E-commerce',
        activityType: 'grocery',
        image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che non sanno cosa cucinare e comprano sempre le stesse cose.',
        solutions: ['Blog ricette integrato', 'Tasto "Aggiungi tutto"', 'Suggerimenti abbinati'],
        economicBenefits: { title: 'Basket', benefits: ['+30% prodotti nel carrello', 'Vendita salse/spezie'], savings: 'Tempo ricerca' }
    },
    {
        id: 'GRO_ADD_2',
        name: 'Scadenza Alert',
        shortDescription: 'Sconti automatici sui prodotti in scadenza',
        icon: '⏳',
        category: 'Automazione',
        activityType: 'grocery',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
        problem: 'Prodotti freschi buttati via perché scaduti a scaffale.',
        solutions: ['Etichetta elettronica', 'Push notifica app vicini', 'Sconto dinamico'],
        economicBenefits: { title: 'Spreco Zero', benefits: ['Recupero costo merce', 'Immagine green'], savings: 'Smaltimento rifiuti' }
    },
    {
        id: 'GRO_ADD_3',
        name: 'Q-Buster Mobile Payment',
        shortDescription: 'Paga con il telefono saltando la cassa',
        icon: '📲',
        category: 'Digitalizzazione',
        activityType: 'grocery',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
        problem: 'Code lunghe nell\'ora di punta.',
        solutions: ['Scan & Go', 'Pagamento biometrico', 'Uscita veloce'],
        economicBenefits: { title: 'Throughput', benefits: ['Più clienti/ora', 'Meno casse fisiche'], savings: 'Spazio negozio' }
    },

    // --- JEWELRY (Adding more) ---
    {
        id: 'JWL_ADD_1',
        name: 'Virtual Vault',
        shortDescription: 'Inventario digitale dei gioielli del cliente per assicurazione',
        icon: '🔐',
        category: 'Sicurezza & Cloud',
        activityType: 'jewelry',
        image: 'https://images.unsplash.com/photo-1589127882255-09d73d6d63df?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti non sanno il valore attuale dei loro gioielli per assicurazione.',
        solutions: ['Valutazione remota', 'Archivio foto HD', 'Certificato valore'],
        economicBenefits: { title: 'Servizio', benefits: ['Fidelizzazione a vita', 'Upgrade assicurativi'], savings: 'Perizie fisiche' }
    },
    {
        id: 'JWL_ADD_2',
        name: 'Gift Reminder Service',
        shortDescription: 'Non dimenticare mai un anniversario importante',
        icon: '🎁',
        category: 'Marketing Digitale',
        activityType: 'jewelry',
        image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80',
        problem: 'Mariti/partner che dimenticano date e comprano all\'ultimo altrove.',
        solutions: ['CRM date importanti', 'Suggerimento regalo automatico', 'Consegna a sorpresa'],
        economicBenefits: { title: 'Vendite', benefits: ['Acquisti ricorrenti sicuri', 'Scontrino alto'], savings: 'Marketing generico' }
    },

    // --- CAR SALES (Adding more) ---
    {
        id: 'CAR_ADD_1',
        name: 'Auto-Financing Calculator',
        shortDescription: 'Approvazione finanziamento in 5 minuti da mobile',
        icon: '🧮',
        category: 'Digitalizzazione',
        activityType: 'carsales',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che rinunciano vedendo la rata finale dopo ore di trattativa.',
        solutions: ['Simulatore rata reale', 'Pre-approvazione bancaria', 'Upload busta paga'],
        economicBenefits: { title: 'Chiusura', benefits: ['Tasso approvazione +20%', 'Meno pratiche perse'], savings: 'Tempo backoffice' }
    },
    {
        id: 'CAR_ADD_2',
        name: 'Delivery Auto a Domicilio',
        shortDescription: 'Consegna auto nuova con fiocco sotto casa',
        icon: '🎀',
        category: 'E-commerce',
        activityType: 'carsales',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti non vogliono perdere mezza giornata per il ritiro.',
        solutions: ['Rider specializzato', 'Spiegazione a casa', 'Firma tablet'],
        economicBenefits: { title: 'Esperienza', benefits: ['Recensioni entusiastiche', 'Video social virali'], savings: 'Spazio salone' }
    },

    // --- OPTICAL (Adding more) ---
    {
        id: 'OPT_ADD_1',
        name: 'Subscription Lenti a Contatto',
        shortDescription: 'Mai più senza lenti: arrivano a casa ogni mese',
        icon: '📦',
        category: 'E-commerce',
        activityType: 'optical',
        image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che comprano le lenti online per pigrizia.',
        solutions: ['Abbonamento ricorrente', 'Controllo vista annuale incluso', 'Cambio diottrie'],
        economicBenefits: { title: 'Ricavi', benefits: ['Fatturato automatico', 'Zero competizione online'], savings: 'Marketing riacquisto' }
    },
    {
        id: 'OPT_ADD_2',
        name: 'Blue Light Filter Demo App',
        shortDescription: 'Mostra i danni della luce blu per vendere trattamenti',
        icon: '👁️',
        category: 'Marketing Digitale',
        activityType: 'optical',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        problem: 'Difficile spiegare il valore di lenti costose a parole.',
        solutions: ['Simulatore visione', 'Test stress visivo', 'Report personalizzato'],
        economicBenefits: { title: 'Upsell', benefits: ['+50% vendita antiriflesso', 'Scontrino medio alto'], savings: 'Tempo spiegazione' }
    },

    // --- PHARMA (Adding more) ---
    {
        id: 'PHR_ADD_1',
        name: 'Pill Reminder App',
        shortDescription: 'App della farmacia che ricorda di prendere le medicine',
        icon: '🔔',
        category: 'Digitalizzazione',
        activityType: 'pharma',
        image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
        problem: 'Pazienti anziani che dimenticano le terapie o finiscono le scatole.',
        solutions: ['Notifica oraria', 'Riordino automatico', 'Collegamento caregiver'],
        economicBenefits: { title: 'Aderenza', benefits: ['Vendita puntuale farmaci', 'Fiducia famiglie'], savings: 'Salute pazienti' }
    },
    {
        id: 'PHR_ADD_2',
        name: 'Telemedicina in Farmacia',
        shortDescription: 'ECG e dermatologia con referto remoto immediato',
        icon: '🩺',
        category: 'Sicurezza & Cloud',
        activityType: 'pharma',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        problem: 'Liste d\'attesa lunghe per esami base in ospedale.',
        solutions: ['Cabina telemedicina', 'Referto specialista 15min', 'Pagamento ticket'],
        economicBenefits: { title: 'Servizi', benefits: ['Margine servizi alto', 'Traffico in negozio'], savings: 'Tempo pazienti' }
    },

    // --- FLORIST (Adding more) ---
    {
        id: 'FLR_ADD_1',
        name: 'Wedding Flower Configurator',
        shortDescription: 'Sposi creano il bouquet digitale prima dell\'incontro',
        icon: '👰',
        category: 'E-commerce',
        activityType: 'florist',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&w=800&q=80',
        problem: 'Sposi indecisi che chiedono 10 preventivi diversi.',
        solutions: ['Catalogo stagionale', 'Moodboard builder', 'Preventivo range'],
        economicBenefits: { title: 'Matrimoni', benefits: ['Clienti più decisi', 'Meno perditempo'], savings: 'Ore consulenza gratis' }
    },
    {
        id: 'FLR_ADD_2',
        name: 'QR Code "Dillo con un Fiore"',
        shortDescription: 'Video messaggio allegato al mazzo di fiori',
        icon: '📹',
        category: 'Digitalizzazione',
        activityType: 'florist',
        image: 'https://images.unsplash.com/photo-1563241527-3004b7be025b?auto=format&fit=crop&w=800&q=80',
        problem: 'Il bigliettino cartaceo è limitato e si perde.',
        solutions: ['Registrazione video dedica', 'Stampa QR su biglietto', 'Emozione unica'],
        economicBenefits: { title: 'Wow Effect', benefits: ['Prodotto premium', 'Passaparola social'], savings: 'Costo bigliettini' }
    }
];

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_2_PART_2.map(service => {
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
        "\n  // --- BATCH 2 PART 2 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 2 Part 2 services injected successfully.");
}
