const BATCH_4_PART_2 = [
    // --- CONSTRUCTION (More) ---
    {
        id: 'CNS_ADD_1',
        name: 'Gestione Noleggio Attrezzature',
        shortDescription: 'App per prenotare mezzi e ponteggi condivisi',
        icon: '🚜',
        category: 'E-commerce',
        activityType: 'construction',
        image: 'https://images.unsplash.com/photo-1574359418525-41e737190d51?auto=format&fit=crop&w=800&q=80',
        problem: 'Macchinari costosi fermi in un cantiere quando servono in un altro.',
        solutions: ['Calendario disponibilità flotta', 'Prenotazione interna', 'Tracking GPS'],
        economicBenefits: { title: 'Asset', benefits: ['Utilizzo ottimizato', 'Meno noleggi esterni'], savings: 'Cost sharing' }
    },
    {
        id: 'CNS_ADD_2',
        name: 'BIM Viewer Mobile',
        shortDescription: 'Modelli 3D esplorabili su tablet in cantiere',
        icon: '📱',
        category: 'Digitalizzazione',
        activityType: 'construction',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
        problem: 'Errori di costruzione per disegni cartacei vecchi o mal letti.',
        solutions: ['Realtà aumentata sovrapposta', 'Quote clickabili', 'Segnalazione difetti'],
        economicBenefits: { title: 'Qualità', benefits: ['Zero costi rifacimento', 'Precisione assoluta'], savings: 'Materiali sprecati' }
    },

    // --- GARDENING (More) ---
    {
        id: 'GRD_ADD_1',
        name: 'Plant Doctor AI',
        shortDescription: 'Foto alla foglia malata e diagnosi immediata',
        icon: '🌿',
        category: 'Automazione',
        activityType: 'gardening',
        image: 'https://images.unsplash.com/photo-1416879895648-9957d598aaff?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti chiamano disperati per piante che stanno morendo.',
        solutions: ['Riconoscimento malattia ML', 'Video tutorial cura', 'Vendita prodotto cura'],
        economicBenefits: { title: 'Post-vendita', benefits: ['Vendita prodotti +20%', 'Fiducia esperta'], savings: 'Sopralluoghi inutili' }
    },
    {
        id: 'GRD_ADD_2',
        name: 'Balcony Planner',
        shortDescription: 'Configuratore per terrazzi e piccoli spazi',
        icon: '🌻',
        category: 'E-commerce',
        activityType: 'gardening',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti urbani che vorrebbero verde ma non sanno cosa comprare.',
        solutions: ['Kit balcone pronto', 'Scelta piante per esposizione', 'Vasi su misura'],
        economicBenefits: { title: 'Nicchia', benefits: ['Nuovo mercato urbano', 'Kit alto margine'], savings: 'Progettazione' }
    },

    // --- CLEANING (More) ---
    {
        id: 'CLN_ADD_1',
        name: 'Sanificazione Certificata',
        shortDescription: 'Report digitale post-intervento con tamponi',
        icon: '🧪',
        category: 'Sicurezza & Cloud',
        activityType: 'cleaning',
        image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti business che necessitano certificazioni igiene.',
        solutions: ['Log intervento blockchain', 'Esito tampone PDF', 'Bollino qualità QR'],
        economicBenefits: { title: 'Premium', benefits: ['Prezzi più alti', 'Clienti corporate'], savings: 'Responsabilità' }
    },
    {
        id: 'CLN_ADD_2',
        name: 'Laundry & Ironing Service',
        shortDescription: 'Add-on stiro camicie a domicilio durante le pulizie',
        icon: '👔',
        category: 'E-commerce',
        activityType: 'cleaning',
        image: 'https://images.unsplash.com/photo-1582735689369-c669c64658cc?auto=format&fit=crop&w=800&q=80',
        problem: 'Margini bassi sulla sola pulizia oraria.',
        solutions: ['Servizio extra a pacchetto', 'Ritiro camicie', 'Stiratura in loco'],
        economicBenefits: { title: 'Margine', benefits: ['Upsell facile', 'Scontrino +30%'], savings: 'Marketing separato' }
    },

    // --- AUTOCARE (More) ---
    {
        id: 'ATO_ADD_1',
        name: 'Digital Service Book',
        shortDescription: 'Libretto manutenzione digitale su Blockchain',
        icon: '📒',
        category: 'Sicurezza & Cloud',
        activityType: 'autocare',
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
        problem: 'Perdita valore auto usata per tagliandi non certificabili.',
        solutions: ['Registro immutabile lavori', 'Valore garantito', 'Trasferibile acquirente'],
        economicBenefits: { title: 'Valore', benefits: ['Fidelizzazione officina', 'Auto vale di più'], savings: 'Contestazioni' }
    },
    {
        id: 'ATO_ADD_2',
        name: 'SOS Soccorso Stradale App',
        shortDescription: 'Geolocalizzazione carroattrezzi in un tap',
        icon: '🆘',
        category: 'Digitalizzazione',
        activityType: 'autocare',
        image: 'https://images.unsplash.com/photo-1562519819-016930ada31b?auto=format&fit=crop&w=800&q=80',
        problem: 'Panico durante un guasto e attese infinite al call center.',
        solutions: ['Tracking arrivo carroattrezzi', 'Chat operatore', 'Preventivo chiaro'],
        economicBenefits: { title: 'Servizio', benefits: ['Soccorso premium', 'Dati cliente acquisiti'], savings: 'Gestione telefonica' }
    },

    // --- TECH & PHOTO (More) ---
    {
        id: 'PHT_ADD_1',
        name: 'Print on Demand Shop',
        shortDescription: 'Vendi quadri e gadget con le tue foto online',
        icon: '🖼️',
        category: 'E-commerce',
        activityType: 'photo',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
        problem: 'Foto bellissime che rimangono chiuse negli hard disk.',
        solutions: ['Negozio automatico', 'Laboratorio stampa connesso', 'Spedizione diretta'],
        economicBenefits: { title: 'Passivo', benefits: ['Ricavi ricorrenti', 'Zero magazzino'], savings: 'Tempo gestione ordini' }
    },
    {
        id: 'TCH_ADD_1',
        name: 'Refurbished Tech Marketplace',
        shortDescription: 'Vendi usati garantiti e ricondizionati',
        icon: '♻️',
        category: 'E-commerce',
        activityType: 'tech',
        image: 'https://images.unsplash.com/photo-1531297461136-82lw9b291a1d?auto=format&fit=crop&w=800&q=80', // invalid url fixed logic? 82... is risky. Let's use standard tech image
        problem: 'Clienti vogliono risparmiare ma temono fregature sull\'usato.', // Standard image below
        solutions: ['Certificazione 50 punti', 'Garanzia 12 mesi', 'Ritocco estetico'],
        economicBenefits: { title: 'Margine', benefits: ['Alto margine su usato', 'Sostenibilità'], savings: 'RAEE' }
    },

    // --- LAUNDRY (More) ---
    {
        id: 'LND_ADD_1',
        name: 'Stain Removal Guide AI',
        shortDescription: 'Foto alla macchia e consiglio su come trattarla',
        icon: '🧼',
        category: 'Marketing Digitale',
        activityType: 'laundry',
        image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb8f?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti rovinano capi provando a smacchiare da soli.',
        solutions: ['Consulenza esperta', 'Vendita smacchiatore giusto', 'Prenotazione lavaggio'],
        economicBenefits: { title: 'Expertise', benefits: ['Fiducia professionalità', 'Acquisto prodotti'], savings: 'Capi rovinati' }
    }
];

// Fix image for Tech Refurbished just in case
BATCH_4_PART_2.find(s => s.id === 'TCH_ADD_1').image = 'https://images.unsplash.com/photo-1597872250977-08a65bb7ee7d?auto=format&fit=crop&w=800&q=80';

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_4_PART_2.map(service => {
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
        "\n  // --- BATCH 4 PART 2 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 4 Part 2 services injected successfully.");
}
