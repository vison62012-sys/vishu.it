const BATCH_SUPPLEMENTARY = [
    // --- TRAVEL (Adding more) ---
    {
        id: 'TRV2',
        name: 'Viaggi di Nozze Virtual Planner',
        shortDescription: 'Configura la luna di miele da casa',
        icon: '💍',
        category: 'E-commerce',
        activityType: 'travel',
        image: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=800&q=80',
        problem: 'Sposi che non hanno tempo di passare ore in agenzia.',
        solutions: ['Preventivatore live', 'Video destinazioni', 'Lista nozze online'],
        economicBenefits: { title: 'Ticket Alto', benefits: ['Viaggi >5k€', 'Fidelizzazione'], savings: 'Tempo agenzia' }
    },
    {
        id: 'TRV3',
        name: 'Travel App "Assistant"',
        shortDescription: 'Tutti i documenti e biglietti in un click offline',
        icon: '✈️',
        category: 'Digitalizzazione',
        activityType: 'travel',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che perdono fogli o non trovano voucher in aeroporto.',
        solutions: ['Wallet digitale', 'Notifiche ritardi', 'Chat emergenza 24/7'],
        economicBenefits: { title: 'Servizio', benefits: ['Reputazione top', 'Assistenza scalabile'], savings: 'Telefonate panico' }
    },
    {
        id: 'TRV4',
        name: 'Last Minute Alert',
        shortDescription: 'Notifiche offerte flash solo per iscritti',
        icon: '⚡',
        category: 'Marketing Digitale',
        activityType: 'travel',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        problem: 'Pacchetti invenduti che scadono.',
        solutions: ['Canale Telegram/WhatsApp', 'Acquisto impulsivo', 'Sconto aggressivo'],
        economicBenefits: { title: 'Saturazione', benefits: ['Zero invenduto', 'Cash immediato'], savings: 'Penali operatori' }
    },

    // --- HOME (Casalinghi & Arredo) ---
    {
        id: 'HOM2',
        name: 'Arreda con AI',
        shortDescription: 'Posiziona i mobili in stanza con la fotocamera',
        icon: '🛋️',
        category: 'Automazione',
        activityType: 'home',
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80',
        problem: 'Paura di comprare un divano che "non ci sta".',
        solutions: ['Realtà aumentata', 'Misurazione automatica', 'Cambio colori'],
        economicBenefits: { title: 'Resi', benefits: ['Resi azzerati', 'Decisione rapida'], savings: 'Trasporti inutili' }
    },
    {
        id: 'HOM3',
        name: 'Lista Nozze/Regalo Digitale',
        shortDescription: 'Gli invitati mettono quote su regali costosi',
        icon: '🎁',
        category: 'E-commerce',
        activityType: 'home',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
        problem: 'Ricevere 3 tostapane e zero servizi piatti belli.',
        solutions: ['Crowdfunding regalo', 'Ringraziamenti auto', 'Consegna unica'],
        economicBenefits: { title: 'Basket', benefits: ['Vendita prodotti alto valore', 'Zero doppioni'], savings: 'Gestione cambi' }
    }
];

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_SUPPLEMENTARY.map(service => {
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
        "\n  // --- BATCH SUPPLEMENTARY GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch Supplementary services injected successfully.");
}
