const BATCH_4 = [
    // --- CONSTRUCTION (Edilizia) ---
    {
        id: 'CNS2',
        name: 'Preventivo Ristrutturazione AI',
        shortDescription: 'Calcolo costi lavori in 5 minuti con foto',
        icon: '🏗️',
        category: 'Digitalizzazione',
        activityType: 'construction',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che chiedono preventivi per curiosità facendo perdere tempo.',
        solutions: ['Scanner 3D stanza', 'Prezzario regionale auto', 'Range costo immediato'],
        economicBenefits: { title: 'Qualifica', benefits: ['Solo clienti budget OK', 'Sopralluoghi mirati'], savings: 'Tempo tecnico' }
    },
    {
        id: 'CNS3',
        name: 'Stato Avanzamento Lavori Live',
        shortDescription: 'Foto giornaliere del cantiere al cliente',
        icon: '🚧',
        category: 'Digitalizzazione',
        activityType: 'construction',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        problem: 'Proprietari ansiosi che visitano il cantiere intralciando i lavori.',
        solutions: ['Diario fotografo cloud', 'Chat dedicata capocantiere', 'Timeline visiva'],
        economicBenefits: { title: 'Efficienza', benefits: ['Zero interruzioni', 'Pagamenti SAL puntuali'], savings: 'Ritardi lavori' }
    },
    {
        id: 'CNS4',
        name: 'Marketplace Materiali Edili',
        shortDescription: 'Ordina cemento e sabbia con consegna in cantiere',
        icon: '🚛',
        category: 'E-commerce',
        activityType: 'construction',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        problem: 'Fermi cantiere perché manca materiale o il furgone è rotto.',
        solutions: ['App ordini fornitori', 'Consegna Just-in-Time', 'Fattura unica'],
        economicBenefits: { title: 'Produttività', benefits: ['Operai sempre attivi', 'Meno viaggi magazzino'], savings: 'Costi logistica' }
    },
    {
        id: 'CNS5',
        name: 'Sicurezza Cantiere IoT',
        shortDescription: 'Caschi smart e sensori caduta',
        icon: '👷',
        category: 'Sicurezza & Cloud',
        activityType: 'construction',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        problem: 'Incidenti sul lavoro che bloccano il cantiere e costano caro.',
        solutions: ['Rilevamento DPI mancanti', 'SOS uomo a terra', 'Accesso biometrico'],
        economicBenefits: { title: 'Rischi', benefits: ['Sconto INAIL', 'Zero stop lavori'], savings: 'Costi legali' }
    },

    // --- GARDENING (Giardinaggio) ---
    {
        id: 'GRD2',
        name: 'Progettazione Giardino 3D',
        shortDescription: 'Anteprima fotorealistica del nuovo giardino',
        icon: '🌳',
        category: 'Digitalizzazione',
        activityType: 'gardening',
        image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80',
        problem: 'Cliente non riesce a immaginare il risultato finale.',
        solutions: ['Rendering piante cresciute', 'Simulazione stagioni', 'Preventivo piante'],
        economicBenefits: { title: 'Vendita', benefits: ['Ticket medio +40%', 'Chiusura contratto veloce'], savings: 'Clienti indecisi' }
    },
    {
        id: 'GRD3',
        name: 'Irrigazione Smart WiFi',
        shortDescription: 'Controllo remoto centralina in base al meteo',
        icon: '💧',
        category: 'Automazione',
        activityType: 'gardening',
        image: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=800&q=80',
        problem: 'Piante che muoiono per troppa o poca acqua.',
        solutions: ['Sensori umidità suolo', 'Meteo predittivo', 'App cliente'],
        economicBenefits: { title: 'Manutenzione', benefits: ['Piante sane', 'Risparmio idrico 30%'], savings: 'Sostituzione piante' }
    },
    {
        id: 'GRD4',
        name: 'Abbonamento Manutenzione Prato',
        shortDescription: 'Taglio e cura programmata tutto l\'anno',
        icon: '🚜',
        category: 'E-commerce',
        activityType: 'gardening',
        image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&w=800&q=80',
        problem: 'Lavoro stagionale con picchi e mesi morti.',
        solutions: ['Canone mensile fisso', 'Calendario auto', 'Addebito SDD'],
        economicBenefits: { title: 'Cashflow', benefits: ['Ricavi stabili invernali', 'Fidelizzazione'], savings: 'Gestione incassi' }
    },

    // --- CLEANING (Imprese Pulizie) ---
    {
        id: 'CLN2',
        name: 'Prenotazione Pulizie a Ore',
        shortDescription: 'Booking online come un hotel per privati e uffici',
        icon: '🧹',
        category: 'E-commerce',
        activityType: 'cleaning',
        image: 'https://images.unsplash.com/photo-1581578731117-10452966116a?auto=format&fit=crop&w=800&q=80',
        problem: 'Difficoltà a trovare clienti nuovi per riempire buchi orari.',
        solutions: ['Calendario disponibilità', 'Pagamento online', 'Feedback stelline'],
        economicBenefits: { title: 'Saturazione', benefits: ['Agenda piena', 'Pagamenti sicuri'], savings: 'Tempo preventivi' }
    },
    {
        id: 'CLN3',
        name: 'Checklist Qualità Digitale',
        shortDescription: 'Foto prima/dopo per certificare il lavoro',
        icon: '✨',
        category: 'Digitalizzazione',
        activityType: 'cleaning',
        image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=80',
        problem: 'Contestazioni dei clienti sulla qualità del pulito.',
        solutions: ['App dipendenti', 'Report fotografico', 'Firma cliente'],
        economicBenefits: { title: 'Qualità', benefits: ['Zero contestazioni', 'Bonus produttività staff'], savings: 'Rimborsi' }
    },
    {
        id: 'CLN4',
        name: 'Robot Pulizie Industriali',
        shortDescription: 'Noleggio robot lavapavimenti autonomi',
        icon: '🤖',
        category: 'Automazione',
        activityType: 'cleaning',
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=800&q=80',
        problem: 'Costi personale altissimi per pulire grandi superfici (capannoni).',
        solutions: ['Robot H24', 'Mappatura laser', 'Report copertura'],
        economicBenefits: { title: 'Costi', benefits: ['-50% costo mq', 'Pulizia notturna'], savings: 'Personale' }
    },

    // --- AUTOCARE (Meccanici & Carrozzerieri) ---
    {
        id: 'ATO2',
        name: 'Video Preventivo Officina',
        shortDescription: 'Meccanico filma il guasto e invia il preventivo',
        icon: '📹',
        category: 'Digitalizzazione',
        activityType: 'autocare',
        image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti diffidenti che pensano il meccanico inventi lavori.',
        solutions: ['Video ispezione', 'Approvazione click singolo', 'Trasparenza totale'],
        economicBenefits: { title: 'Up-selling', benefits: ['+30% lavori approvati', 'Fiducia cieca'], savings: 'Tempo spiegazioni' }
    },
    {
        id: 'ATO3',
        name: 'Status Riparazione WhatsApp',
        shortDescription: 'Aggiornamenti automatici (Smontaggio, Verniciatura, Pronto)',
        icon: '📲',
        category: 'Automazione',
        activityType: 'autocare',
        image: 'https://images.unsplash.com/photo-1568605117463-23752c1bd669?auto=format&fit=crop&w=800&q=80',
        problem: 'Segreteria intasata da "è pronta la macchina?".',
        solutions: ['Integrazione gestionale', 'Messaggi step-by-step', 'Foto lavori'],
        economicBenefits: { title: 'Servizio', benefits: ['Cliente tranquillo', 'Meno telefonate'], savings: 'Tempo ufficio' }
    },
    {
        id: 'ATO4',
        name: 'Prenotazione Tagliando Online',
        shortDescription: 'Booking con targa e preventivo immediato',
        icon: '📅',
        category: 'E-commerce',
        activityType: 'autocare',
        image: 'https://images.unsplash.com/photo-1530046339160-711533e94b43?auto=format&fit=crop&w=800&q=80',
        problem: 'Ponti sollevatori vuoti in certi orari e pieni in altri.',
        solutions: ['Agenda officina', 'Prezzi dinamici orari', 'Database scadenze revisione'],
        economicBenefits: { title: 'Saturazione', benefits: ['Officina sempre piena', 'Richiamo clienti attivi'], savings: 'Ore perse' }
    },

    // --- TECH & PHOTO (Fotografi & Informatica) ---
    {
        id: 'PHT2',
        name: 'Galleria Selezione Clienti',
        shortDescription: 'Sito privato per far scegliere le foto agli sposi',
        icon: '🖼️',
        category: 'Digitalizzazione',
        activityType: 'photo',
        image: 'https://images.unsplash.com/photo-1520854221250-8c2787ec3f3e?auto=format&fit=crop&w=800&q=80',
        problem: 'Mesi per avere la selezione foto dagli sposi via email/chiavetta.',
        solutions: ['Interfaccia cuoricini/scarto', 'Commenti puntuali', 'Vendita stampe extra'],
        economicBenefits: { title: 'Upsell', benefits: ['Vendita album extra', 'Chiusura lavoro rapida'], savings: 'Tempo post-vendita' }
    },
    {
        id: 'PHT3',
        name: 'Booking Shooting Online',
        shortDescription: 'Prenotazione sessioni ritratto e famiglia',
        icon: '📸',
        category: 'E-commerce',
        activityType: 'photo',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
        problem: 'Studio vuoto nei giorni feriali.',
        solutions: ['Offerte lampo', 'Mini-sessioni a tema', 'Acconto PayPal'],
        economicBenefits: { title: 'Occupazione', benefits: ['Studio a regime', 'Incasso anticipato'], savings: 'Marketing' }
    },
    {
        id: 'TCH2',
        name: 'Assistenza Remota Immediata',
        shortDescription: 'Ticket prepagati per helpdesk PC/Mac',
        icon: '💻',
        category: 'E-commerce',
        activityType: 'tech',
        image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che chiamano per "una domanda veloce" gratis.',
        solutions: ['Software controllo remoto', 'Pacchetti ore', 'Timer fatturazione'],
        economicBenefits: { title: 'Ricavi', benefits: ['Ogni minuto fatturato', 'Niente più favori'], savings: 'Tempo perso' }
    },
    {
        id: 'TCH3',
        name: 'Cybersecurity Audit Tool',
        shortDescription: 'Report automatico vulnerabilità rete aziendale',
        icon: '🔒',
        category: 'Sicurezza & Cloud',
        activityType: 'tech',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        problem: 'Difficile vendere firewall costosi a piccoli clienti.',
        solutions: ['Scan rete automatico', 'Report "paura" (rossi)', 'Soluzione click'],
        economicBenefits: { title: 'Vendita', benefits: ['Tasso chiusura alto', 'Ricavi ricorrenti sicurezza'], savings: 'Tempo analisi' }
    },

    // --- LAUNDRY (Lavanderie) ---
    {
        id: 'LND2',
        name: 'Ritiro e Consegna a Domicilio',
        shortDescription: 'App tipo Uber per la lavanderia',
        icon: 'elivetruck', // using standard text if unsure or unicode 🚚
        category: 'E-commerce',
        activityType: 'laundry',
        image: 'https://images.unsplash.com/photo-1517677208171-0bc6799a4c6d?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti pigri o senza tempo che accumulano vestiti.',
        solutions: ['Booking ritiro', 'Tracking capi', 'Pagamento in app'],
        economicBenefits: { title: 'Volumi', benefits: ['+40% capi lavorati', 'Cliente alto spendente'], savings: 'Affitto locale centro' }
    },
    {
        id: 'LND3',
        name: 'Armadietto Intelligente H24',
        shortDescription: 'Lascia e ritira i capi quando vuoi',
        icon: '🚪',
        category: 'Automazione',
        activityType: 'laundry',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
        problem: 'Orari di apertura limitati incompatibili con chi lavora.',
        solutions: ['Locker automatico', 'Codice sblocco SMS', 'Notifica pronto'],
        economicBenefits: { title: 'Servizio 24/7', benefits: ['Più clienti serviti', 'Nessun addetto extra'], savings: 'Personale banco' }
    }
];

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_4.map(service => {
        return `  {
    id: '${service.id}',
    name: "${service.name}",
    shortDescription: "${service.shortDescription}",
    icon: '${service.icon === 'elivetruck' ? '🚚' : service.icon}',
    category: '${service.category}',
    activityType: '${service.activityType}',
    image: '${service.image}',
    problem: "${service.problem}",
    solutions: ${JSON.stringify(service.solutions)},
    economicBenefits: ${JSON.stringify(service.economicBenefits)}
  },`;
    }).join('\n');

    const newContent = content.slice(0, closingBracketIndex) +
        "\n  // --- BATCH 4 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 4 services injected successfully.");
}
