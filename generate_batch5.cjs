const BATCH_5 = [
    // --- WELLNESS (Target: 9 more) ---
    {
        id: 'WEL2',
        name: 'Booking Massaggi Online',
        shortDescription: 'Agenda trattamenti con acconto per evitare no-show',
        icon: '💆',
        category: 'E-commerce',
        activityType: 'wellness',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che prenotano e non si presentano.',
        solutions: ['Prenotazione 24/7', 'Acconto PayPal', 'Reminder SMS'],
        economicBenefits: { title: 'Efficienza', benefits: ['Zero buchi agenda', 'Incasso garantito'], savings: 'Receptionist' }
    },
    {
        id: 'WEL3',
        name: 'Gift Card Digitali',
        shortDescription: 'Regali last minute inviati via email',
        icon: '🎁',
        category: 'E-commerce',
        activityType: 'wellness',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
        problem: 'Persi clienti durante Natale/feste perché chiuso o lontano.',
        solutions: ['Shop 24h', 'Invio programmato', 'Grafica personalizzabile'],
        economicBenefits: { title: 'Cashflow', benefits: ['Incasso anticipato', '+20% fatturato feste'], savings: 'Stampa card' }
    },
    {
        id: 'WEL4',
        name: 'Consulenza Skin-Care AI',
        shortDescription: 'Analisi pelle con selfie e prodotti consigliati',
        icon: '🧴',
        category: 'Automazione',
        activityType: 'wellness',
        image: 'https://images.unsplash.com/photo-1556228552-523de502942e?auto=format&fit=crop&w=800&q=80',
        problem: 'Difficile vendere creme costose senza prova.',
        solutions: ['Scan viso AI', 'Report problemi pelle', 'Carrello prodotti'],
        economicBenefits: { title: 'Vendita Prodotti', benefits: ['+50% vendita retail', 'Fiducia scientifica'], savings: 'Tempo consulenza' }
    },
    {
        id: 'WEL5',
        name: 'Membership VIP Club',
        shortDescription: 'Abbonamento mensile per trattamenti ricorrenti',
        icon: '👑',
        category: 'Marketing Digitale',
        activityType: 'wellness',
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
        problem: 'Entrate incostanti nei mesi estivi/invernali.',
        solutions: ['Addebito ricorrente', 'Sconti esclusivi', 'Accesso prioritario'],
        economicBenefits: { title: 'Ricavi', benefits: ['MRR stabile', 'Cliente che non cambia'], savings: 'Acquisizione' }
    },

    // --- FITNESS (Palestre & PT) ---
    {
        id: 'FIT2',
        name: 'App Allenamento Ibrido',
        shortDescription: 'Schede digitali per allenarsi in palestra e a casa',
        icon: '🏋️',
        category: 'Digitalizzazione',
        activityType: 'fitness',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che mollano perché non possono venire sempre.',
        solutions: ['Video esercizi', 'Chat col coach', 'Tracking progressi'],
        economicBenefits: { title: 'Retention', benefits: ['Tasso abbandono -40%', 'Abbonamento "Always-On"'], savings: 'Spazio sala' }
    },
    {
        id: 'FIT3',
        name: 'Accesso Tornello Bluetooth',
        shortDescription: 'Entra con lo smartphone senza tessera',
        icon: '🚪',
        category: 'Automazione',
        activityType: 'fitness',
        image: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=800&q=80',
        problem: 'Code in reception per badge dimenticati o smarriti.',
        solutions: ['NFC/BLE Smartphone', 'Controllo scadenza abbonamento', 'Accesso 24h'],
        economicBenefits: { title: 'Accessi', benefits: ['Ingresso fluido', 'Meno staff reception'], savings: 'Costo badge' }
    },
    {
        id: 'FIT4',
        name: 'Booking Corsi & WOD',
        shortDescription: 'Prenotazione posto a lezione per evitare sovraffollamento',
        icon: '📅',
        category: 'E-commerce',
        activityType: 'fitness',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80',
        problem: 'Classi troppo piene o vuote senza preavviso.',
        solutions: ['Lista d\'attesa', 'Penale no-show', 'Notifica posto libero'],
        economicBenefits: { title: 'Saturazione', benefits: ['Classi ottimizzate', 'Clienti felici'], savings: 'Istruttori a vuoto' }
    },

    // --- BARBER (Barbieri) ---
    {
        id: 'BRB2',
        name: 'Prenotazione Barbiere App',
        shortDescription: 'Scegli il tuo barbiere e l\'orario preciso',
        icon: '💈',
        category: 'Digitalizzazione',
        activityType: 'barber',
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
        problem: 'Sabato mattina infernale con ore di attesa e clienti nervosi.',
        solutions: ['Agenda digitale', 'Promemoria SMS', 'Selezione servizio'],
        economicBenefits: { title: 'Produttività', benefits: ['Zero tempi morti', '+20% tagli al giorno'], savings: 'Tempo telefono' }
    },
    {
        id: 'BRB3',
        name: 'Prodotti Barba E-commerce',
        shortDescription: 'Vendi le cere e gli oli che usi in negozio',
        icon: '🧔',
        category: 'E-commerce',
        activityType: 'barber',
        image: 'https://images.unsplash.com/photo-1622287162716-f311baa3129e?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti comprano su Amazon i prodotti consigliati.',
        solutions: ['Shop integrato app', 'Ritiro in negozio', 'Abbonamento lame/olio'],
        economicBenefits: { title: 'Retail', benefits: ['+30% fatturato', 'Margine 100% su prodotti'], savings: 'Affitto' }
    },

    // --- TATTOO (Tatuatori) ---
    {
        id: 'TAT2',
        name: 'Consenso Informato Digitale',
        shortDescription: 'Moduli legali su tablet con firma sicura',
        icon: '📝',
        category: 'Sicurezza & Cloud',
        activityType: 'tattoo',
        image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80',
        problem: 'Archivi cartacei pieni di fogli privacy e rischi legali.',
        solutions: ['Archiviazione cloud', 'Data certa', 'Foto documento'],
        economicBenefits: { title: 'Sicurezza', benefits: ['Zero rischi cause', 'Space saving'], savings: 'Carta/Archivio' }
    },
    {
        id: 'TAT3',
        name: 'Booking Flash Day',
        shortDescription: 'Prenota sketch disponibili in tempo reale',
        icon: '⚡',
        category: 'E-commerce',
        activityType: 'tattoo',
        image: 'https://images.unsplash.com/photo-1598371839696-5c5bbce6509e?auto=format&fit=crop&w=800&q=80',
        problem: 'Flash day caotici con fila fuori e gente che se ne va.',
        solutions: ['Vetrina disegni', 'Caparra online', 'Slot orario'],
        economicBenefits: { title: 'Incasso', benefits: ['Sold out in minuti', 'Nessuna perdita tempo'], savings: 'Disegni invenduti' }
    },

    // --- PETS (Animali) ---
    {
        id: 'PET2',
        name: 'Cartella Clinica Animale',
        shortDescription: 'Libretto vaccini e storico visite app',
        icon: '🐾',
        category: 'Sicurezza & Cloud',
        activityType: 'pets',
        image: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?auto=format&fit=crop&w=800&q=80',
        problem: 'Proprietari che non sanno quando scade il vaccino.',
        solutions: ['Reminder automatico', 'Storico interventi', 'Passaporto digitale'],
        economicBenefits: { title: 'Ricorrenza', benefits: ['Clienti puntuali', 'Vendita antiparassitari'], savings: 'Segreteria' }
    },
    {
        id: 'PET3',
        name: 'Pet Taxi Booking',
        shortDescription: 'Prenota il trasporto per toelettatura/veterinario',
        icon: '🚕',
        category: 'E-commerce',
        activityType: 'pets',
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
        problem: 'Anziani o lavoratori che non riescono a portare il cane.',
        solutions: ['Ritiro a domicilio', 'Tracking viaggio', 'Video durante servizio'],
        economicBenefits: { title: 'Servizio', benefits: ['Nuovi clienti senza auto', 'Premium price'], savings: 'Slot buchi' }
    }
];

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_5.map(service => {
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
        "\n  // --- BATCH 5 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 5 services injected successfully.");
}
