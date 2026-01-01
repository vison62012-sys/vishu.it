const BATCH_2 = [
    // --- RETAIL (General Retail & Clothing) (Target: 9 more) ---
    {
        id: 'RTL2',
        name: 'Personal Shopper Video Call',
        shortDescription: 'Consulenza stile da remoto con acquisto in diretta',
        icon: '🛍️',
        category: 'E-commerce',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che non possono venire in negozio ma vogliono vedere i capi.',
        solutions: ['Videochiamata 1-to-1', 'Link pagamento diretto', 'Spedizione express'],
        economicBenefits: { title: 'Vendite Remoto', benefits: ['+15% fatturato', 'Resi quasi azzerati'], savings: 'Meno merce ferma' }
    },
    {
        id: 'RTL3',
        name: 'Click & Collect Express',
        shortDescription: 'Ordina online e ritira in negozio saltando la fila',
        icon: '🏃',
        category: 'Digitalizzazione',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80',
        problem: 'File alle casse che fanno desistere i clienti rapidi.',
        solutions: ['Ritiro in cassa dedicata', 'Nessuna spesa spedizione', 'Prova in store'],
        economicBenefits: { title: 'Traffico', benefits: ['Upselling al ritiro', 'Cliente soddisfatto'], savings: 'Spese spedizione' }
    },
    {
        id: 'RTL4',
        name: 'Fidelity App Gamification',
        shortDescription: 'Sfide e livelli per premiare i clienti fedeli',
        icon: '🎮',
        category: 'Marketing Digitale',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1556740772-14777647f0e5?auto=format&fit=crop&w=800&q=80',
        problem: 'Fidelity card cartacee perse o dimenticate.',
        solutions: ['App brandizzata', 'Livelli VIP', 'Premi esperienziali'],
        economicBenefits: { title: 'Retention', benefits: ['+25% frequenza acquisto', 'Dati profilati'], savings: 'Costo card plastiche' }
    },
    {
        id: 'RTL5',
        name: 'Smart Mirror Experience',
        shortDescription: 'Specchi digitali per vedere abbinamenti e colori',
        icon: '🪞',
        category: 'Automazione',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
        problem: 'Camerini affollati e difficoltà a immaginare altri colori.',
        solutions: ['Realtà aumentata', 'Suggerimenti outfit', 'Foto social ready'],
        economicBenefits: { title: 'Engagement', benefits: ['Effetto WOW', 'Clienti restano di più'], savings: 'Meno capi provati/stropicciati' }
    },
    {
        id: 'RTL6',
        name: 'Magazzino Condiviso Online',
        shortDescription: 'Integrazione giacenze negozio fisico e sito web',
        icon: '📦',
        category: 'E-commerce',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80',
        problem: 'Vendere online merce non disponibile (overselling).',
        solutions: ['Sync real-time', 'Soglie scorta minime', 'Inventario unificato'],
        economicBenefits: { title: 'Efficienza', benefits: ['Zero ordini annullati', 'Magazzino snello'], savings: 'Tempo gestione ordini' }
    },
    {
        id: 'RTL7',
        name: 'WhatsApp Store',
        shortDescription: 'Catalogo prodotti direttamente in chat',
        icon: '💬',
        category: 'Digitalizzazione',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1512428559087-560fa5ce7d5b?auto=format&fit=crop&w=800&q=80',
        problem: 'Sito e-commerce troppo complesso per clienti senior o pigri.',
        solutions: ['Catalogo WhatsApp Business', 'Carrello in chat', 'Pagamento link'],
        economicBenefits: { title: 'Semplicità', benefits: ['Conversione altissima', 'Dialogo diretto'], savings: 'Sviluppo app' }
    },
    {
        id: 'RTL8',
        name: 'Store Traffic Analytics',
        shortDescription: 'Contapersone Wi-Fi per monitorare flussi',
        icon: '📊',
        category: 'Analisi Dati',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
        problem: 'Non sapere quante persone entrano ma non comprano (tasso conversione store).',
        solutions: ['Mappe di calore zone', 'Orari di punta', 'Staff planning'],
        economicBenefits: { title: 'Ottimizzazione', benefits: ['Staff giusto al momento giusto', 'Layout migliorato'], savings: 'Costi personale inefficace' }
    },
    {
        id: 'RTL9',
        name: 'Instagram Shop Tagging',
        shortDescription: 'Taggare prodotti nei post per acquisto immediato',
        icon: '🏷️',
        category: 'Marketing Digitale',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
        problem: 'I follower mettono like ma non trovano il prodotto sul sito.',
        solutions: ['Feed shoppable', 'Sync catalogo FB/IG', 'Adesivi prodotto storie'],
        economicBenefits: { title: 'Social Commerce', benefits: ['Acquisto d\'impulso', 'Traffico qualificato'], savings: 'Ads meno costose' }
    },
    {
        id: 'RTL10',
        name: 'Newsletter Automatica',
        shortDescription: 'Email con nuovi arrivi basati sui gusti',
        icon: '📧',
        category: 'Marketing Digitale',
        activityType: 'retail',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che scordano il negozio dopo l\'acquisto.',
        solutions: ['Segmentazione interessi', 'Buono compleanno', 'Recupero carrello'],
        economicBenefits: { title: 'LTV', benefits: ['Clienti ricorrenti', 'ROI email > 4000%'], savings: 'Pubblicità fredda' }
    },

    // --- GROCERY (Supermercati & Alimentari) ---
    {
        id: 'GRO2',
        name: 'Spesa in Abbonamento',
        shortDescription: 'Box settimanale scorta (acqua, latte, pasta) automatico',
        icon: '📦',
        category: 'E-commerce',
        activityType: 'grocery',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che vanno al discount per i prodotti base pesanti.',
        solutions: ['Consegna al piano', 'Frequenza personalizzabile', 'Sconto quantità'],
        economicBenefits: { title: 'Fidelizzazione', benefits: ['Incasso prevedibile', 'Cliente blindato'], savings: 'Logistica ottimizzata' }
    },
    {
        id: 'GRO3',
        name: 'Volantino Digitale Interattivo',
        shortDescription: 'Clicchi sul prodotto nel PDF e lo aggiungi al carrello',
        icon: '📰',
        category: 'Marketing Digitale',
        activityType: 'grocery',
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
        problem: 'Costi stampa volantini e impatto ambientale, spesso buttati.',
        solutions: ['Volantino WhatsApp', 'Link diretto e-commerce', 'Video ricette'],
        economicBenefits: { title: 'Risparmio', benefits: ['-60% costi stampa', 'Misurabilità click'], savings: 'Migliaia euro carta' }
    },
    {
        id: 'GRO4',
        name: 'Self-Scanning App',
        shortDescription: 'Clienti scansionano prodotti mentre fanno la spesa',
        icon: '📱',
        category: 'Automazione',
        activityType: 'grocery',
        image: 'https://images.unsplash.com/photo-1580913428706-c311abaf32f4?auto=format&fit=crop&w=800&q=80',
        problem: 'File alle casse che innervosiscono i clienti con pochi pezzi.',
        solutions: ['Scan con smartphone', 'Pagamento in app', 'Uscita rapida'],
        economicBenefits: { title: 'Velocità', benefits: ['Fila zero', 'Meno cassieri necessari'], savings: 'Costo del lavoro' }
    },

    // --- JEWELRY (Gioiellerie) ---
    {
        id: 'JWL2',
        name: 'Certificato Diamante NFT/Blockchain',
        shortDescription: 'Garanzia digitale incancellabile per gioielli di valore',
        icon: '💎',
        category: 'Sicurezza & Cloud',
        activityType: 'jewelry',
        image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti che perdono il certificato cartaceo e temono falsi.',
        solutions: ['Registro blockchain', 'QR code univoco', 'Storia del gioiello'],
        economicBenefits: { title: 'Valore', benefits: ['Percezione lusso tech', 'Garanzia reale'], savings: 'Gestione archivi' }
    },
    {
        id: 'JWL3',
        name: 'Configuratore Fedi 3D',
        shortDescription: 'Disegna il tuo anello da zero sullo schermo',
        icon: '💍',
        category: 'E-commerce',
        activityType: 'jewelry',
        image: 'https://images.unsplash.com/photo-1605100804763-ebea2404028fa?auto=format&fit=crop&w=800&q=80',
        problem: 'Difficoltà a visualizzare personalizzazioni (incisioni, pietre).',
        solutions: ['Rendering real-time', 'Preventivo automatico', 'Condivisione progetto'],
        economicBenefits: { title: 'Conversione', benefits: ['Cliente co-creatore', 'Meno dubbi acquisto'], savings: 'Tempo spiegazioni' }
    },
    // --- CAR SALES (Concessionarie) ---
    {
        id: 'CAR2',
        name: 'Test Drive Booking Online',
        shortDescription: 'Prenota la prova su strada scegliendo auto e orario',
        icon: '🚗',
        category: 'Digitalizzazione',
        activityType: 'carsales',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
        problem: 'Gestione agenda test drive disorganizzata e sovrapposizioni.',
        solutions: ['Calendario auto', 'Upload patente online', 'Waiver digitale'],
        economicBenefits: { title: 'Lead', benefits: ['Più prove effettuate', 'Dati profilati'], savings: 'Tempo segreteria' }
    },
    {
        id: 'CAR3',
        name: 'Stock Update Alert',
        shortDescription: 'Avvisa i clienti interessati quando arriva un modello usato',
        icon: '🔔',
        category: 'Automazione',
        activityType: 'carsales',
        image: 'https://images.unsplash.com/photo-1562141989-1832df759c5e?auto=format&fit=crop&w=800&q=80',
        problem: 'Auto usate molto richieste vendute prima di avvisare tutti i lead.',
        solutions: ['Matching automatico richieste', 'SMS/Email immediata', 'Prenotazione'],
        economicBenefits: { title: 'Velocità Vendita', benefits: ['Stock rotation alta', 'Clienti felici'], savings: 'Deprezzamento auto ferme' }
    },

    // --- OPTICAL (Ottici) ---
    {
        id: 'OPT2',
        name: 'Virtual Try-On Occhiali',
        shortDescription: 'Prova le montature con la fotocamera del telefono',
        icon: '👓',
        category: 'Digitalizzazione',
        activityType: 'optical',
        image: 'https://images.unsplash.com/photo-1570222094114-28a9d88a2ef0?auto=format&fit=crop&w=800&q=80',
        problem: 'Clienti indecisi che provano 100 paia sporcando le lenti.',
        solutions: ['Realtà aumentata viso', 'Catalogo infinito', 'Condivisione per pareri'],
        economicBenefits: { title: 'Igiene & Tempo', benefits: ['Selezione pre-visita', 'Meno pulizia montature'], savings: 'Tempo ottico' }
    },

    // --- PHARMA (Farmacie) ---
    {
        id: 'PHR2',
        name: 'Prenotazione Farmaci con Ricetta',
        shortDescription: 'Invia la foto della ricetta e passa solo per il ritiro',
        icon: '💊',
        category: 'Digitalizzazione',
        activityType: 'pharma',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
        problem: 'Code in farmacia solo per ordinare farmaci non disponibili.',
        solutions: ['Foto NRE/Ricetta', 'Chat con farmacista', 'Notifica disponibilità'],
        economicBenefits: { title: 'Efficienza', benefits: ['Meno code al banco', 'Fidelizzazione paziente'], savings: 'Doppi passaggi clienti' }
    },

    // --- FLORIST (Fioristi) ---
    {
        id: 'FLR2',
        name: 'Abbonamento Fiori Uffici',
        shortDescription: 'Cambi settimanali programmati per aziende e hotel',
        icon: '💐',
        category: 'E-commerce',
        activityType: 'florist',
        image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=800&q=80',
        problem: 'Vendite occasionali imprevedibili, molto scarto di fiori freschi.',
        solutions: ['Contratti digitali ricorrenti', 'Calendario consegne', 'Fatturazione auto'],
        economicBenefits: { title: 'Ricorrenza', benefits: ['Fatturato base sicuro', 'Zero spreco programmato'], savings: 'Fiori buttati' }
    }
];

const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', 'utf8');
const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
    const newServicesString = BATCH_2.map(service => {
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
        "\n  // --- BATCH 2 GENERATED ---\n" +
        newServicesString +
        "\n" +
        content.slice(closingBracketIndex);

    fs.writeFileSync('c:\\Users\\teash\\Downloads\\vishu.it\\data\\services.ts', newContent, 'utf8');
    console.log("Batch 2 services injected successfully.");
}
