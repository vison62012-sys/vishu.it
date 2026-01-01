const BATCH_3 = [
    // --- MEDICAL & HEALTH ---
    {
        id: 'MED2',
        name: 'Teleconsulto Specialistico HD',
        shortDescription: 'Visite a distanza con condivisione referti sicura',
        icon: '🩺',
        category: 'Digitalizzazione',
        activityType: 'medical',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        problem: 'Pazienti che annullano per difficoltà a raggiungere lo studio.',
        solutions: ['Video encrypted', 'Pagamento anticipato', 'Ricetta dematerializzata'],
        economicBenefits: { title: 'Efficienza', benefits: ['Zero no-show', 'Pazienti fuori regione'], savings: 'Spese studio' }
    },
    {
        id: 'MED3',
        name: 'Prenotazione Online 24/7',
        shortDescription: 'Agenda medica aperta anche nel weekend',
        icon: '📅',
        category: 'Automazione',
        activityType: 'medical',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
        problem: 'Segreteria intasata e pazienti che non riescono a prenotare.',
        solutions: ['Slot liberi visibili', 'SMS promemoria', 'Lista d\'attesa auto'],
        economicBenefits: { title: 'Segreteria', benefits: ['-70% chiamate', 'Agenda piena'], savings: 'Tempo segretaria' }
    },
    {
        id: 'MED4',
        name: 'Cartella Clinica Cloud Paziente',
        shortDescription: 'Accesso sicuro alla propria storia clinica',
        icon: '📁',
        category: 'Sicurezza & Cloud',
        activityType: 'medical',
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
        problem: 'Pazienti che perdono referti cartacei e chiedono copie.',
        solutions: ['Portale paziente', 'Storico esami', 'Conformità GDPR'],
        economicBenefits: { title: 'Servizio', benefits: ['Paziente fidelizzato', 'Privacy compliant'], savings: 'Carta e stampa' }
    },
    {
        id: 'MED5',
        name: 'Reputation Management Dottori',
        shortDescription: 'Gestione recensioni su MioDottore e Google',
        icon: '⭐',
        category: 'Marketing Digitale',
        activityType: 'medical',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
        problem: 'Una recensione negativa non gestita allontana nuovi pazienti.',
        solutions: ['Richiesta recensione post-visita', 'Risposte professionali', 'Analisi feedback'],
        economicBenefits: { title: 'Attrazione', benefits: ['+40% nuovi pazienti', 'Immagine eccellente'], savings: 'Pubblicità' }
    },

    // --- LEGAL & FINANCE ---
    {
        id: 'LGL2',
        name: 'Client Portal Sicuro',
        shortDescription: 'Scambio documenti riservati senza email',
        icon: '⚖️',
        category: 'Sicurezza & Cloud',
        activityType: 'legal',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
        problem: 'Mandare atti sensibili via email è rischioso e poco professionale.',
        solutions: ['Area riservata criptata', 'Firma digitale remota', 'Notifica lettura'],
        economicBenefits: { title: 'Sicurezza', benefits: ['Zero data breach', 'Cliente rassicurato'], savings: 'Raccomandate' }
    },
    {
        id: 'LGL3',
        name: 'Automazione Contratti Standard',
        shortDescription: 'Generazione automatica documenti ripetitivi',
        icon: '📑',
        category: 'Automazione',
        activityType: 'legal',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        problem: 'Ore perse a fare copia-incolla per contratti standard.',
        solutions: ['Form online cliente', 'Autocompilazione', 'Revisione rapida'],
        economicBenefits: { title: 'Produttività', benefits: ['-80% tempo redazione', 'Zero errori refusi'], savings: 'Tempo avvocato' }
    },
    {
        id: 'FIN2',
        name: 'Dashboard Investimenti Cliente',
        shortDescription: 'Vista aggregata patrimonio aggiornata daily',
        icon: '📈',
        category: 'E-commerce',
        activityType: 'finance',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti ansiosi che chiamano per sapere "come va la borsa".',
        solutions: ['App mobile', 'Report settimanale', 'Chat consulente'],
        economicBenefits: { title: 'Fiducia', benefits: ['Cliente informato', 'Meno chiamate ansia'], savings: 'Gestione emotiva' }
    },
    {
        id: 'FIN3',
        name: 'Onboarding Digitale Cliente',
        shortDescription: 'Aprire conti e pratiche interamente online',
        icon: '🖊️',
        category: 'Digitalizzazione',
        activityType: 'finance',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
        problem: 'Burocrazia cartacea che rallenta l\'acquisizione nuovi clienti.',
        solutions: ['KYC digitale', 'Firma remota', 'Archiviazione auto'],
        economicBenefits: { title: 'Acquisizione', benefits: ['Tasso chiusura +30%', 'Processo in minuti'], savings: 'Carta e corrieri' }
    },

    // --- REAL ESTATE ---
    {
        id: 'RST_AG2',
        name: 'Virtual Tour 360° Immobiliare',
        shortDescription: 'Visita la casa senza muoverti dall\'ufficio',
        icon: '🏠',
        category: 'Digitalizzazione',
        activityType: 'realestate',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
        problem: 'Perdita di tempo in visite a vuoto con clienti non interessati.',
        solutions: ['Fotocamera 360', 'Visita guidata remota', 'Planimetria interattiva'],
        economicBenefits: { title: 'Qualificazione', benefits: ['Solo visite interessate', 'Vendita più veloce'], savings: 'Benzina e tempo' }
    },
    {
        id: 'RST_AG3',
        name: 'Valutazione Immobile AI',
        shortDescription: 'Algoritmo stima prezzo basato su comparabili',
        icon: '🏙️',
        category: 'Analisi Dati',
        activityType: 'realestate',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
        problem: 'Difficoltà a convincere il venditore del prezzo di mercato corretto.',
        solutions: ['Report big data', 'Trend zona', 'Prezzo al mq reale'],
        economicBenefits: { title: 'Acquisizione', benefits: ['Mandato a prezzo giusto', 'Vendita rapida'], savings: 'Immobili invenduti' }
    },
    {
        id: 'RST_AG4',
        name: 'Portale Proprietari Affitti',
        shortDescription: 'Gestione incassi, manutenzioni e contratti online',
        icon: '🔑',
        category: 'Automazione',
        activityType: 'realestate',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
        problem: 'Gestione manuale affitti, scadenze e solleciti pagamenti.',
        solutions: ['Incasso automatico', 'Ticket guasti inquilino', 'Rinnovi auto'],
        economicBenefits: { title: 'Management', benefits: ['Fee gestione ricorrenti', 'Proprietari felici'], savings: 'Tempo amministrazione' }
    },

    // --- CONSULTING & COWORKING ---
    {
        id: 'CNS2',
        name: 'Prenotazione Sale Riunioni',
        shortDescription: 'Booking online sale e scrivanie per coworker',
        icon: '📅',
        category: 'E-commerce',
        activityType: 'coworking',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        problem: 'Conflitti su uso sale riunioni e gestione accessi manuale.',
        solutions: ['Calendario condiviso', 'Crediti prepagati', 'Sblocco porta app'],
        economicBenefits: { title: 'Occupazione', benefits: ['Sale sempre vendute', 'Upsell servizi'], savings: 'Receptionist' }
    },
    {
        id: 'CNS3',
        name: 'Networking Community App',
        shortDescription: 'LinkedIn privato per i membri del coworking',
        icon: '🤝',
        category: 'Marketing Digitale',
        activityType: 'coworking',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
        problem: 'Turnover alto perché i membri non legano tra loro.',
        solutions: ['Bacheca opportunità', 'Eventi aperti', 'Chat interna'],
        economicBenefits: { title: 'Retention', benefits: ['Community forte', 'Meno disdette'], savings: 'Acquisizione nuovi' }
    },
    {
        id: 'CNS4',
        name: 'Webinar & Corsi Platform',
        shortDescription: 'Vendere consulenza e formazione online',
        icon: '🎓',
        category: 'E-commerce',
        activityType: 'consulting',
        image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80',
        problem: 'Vendere solo tempo x denaro limita il fatturato del consulente.',
        solutions: ['Area corsi registrati', 'Pagamento Stripe', 'Rilascio attestati'],
        economicBenefits: { title: 'Scalabilità', benefits: ['Ricavi passivi', 'Authority settore'], savings: 'Tempo ripetizione' }
    }
];

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_3.map(service => {
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
        "\n  // --- BATCH 3 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 3 services injected successfully.");
}
