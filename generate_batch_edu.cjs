const BATCH_EDU = [
    // --- EDUCATION ---
    {
        id: 'EDU2',
        name: 'Tutor Finder AI',
        shortDescription: 'Trova il prof perfetto per recupero materie',
        icon: '👨‍🏫',
        category: 'Digitalizzazione',
        activityType: 'education',
        image: 'https://images.unsplash.com/photo-1544531696-6086f4a8600d?auto=format&fit=crop&w=800&q=80',
        problem: 'Genitori disperati per debiti scolastici figli.',
        solutions: ['Matching materia/voto', 'Lezioni online/live', 'Pagamento tracciato'],
        economicBenefits: { title: 'Successo', benefits: ['Miglioramento voti 100%', 'Zero perdite tempo'], savings: 'Ripetizioni nero' }
    },
    {
        id: 'EDU3',
        name: 'Virtual Open Day',
        shortDescription: 'Visita la scuola e incontra i prof da casa',
        icon: '🏫',
        category: 'Marketing Digitale',
        activityType: 'education',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        problem: 'Genitori che lavorano e non possono andare agli open day.',
        solutions: ['Tour 360', 'Webinar Q&A', 'Prenotazione colloquio'],
        economicBenefits: { title: 'Iscrizioni', benefits: ['+20% iscritti', 'Immagine moderna'], savings: 'Eventi fisici' }
    },
    {
        id: 'EDU4',
        name: 'Registro Elettronico Plus',
        shortDescription: 'Notifiche in tempo reale assenze e voti',
        icon: '📱',
        category: 'Sicurezza & Cloud',
        activityType: 'education',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
        problem: 'Genitori all\'oscuro del rendimento fino alla pagella.',
        solutions: ['App genitore', 'Giustificazione online', 'Chat docente'],
        economicBenefits: { title: 'Relazione', benefits: ['Famiglia coinvolta', 'Meno dispersione'], savings: 'Segreteria' }
    },
    {
        id: 'EDU5',
        name: 'e-Learning Platform',
        shortDescription: 'Corsi integrativi e recupero anni',
        icon: '💻',
        category: 'E-commerce',
        activityType: 'education',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
        problem: 'Studenti lavoratori o atleti che non possono frequentare.',
        solutions: ['Lezioni registrate', 'Esami online', 'Tutor dedicato'],
        economicBenefits: { title: 'Inclusione', benefits: ['Nuovi iscritti', 'Flessibilità totale'], savings: 'Aule fisiche' }
    }
];

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_EDU.map(service => {
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
        "\n  // --- BATCH EDU GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch Education services injected successfully.");
}
