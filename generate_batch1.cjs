const BATCH_1 = [
    // --- BEACH & CHALET (Target: 9 more) ---
    {
        id: 'BCH2',
        name: 'Menu Digitale Sotto l\'Ombrellone',
        shortDescription: 'Ordini direttamente dal lettino via QR Code',
        icon: '🍹',
        category: 'Digitalizzazione',
        activityType: 'beach',
        image: 'https://images.unsplash.com/photo-1575424909138-46b0530e7958?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che devono alzarsi per ordinare al bar, creando file e assembramenti.',
        solutions: ['QR Code su ogni ombrellone', 'Pagamento in-app', 'Consegna al posto'],
        economicBenefits: { title: 'Scontrino Medio', benefits: ['+20% ordini bar', 'Meno personale in giro'], savings: '+15% fatturato bar' }
    },
    {
        id: 'BCH3',
        name: 'Booking Ombrelloni Online',
        shortDescription: 'Mappa interattiva per scegliere e prenotare il posto spiaggia',
        icon: '🏖️',
        category: 'E-commerce',
        activityType: 'beach',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        problem: 'Gestione telefonica delle prenotazioni e overbooking nei weekend.',
        solutions: ['Mappa visuale spiaggia', 'Calendario disponibilità', 'Pagamento anticipato'],
        economicBenefits: { title: 'Cashflow', benefits: ['Incasso anticipato', 'Zero no-show'], savings: '-90% tempo telefono' }
    },
    {
        id: 'BCH4',
        name: 'Wi-Fi Marketing Spiaggia',
        shortDescription: 'Accesso Wi-Fi gratuito in cambio di lead generation',
        icon: '📶',
        category: 'Marketing Digitale',
        activityType: 'beach',
        image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=800&q=80',
        problem: 'Mancanza di contatti diretti dei clienti giornalieri.',
        solutions: ['Captive portal login', 'Raccolta email/telefono', 'Sondaggi soddisfazione'],
        economicBenefits: { title: 'Database', benefits: ['Migliaia di contatti profilati', 'Retargeting facile'], savings: 'Costo lead ~0€' }
    },
    {
        id: 'BCH5',
        name: 'Eventi Beach Party Alert',
        shortDescription: 'Sistema di notifiche per aperitivi e serate',
        icon: '🎉',
        category: 'Marketing Digitale',
        activityType: 'beach',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
        problem: 'Difficoltà a riempire il locale per eventi infrasettimanali.',
        solutions: ['Lista broadcast WhatsApp', 'Prenotazione tavoli VIP', 'Promozioni flash'],
        economicBenefits: { title: 'Pienone', benefits: ['Sold-out rapidi', 'Fidelizzazione giovani'], savings: '-50% budget ads' }
    },
    {
        id: 'BCH6',
        name: 'Smart Access Control',
        shortDescription: 'Braccialetti o App per accesso docce e servizi',
        icon: '🚿',
        category: 'Automazione',
        activityType: 'beach',
        image: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?auto=format&fit=crop&w=800&q=80',
        problem: 'Uso abusivo servizi e gettoni fisici scomodi.',
        solutions: ['Credito su braccialetto', 'Controllo accessi area', 'Ricarica online'],
        economicBenefits: { title: 'Controllo', benefits: ['Zero abusi', 'Incasso servizi extra'], savings: '+30% ricavi servizi' }
    },
    {
        id: 'BCH7',
        name: 'Kids Club Registration',
        shortDescription: 'Iscrizione digitale e check-in area bimbi sicura',
        icon: '🧸',
        category: 'Sicurezza & Cloud',
        activityType: 'beach',
        image: 'https://images.unsplash.com/photo-1526848123284-e431dfc95781?auto=format&fit=crop&w=800&q=80',
        problem: 'Moduli cartacei e responsabilità legale per animazione.',
        solutions: ['Scheda digitale genitore', 'Braccialetto abbinato', 'Log entrata/uscita'],
        economicBenefits: { title: 'Sicurezza', benefits: ['Tutela legale totale', 'Fiducia famiglie'], savings: 'Zero rischi' }
    },
    {
        id: 'BCH8',
        name: 'Weather Guarantee Info',
        shortDescription: 'Widget meteo e policy rimborso automatizzata',
        icon: '🌦️',
        category: 'Digitalizzazione',
        activityType: 'beach',
        image: 'https://images.unsplash.com/photo-1514632595-4944383f27f4?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che chiamano per chiedere se piove o chiedere rimborsi.',
        solutions: ['Webcam live streaming', 'Status apertura real-time', 'Voucher automatico pioggia'],
        economicBenefits: { title: 'Servizio Clienti', benefits: ['Meno chiamate', 'Clienti rassicurati'], savings: 'Tempo staff' }
    },
    {
        id: 'BCH9',
        name: 'Abbonamenti Stagionali Digitali',
        shortDescription: 'Gestione rateizzata e rinnovo automatico abbonati',
        icon: '💳',
        category: 'E-commerce',
        activityType: 'beach',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
        problem: 'Rincorrere i pagamenti dei clienti stagionali.',
        solutions: ['Addebito ricorrente carta', 'Portale gestione cliente', 'Upgrade servizi'],
        economicBenefits: { title: 'Flusso Cassa', benefits: ['Pagamenti puntuali', 'Meno insoluti'], savings: '+100% puntualità' }
    },
    {
        id: 'BCH10',
        name: 'Virtual Tour Stabilimento',
        shortDescription: 'Visita 3D per vendere stagionali in inverno',
        icon: '👓',
        category: 'Marketing Digitale',
        activityType: 'beach',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b271?auto=format&fit=crop&w=800&q=80',
        problem: 'Difficoltà a vendere abbonamenti a distanza fuori stagione.',
        solutions: ['Tour 360°', 'Foto drone', 'Punto di vista ombrellone'],
        economicBenefits: { title: 'Vendite Anticipate', benefits: ['Vendita tutto l\'anno', 'Clienti esteri'], savings: '+20% vendite invernali' }
    },

    // --- RESTAURANT (Target: 9 more) ---
    {
        id: 'RST2',
        name: 'Food Cost Calculator Live',
        shortDescription: 'Analisi margini piatti in tempo reale su variazione materie prime',
        icon: '📉',
        category: 'Analisi Dati',
        activityType: 'restaurant',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80',
        problem: 'Variazione prezzi fornitori che erode i margini senza accorgersene.',
        solutions: ['Integrazione listini fornitori', 'Alert margine basso', 'Suggerimento prezzo'],
        economicBenefits: { title: 'Marginalità', benefits: ['Controllo costi', 'Prezzi sempre corretti'], savings: '+5-8% utile netto' }
    },
    {
        id: 'RST3',
        name: 'Cameriere Digitale (Palmari)',
        shortDescription: 'Sistema presa comanda mobile integrato in cucina',
        icon: '📱',
        category: 'Automazione',
        activityType: 'restaurant',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
        problem: 'Errori di comanda ("senza cipolla") e tempi lunghi di comunicazione.',
        solutions: ['Palmari Android/iOS', 'Stampa diretta reparti', 'Gestione varianti'],
        economicBenefits: { title: 'Velocità', benefits: ['Rotazione tavoli più alta', 'Zero piatti sbagliati'], savings: '+15 minuti/tavolo' }
    },
    {
        id: 'RST4',
        name: 'Reputation Manager AI',
        shortDescription: 'Risposta automatica e analisi sentiment recensioni',
        icon: '⭐',
        category: 'Marketing Digitale',
        activityType: 'restaurant',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        problem: 'Recensioni negative ignorate o risposte in ritardo che danneggiano l\'immagine.',
        solutions: ['Aggregatore TripAdvisor/Google', 'Risposte AI approvabili', 'Alert criticità'],
        economicBenefits: { title: 'Brand', benefits: ['Miglior ranking', 'Più clienti turisti'], savings: 'Tempo titolare' }
    },
    {
        id: 'RST5',
        name: 'Gestione Turni Staff Smart',
        shortDescription: 'App per scambi turno e piano ferie dipendenti',
        icon: '📅',
        category: 'Digitalizzazione',
        activityType: 'restaurant',
        image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80',
        problem: 'Caos su WhatsApp per cambi turno e ferie, buchi in servizio.',
        solutions: ['App dipendenti', 'Richieste ferie digitali', 'Planning automatico'],
        economicBenefits: { title: 'Organizzazione', benefits: ['Staff più felice', 'Copertura garantita'], savings: '-3 ore/sett gestione' }
    },
    {
        id: 'RST6',
        name: 'Impiattamento & Instagram Kit',
        shortDescription: 'Consulenza e spot luci per foto piatti dei clienti',
        icon: '📸',
        category: 'Marketing Digitale',
        activityType: 'restaurant',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
        problem: 'Piatti buoni ma brutti in foto, poca visibilità organica social.',
        solutions: ['Luci fotografiche tavoli', 'Training impiattamento', 'Contest hashtag'],
        economicBenefits: { title: 'Visibilità Gratis', benefits: ['Migliaia di visualizzazioni', 'User Generated Content'], savings: 'Budget influencer' }
    },
    {
        id: 'RST7',
        name: 'Cantina Vini Digitale',
        shortDescription: 'Tablet sommelier con abbinamenti e giacenze',
        icon: '🍷',
        category: 'E-commerce',
        activityType: 'restaurant',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
        problem: 'Carta vini cartacea sempre non aggiornata, camerieri che non sanno consigliare.',
        solutions: ['Tablet interattivo', 'Filtri per prezzo/regione', 'Abbinamento automatico'],
        economicBenefits: { title: 'Upselling', benefits: ['Vendita vini più costosi', 'Gestione magazzino'], savings: '+20% vendita vino' }
    },
    {
        id: 'RST8',
        name: 'Delivery Proprietario',
        shortDescription: 'Sistema di consegna diretta per evitare commissioni app',
        icon: '🛵',
        category: 'E-commerce',
        activityType: 'restaurant',
        image: 'https://images.unsplash.com/photo-1513639776629-7b611594e29b?auto=format&fit=crop&w=800&q=80',
        problem: 'Commissioni al 30-35% sulle piattaforme di delivery che azzerano l\'utile.',
        solutions: ['App ordine proprietaria', 'Gestione rider interni', 'Marketing diretto'],
        economicBenefits: { title: 'Margine', benefits: ['Recupero 30% commissione', 'Possesso dati cliente'], savings: 'Migliaia di euro/mese' }
    },
    {
        id: 'RST9',
        name: 'Allergeni & HACCP Cloud',
        shortDescription: 'Registro digitale sempre aggiornato e compliant',
        icon: '📋',
        category: 'Sicurezza & Cloud',
        activityType: 'restaurant',
        image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a4d50?auto=format&fit=crop&w=800&q=80',
        problem: 'Rischi legali enormi per allergeni non segnalati e registri incompleti.',
        solutions: ['Menu digitale allergeni', 'Log temperature auto', 'Stampa etichette'],
        economicBenefits: { title: 'Tranquillità', benefits: ['Zero multe', 'Sicurezza clienti'], savings: 'Rischio chiusura azzerato' }
    },
    {
        id: 'RST10',
        name: 'Fidelity Card Ristorante',
        shortDescription: 'Programma a punti digitale per riempire le serate deboli',
        icon: '💳',
        category: 'Marketing Digitale',
        activityType: 'restaurant',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti occasionali che non tornano regolarmente.',
        solutions: ['Punti per ogni cena', 'Premi per compleanni', 'Offerte martedì/mercoledì'],
        economicBenefits: { title: 'Ricorrenza', benefits: ['+30% frequenza ritorno', 'Clienti alto-spendenti'], savings: 'Costo acquisizione' }
    },

    // --- HOTEL & B&B (Target: 9 more) ---
    {
        id: 'HTL2',
        name: 'Self Check-in Kiosk / App',
        shortDescription: 'Arrivo a qualsiasi ora senza personale notturno',
        icon: '🔑',
        category: 'Automazione',
        activityType: 'hotel',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        problem: 'Costi alti per portiere notturno o clienti che arrivano tardi.',
        solutions: ['Invio chiavi digitali', 'Totem in hall', 'Scanner documenti OCR'],
        economicBenefits: { title: 'Costi Personale', benefits: ['Risparmio turni notte', 'Check-in 24/7'], savings: '20-30k €/anno' }
    },
    {
        id: 'HTL3',
        name: 'Concierge Virtuale WhatsApp',
        shortDescription: 'Assistente AI per consigli ristoranti e tour',
        icon: '💬',
        category: 'Digitalizzazione',
        activityType: 'hotel',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        problem: 'Reception intasata da richieste ripetitive ("dov\'è un buon ristorante?").',
        solutions: ['Bot risposte automatiche', 'Prenotazione servizi esterni', 'Info camere'],
        economicBenefits: { title: 'Servizio', benefits: ['Risposte immediate', 'Commissioni su tour venduti'], savings: 'Tempo reception' }
    },
    {
        id: 'HTL4',
        name: 'Revenue Management System',
        shortDescription: 'Prezzi dinamici basati su domanda ed eventi',
        icon: '📈',
        category: 'Analisi Dati',
        activityType: 'hotel',
        image: 'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&w=800&q=80',
        problem: 'Camere vendute a prezzo fisso troppo basso in alta stagione o vuote in bassa.',
        solutions: ['Algoritmo prezzi dinamico', 'Analisi competitor', 'Sincronizzazione OTA'],
        economicBenefits: { title: 'Fatturato', benefits: ['+15-20% RevPAR', 'Occupazione ottimizzata'], savings: 'Mancati guadagni' }
    },
    {
        id: 'HTL5',
        name: 'Colazione & Room Service QR',
        shortDescription: 'Ordini in camera digitali per aumentare scontrino',
        icon: '🥐',
        category: 'E-commerce',
        activityType: 'hotel',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
        problem: 'Room service poco utilizzato perché macchinoso da ordinare.',
        solutions: ['Menu digitale multilingua', 'Foto piatti alta qualità', 'Ordine orario programmato'],
        economicBenefits: { title: 'Upsell F&B', benefits: ['+40% ordini colazione camera', 'Gestione cucina fluida'], savings: 'Meno sprechi' }
    },
    {
        id: 'HTL6',
        name: 'Direct Booking Booster',
        shortDescription: 'Sito web convertitore per disintermediare Booking.com',
        icon: '🏨',
        category: 'Marketing Digitale',
        activityType: 'hotel',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
        problem: 'Pagare il 18% di commissione alle OTA su ogni prenotazione.',
        solutions: ['Booking engine proprietario', 'Offerte esclusive club', 'Comparatore prezzi'],
        economicBenefits: { title: 'Margine', benefits: ['Risparmio commissioni', 'Dati clienti proprietari'], savings: '+18% su ogni booking diretto' }
    },
    {
        id: 'HTL7',
        name: 'Housekeeping App',
        shortDescription: 'Gestione pulizie camere in tempo reale',
        icon: '🧹',
        category: 'Digitalizzazione',
        activityType: 'hotel',
        image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        problem: 'Reception non sa se le camere sono pronte, clienti aspettano.',
        solutions: ['Stato camera su tablet', 'Segnalazione guasti', 'Priorità pulizie'],
        economicBenefits: { title: 'Efficienza', benefits: ['Check-in anticipati', 'Manutenzione rapida'], savings: 'Tempo coordinamento' }
    },
    {
        id: 'HTL8',
        name: 'Risparmio Energetico IoT',
        shortDescription: 'Spegnimento clima/luci quando camera vuota',
        icon: '💡',
        category: 'Automazione',
        activityType: 'hotel',
        image: 'https://images.unsplash.com/photo-1565514020176-7c22e77cc81c?auto=format&fit=crop&w=800&q=80',
        problem: 'Bollette energetiche altissime per aria condizionata lasciata accesa.',
        solutions: ['Sensori presenza', 'Controllo remoto clima', 'Card switch intelligente'],
        economicBenefits: { title: 'Clima', benefits: ['-30% costi energetici', 'Sostenibilità Green'], savings: 'Migliaia euro/anno' }
    },
    {
        id: 'HTL9',
        name: 'Wi-Fi Mesh & Cybersecurity',
        shortDescription: 'Connessione stabile e sicura per nomadi digitali',
        icon: '🔒',
        category: 'Sicurezza & Cloud',
        activityType: 'hotel',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
        problem: 'Recensioni negative per Wi-Fi lento o non funzionante.',
        solutions: ['Rete Mesh copertura totale', 'Banda garantita', 'Sicurezza dati ospiti'],
        economicBenefits: { title: 'Business Travel', benefits: ['Attrazione smart workers', 'Recensioni positive'], savings: 'Clienti persi' }
    },
    {
        id: 'HTL10',
        name: 'Esperienze Locali Digitali',
        shortDescription: 'Integrazione vendita tour ed esperienze del territorio',
        icon: '🗺️',
        category: 'Marketing Digitale',
        activityType: 'hotel',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        problem: 'Ospiti annoiati che non sanno cosa fare.',
        solutions: ['Catalogo digitale esperienze', 'Prenotazione diretta', 'Partnership locali'],
        economicBenefits: { title: 'Cross-selling', benefits: ['Commissioni 10-20%', 'Ospiti soddisfatti'], savings: 'Valore soggiorno aumentato' }
    }
];

const fs = require('fs');

// Read current services
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');

// We need to inject the array items inside the array. 
// We can find `export const CONSULTING_SERVICES: ConsultingService[] = [` and prepend keys or just insert before the last `];`
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    // Convert our objects to string format that matches the file style (not strictly JSON)
    // We'll trust JSON.stringify but without quotes on keys if possible, or just standard JSON is fine since TS accepts it.
    // Ideally we want to format it nicely.

    const newServicesString = BATCH_1.map(service => {
        // Basic formatting
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
        "\n  // --- BATCH 1 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 1 services injected successfully.");
} else {
    console.log("Could not find closing bracket in services.ts");
}
