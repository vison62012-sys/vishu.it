import { ConsultingService, Category, ActivityCategory } from './types';

// Categorie per tipo di attività
export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  { id: 'all', name: 'Tutti', icon: '🌟', description: 'Tutti i servizi' },
  { id: 'beach', name: 'Beach & Chalet', icon: '🏖️', description: 'Servizi per stabilimenti balneari e chalet' },
  { id: 'restaurant', name: 'Ristoranti', icon: '🍽️', description: 'Servizi per ristoranti e bar' },
  { id: 'hotel', name: 'Hotel & B&B', icon: '🏨', description: 'Servizi per strutture ricettive' },
  { id: 'retail', name: 'Retail & E-commerce', icon: '🛍️', description: 'Servizi per negozi e vendita online' },
  { id: 'wellness', name: 'Centri Estetici & Saloni', icon: '💅', description: 'Servizi per centri estetici, parrucchieri e saloni di bellezza' },
  { id: 'events', name: 'Eventi & Intrattenimento', icon: '🎉', description: 'Servizi per eventi e intrattenimento' },
  { id: 'autocare', name: 'Officine & Gommisti', icon: '🚗', description: 'Servizi per officine, carrozzerie e gommisti' },
  { id: 'bakery', name: 'Pasticceria e Forni', icon: '🥐', description: 'Servizi per pasticcerie e forni artigianali' },
  { id: 'gelateria', name: 'Gelaterie', icon: '🍦', description: 'Servizi per gelaterie artigianali' },
  { id: 'optical', name: 'Ottici e Visione', icon: '👓', description: 'Servizi per centri ottici e specialisti della visione' },
  { id: 'realestate', name: 'Agenzie Immobiliari', icon: '🏠', description: 'Servizi per agenzie e professionisti immobiliari' },
  { id: 'jewelry', name: 'Gioiellerie e Orologerie', icon: '💎', description: 'Servizi per gioiellerie e laboratori orafi' },
  { id: 'kids', name: 'Ludoteche e Feste', icon: '🎉', description: 'Servizi per sale feste e centri per l\'infanzia' },
  { id: 'general', name: 'Generale', icon: '💼', description: 'Servizi per tutte le attività' },
];

// Categorie tecniche (per riferimento)
export const TECH_CATEGORIES: Category[] = [
  { id: '1', name: 'Digitalizzazione', icon: '💻' },
  { id: '2', name: 'Cloud & Sicurezza', icon: '☁️' },
  { id: '3', name: 'Automazione', icon: '⚙️' },
  { id: '4', name: 'E-commerce', icon: '🛒' },
  { id: '5', name: 'Marketing Digitale', icon: '📱' },
  { id: '6', name: 'Analisi Dati', icon: '📊' },
];

// Messaggi di benvenuto per consulenza
export const WELCOME_MESSAGES = [
  { greeting: 'Benvenuto!', subtitle: 'Trasforma la tua attività con il digitale' },
  { greeting: 'Ciao!', subtitle: 'Scopri come digitalizzare la tua azienda' },
  { greeting: 'Buongiorno!', subtitle: 'Inizia la tua transizione digitale oggi' },
  { greeting: 'Salve!', subtitle: 'Esplora i nostri servizi di consulenza' },
  { greeting: 'Ciao!', subtitle: 'Scegli il servizio perfetto per te' },
  { greeting: 'Benvenuto!', subtitle: 'Accelera la crescita della tua attività' },
];

// Servizi di consulenza informatica
export const CONSULTING_SERVICES: ConsultingService[] = [
  // --- MINI SERVIZI: CENTRI ESTETICI & SALONI ---
  {
    id: 'W1',
    name: 'Check-in Digitale Pre-Trattamento',
    shortDescription: 'Link anamnesi e consensi inviato via WhatsApp 24h prima',
    icon: '📝',
    category: 'Digitalizzazione',
    activityType: 'wellness',
    image: '/images/services/W1-desktop.webp',
    alt: "Receptionist che utilizza tablet per check-in digitale in spa",
    problem: 'Modulo cartaceo all’arrivo = ritardi in reception e tempi morti prima del trattamento.',
    solutions: [
      'Invio link anamnesi/consensi 24h prima via WhatsApp/SMS',
      'Firma digitale e salvataggio automatico GDPR',
      'Alert allo staff su allergie/controindicazioni prima della seduta'
    ],
    economicBenefits: {
      title: 'Efficienza & Compliance',
      benefits: [
        'Riduzione tempi di accettazione (-7 min/cliente)',
        'Più trattamenti/ora a parità di staff',
        'Riduzione rischi legali per consenso non valido'
      ],
      savings: 'Tempo reception risparmiato: 1-2 ore/giorno'
    }
  },
  {
    id: 'W2',
    name: 'Smart Re-Booking',
    shortDescription: 'Promemoria automatici basati sul ciclo di ricrescita (es. 4 settimane)',
    icon: '🔁',
    category: 'Marketing Digitale',
    activityType: 'wellness',
    image: '/images/services/W2-desktop.webp',
    alt: "Calendario su smartphone per prenotazione appuntamento estetico",
    problem: 'Il cliente dimentica di riprenotare e torna dopo troppo tempo: calendario vuoto nelle settimane sbagliate.',
    solutions: [
      'Algoritmo per frequenze per servizio (ceretta, colore, manicure)',
      'Notifiche WhatsApp con tasto Prenota',
      'Slot suggeriti nelle fasce morte'
    ],
    economicBenefits: {
      title: 'Frequenza & Fatturato',
      benefits: [
        'Aumento visite/cliente del 15-25%',
        'Riempimento fasce orarie meno richieste',
        'Riduzione no-show con reminder smart'
      ],
      savings: 'Ricavi ricorrenti più stabili'
    }
  },
  {
    id: 'W3',
    name: 'Consulenza Skin-Care Video',
    shortDescription: 'Video-call 10 min per analisi pelle e carrello prodotti personalizzato',
    icon: '🎥',
    category: 'E-commerce',
    activityType: 'wellness',
    image: '/images/services/W3-desktop.webp',
    alt: "Consulenza video su smartphone per cura della pelle",
    problem: 'Difficile vendere prodotti post-trattamento senza un consulto dedicato e dati del cliente.',
    solutions: [
      'Mini video-consulenza guidata con checklist difetti/obiettivi',
      'Generazione carrello con routine personalizzata',
      'Follow-up automatico a 30 giorni'
    ],
    economicBenefits: {
      title: 'Upsell & Loyalty',
      benefits: [
        'Aumento tasso di vendita prodotti del 20-35%',
        'Maggiore aderenza ai protocolli consigliati',
        'Database storico skincare del cliente'
      ],
      savings: 'Margine prodotti incrementale mensile'
    }
  },
  {
    id: 'W4',
    name: 'Menu Trattamenti Interattivo',
    shortDescription: 'QR in sala d’attesa con video Prima/Dopo e upsell intelligente',
    icon: '📲',
    category: 'Digitalizzazione',
    activityType: 'wellness',
    image: '/images/services/W4-desktop.webp',
    alt: "Menu trattamenti spa visualizzato su tablet",
    problem: 'Clienti indecisi o ignari dei trattamenti premium disponibili.',
    solutions: [
      'Gallery Prima/Dopo e video brevi per ciascun trattamento',
      'Filtri per obiettivo (anti-age, acne, rilassante, definizione)',
      'Pulsante “Aggiungi al prossimo appuntamento”'
    ],
    economicBenefits: {
      title: 'Scontrino Medio',
      benefits: [
        'Incremento upsell trattamenti add-on',
        'Riduzione tempo spiegazioni allo staff',
        'Percezione premium del servizio'
      ],
      savings: 'Aumento scontrino medio: +10-20%'
    }
  },
  {
    id: 'W5',
    name: 'Abbonamento "Sempre in Ordine"',
    shortDescription: 'Canone mensile per servizi ricorrenti (es. piega/manicure illimitata)',
    icon: '💳',
    category: 'Marketing Digitale',
    activityType: 'wellness',
    image: '/images/services/W5-desktop.webp',
    alt: "Cliente felice in accappatoio che si rilassa in spa",
    problem: 'Entrate altalenanti e scarsa previsione del fatturato.',
    solutions: [
      'Piani mensili con accesso illimitato/contingentato',
      'Addebito ricorrente e slot prioritari',
      'Area cliente con storico e regole trasparenti'
    ],
    economicBenefits: {
      title: 'MRR & Stabilità',
      benefits: [
        'Entrate ricorrenti prevedibili',
        'Fidelizzazione forte del cliente',
        'Riduzione cancellazioni last-minute'
      ],
      savings: 'MRR aggiuntivo in 60 giorni'
    }
  },
  {
    id: 'W6',
    name: 'Alert "Last Minute Beauty"',
    shortDescription: 'Riempimento cancellazioni improvvise con vantaggi smart',
    icon: '🔔',
    category: 'Marketing Digitale',
    activityType: 'wellness',
    image: '/images/services/W6-desktop.webp',
    alt: "Notifica smartphone per offerta last minute centro estetico",
    problem: 'Fasce orarie bucate per disdette improvvise.',
    solutions: [
      'Canale WhatsApp prioritario per slot last-minute',
      'Incentivi dinamici (mini upgrade/omaggi)',
      'Assegnazione automatica al cliente più vicino'
    ],
    economicBenefits: {
      title: 'Occupazione Agenda',
      benefits: [
        'Riduzione tempi morti',
        'Miglior saturazione staff',
        'Aumento clienti felici salvati'
      ],
      savings: 'Slot recuperati/settimana: +3-8'
    }
  },
  {
    id: 'W7',
    name: 'Beauty Cloud',
    shortDescription: 'Area riservata con storico colori/servizi e consigli post-trattamento',
    icon: '☁��',
    category: 'Digitalizzazione',
    activityType: 'wellness',
    image: '/images/services/W7-desktop.webp',
    alt: "Tablet con scheda cliente e storico trattamenti",
    problem: 'Difficile ricordare preferenze colore, prodotti e note su ogni cliente.',
    solutions: [
      'Scheda cliente con storico colori, mix e foto',
      'Consigli e routine post-trattamento in app',
      'Reminder automatici per manutenzione (ricrescita/ritocchi)'
    ],
    economicBenefits: {
      title: 'Qualità & Personalizzazione',
      benefits: [
        'Servizio uniforme anche con staff diverso',
        'Upsell prodotti mirati al profilo',
        'Cliente percepisce cura e professionalità'
      ],
      savings: 'Aumento NPS e ritorno visite'
    }
  },

  // --- MINI SERVIZI: OFFICINE & GOMMISTI ---
  {
    id: 'A1',
    name: 'Video-Preventivo "Trasparenza"',
    shortDescription: 'Video dei pezzi usurati inviato su WhatsApp per approvazione immediata',
    icon: '📹',
    category: 'Digitalizzazione',
    activityType: 'autocare',
    image: '/images/services/A1-desktop.webp',
    alt: "Meccanico che mostra un pezzo di ricambio e usa lo smartphone",
    problem: 'Diffidenza sul preventivo e rallentamenti in accettazione.',
    solutions: [
      'Ripresa veloce del problema con evidenza del pezzo',
      'Link WA al cliente con proposta e pulsante Approva',
      'Log approvazioni per trasparenza totale'
    ],
    economicBenefits: {
      title: 'Fiducia & Velocità',
      benefits: [
        'Riduzione tempi di fermo',
        'Aumento tasso di approvazione lavori',
        'Reputazione di officina onesta e moderna'
      ],
      savings: 'Approvals +20-35%'
    }
  },
  {
    id: 'A2',
    name: 'Self Check-in H24 (Key Box)',
    shortDescription: 'Box sicura con codice per lasciare le chiavi fuori orario di apertura',
    icon: '🔑',
    category: 'Digitalizzazione',
    activityType: 'autocare',
    image: '/images/services/A2-desktop.webp',
    alt: "Chiavi dell'auto in una cassetta di sicurezza",
    problem: 'Clienti che non possono passare negli orari di apertura.',
    solutions: [
      'Key box con OTP e tracciamento accessi',
      'Modulo digitale di consegna/ritiro',
      'Notifica automatica al cliente e allo staff'
    ],
    economicBenefits: {
      title: 'Servizio & Comodità',
      benefits: [
        'Più auto gestite al giorno',
        'Soddisfazione clienti business',
        'Zero attese in accettazione'
      ],
      savings: 'Estensione virtuale orario: 24/7'
    }
  },
  {
    id: 'A3',
    name: 'Scadenzario Manutenzione Predittiva',
    shortDescription: 'Alert automatici per Revisione, Tagliando e Cambio Stagionale Gomme',
    icon: '🗓️',
    category: 'Marketing Digitale',
    activityType: 'autocare',
    image: '/images/services/A3-desktop.webp',
    alt: "Smartphone con notifica scadenza manutenzione auto",
    problem: 'Clienti che si dimenticano le scadenze e officina con stagionalità estrema.',
    solutions: [
      'Calendario predittivo per targa/km',
      'Notifiche automatiche con pulsante Prenota',
      'Priorità per clienti premium'
    ],
    economicBenefits: {
      title: 'Riempimento & Fedeltà',
      benefits: [
        'Stagionalità spalmata in modo intelligente',
        'Aumento ritorno clienti periodici',
        'Maggiore pianificazione magazzino pneumatici'
      ],
      savings: 'Tassi di ritorno +20%'
    }
  },
  {
    id: 'A4',
    name: 'Tracciamento Stato Lavori',
    shortDescription: 'Link per vedere in tempo reale se l\'auto è: In lavorazione / In prova / Pronta',
    icon: '📍',
    category: 'Digitalizzazione',
    activityType: 'autocare',
    image: '/images/services/A4-desktop.webp',
    alt: "Meccanico al lavoro su auto in officina moderna",
    problem: 'Telefonate continue “È pronta?” che disturbano il flusso in officina.',
    solutions: [
      'Pagina stato con aggiornamenti in tempo reale',
      'Notifiche automatiche al cambio stato',
      'Feedback alla consegna'
    ],
    economicBenefits: {
      title: 'Efficienza Operativa',
      benefits: [
        'Linee telefoniche libere',
        'Staff concentrato sui lavori',
        'Cliente tranquillo e informato'
      ],
      savings: 'Tempo front-office risparmiato: 1h/giorno'
    }
  },
  {
    id: 'A5',
    name: 'Auto di Cortesia Digitale',
    shortDescription: 'Prenotazione e firma del contratto di comodato direttamente da smartphone',
    icon: '🚘',
    category: 'Digitalizzazione',
    activityType: 'autocare',
    image: '/images/services/A5-desktop.webp',
    alt: "Consegna chiavi auto di cortesia pulita",
    problem: 'Gestione manuale e rischiosa della documentazione per l’auto sostitutiva.',
    solutions: [
      'Calendario disponibilità con prenotazione online',
      'Firma digitale contratto di comodato',
      'Checklist danni con foto al ritiro/restituzione'
    ],
    economicBenefits: {
      title: 'Professionalità & Sicurezza',
      benefits: [
        'Riduzione contenziosi sui danni',
        'Processo snello e tracciato',
        'Immagine premium dell’officina'
      ],
      savings: 'Riduzione rischi legali'
    }
  },
  {
    id: 'A6',
    name: 'Digital Pick-up & Return',
    shortDescription: 'Servizio di ritiro e consegna auto a domicilio gestito tramite app dedicata',
    icon: '📦',
    category: 'Digitalizzazione',
    activityType: 'autocare',
    image: '/images/services/A6-desktop.webp',
    alt: "Autista che ritira auto per servizio a domicilio",
    problem: 'Clienti senza tempo per portare l’auto in officina.',
    solutions: [
      'Flusso prenotazione ritiro/consegna',
      'Geolocalizzazione driver e chat integrata',
      'Pagamenti digitali e ricevute automatiche'
    ],
    economicBenefits: {
      title: 'Servizio Premium',
      benefits: [
        'Nuovo segmento clienti (aziende e premium)',
        'Ottimizzazione rotte e tempi',
        'Maggior soddisfazione e recensioni positive'
      ],
      savings: 'Ricavi add-on servizio logistica'
    }
  },
  {
    id: 'A7',
    name: 'Archivio Interventi Cloud',
    shortDescription: 'Libretto manutenzione digitale sempre accessibile dal cliente',
    icon: '📂',
    category: 'Digitalizzazione',
    activityType: 'autocare',
    image: '/images/services/A7-desktop.webp',
    alt: "Tablet che mostra storico manutenzione auto in officina",
    problem: 'Storico interventi disperso su carte o software non accessibile al cliente.',
    solutions: [
      'Storico lavori con fatture e foto',
      'Accesso cliente via link sicuro',
      'Esportazione per vendita auto'
    ],
    economicBenefits: {
      title: 'Trasparenza & Valore',
      benefits: [
        'Aumento fiducia e ritorno in officina',
        'Valore percepito maggiore del veicolo',
        'Riduzione richieste informazioni al telefono'
      ],
      savings: 'Nuove entrate da servizi documentali'
    }
  },
  {
    id: '1',
    name: 'Digitalizzazione Processi Aziendali',
    shortDescription: 'Trasforma i processi manuali in flussi digitali automatizzati',
    icon: '💻',
    category: 'Digitalizzazione',
    activityType: 'general',
    image: '/images/services/1-desktop.webp',
    alt: "Ufficio moderno con team che lavora su processi digitali",
    problem: 'Le attività tradizionali perdono tempo e denaro con processi manuali, errori umani e inefficienze operative che rallentano la crescita e aumentano i costi.',
    solutions: [
      'Analisi completa dei processi aziendali esistenti',
      'Progettazione di workflow digitali personalizzati',
      'Implementazione di software gestionali integrati',
      'Formazione del personale su nuovi sistemi',
      'Monitoraggio e ottimizzazione continua'
    ],
    economicBenefits: {
      title: 'Risparmio e ROI',
      benefits: [
        'Riduzione del 60% del tempo dedicato a processi manuali',
        'Diminuzione errori del 80% con conseguente risparmio',
        'Aumento produttività del 40%',
        'ROI garantito entro 12 mesi'
      ],
      savings: 'Risparmio medio annuo: €15.000 - €50.000'
    },
    secretSection: {
      killerPhrases: [
        'Ogni giorno che aspetti, la tua concorrenza ti supera. La digitalizzazione non è più un opzione, è una necessità.',
        'Immagina di risparmiare 20 ore a settimana. Cosa faresti con quel tempo?',
        'I tuoi clienti si aspettano servizi digitali. Se non li offri tu, andranno da chi lo fa.',
        'Un processo digitalizzato è un processo che non può fallire per errore umano.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Signore/Signore, ho analizzato centinaia di aziende come la sua. Il problema principale che vedo è che stanno ancora lavorando come 10 anni fa, mentre il mondo è cambiato. La buona notizia? La soluzione esiste ed è più accessibile di quanto pensi.'
        },
        {
          title: 'Objection Handling - Costo',
          content: 'Capisco la preoccupazione sul costo. Ma facciamo un calcolo: quanto costa alla sua azienda un errore? Quanto tempo perde ogni giorno in attività ripetitive? Il nostro servizio si ripaga da solo in 6-8 mesi. Dopo, è tutto guadagno.'
        }
      ],
      objections: [
        {
          objection: 'Non abbiamo tempo per implementare cambiamenti',
          response: 'Esattamente per questo esistiamo. Gestiamo noi tutto il processo, lei continua a lavorare normalmente. In 30 giorni è operativo.'
        },
        {
          objection: 'È troppo costoso',
          response: 'Quanto costa non farlo? Ogni mese che aspetta, perde opportunità e denaro. Inoltre, offriamo piani rateali e il ROI è garantito.'
        },
        {
          objection: 'Il nostro settore è diverso',
          response: 'Abbiamo digitalizzato aziende in 15 settori diversi. Ogni settore ha le sue specificità, e per questo creiamo soluzioni personalizzate.'
        }
      ],
      closingTechniques: [
        'Offerta limitata: sconto del 20% se si decide entro questa settimana',
        'Garanzia soddisfatti o rimborsati: se non vede risultati in 90 giorni, rimborsiamo tutto',
        'Bonus: 3 mesi di supporto gratuito incluso'
      ],
      pricingStrategy: [
        'Presentare sempre 3 opzioni: base, premium, enterprise',
        'Il prezzo medio deve sembrare la scelta più sensata',
        'Usare l\'ancoraggio: partire da un prezzo alto per far sembrare gli altri convenienti'
      ],
      urgencyTriggers: [
        'Ogni mese di ritardo = €2.000-5.000 persi in inefficienze',
        'I competitor stanno già digitalizzando',
        'I clienti si aspettano servizi digitali ORA',
        'Le normative cambiano: chi è digitale è già pronto'
      ]
    }
  },
  {
    id: '2',
    name: 'Migrazione al Cloud',
    shortDescription: 'Sposta la tua infrastruttura IT nel cloud per maggiore sicurezza e scalabilità',
    icon: '☁️',
    category: 'Cloud & Sicurezza',
    activityType: 'general',
    image: '/images/services/2-desktop.webp',
    alt: "Server room moderna e sicura con luci blu",
    problem: 'Server obsoleti, costi di manutenzione elevati, rischi di perdita dati e limiti di scalabilità stanno frenando la crescita della tua azienda.',
    solutions: [
      'Valutazione dell\'infrastruttura attuale',
      'Pianificazione della migrazione cloud',
      'Implementazione su piattaforme sicure (AWS, Azure, GCP)',
      'Backup automatici e disaster recovery',
      'Monitoraggio 24/7 e supporto continuo'
    ],
    economicBenefits: {
      title: 'Risparmio e Vantaggi',
      benefits: [
        'Riduzione costi IT del 40-60%',
        'Eliminazione costi di manutenzione hardware',
        'Scalabilità istantanea senza nuovi investimenti',
        'Sicurezza enterprise a costi contenuti'
      ],
      savings: 'Risparmio medio annuo: €10.000 - €30.000'
    },
    secretSection: {
      killerPhrases: [
        'Un server che si rompe può fermare la tua azienda per giorni. Nel cloud, questo non può accadere.',
        'Stai pagando per server che usi al 30%. Nel cloud paghi solo quello che usi.',
        'I tuoi dati sono al sicuro? Un ransomware può distruggere anni di lavoro in secondi.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Lei ha mai calcolato quanto costa mantenere i suoi server? Elettricità, spazio, manutenzione, aggiornamenti... Nel cloud, tutto questo scompare. E i suoi dati sono più sicuri di prima.'
        }
      ],
      objections: [
        {
          objection: 'I nostri dati sono sensibili',
          response: 'Il cloud enterprise ha certificazioni di sicurezza superiori a qualsiasi server locale. I dati sono criptati e protetti meglio di una banca.'
        }
      ],
      closingTechniques: [
        'Migrazione gratuita se si decide entro 30 giorni',
        'Garanzia uptime 99.9% o rimborso'
      ],
      pricingStrategy: [
        'Mostrare confronto costi attuali vs cloud',
        'Evidenziare risparmio a 3 anni'
      ],
      urgencyTriggers: [
        'Hardware obsoleto = rischio di guasti costosi',
        'Ogni giorno di ritardo = denaro sprecato in manutenzione'
      ]
    }
  },
  {
    id: '3',
    name: 'E-commerce e Vendite Online',
    shortDescription: 'Crea o migliora il tuo negozio online per vendere 24/7',
    icon: '🛒',
    category: 'E-commerce',
    activityType: 'retail',
    image: '/images/services/3-desktop.webp',
    alt: "Persona che fa acquisti online con carta di credito e laptop",
    problem: 'Senza presenza online, perdi clienti che cercano i tuoi prodotti su internet. I competitor online stanno conquistando il tuo mercato mentre tu vendi solo durante gli orari di apertura.',
    solutions: [
      'Progettazione e sviluppo e-commerce personalizzato',
      'Integrazione sistemi di pagamento sicuri',
      'Ottimizzazione per mobile e SEO',
      'Gestione inventario e ordini automatizzata',
      'Marketing digitale e promozioni online'
    ],
    economicBenefits: {
      title: 'Crescita e Ricavi',
      benefits: [
        'Vendite 24/7 senza costi aggiuntivi personale',
        'Aumento clienti del 200-400%',
        'Riduzione costi gestione del 50%',
        'Nuovi canali di vendita e mercati'
      ],
      savings: 'Incremento ricavi medio: €20.000 - €100.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Mentre dormi, il tuo e-commerce vende. Immagina di svegliarti e trovare 10 nuovi ordini.',
        'I tuoi clienti cercano online. Se non ti trovano, comprano da chi c\'è.',
        'Un negozio fisico vende 8-10 ore al giorno. Un e-commerce vende sempre.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Sai quanti potenziali clienti cercano i tuoi prodotti online ogni giorno? Centinaia. Ma se non hai un e-commerce, vanno da chi ce l\'ha. Non è questione di SE devi essere online, ma di QUANDO inizi.'
        }
      ],
      objections: [
        {
          objection: 'Non so gestire un e-commerce',
          response: 'Non deve saperlo. Noi lo gestiamo per lei. Riceve solo gli ordini e spedisce. Tutto il resto è automatizzato.'
        }
      ],
      closingTechniques: [
        'Setup gratuito se si decide entro questa settimana',
        'Primi 3 mesi di gestione inclusi'
      ],
      pricingStrategy: [
        'Mostrare casi studio di crescita',
        'Calcolare ROI basato su settore'
      ],
      urgencyTriggers: [
        'Ogni giorno senza e-commerce = clienti persi',
        'I competitor stanno già online',
        'Le festività si avvicinano: massimo potenziale vendite'
      ]
    }
  },
  {
    id: '4',
    name: 'Automazione Marketing',
    shortDescription: 'Automatizza campagne marketing e fidelizzazione clienti',
    icon: '📱',
    category: 'Marketing Digitale',
    activityType: 'general',
    image: '/images/services/4-desktop.webp',
    alt: "Dashboard di marketing digitale su tablet e smartphone",
    problem: 'Marketing manuale è costoso, lento e difficile da misurare. Stai perdendo opportunità di vendita perché non riesci a seguire tutti i lead e mantenere i clienti coinvolti.',
    solutions: [
      'Setup automazioni email marketing',
      'Chatbot per assistenza clienti 24/7',
      'Sistemi di lead nurturing automatici',
      'Analisi e reporting performance',
      'Integrazione CRM e social media'
    ],
    economicBenefits: {
      title: 'Efficienza e Conversioni',
      benefits: [
        'Riduzione costi marketing del 50%',
        'Aumento conversioni del 150%',
        'Automazione risparmia 15+ ore/settimana',
        'ROI misurabile e ottimizzabile'
      ],
      savings: 'Risparmio e incremento: €8.000 - €25.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Un lead non seguito entro 5 minuti ha il 90% di probabilità in meno di convertirsi.',
        'L\'automazione marketing lavora mentre dormi. I tuoi competitor no.',
        'Ogni cliente perso costa 10 volte di più di mantenerlo.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Quanti lead riceve ogni mese? E quanti riesce a seguire? Con l\'automazione, ogni lead viene seguito immediatamente, 24/7, anche quando lei non c\'è.'
        }
      ],
      objections: [
        {
          objection: 'Preferiamo il contatto umano',
          response: 'L\'automazione non sostituisce il contatto umano, lo potenzia. Filtra i lead migliori e lei si concentra solo su quelli pronti a comprare.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + 1000 email/mese incluse',
        'Garanzia aumento lead del 50% in 60 giorni'
      ],
      pricingStrategy: [
        'Mostrare costi attuali vs automazione',
        'Calcolare valore di ogni lead convertito'
      ],
      urgencyTriggers: [
        'Ogni lead non seguito = denaro perso',
        'I competitor automatizzano, tu resti indietro'
      ]
    }
  },
  // Servizi Beach/Chalet
  {
    id: '5',
    name: 'Booking Ombrelloni e Lettini',
    shortDescription: 'Prenotazione online 24/7 con mappa interattiva e pagamento anticipato',
    icon: '🏖️',
    category: 'Digitalizzazione',
    activityType: 'beach',
    image: '/images/services/5-desktop.webp',
    alt: "Ombrelloni in spiaggia ordinati con cielo azzurro",
    problem: 'Telefono che squilla sempre, overbooking, no-show',
    solutions: [
      'Mappa interattiva con disponibilità in tempo reale',
      'Prenotazione 24/7 senza intervento umano',
      'Pagamento anticipato per garantire presenza',
      'Sistema di notifiche automatiche',
      'Dashboard gestione prenotazioni'
    ],
    economicBenefits: {
      title: 'Cash Flow e Occupazione',
      benefits: [
        'Cash flow immediato pre-stagione',
        'Zero perdite per mancato arrivo (no-show)',
        'Riduzione chiamate telefoniche del 80%',
        'Ottimizzazione occupazione ombrelloni'
      ],
      savings: 'Incremento occupazione: +25-40%'
    },
    target: 'Titolare / Gestore Spiaggia',
    kpi: 'Tasso di occupazione anticipata',
    secretSection: {
      killerPhrases: [
        'Vuoi passare l\'estate al telefono o a contare gli incassi sicuri?',
        'Ogni chiamata persa è un cliente che va dalla concorrenza.',
        'Il cliente prenota alle 2 di notte? Con il booking online, non perdi neanche quello.',
        'No-show = soldi persi. Con il pagamento anticipato, questo problema non esiste più.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Signore/Signore, quante chiamate riceve al giorno per prenotare ombrelloni? E quante ne perde perché il telefono è occupato? Con il nostro sistema di booking online, i clienti prenotano 24/7, pagano in anticipo, e lei ha il cash flow già prima dell\'estate. Zero no-show, zero stress.'
        }
      ],
      objections: [
        {
          objection: 'I clienti preferiscono chiamare',
          response: 'I clienti preferiscono quello che funziona. Se può prenotare online alle 23:00 senza aspettare, lo farà. E lei avrà già i soldi in cassa.'
        },
        {
          objection: 'È complicato da usare',
          response: 'Se un cliente sa usare WhatsApp, sa usare il nostro sistema. È più semplice di una chiamata.'
        }
      ],
      closingTechniques: [
        'Setup gratuito se si attiva entro 30 giorni',
        'Prima stagione: commissioni dimezzate',
        'Garanzia: se non aumenta l\'occupazione del 20%, rimborsiamo'
      ],
      pricingStrategy: [
        'Mostrare ROI basato su numero ombrelloni',
        'Calcolare valore di ogni no-show evitato',
        'Evidenziare cash flow anticipato'
      ],
      urgencyTriggers: [
        'La stagione inizia tra X giorni: ogni giorno perso = prenotazioni perse',
        'I competitor stanno già prenotando online',
        'Ogni chiamata persa = cliente che va altrove'
      ]
    }
  },
  {
    id: '6',
    name: 'Food Delivery all\'Ombrellone',
    shortDescription: 'Ordini da smartphone con consegna geolocalizzata direttamente all\'ombrellone',
    icon: '🍔',
    category: 'Digitalizzazione',
    activityType: 'beach',
    image: '/images/services/6-desktop.webp',
    alt: "Cocktail e cibo serviti sotto l'ombrellone in spiaggia",
    problem: 'File al bar, clienti che rinunciano per pigrizia, staff stressato',
    solutions: [
      'Ordini da smartphone con geolocalizzazione',
      'Consegna diretta all\'ombrellone',
      'Sistema di notifiche per ordini pronti',
      'Gestione ordini in tempo reale',
      'Integrazione con sistema POS'
    ],
    economicBenefits: {
      title: 'Aumento Fatturato',
      benefits: [
        'Aumento scontrino medio del 20-30%',
        'Acquisti d\'impulso facilitati',
        'Riduzione file al bar',
        'Miglior gestione dello staff'
      ],
      savings: 'Incremento ricavi bar: +€5.000-15.000/stagione'
    },
    target: 'Responsabile Bar / F&B Manager',
    kpi: 'Numero ordini per ombrellone',
    secretSection: {
      killerPhrases: [
        'Il cliente più pigro è quello che spende di più, se lo servi comodo.',
        'Un cliente che deve alzarsi dal lettino per ordinare, spesso non ordina.',
        'File al bar = clienti che rinunciano. Servizio all\'ombrellone = clienti che spendono.',
        'Mentre il cliente è comodo al sole, ordina e spende. È così semplice.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Quanti clienti vede rinunciare a ordinare perché non vogliono fare la fila al bar? Con il food delivery all\'ombrellone, il cliente ordina dal lettino, paga online, e riceve tutto comodamente. Il risultato? Scontrino medio che aumenta del 30% perché il cliente ordina quando ha voglia, non quando ha la forza di alzarsi.'
        }
      ],
      objections: [
        {
          objection: 'Lo staff non ce la fa',
          response: 'Lo staff è già stressato dalle file. Con il sistema organizzato, sa esattamente cosa consegnare e dove. Meno caos, più efficienza.'
        },
        {
          objection: 'I clienti preferiscono andare al bar',
          response: 'Alcuni sì, ma molti no. E quelli che non vanno al bar sono soldi persi. Con questo sistema, li recupera tutti.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + formazione staff inclusa',
        'Primi 100 ordini: commissioni zero',
        'Garanzia aumento scontrino medio del 20% o rimborso'
      ],
      pricingStrategy: [
        'Calcolare valore medio ordine',
        'Mostrare moltiplicatore per numero ombrelloni',
        'Evidenziare margine su acquisti d\'impulso'
      ],
      urgencyTriggers: [
        'Ogni giorno senza sistema = ordini persi',
        'La stagione è breve: massimizza ogni opportunità',
        'I competitor stanno già offrendo questo servizio'
      ]
    }
  },
  {
    id: '7',
    name: 'Menu Digitale QR Bar & Ristorante',
    shortDescription: 'Menu digitale aggiornabile in tempo reale con foto, allergeni e prezzi',
    icon: '📱',
    category: 'Digitalizzazione',
    activityType: 'restaurant',
    image: '/images/services/7-desktop.webp',
    alt: "Cliente che scansiona QR code menu al ristorante",
    problem: 'Menu cartacei unti, costi di ristampa, prezzi non aggiornabili',
    solutions: [
      'Menu digitale accessibile via QR code',
      'Aggiornamento real-time prezzi e disponibilità',
      'Foto professionali dei piatti',
      'Allergeni chiari e visibili',
      'Push su piatti ad alto margine'
    ],
    economicBenefits: {
      title: 'Risparmio e Ottimizzazione',
      benefits: [
        'Eliminazione costi stampa menu',
        'Push su piatti ad alto margine',
        'Aggiornamento prezzi istantaneo',
        'Miglior percezione del servizio'
      ],
      savings: 'Risparmio costi stampa: €500-2.000/anno'
    },
    target: 'Chef / Gestore Ristorante',
    kpi: 'Riduzione costi stampa',
    secretSection: {
      killerPhrases: [
        'Hai finito le vongole? Un click e spariscono dal menu senza doverlo dire a 100 clienti.',
        'Menu unti = cliente che non torna. Menu digitale = servizio di lusso.',
        'Ogni ristampa menu = soldi buttati. Con il digitale, aggiorni gratis e sempre.',
        'Il cliente vede la foto del piatto = ordina di più. È psicologia, non magia.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Quanto spende ogni anno per stampare menu? E quante volte deve ristamparli perché cambiano i prezzi o finiscono i piatti? Con il menu digitale QR, aggiorna tutto in tempo reale, zero costi di stampa, e i clienti vedono foto bellissime che li fanno ordinare di più. È un investimento che si ripaga in un mese.'
        }
      ],
      objections: [
        {
          objection: 'I clienti anziani non sanno usare il QR',
          response: 'I clienti anziani sono una minoranza. E comunque, può tenere qualche menu cartaceo per loro. Ma il 90% dei clienti userà il digitale.'
        },
        {
          objection: 'È troppo tecnologico',
          response: 'È più semplice di un menu cartaceo. Scansiona, vede il menu. Fine. E lei risparmia migliaia di euro all\'anno.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + foto professionali incluse',
        'Primi 3 mesi: supporto incluso',
        'Garanzia: se non risparmia almeno €500/anno, rimborsiamo'
      ],
      pricingStrategy: [
        'Mostrare costi annuali stampa attuali',
        'Calcolare risparmio a 3 anni',
        'Evidenziare aumento ordini per foto piatti'
      ],
      urgencyTriggers: [
        'Ogni menu stampato = denaro sprecato',
        'I competitor hanno già menu digitali',
        'Le foto aumentano gli ordini del 15-20%'
      ]
    }
  },
  {
    id: '8',
    name: 'Pannello Eventi e Serate',
    shortDescription: 'Landing page dedicata con prenotazione tavoli e liste per eventi',
    icon: '🎉',
    category: 'Marketing Digitale',
    activityType: 'events',
    image: '/images/services/8-desktop.webp',
    alt: "Folla che festeggia in discoteca con luci colorate",
    problem: 'Prenotazioni su foglietti volanti, serate vuote, disorganizzazione',
    solutions: [
      'Landing page dedicata per ogni evento',
      'Form prenotazione tavoli online',
      'Gestione liste e capienza',
      'Sistema di notifiche automatiche',
      'Integrazione social media'
    ],
    economicBenefits: {
      title: 'Riempimento e Prevendita',
      benefits: [
        'Prevendita ingressi garantita',
        'Riempimento serate infrasettimanali',
        'Organizzazione professionale',
        'Database clienti per eventi futuri'
      ],
      savings: 'Incremento affluenza: +30-50%'
    },
    target: 'PR / Organizzatore Eventi',
    kpi: 'Percentuale tavoli prenotati online',
    secretSection: {
      killerPhrases: [
        'Non sperare che la gente arrivi: vendi il tavolo prima ancora di aprire.',
        'Serata vuota = soldi persi. Con le prenotazioni online, riempi prima di iniziare.',
        'Foglietti volanti = caos. Sistema digitale = professionalità che attira clienti.',
        'Il cliente prenota online = si impegna. Meno no-show, più incassi sicuri.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Quante serate ha organizzato che sono finite mezze vuote? Con il nostro sistema di prenotazione eventi, crea una landing page dedicata, promuovi sui social, e i clienti prenotano online. Risultato? Sa già quante persone arriveranno, ha i soldi in cassa prima, e riempi anche le serate infrasettimanali.'
        }
      ],
      objections: [
        {
          objection: 'I clienti preferiscono chiamare',
          response: 'I clienti preferiscono quello che è comodo. Se può prenotare online in 30 secondi, lo farà. E lei avrà tutto organizzato.'
        },
        {
          objection: 'Non abbiamo eventi così spesso',
          response: 'Anche un evento al mese vale la pena. E con il sistema, può organizzare più eventi perché sa che riempirà.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + prima landing page inclusa',
        'Garanzia: se non aumenta affluenza del 30%, rimborsiamo',
        'Supporto social media per promozione incluso'
      ],
      pricingStrategy: [
        'Calcolare valore di ogni serata piena',
        'Mostrare moltiplicatore per numero eventi/anno',
        'Evidenziare valore database clienti'
      ],
      urgencyTriggers: [
        'Ogni serata vuota = migliaia di euro persi',
        'La stagione eventi inizia tra poco',
        'I competitor stanno già prenotando online'
      ]
    }
  },
  {
    id: '9',
    name: 'Iscrizione Corsi Sportivi (Yoga/Sup)',
    shortDescription: 'Booking slot orari con firma digitale liberatorie e pagamento online',
    icon: '🧘',
    category: 'Digitalizzazione',
    activityType: 'wellness',
    image: '/images/services/9-desktop.webp',
    alt: "Persone che praticano yoga all'aperto con tappetini",
    problem: 'Gestione caotica orari, attrezzatura ferma, scarico responsabilità',
    solutions: [
      'Booking slot orari online',
      'Firma digitale liberatorie',
      'Pagamento online anticipato',
      'Gestione attrezzatura e capienza',
      'Sistema di notifiche automatiche'
    ],
    economicBenefits: {
      title: 'Monetizzazione e Organizzazione',
      benefits: [
        'Monetizzazione spazi morti',
        'Upselling lezioni private',
        'Attrezzatura sempre utilizzata',
        'Scarico responsabilità legale'
      ],
      savings: 'Incremento utilizzo: +40-60%'
    },
    target: 'Istruttore / Gestore Area Sport',
    kpi: 'Saturazione corsi',
    secretSection: {
      killerPhrases: [
        'Il tuo SUP è fermo in magazzino? Mettilo online e fallo lavorare da solo.',
        'Corso vuoto = soldi persi. Con il booking online, riempi ogni slot.',
        'Attrezzatura ferma = denaro che dorme. Sistema digitale = attrezzatura che lavora 24/7.',
        'Liberatorie cartacee = rischio legale. Firma digitale = protezione totale.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Quanta attrezzatura ha ferma in magazzino? E quanti corsi sono mezzi vuoti perché la gente non sa come prenotare? Con il nostro sistema, mette tutto online, i clienti prenotano e pagano in anticipo, firmano le liberatorie digitalmente, e lei monetizza ogni singolo slot. L\'attrezzatura lavora, i corsi si riempiono, e lei è protetto legalmente.'
        }
      ],
      objections: [
        {
          objection: 'I clienti preferiscono prenotare di persona',
          response: 'Alcuni sì, ma molti preferiscono la comodità online. E quelli che prenotano online sono soldi che altrimenti perderesti.'
        },
        {
          objection: 'Non abbiamo così tanti corsi',
          response: 'Anche pochi corsi valgono la pena. E con il sistema, può organizzare più corsi perché sa che si riempiranno.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + formazione inclusa',
        'Primi 50 booking: commissioni zero',
        'Garanzia: se non aumenta utilizzo del 30%, rimborsiamo'
      ],
      pricingStrategy: [
        'Calcolare valore di ogni slot riempito',
        'Mostrare moltiplicatore per numero corsi',
        'Evidenziare valore protezione legale'
      ],
      urgencyTriggers: [
        'Ogni slot vuoto = denaro perso',
        'La stagione è breve: massimizza ogni opportunità',
        'L\'attrezzatura costa: falla lavorare'
      ]
    }
  },
  {
    id: '10',
    name: 'Digital Welcome Book Spiaggia',
    shortDescription: 'Tutte le info in un link: meteo, regole, password Wi-Fi, numeri utili',
    icon: '📖',
    category: 'Digitalizzazione',
    activityType: 'beach',
    image: '/images/services/10-desktop.webp',
    alt: "QR code su tavolo spiaggia per informazioni servizi",
    problem: 'Staff bombardato dalle stesse domande (Wi-Fi, bagni, orari)',
    solutions: [
      'Welcome book digitale accessibile via QR',
      'Tutte le info centralizzate',
      'Aggiornamento real-time',
      'Meteo e condizioni in tempo reale',
      'Password Wi-Fi e regole chiare'
    ],
    economicBenefits: {
      title: 'Efficienza e Percezione',
      benefits: [
        'Migliora percezione del servizio (lusso)',
        'Libera tempo allo staff',
        'Riduzione domande ripetitive',
        'Clienti più informati e soddisfatti'
      ],
      savings: 'Risparmio tempo staff: 2-3 ore/giorno'
    },
    target: 'Receptionist / Bagnino Capo',
    kpi: 'Riduzione domande alla reception',
    secretSection: {
      killerPhrases: [
        'Il tuo staff deve vendere e servire, non fare da ufficio informazioni.',
        'Stessa domanda 100 volte al giorno = staff stressato e clienti insoddisfatti.',
        'Welcome book digitale = servizio di lusso che i clienti si aspettano.',
        'Il cliente trova subito quello che cerca = cliente felice = torna.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Quante volte al giorno il suo staff risponde alle stesse domande? "Dov\'è il bagno?", "Qual è la password Wi-Fi?", "A che ora chiudete?". Con il welcome book digitale, tutto è in un QR code. Il cliente lo scansiona, trova tutto, e lo staff può concentrarsi su vendere e servire invece di fare da ufficio informazioni.'
        }
      ],
      objections: [
        {
          objection: 'I clienti preferiscono chiedere',
          response: 'Alcuni sì, ma molti preferiscono essere autonomi. E quelli che usano il digitale liberano tempo allo staff.'
        },
        {
          objection: 'È troppo tecnologico',
          response: 'È un QR code. Scansiona, vede le info. È più semplice di chiedere a qualcuno.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + personalizzazione inclusa',
        'Garanzia: se non riduce domande del 50%, rimborsiamo',
        'Supporto aggiornamento contenuti incluso'
      ],
      pricingStrategy: [
        'Calcolare costo tempo staff per domande',
        'Mostrare risparmio a stagione',
        'Evidenziare miglior percezione servizio'
      ],
      urgencyTriggers: [
        'Ogni domanda ripetuta = tempo perso',
        'Staff stressato = servizio peggiore',
        'I competitor stanno già offrendo questo'
      ]
    }
  },
  {
    id: '11',
    name: 'Fidelity Card \'Beach Club\'',
    shortDescription: 'Raccolta punti digitale con premi a soglie e database clienti',
    icon: '🎫',
    category: 'Marketing Digitale',
    activityType: 'beach',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti occasionali che vanno dalla concorrenza, nessun dato salvato',
    solutions: [
      'Raccolta punti digitale',
      'Premi a soglie personalizzabili',
      'Database clienti completo',
      'Sistema di notifiche promozioni',
      'Analisi comportamento clienti'
    ],
    economicBenefits: {
      title: 'Retention e Lead Generation',
      benefits: [
        'Aumento frequenza di ritorno (Retention)',
        'Lead generation e database clienti',
        'Marketing mirato e personalizzato',
        'Riduzione abbandono verso concorrenza'
      ],
      savings: 'Incremento retention: +25-40%'
    },
    target: 'Titolare (visione a lungo termine)',
    kpi: 'Tasso di ritorno clienti (Retention)',
    secretSection: {
      killerPhrases: [
        'Perché dovrebbero tornare domani? Dagli un motivo per non andare dal vicino.',
        'Cliente senza fidelity = cliente che va dalla concorrenza.',
        'Database clienti = oro. Con la fidelity digitale, lo costruisci automaticamente.',
        'Il cliente che torna 3 volte vale 10 volte quello che viene una volta.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Quanti clienti vede una volta e poi non tornano più? Con la fidelity card digitale, ogni visita accumula punti, riceve premi, e lei costruisce un database di clienti fedeli. Risultato? Clienti che tornano, spendono di più, e portano amici. È il modo più semplice per trasformare clienti occasionali in clienti fedeli.'
        }
      ],
      objections: [
        {
          objection: 'I clienti non usano le fidelity',
          response: 'I clienti usano quello che dà valore. Se accumula punti e riceve sconti reali, lo userà. E con il digitale, è ancora più facile.'
        },
        {
          objection: 'È costoso da gestire',
          response: 'Il digitale costa meno della carta. E il valore di un cliente fedele vale 10 volte il costo del sistema.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + primi 100 clienti inclusi',
        'Garanzia: se non aumenta retention del 20%, rimborsiamo',
        'Supporto campagne marketing incluso'
      ],
      pricingStrategy: [
        'Calcolare valore lifetime di un cliente',
        'Mostrare moltiplicatore per retention',
        'Evidenziare valore database per marketing'
      ],
      urgencyTriggers: [
        'Ogni cliente perso = denaro perso per sempre',
        'I competitor stanno già facendo fidelity',
        'La stagione è breve: fidelizza subito'
      ]
    }
  },
  {
    id: '12',
    name: 'Modulo Richiesta Assistenza',
    shortDescription: 'Pulsante SOS discreto per ombrellone rotto, richiesta bagnino, assistenza',
    icon: '🆘',
    category: 'Digitalizzazione',
    activityType: 'beach',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
    problem: 'Lamentele urlate, recensioni negative, guasti non segnalati',
    solutions: [
      'Pulsante SOS discreto su app/sito',
      'Notifiche immediate allo staff',
      'Tracciamento richieste e tempi',
      'Sistema di feedback post-intervento',
      'Dashboard gestione assistenze'
    ],
    economicBenefits: {
      title: 'Soddisfazione e Reputazione',
      benefits: [
        'Manutenzione tempestiva',
        'Cliente felice = ottima recensione',
        'Riduzione lamentele pubbliche',
        'Miglior percezione del servizio'
      ],
      savings: 'Riduzione recensioni negative: -60-80%'
    },
    target: 'Capo Manutenzione / Gestore',
    kpi: 'Tempo medio di intervento',
    secretSection: {
      killerPhrases: [
        'Risolvi il problema prima che diventi una recensione negativa su TripAdvisor.',
        'Cliente che urla = tutti vedono. Cliente che clicca SOS = problema risolto in silenzio.',
        'Un ombrellone rotto segnalato subito = cliente felice. Non segnalato = recensione negativa.',
        'Il cliente vuole essere ascoltato. Con il modulo assistenza, lo ascolti prima che urli.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Quante recensioni negative ha ricevuto per problemi che potevano essere risolti subito? Con il modulo richiesta assistenza, il cliente segnala un problema in modo discreto, lo staff viene notificato immediatamente, e il problema si risolve prima che diventi una lamentele pubblica. Risultato? Clienti felici, recensioni positive, e reputazione protetta.'
        }
      ],
      objections: [
        {
          objection: 'I clienti preferiscono chiamare',
          response: 'Alcuni sì, ma molti preferiscono essere discreti. E con il sistema, ogni richiesta è tracciata e risolta velocemente.'
        },
        {
          objection: 'Non abbiamo così tanti problemi',
          response: 'Anche pochi problemi mal gestiti possono rovinare la reputazione. Meglio prevenirli.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + formazione staff inclusa',
        'Garanzia: se non riduce recensioni negative del 50%, rimborsiamo',
        'Supporto ottimizzazione processi incluso'
      ],
      pricingStrategy: [
        'Calcolare costo di una recensione negativa',
        'Mostrare valore protezione reputazione',
        'Evidenziare aumento soddisfazione clienti'
      ],
      urgencyTriggers: [
        'Una recensione negativa può costare decine di clienti',
        'I problemi non risolti si moltiplicano',
        'La reputazione online è tutto'
      ]
    }
  },
  {
    id: '13',
    name: 'Pre-ordine Take Away per Cena',
    shortDescription: 'Ordini programmati per il ritiro a fine giornata spiaggia',
    icon: '🍽️',
    category: 'E-commerce',
    activityType: 'beach',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    problem: 'Cucina ferma dopo le 18:00, clienti che comprano cena fuori',
    solutions: [
      'Ordini programmati online',
      'Ritiro a fine giornata spiaggia',
      'Preparazione anticipata ottimizzata',
      'Sistema di notifiche per ritiro',
      'Integrazione con cucina'
    ],
    economicBenefits: {
      title: 'Nuova Linea di Ricavo',
      benefits: [
        'Nuova linea di ricavo rubata a pizzerie/rosticcerie',
        'Monetizzazione cucina dopo le 18:00',
        'Aumento fatturato senza costi aggiuntivi',
        'Fidelizzazione clienti'
      ],
      savings: 'Incremento fatturato: €3.000-10.000/stagione'
    },
    target: 'Gestore / Responsabile Cucina',
    kpi: 'Fatturato fascia oraria 18:00-20:00',
    secretSection: {
      killerPhrases: [
        'I clienti devono cenare. Perché lasciare quei soldi alla pizzeria fuori?',
        'Cucina ferma dopo le 18:00 = denaro che dorme.',
        'Il cliente esce dalla spiaggia e va a cena fuori. Con il pre-ordine, cena da te.',
        'Ogni cliente che cena fuori = soldi persi. Con il take away, li recuperi tutti.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Cosa fa la sua cucina dopo le 18:00? Nulla. E dove vanno a cena i suoi clienti? Dalla pizzeria fuori. Con il pre-ordine take away, i clienti ordinano durante il giorno, ritirano alla fine, e lei monetizza la cucina anche dopo la chiusura spiaggia. È una nuova linea di ricavo che ruba clienti alla concorrenza.'
        }
      ],
      objections: [
        {
          objection: 'La cucina è già impegnata',
          response: 'Con il pre-ordine, sa già cosa preparare e quando. Può organizzarsi meglio e preparare in anticipo.'
        },
        {
          objection: 'I clienti preferiscono andare al ristorante',
          response: 'Alcuni sì, ma molti preferiscono la comodità. E quelli che ordinano sono soldi che altrimenti perderesti.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + menu digitale incluso',
        'Primi 50 ordini: commissioni zero',
        'Garanzia: se non genera almeno €2.000/stagione, rimborsiamo'
      ],
      pricingStrategy: [
        'Calcolare valore medio ordine take away',
        'Mostrare moltiplicatore per numero clienti',
        'Evidenziare margine vs costi fissi cucina'
      ],
      urgencyTriggers: [
        'Ogni sera = opportunità persa',
        'La stagione è breve: massimizza ogni ricavo',
        'I competitor stanno già facendo take away'
      ]
    }
  },
  {
    id: '14',
    name: 'Social Wall dello Chalet',
    shortDescription: 'Aggregatore automatico foto clienti con display in spiaggia',
    icon: '📸',
    category: 'Marketing Digitale',
    activityType: 'beach',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    problem: 'Poca visibilità online, profilo social statico',
    solutions: [
      'Aggregatore automatico foto clienti',
      'Display in spiaggia con social wall',
      'Hashtag dedicato e moderazione',
      'Condivisione automatica sui social',
      'Analisi engagement e reach'
    ],
    economicBenefits: {
      title: 'Marketing Virale e Visibilità',
      benefits: [
        'Pubblicità gratuita virale (UGC)',
        'Effetto FOMO (paura di perdersi l\'evento)',
        'Aumento visibilità online',
        'Database contenuti social'
      ],
      savings: 'Incremento menzioni/tag: +200-400%'
    },
    target: 'Social Media Manager / PR',
    kpi: 'Numero menzioni/tag sui social',
    secretSection: {
      killerPhrases: [
        'I tuoi clienti sono i tuoi migliori commerciali. Fai vedere a tutti quanto si divertono.',
        'Una foto condivisa = pubblicità gratuita a migliaia di persone.',
        'Social wall = FOMO. I clienti vedono gli altri divertirsi e vogliono essere lì.',
        'Contenuti generati dai clienti = marketing che non costa nulla e funziona 10 volte meglio.'
      ],
      scripts: [
        {
          title: 'Opening Script',
          content: 'Quanto spende in pubblicità? E quanti contenuti crea? Con il social wall, i clienti condividono foto, queste appaiono su un display in spiaggia, e automaticamente sui social. Risultato? Pubblicità gratuita, contenuti sempre freschi, e effetto FOMO che porta nuovi clienti. È marketing che si paga da solo.'
        }
      ],
      objections: [
        {
          objection: 'I clienti non condividono',
          response: 'I clienti condividono se gli dai un motivo. Con il social wall, vedono le loro foto in bella mostra e condividono di più.'
        },
        {
          objection: 'Non abbiamo così tanti contenuti',
          response: 'Con il social wall, i contenuti li creano i clienti. Lei non deve fare nulla.'
        }
      ],
      closingTechniques: [
        'Setup gratuito + display incluso',
        'Garanzia: se non aumenta menzioni del 100%, rimborsiamo',
        'Supporto gestione hashtag incluso'
      ],
      pricingStrategy: [
        'Calcolare valore pubblicità equivalente',
        'Mostrare ROI basato su reach social',
        'Evidenziare valore contenuti UGC'
      ],
      urgencyTriggers: [
        'Ogni giorno senza contenuti = visibilità persa',
        'I competitor stanno già facendo social wall',
        'La stagione è breve: costruisci la community ora'
      ]
    }
  },
  {
    id: '15',
    name: 'Lista d’Attesa Digitale',
    shortDescription: 'Gestisci le code senza assembramenti all\'ingresso e con notifiche automatiche',
    tagline: 'Meno Caos. Più Relax. Clienti Felici.',
    icon: '⏳',
    category: 'Digitalizzazione',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che "scappano" perché l\'ingresso è troppo affollato o non sanno quanto tempo devono aspettare.',
    stats: [
      { icon: '🚶‍♂️', label: "Abbandoni", value: "-40%", color: "from-red-500/20 to-red-600/10", text: "text-red-400" },
      { icon: '📱', label: "Efficienza", value: "+25%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💬', label: "Notifica", value: "SMS/WA", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Fila nel Locale', desc: 'Ingresso intasato, staff interrotto ogni 2 min', icon: '😡' },
      after: { title: 'Coda Virtuale', desc: 'Clienti liberi di fare un giro, SMS al tavolo pronto', icon: '✨' }
    },
    psychologyQuote: 'Dare al cliente il controllo del proprio tempo riduce la percezione dell\'attesa del 50%.',
    solutions: [
      'QR Code all\'ingresso per auto-iscrizione',
      'Dashboard gestione tavoli real-time',
      'Notifiche automatiche via SMS o WhatsApp',
      'Statistiche tempi medi d\'attesa',
      'Integrazione con sistema di prenotazione'
    ],
    economicBenefits: {
      title: 'Recupero Clienti e Immagine',
      benefits: [
        'Recupero fino a 5 tavoli/giorno persi per attesa',
        'Staff focalizzato sul servizio, non sulla porta',
        'Database contatti per marketing futuro',
        'Immagine di locale moderno e tecnologico'
      ],
      savings: 'Incremento fatturato stimato: €500 - €2.500/mese'
    },
    secretSection: {
      killerPhrases: [
        'Quanti tavoli perdi perché la gente vede troppa fila e se ne va?',
        'Il tuo staff deve fare il cameriere, non il vigile urbano.',
        'Trasforma l\'incertezza dell\'attesa in un servizio premium.'
      ],
      scripts: [
        { title: 'Opening', content: 'Vedo che nel fine settimana l\'ingresso diventa un imbuto. Sa quanta gente entra, vede il caos e se ne va senza neanche parlare? Con la lista digitale, li "agganciamo" subito.' }
      ],
      objections: [
        { objection: 'I clienti non vogliono scaricare app', response: 'Nessuna app. Scansionano il QR, lasciano il nome e chiudono il browser. Ricevono l\'SMS quando è pronto.' }
      ],
      closingTechniques: ['Periodo di prova gratuito durante il prossimo weekend di fuoco'],
      pricingStrategy: ['Focus sul numero di tavoli "salvati" dall\'abbandono'],
      urgencyTriggers: ['Il prossimo weekend sarà il solito caos: risolviamolo ora.']
    }
  },
  {
    id: '16',
    name: 'Menu Digitale con Filtri Avanzati',
    shortDescription: 'Non un semplice PDF, ma un assistente alla scelta per i tuoi ospiti',
    tagline: 'Filtra. Scegli. Ordina. Wow.',
    icon: '🥗',
    category: 'Digitalizzazione',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che tempestano i camerieri di domande su allergeni, piatti vegani o piccanti, rallentando il flusso degli ordini.',
    stats: [
      { icon: '⏱️', label: "Time/Table", value: "-8 min", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🌱', label: "Vegan-Friendly", value: "100%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🔍', label: "Filtri", value: "Smart", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'PDF illeggibile', desc: 'Zoom continuo, zero ricerca, domande continue', icon: '📄' },
      after: { title: 'Web App Smart', desc: 'Filtri glutine e piccante, navigazione fluida', icon: '📱' }
    },
    psychologyQuote: 'Un cliente che trova subito ciò che può mangiare è un cliente che si sente coccolato e ordina con fiducia.',
    solutions: [
      'Ricerca testuale piatti e ingredienti',
      'Filtri per Intolleranze, Proteine, Prezzo',
      'Foto HD per ogni singola portata',
      'Traduzione automatica in 12 lingue',
      'Abbinamenti vino suggeriti (Cross-selling)'
    ],
    economicBenefits: {
      title: 'Efficienza e Upselling',
      benefits: [
        'Aumento rotazione tavoli (servizio più veloce)',
        'Aumento vendite prodotti "consigliati"',
        'Costo ristampe: AZZERATO',
        'Sicurezza legale totale sulla trasparenza allergeni'
      ],
      savings: 'Risparmio e incremento: €1.500 - €4.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Il cameriere non deve fare l\'elenco degli allergeni, deve vendere l\'esperienza.',
        'Un PDF non è digitale, è solo un foglio scomodo su uno schermo.',
        'Facilita la vita agli intolleranti e diventerai il loro locale preferito.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante volte i camerieri tornano in cucina per chiedere "ma questo è senza glutine?". Ogni volta sono 5 minuti persi.' }
      ],
      objections: [
        { objection: 'Aggiornarlo è faticoso', response: 'Il pannello di controllo è più semplice di postare su Facebook. Lo fai dallo smartphone in 10 secondi.' }
      ],
      closingTechniques: ['Importazione gratuita del menu cartaceo esistente'],
      pricingStrategy: ['Ancoraggio al costo delle ristampe e del tempo cameriere'],
      urgencyTriggers: ['Le nuove normative sugli allergeni sono sempre più rigide.']
    }
  },
  {
    id: '17',
    name: 'Pulsante "Chiama Cameriere" al Tavolo',
    shortDescription: 'Notifiche istantanee allo staff per richieste conto o ordini extra',
    tagline: 'Chiamata discreta. Servizio perfetto.',
    icon: '🛎️',
    category: 'Digitalizzazione',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1551632432-c6d2f5095066?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che agitano le mani o cercano disperatamente lo sguardo del cameriere per chiedere il conto o un\'altra birra.',
    stats: [
      { icon: '🆙', label: "Extra Sales", value: "+18%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⌚', label: "Attesa Conto", value: "-90%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '👋', label: "Discrezione", value: "Silent", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Mani Alzate', desc: 'Clienti frustrati, staff che corre a vuoto', icon: '🙋‍♂️' },
      after: { title: 'Notifica Smart', desc: 'Chiamata mirata (Conto/Assistenza), staff sereno', icon: '⌚' }
    },
    psychologyQuote: 'Il servizio migliore è quello che c\'è esattamente quando serve, senza essere invadente.',
    solutions: [
      'Pulsante virtuale integrato nel Menu QR',
      'Notifiche su Smartwatch o Tablet staff',
      'Distinzione tra "Chiamata", "Conto", "Nuovo Ordine"',
      'Monitoraggio tempi di risposta staff',
      'Funziona senza installare batterie o hardware costoso'
    ],
    economicBenefits: {
      title: 'Monetizzazione dei Desideri',
      benefits: [
        'Massimizzazione bevande extra (ordinate nel momento della voglia)',
        'Liberazione tavoli più rapida dopo il conto',
        'Staff meno stressato e più organizzato',
        'Miglioramento del punteggio su TripAdvisor (Servizio)'
      ],
      savings: 'Aumento scontrino medio: +€2 - €5 per tavolo'
    },
    secretSection: {
      killerPhrases: [
        'Quanto fatturato perdi ogni volta che un cliente voleva un\'altra birra ma non ha visto il cameriere?',
        'Elimina l\'attrito tra il desiderio del cliente e l\'ordine.',
        'Un locale dove non devi "cacciare" il cameriere è un locale di lusso.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le è mai capitato di voler pagare e dover aspettare 15 minuti solo per attirare l\'attenzione? È l\'ultimo ricordo che il cliente ha del locale. Lo vogliamo perfetto.' }
      ],
      objections: [
        { objection: 'I ragazzini ci giocheranno', response: 'Il sistema blocca le chiamate ripetute dallo stesso dispositivo e può essere disattivato per singoli tavoli.' }
      ],
      closingTechniques: ['Installazione di 5 tavoli test oggi stesso'],
      pricingStrategy: ['Focus sull\'aumento delle vendite di impulso'],
      urgencyTriggers: ['I clienti odiano aspettare. Non dar loro scuse.']
    }
  },
  {
    id: '18',
    name: 'Pre-ordinazione del Piatto (Quick Lunch)',
    shortDescription: 'Consenti ai lavoratori in pausa pranzo di ordinare prima dell\'arrivo',
    tagline: 'Arriva. Mangia. Riapri.',
    icon: '🏃‍♂️',
    category: 'E-commerce',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1550966841-3ee7adac169c?auto=format&fit=crop&w=800&q=80',
    problem: 'Pausa pranzo troppo corta: la gente sceglie il fast food perché al ristorante "si perde tempo" ad aspettare il piatto.',
    stats: [
      { icon: '🕙', label: "Time Save", value: "20 min", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔁', label: "Rotazione", value: "x2", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🎯', label: "Target", value: "Business", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Pausa Lunga', desc: '15 min attesa ordine + 20 min cottura', icon: '⌛' },
      after: { title: 'Flash Lunch', desc: 'Piatto servito in 5 min dall\'arrivo', icon: '⚡' }
    },
    psychologyQuote: 'Il tempo è l\'unico lusso che il lavoratore in pausa pranzo non può permettersi. Daglielo.',
    solutions: [
      'Modulo d\'ordine "In Arrivo" via link',
      'Orario di arrivo stimato specificato dal cliente',
      'Pannello cucina dedicato "Priority Lunch"',
      'Pagamento anticipato opzionale (Zero coda in cassa)',
      'Notifica "In Preparazione" al cliente'
    ],
    economicBenefits: {
      title: 'Ottimizzazione Ora di Punta',
      benefits: [
        'Raddoppio dei coperti nella fascia 12:30-14:30',
        'Cucina organizzata in anticipo rispetto ai flussi',
        'Fidelizzazione totale degli uffici in zona',
        'Zero errori nell\'ordine (preso digitalmente)'
      ],
      savings: 'Incremento coperti pausa pranzo: +50-80%'
    },
    secretSection: {
      killerPhrases: [
        'I dipendenti della banca qui vicino mangiano il panino al bar? Portali da te.',
        'La velocità è il miglior condimento per chi lavora.',
        'Organizza la tua cucina mezz\'ora prima che i clienti arrivino.'
      ],
      scripts: [
        { title: 'Opening', content: 'Vedo che alle 13:00 è pieno, ma alle 14:00 è già vuoto. Con il pre-ordine facciamo sedere il doppio delle persone nello stesso tempo.' }
      ],
      objections: [
        { objection: 'E se il cliente arriva tardi?', response: 'Il sistema chiede l\'orario. Se ritarda oltre 15 minuti, il piatto viene messo in attesa e la cucina avvisata.' }
      ],
      closingTechniques: ['Campagna promozionale "Zero Attesa" per i primi 10 uffici'],
      pricingStrategy: ['Sottoscrizione mensile basata sul volume ordini'],
      urgencyTriggers: ['Gli uffici stanno tornando al lavoro in presenza: prendili ora.']
    }
  },
  {
    id: '19',
    name: 'Click & Collect (Ritiro al Volo)',
    shortDescription: 'Sistema di ordinazione proprietario per l\'asporto senza commissioni',
    tagline: 'Ordina ora. Ritira senza fila.',
    icon: '🥡',
    category: 'E-commerce',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786486a2?auto=format&fit=crop&w=800&q=80',
    problem: 'Le grandi piattaforme di delivery mangiano il 30% del tuo margine e non ti danno i dati dei tuoi clienti.',
    stats: [
      { icon: '💰', label: "Margin", value: "+30%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📊', label: "Dati", value: "Tuoi", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🏠', label: "Canali", value: "Diretto", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Delivery App', desc: 'Commissioni alte, cliente anonimo', icon: '💸' },
      after: { title: 'Proprietario', desc: 'Margine pieno, cliente fedele', icon: '📈' }
    },
    psychologyQuote: 'Quando il cliente ordina direttamente da te, sente di sostenere la sua attività preferita e riceve un servizio più personalizzato.',
    solutions: [
      'Store online proprietario (no app da scaricare)',
      'Scelta slot orario preciso per il ritiro',
      'Pagamento online o alla cassa',
      'Stampa ticket automatica in cucina',
      'Database clienti integrato per marketing'
    ],
    economicBenefits: {
      title: 'Indipendenza e Margine',
      benefits: [
        'Eliminazione totale delle commissioni alle piattaforme esterne',
        'Gestione autonoma di prezzi e promozioni',
        'Possibilità di creare "Menu Family" o "Combo" speciali',
        'Risparmio tempo gestione telefonate ordini'
      ],
      savings: 'Risparmio commissioni: €200 - €800/mese'
    },
    secretSection: {
      killerPhrases: [
        'Perché regalare il 30% del tuo duro lavoro a una multinazionale?',
        'I tuoi clienti sono la tua risorsa più preziosa. Non lasciarli a Deliveroo.',
        'Riprenditi il controllo del tuo business di asporto.'
      ],
      scripts: [
        { title: 'Opening', content: 'Ho fatto un calcolo rapido: se spostiamo solo il 20% degli ordini da JustEat al suo sito, risparmia quanto un affitto al mese.' }
      ],
      objections: [
        { objection: 'Le piattaforme portano clienti nuovi', response: 'Vero. Ma perché pagare il 30% anche quando il cliente è già stato da lei 10 volte? Spostiamo i ricorrenti sul suo sistema.' }
      ],
      closingTechniques: ['Sconto 10% sul primo ordine "diretto" offerto da noi'],
      pricingStrategy: ['Focus sul risparmio mensile delle commissioni'],
      urgencyTriggers: ['Le commissioni delle app stanno aumentando ancora.']
    }
  },
  {
    id: '20',
    name: 'Tracciamento Ordine Real-Time',
    shortDescription: 'Pagina di stato che tranquillizza il cliente durante l\'attesa',
    tagline: 'Zero ansia. Solo fame.',
    icon: '📍',
    category: 'Digitalizzazione',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1566433331575-51498d356c11?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che chiamano ogni 5 minuti per chiedere "Dov\'è il mio ordine?", intasando la linea e innervosendo lo staff.',
    stats: [
      { icon: '📞', label: "Chiamate", value: "-70%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '😊', label: "Satisfaction", value: "High", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '✨', label: "Status", value: "Web", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'L\'Incerto', desc: '"Quando arriva? È uscito?"', icon: '🤔' },
      after: { title: 'Il Trasparente', desc: '"In Forno" -> "In Consegna"', icon: '🍕' }
    },
    psychologyQuote: 'L\'incertezza genera ansia. La trasparenza genera fiducia e pazienza.',
    solutions: [
      'Pagina web dinamica di stato ordine',
      'Notifiche push web gratuite',
      'Step personalizzabili (Ricevuto, In Lavorazione, Pronto)',
      'Link al tracking inviato via SMS/WA',
      'Feedback immediato a ordine completato'
    ],
    economicBenefits: {
      title: 'Efficienza Operativa',
      benefits: [
        'Liberazione delle linee telefoniche per nuovi ordini',
        'Meno stress per il personale di cucina e sala',
        'Riduzione rimborsi per "ritardi percepiti"',
        'Raccolta dati sui tempi reali di preparazione'
      ],
      savings: 'Tempo staff risparmiato: 1-2 ore/giorno'
    },
    secretSection: {
      killerPhrases: [
        'Falla finita con il telefono che squilla a vuoto mentre siete nel pieno del servizio.',
        'Dai ai tuoi clienti la stessa esperienza di Domino\'s o Amazon.',
        'Un cliente che sa a che punto è la sua pizza, aspetta volentieri 5 minuti in più.'
      ],
      scripts: [
        { title: 'Opening', content: 'Sabato sera quante volte avete risposto "altri 5 minuti" al telefono? Con questo, il cliente guarda lo schermo e non vi disturba.' }
      ],
      objections: [
        { objection: 'La cucina non ha tempo di aggiornare', response: 'Il tablet in cucina ha pulsanti Giganti. Un tocco = status aggiornato. È più veloce che rispondere a una domanda.' }
      ],
      closingTechniques: ['Integrazione gratuita con il vostro sistema di asporto'],
      pricingStrategy: ['Focus sulla riduzione dello stress dello staff'],
      urgencyTriggers: ['Il traffico telefonico del weekend vi sta facendo perdere ordini.']
    }
  },
  {
    id: '21',
    name: 'Kit "Cena a Casa" Ready-to-Cook',
    shortDescription: 'Vendi i tuoi ingredienti e il tuo segreto per ricette iconiche a casa',
    tagline: 'Il tuo Chef. La loro cucina.',
    icon: '📦',
    category: 'E-commerce',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    problem: 'I tuoi piatti iconici non viaggiano bene con il delivery (si freddano o perdono consistenza).',
    stats: [
      { icon: '🍝', label: "Quality", value: "10/10", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" },
      { icon: '🌍', label: "Raggio", value: "Italia", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⭐', label: "Brand", value: "Top", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Delivery freddo', desc: 'Carbonara gommosa dopo 20 min', icon: '🤢' },
      after: { title: 'Kit Fresco', desc: 'Cucinata sul momento, perfetta', icon: '😋' }
    },
    psychologyQuote: 'Il cibo è un\'esperienza. Permettere al cliente di rifinirla a casa lo rende parte del tuo mondo.',
    solutions: [
      'Modulo d\'ordine per Box Ingredienti pesati',
      'Video-ricetta dello Chef accessibile via QR',
      'Packaging studiato per la conservazione',
      'Gestione spedizioni nazionali o ritiro locale',
      'Personalizzazione Kit regalo (Gift Box)'
    ],
    economicBenefits: {
      title: 'Scalabilità del Brand',
      benefits: [
        'Espansione geografica oltre il raggio della consegna calda',
        'Upselling di prodotti di bottega (olio, vino, conserve)',
        'Nuova fonte di ricavo per i giorni di chiusura',
        'Marketing virale (i clienti postano i loro piatti)'
      ],
      savings: 'Fatturato incrementale: €1.000 - €5.000/mese'
    },
    secretSection: {
      killerPhrases: [
        'Non vendere solo cibo, vendi l\'orgoglio di saperlo fare come te.',
        'Trasforma il tuo ristorante in una bottega di lusso scalabile.',
        'La tua famosa carbonara ora può arrivare ovunque.'
      ],
      scripts: [
        { title: 'Opening', content: 'I suoi clienti le chiedono mai la ricetta? Invece di dargliela, venda loro il kit con i suoi ingredienti segreti!' }
      ],
      objections: [
        { objection: 'Il kit è complicato da preparare', response: 'Possiamo iniziare con i piatti più semplici. Preparare 10 kit al mattino richiede meno tempo che servire 3 tavoli.' }
      ],
      closingTechniques: ['Analisi dei piatti più adatti per il box gratuita'],
      pricingStrategy: ['Focus sull\'alto valore percepito e sul regalo'],
      urgencyTriggers: ['Il mercato dei meal-kit sta esplodendo: posizionati ora.']
    }
  },
  {
    id: '22',
    name: 'Fidelity Card Digitale (Cashback/Timbri)',
    shortDescription: 'Una tessera punti nel wallet dello smartphone per premiare la fedeltà',
    tagline: 'Sempre in tasca. Sempre fedeli.',
    icon: '💳',
    category: 'Marketing Digitale',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    problem: 'Le tessere cartacee vengono perse, dimenticate nei cassetti o rendono impossibile sapere chi sono i tuoi clienti migliori.',
    stats: [
      { icon: '🔁', label: "Retention", value: "+35%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🤳', label: "Wallet", value: "Native", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📊', label: "Database", value: "Auto", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Tessera Carta', desc: 'Dimenticata a casa, zero dati raccolti', icon: '📄' },
      after: { title: 'Digital Wallet', desc: 'Sempre su iPhone/Android, notifiche push', icon: '📱' }
    },
    psychologyQuote: 'La gamification della fedeltà trasforma un pasto in un obiettivo, aumentando la frequenza di visita del 40%.',
    solutions: [
      'Integrazione con Apple Wallet e Google Pay',
      'Sistema "Prendi 10, paghi 9" o Cashback monetario',
      'Invio automatico di notifiche push di compleanno',
      'Pannello analisi clienti migliori (VIP)',
      'Distribuzione via QR code o link social'
    ],
    economicBenefits: {
      title: 'LTV (Life Time Value)',
      benefits: [
        'Aumento garantito della frequenza di acquisto',
        'Costo acquisizione nuovo cliente: Ridotto del 50%',
        'Creazione di un database clienti proprietario',
        'Possibilità di lanciare promozioni in giorni scarichi'
      ],
      savings: 'Valore database: Inestimabile'
    },
    secretSection: {
      killerPhrases: [
        'Chi sono i tuoi 10 clienti che spendono di più? Se non lo sai, li stai perdendo.',
        'Sostituisci la carta con il futuro. Entra nel portafoglio digitale dei tuoi clienti.',
        'Una notifica push "Ci manchi" è più potente di mille volantini.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti clienti occasionali ha? Se avessero la tessera sul telefono, tornerebbero almeno una volta in più al mese. Moltiplichi per il suo scontrino medio.' }
      ],
      objections: [
        { objection: 'Costa troppo ogni mese', response: 'Una pizza omaggio ogni 10 è un investimento, non un costo. Il sistema si paga con i 2 ritorni extra di un solo cliente.' }
      ],
      closingTechniques: ['Design gratuito della grafica della tessera oggi'],
      pricingStrategy: ['Focus sul valore nel tempo del cliente (LTV)'],
      urgencyTriggers: ['I brand globali usano tutti il wallet. Non restare indietro.']
    }
  },
  {
    id: '23',
    name: 'Instant Feedback Post-Pasto',
    shortDescription: 'Intercetta le recensioni negative prima che finiscano online',
    tagline: 'Ascolta. Risolvi. Proteggi.',
    icon: '💬',
    category: 'Marketing Digitale',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1552581234-2612b704f8aa?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti insoddisfatti che non dicono nulla al tavolo ma scrivono "veleno" su Google o TripAdvisor una volta a casa.',
    stats: [
      { icon: '⭐', label: "Review Score", value: "+0.8", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🛡️', label: "Reputazione", value: "Safe", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🗯️', label: "Negative", value: "-60%", color: "from-red-500/20 to-red-600/10", text: "text-red-400" }
    ],
    beforeAfter: {
      before: { title: 'Silenzio e Veleno', desc: 'Critica pubblica senza diritto di replica', icon: '🤬' },
      after: { title: 'Dialogo Diretto', desc: 'Feedback privato, risoluzione immediata', icon: '🤝' }
    },
    psychologyQuote: 'Il cliente vuole essere ascoltato. Se gli dai modo di sfogarsi privatamente, spesso non sente il bisogno di farlo pubblicamente.',
    solutions: [
      'Invio automatico form feedback 30 min dopo il conto',
      'Alert istantaneo allo staff per feedback < 3 stelle',
      'Re-direzione automatica feedback positivi su Google',
      'Analisi semantica dei commenti per migliorare il servizio',
      'Interazione via WhatsApp o Email'
    ],
    economicBenefits: {
      title: 'Protezione Asset Digitale',
      benefits: [
        'Salvaguardia del posizionamento su TripAdvisor/Google',
        'Miglioramento continuo basato su dati reali, non umori',
        'Recupero dei clienti insoddisfatti prima che vadano altrove',
        'Aumento della fiducia del personale (premio per feedback positivi)'
      ],
      savings: 'Valore reputazione: Migliaia di euro salvati'
    },
    secretSection: {
      killerPhrases: [
        'Una recensione da 1 stella in prima pagina può costarti 50 coperti al mese.',
        'Gestisci il malcontento in privato, celebra il successo in pubblico.',
        'Smetti di sperare che sia andato tutto bene. Sappilo.'
      ],
      scripts: [
        { title: 'Opening', content: 'Qual è stata l\'ultima recensione negativa che ha ricevuto? Se l\'avesse saputo 5 minuti dopo il pasto, avrebbe potuto offrire un amaro e scusarsi, salvando il cliente.' }
      ],
      objections: [
        { objection: 'I clienti si stufano di ricevere messaggi', response: 'Il messaggio è cordiale e brevissimo (2 tasti). Il 40% dei clienti è felice di dire la sua se sente che conta.' }
      ],
      closingTechniques: ['Setup gratuito del workflow di salvataggio recensioni'],
      pricingStrategy: ['Focus sul costo di una recensione negativa rimossa'],
      urgencyTriggers: ['Le recensioni estive sono quelle che ti portano clienti tutto l\'anno.']
    }
  },
  {
    id: '24',
    name: 'Wi-Fi Marketing (Social Login)',
    shortDescription: 'Offri internet gratis e trasforma ogni connessione in un contatto marketing',
    tagline: 'Connessi a te. Per sempre.',
    icon: '📶',
    category: 'Marketing Digitale',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    problem: 'Dai il Wi-Fi gratis ma non ottieni nulla in cambio, o peggio, devi dettare la password 50 volte al giorno.',
    stats: [
      { icon: '📧', label: "Email Leads", value: "x4", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '👥', label: "Social", value: "+Segui", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" },
      { icon: '📶', label: "Range", value: "HD", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Wi-Fi Pass', desc: '"Qual è la password?", zero dati ottenuti', icon: '❓' },
      after: { title: 'Social Gateway', desc: 'Login con FB/Email, database che cresce', icon: '🚀' }
    },
    psychologyQuote: 'Il Wi-Fi è diventato un servizio base. Trasformarlo in un asset di marketing è puro genio aziendale.',
    solutions: [
      'Pagina di benvenuto personalizzata (Splash Page)',
      'Accesso via Facebook, Google o Email',
      'Redirect automatico sulla pagina "Piatto del Giorno"',
      'Limitazione banda per evitare abusi',
      'Integrazione automatica con Mailchimp/CRM'
    ],
    economicBenefits: {
      title: 'Database e Visibilità',
      benefits: [
        'Crescita organica del database email del 300%',
        'Aumento immediato dei "Segui" sulle pagine social',
        'Display di promozioni speciali durante il login',
        'Analisi dei tempi di permanenza media nel locale'
      ],
      savings: 'Costo lead: Quasi zero'
    },
    secretSection: {
      killerPhrases: [
        'Stai regalando connettività. Inizia a scambiarla con contatti preziosi.',
        'Ogni persona che si connette è un cliente che puoi richiamare domani.',
        'Smettila di gridare la password. Fagli fare login.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti turisti passano da qui e poi spariscono? Se usano il suo Wi-Fi con il Social Login, lei potrà inviargli un\'offerta l\'anno prossimo quando tornano in zona.' }
      ],
      objections: [
        { objection: 'La gente ha paura per la privacy', response: 'Il sistema è 100% conforme al GDPR. È la stessa procedura che usano negli aeroporti o nei grandi centri commerciali.' }
      ],
      closingTechniques: ['Sopralluogo tecnico gratuito per configurare l\'access point'],
      pricingStrategy: ['Focus sul numero di email raccolte mensilmente'],
      urgencyTriggers: ['La stagione turistica è il momento migliore per raccogliere email.']
    }
  },
  {
    id: '25',
    name: 'Landing Page "Piatto del Giorno"',
    shortDescription: 'Una pagina ultra-veloce per i tuoi fuori menù quotidiani',
    tagline: 'Fresco. Oggi. Tuo.',
    icon: '📝',
    category: 'Digitalizzazione',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80',
    problem: 'Scrivere il fuori menù sulla lavagna che non tutti leggono, o doverlo spiegare a voce a ogni tavolo.',
    stats: [
      { icon: '🍽️', label: "Special Sales", value: "+22%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" },
      { icon: '👀', label: "Views", value: "High", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔄', label: "Updates", value: "Daily", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'La Lavagna', desc: 'Scomoda, polverosa, poco visibile', icon: '🖍️' },
      after: { title: 'Display Digital', desc: 'Foto del fresco di giornata, link via QR', icon: '📸' }
    },
    psychologyQuote: 'Il "Piatto del Giorno" evoca esclusività e freschezza. Renderlo visivamente irresistibile ne raddoppia le vendite.',
    solutions: [
      'Interfaccia di aggiornamento ultra-rapida (1 min)',
      'Focus su 2-3 proposte premium giornaliere',
      'Integrazione con Instagram Stories automatica',
      'QR Code dedicato su segnaposto o lavagna',
      'Conteggio "Piatti Rimasti" in tempo reale'
    ],
    economicBenefits: {
      title: 'Margine e Zero Sprechi',
      benefits: [
        'Spinta su piatti con materie prime fresche del mattino',
        'Riduzione dello spreco alimentare (vendita mirata)',
        'Aumento dello scontrino medio grazie ai fuori menù premium',
        'Velocizzazione dell\'ordine (il cliente sa già cosa vuole)'
      ],
      savings: 'Riduzione spreco: -15%'
    },
    secretSection: {
      killerPhrases: [
        'Vendi quello che vuoi tu, non quello che capita.',
        'Usa la tecnologia per urlare che il tuo cibo è fresco ogni giorno.',
        'La bellezza di un piatto fotografato batte la lavagna 10 a 0.'
      ],
      scripts: [
        { title: 'Opening', content: 'Cosa succede se lo Chef compra una cassa di pesce speciale al mattino? Con questa pagina, alle 12:00 tutto il quartiere sa che è disponibile.' }
      ],
      objections: [
        { objection: 'Non ho tempo di fare foto ogni giorno', response: 'Possiamo pre-caricare foto d\'archivio dei suoi piatti. Basta cambiare il testo in 10 secondi.' }
      ],
      closingTechniques: ['Settimana di prova: vediamo quanti piatti speciali vendiamo in più'],
      pricingStrategy: ['Focus sulla riduzione dello spreco alimentare'],
      urgencyTriggers: ['Chi mangia fuori ogni giorno cerca sempre la novità.']
    }
  },
  {
    id: '26',
    name: 'Prenotazione Grandi Gruppi',
    shortDescription: 'Gestisci compleanni e cene aziendali con menù fissi e caparra online',
    tagline: 'Grandi gruppi. Zero rischi.',
    icon: '👥',
    category: 'Digitalizzazione',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80',
    problem: 'Tavolate da 20 che non si presentano (no-show), conti separati infiniti e confusione sulle scelte dei menù fissi.',
    stats: [
      { icon: '🛡️', label: "No-Show", value: "Zero", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💳', label: "Caparra", value: "Si", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🍗', label: "Menu Pre-set", value: "100%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Il Caos Gruppi', desc: 'Telefonate infinite, no-show pesante', icon: '📉' },
      after: { title: 'Flusso Business', desc: 'Caparra pagata, menu scelto, tutto pronto', icon: '💼' }
    },
    psychologyQuote: 'La professionalità nella gestione dei gruppi attrae le aziende. E le aziende sono il tuo cliente migliore per volume.',
    solutions: [
      'Form di richiesta specifico per eventi > 10 persone',
      'Scelta obbligatoria tra 2-3 Menù Fissi pre-impostati',
      'Gateway di pagamento per caparra confirmatoria digitale',
      'Promemoria automatici agli organizzatori',
      'Gestione intolleranze preventivata per l\'intero gruppo'
    ],
    economicBenefits: {
      title: 'Sicurezza e Flusso Cassa',
      benefits: [
        'Eliminazione totale delle perdite per no-show sui grandi numeri',
        'Acquisti materie prime precisi al grammo (grazie ai menù fissi)',
        'Cash flow anticipato grazie alle caparre',
        'Staff organizzato perfettamente per la serata'
      ],
      savings: 'Garanzia incasso: 100%'
    },
    secretSection: {
      killerPhrases: [
        'Un tavolo da 30 che non viene ti rovina la settimana. Proteggiti.',
        'Smettila di inseguire gli organizzatori al telefono.',
        'Le aziende cercano locali che sanno gestire i processi business.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le è mai capitato un compleanno da 20 persone che disdice all\'ultimo momento? Quanto le è costato tra personale e cibo buttato?' }
      ],
      objections: [
        { objection: 'I clienti non vogliono pagare la caparra', response: 'Se non vogliono pagare 50€ di caparra per 20 persone, probabilmente non sono clienti affidabili. Meglio saperlo prima.' }
      ],
      closingTechniques: ['Configurazione gratuita dei primi 3 menù fissi per eventi'],
      pricingStrategy: ['Focus sulla protezione da perdite catastrofiche'],
      urgencyTriggers: ['Le prenotazioni per le cene aziendali iniziano settimane prima.']
    }
  },
  {
    id: '27',
    name: 'Voucher Regalo Digitali',
    shortDescription: 'Permetti ai tuoi fan di regalare un\'esperienza nel tuo locale con un click',
    tagline: 'Regala un\'emozione. Ricevi un cliente.',
    icon: '🎁',
    category: 'E-commerce',
    activityType: 'restaurant',
    image: 'https://images.unsplash.com/photo-1549463591-1476b4542191?auto=format&fit=crop&w=1200&q=80',
    problem: 'Gente che vorrebbe regalare una cena ma non sa come fare, o tu che devi gestire buoni cartacei scritti a mano.',
    stats: [
      { icon: '📈', label: "New Sales", value: "+12%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '💰', label: "Cash Flow", value: "NOW", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🎁', label: "Gift", value: "Auto", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Buono a mano', desc: 'Difficile da vendere, facile da falsificare', icon: '📝' },
      after: { title: 'Digital Gift', desc: 'PDF automatico, incasso immediato', icon: '✨' }
    },
    psychologyQuote: 'Vendere un regalo significa vendere la tua reputazione. Rendilo un processo impeccabile dal click al tavolo.',
    solutions: [
      'Modulo acquisto Voucher sul sito 24/7',
      'Generazione automatica PDF con QR Code univoco',
      'Validazione Voucher via smartphone staff',
      'Scadenze automatiche e promemoria',
      'Personalizzazione con dedica "Per: ... Da: ..."'
    ],
    economicBenefits: {
      title: 'Incasso Anticipato',
      benefits: [
        'Vendita di servizi non ancora erogati (Liquidità immediata)',
        'Acquisizione di nuovi clienti (chi riceve il regalo)',
        'Breakage: una percentuale di voucher (ca. 10%) non viene mai usata',
        'Zero gestione manuale o burocratica'
      ],
      savings: 'Cash flow: Anticipato 100%'
    },
    secretSection: {
      killerPhrases: [
        'Mentre dormi, qualcuno sta comprando un regalo da 100€ sul tuo sito.',
        'Trasforma i tuoi clienti nei tuoi migliori promotori.',
        'La stagione dei regali è tutto l\'anno: compleanni, lauree, anniversari.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti voucher ha venduto lo scorso Natale? Se avesse avuto un tasto "Regala" sul sito, ne avrebbe venduti il triplo senza fare una telefonata.' }
      ],
      objections: [
        { objection: 'È difficile da contabilizzare', response: 'Il sistema le invia un report mensile di tutti i voucher venduti e usati. È tutto trasparente e tracciato.' }
      ],
      closingTechniques: ['Attivazione del tasto "Regala" entro 24 ore'],
      pricingStrategy: ['Focus sulla liquidità immediata (Cash is King)'],
      urgencyTriggers: ['Le festività sono alle porte: non farti trovare impreparato.']
    }
  },
  {
    id: '28',
    name: 'Prenotazione Pane e Lievitati',
    shortDescription: 'Un modulo dedicato per riservare il pane fresco o i cornetti del mattino',
    tagline: 'Il tuo pane. Al sicuro. Ogni mattina.',
    icon: '🥐',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che arrivano tardi e trovano gli scaffali vuoti, o che rinunciano a venire per paura di non trovare i loro prodotti preferiti.',
    stats: [
      { icon: '🥯', label: "Prenotati", value: "+30%", color: "from-amber-500/20 to-amber-600/10", text: "text-amber-400" },
      { icon: '📉', label: "Spreco", value: "-25%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⏰', label: "Tempo", value: "-10m", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" }
    ],
    beforeAfter: {
      before: { title: 'Speranza', desc: '"Speriamo ci siano ancora i cornetti"', icon: '🤞' },
      after: { title: 'Certezza', desc: 'Ritiro garantito e veloce', icon: '✅' }
    },
    psychologyQuote: 'La sicurezza di trovare il prodotto preferito crea un\'abitudine d\'acquisto imbattibile.',
    solutions: [
      'Catalogo prodotti prenotabili entro le 20:00 per il mattino dopo',
      'Alert automatico allo staff per la preparazione degli ordini',
      'Notifica di conferma al cliente con orario di ritiro',
      'Gestione quantità massime prenotabili per prodotto',
      'Storico prenotazioni per analisi preferenze'
    ],
    economicBenefits: {
      title: 'Fidelizzazione e Ottimizzazione',
      benefits: [
        'Aumento della fedeltà grazie al servizio "Sempre Pronto"',
        'Ottimizzazione della produzione basata su ordini certi',
        'Riduzione drastica dell\'invenduto a fine giornata',
        'Incremento dello scontrino medio con cross-selling al ritiro'
      ],
      savings: 'Risparmio invenduto: €200-500/mese'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli sperare di trovare il pane. Fallo sentire sicuro.',
        'La prenotazione è l\'inizio di un rito quotidiano.',
        'Chi prenota torna sempre. Chi non trova nulla, va altrove.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti clienti se ne vanno a mani vuote alle 11:00? Se avessero prenotato ieri sera, oggi avrebbe venduto 20 pezzi in più.' }
      ],
      objections: [
        { objection: 'È difficile da gestire per lo staff', response: 'Il sistema crea una lista sintetica e ordinata ogni mattina. È più facile che rispondere al telefono.' }
      ],
      closingTechniques: ['Setup gratuito del listino per la prima settimana'],
      pricingStrategy: ['Focus sulla riduzione dello spreco'],
      urgencyTriggers: ['I clienti amano le comodità che li fanno sentire speciali.']
    }
  },
  {
    id: '29',
    name: 'Configuratore Torte da Cerimonia',
    shortDescription: 'Crea la tua torta ideale online con preventivo immediato',
    tagline: 'La tua festa. La tua torta. Un click.',
    icon: '🎂',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80',
    problem: 'Decine di telefonate o visite in negozio per preventivi, incomprensioni sui gusti e incertezza sui prezzi.',
    stats: [
      { icon: '💸', label: "Preventivi", value: "Auto", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🍰', label: "Order Val", value: "+45%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" },
      { icon: '⚡', label: "Speed", value: "Real-time", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" }
    ],
    beforeAfter: {
      before: { title: 'Lungo Processo', desc: 'Telefonate, bozzetti a mano, attesa prezzo', icon: '⏳' },
      after: { title: 'Instant Wow', desc: 'Anteprima visiva, prezzo certo, ordine ok', icon: '✨' }
    },
    psychologyQuote: 'Dare il controllo creativo al cliente aumenta la propensione alla spesa del 40%.',
    solutions: [
      'Scelta step-by-step: base, farcitura, decorazione e ostia',
      'Calcolo automatico del prezzo per kg o porzioni',
      'Upload di immagini per personalizzazioni grafiche',
      'Prenotazione data di ritiro con blocco date "sold out"',
      'Integrazione pagamento acconto online'
    ],
    economicBenefits: {
      title: 'Business Scalabile',
      benefits: [
        'Risparmio di ore di consulenza front-office',
        'Eliminazione di errori di interpretazione (tutto scritto)',
        'Aumento del valore ordine tramite add-on (scritte, candeline)',
        'Pianificazione perfetta del carico di lavoro settimanale'
      ],
      savings: 'Tempo staff risparmiato: 5 ore/settimana'
    },
    secretSection: {
      killerPhrases: [
        'Trasforma il preventivo in un divertimento per il cliente.',
        'Sostituisci "Ti farò sapere" con "Ecco il tuo ordine".',
        'Vendi torte mentre il laboratorio è chiuso.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanto tempo perde a spiegare le solite varianti di torta? Con il configuratore, il cliente lo fa da solo a casa sua, felice.' }
      ],
      objections: [
        { objection: 'Le torte di nozze sono troppo complesse', response: 'Il sistema gestisce benissimo le basi. Per le richieste ultra-custom, il filtro permette di richiedere una chiamata.' }
      ],
      closingTechniques: ['Galleria fotografica premium inclusa nel configuratore'],
      pricingStrategy: ['Focus sull\'aumento dello scontrino medio tramite up-selling'],
      urgencyTriggers: ['Prenotazioni torte per weekend: saturano velocemente.']
    }
  },
  {
    id: '30',
    name: 'Abbonamento "Colazione in Ufficio"',
    shortDescription: 'Consegna programmata di box di pasticceria o focacce in azienda',
    tagline: 'Il buonumore in ufficio, ogni mattina.',
    icon: '🏢',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec41b50d?auto=format&fit=crop&w=800&q=80',
    problem: 'Perdere tempo al mattino per la colazione aziendale, dipendenti che arrivano con scatole improvvisate o prodotti freddi.',
    stats: [
      { icon: '📅', label: "Recurring", value: "100%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🥐', label: "Volume", value: "High", color: "from-amber-500/20 to-amber-600/10", text: "text-amber-400" },
      { icon: '💰', label: "Retention", value: "Stable", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Random Delivery', desc: 'Disorganizzato, scontrini bassi casuali', icon: '❓' },
      after: { title: 'Business Flow', desc: 'Entrate ricorrenti garantite, logistica ok', icon: '🚚' }
    },
    psychologyQuote: 'La colazione è un rito sociale. Diventare il fornitore ufficiale di questo rito significa avere entrate certe per anni.',
    solutions: [
      'Piani settimanali o mensili per uffici e co-working',
      'Piattaforma per selezionare i prodotti ogni venerdì',
      'Fatturazione automatica mensile per aziende',
      'Box tematiche (Salata, Dolce, Healthy, Mix)',
      'Badge "Azienda Felice" per chi si abbona'
    ],
    economicBenefits: {
      title: 'Stabilità Finanziaria',
      benefits: [
        'Cash flow prevedibile a inizio mese',
        'Consumo costante senza fluttuazioni meteo',
        'Ottimizzazione dei percorsi di consegna',
        'Creazione di una rete di clienti B2B solida'
      ],
      savings: 'Margine garantito: +20% rispetto al banco'
    },
    secretSection: {
      killerPhrases: [
        'Esci dal bancone, entra nelle aziende del territorio.',
        'L\'abbonamento è the real "sacro graal" del fatturato costante.',
        'Sii l\'eroe che porta i cornetti caldi a chi lavora.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti aziende ci sono nel raggio di 2km? Se ognuna prendesse un box da 20€ due volte a settimana, quanto cambierebbe il suo mese?' }
      ],
      objections: [
        { objection: 'Non ho i mezzi per consegnare', response: 'Possiamo iniziare con 5 aziende vicine gestibili a piedi o integrare partner di delivery locali.' }
      ],
      closingTechniques: ['Presentazione kit di benvenuto "Box Assaggio" per uffici'],
      pricingStrategy: ['Focus sul ricavo annuo per ogni ufficio acquisito'],
      urgencyTriggers: ['Le aziende stanno tornando in ufficio: è il momento perfetto.']
    }
  },
  {
    id: '31',
    name: 'Notifica "Appena Sfornato"',
    shortDescription: 'Invia messaggi istantanei quando escono prodotti caldi dal forno',
    tagline: 'Dal forno allo smartphone. All\'istante.',
    icon: '🔥',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1549463591-1476d454base6?auto=format&fit=crop&w=800&q=80',
    problem: 'Vendere focaccia o pane caldo è più facile, ma il cliente non sa mai quando è il momento perfetto per venire.',
    stats: [
      { icon: '📈', label: "Impulso", value: "+50%", color: "from-orange-500/20 to-orange-600/10", text: "text-orange-400" },
      { icon: '💨', label: "Sold Out", value: "Veloce", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔔', label: "Open Rate", value: "98%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Vendita Passiva', desc: 'Aspetti che il cliente passi per caso', icon: '🚶' },
      after: { title: 'Vendita Attiva', desc: 'Richiami il cliente con il "profumo digitale"', icon: '📲' }
    },
    psychologyQuote: 'Il desiderio di un prodotto appena sfornato è un impulso primordiale. Chi riceve la notifica sente di dover agire subito o perderà l\'occasione.',
    solutions: [
      'Pulsante "Sfornato!" in laboratorio per lo Chef',
      'Invio notifiche via WhatsApp, Telegram o SMS',
      'Segmentazione clienti (es. amanti della focaccia vs cornetti)',
      'Possibilità di pre-prenotazione lampo dalla notifica',
      'Countdown "Disponibile per i prossimi 15 minuti"'
    ],
    economicBenefits: {
      title: 'Vendita Emozionale',
      benefits: [
        'Aumento immediato del traffico in negozio nei momenti morti',
        'Azzeramento dei tempi di permanenza del prodotto in vetrina',
        'Percezione di eccellenza e freschezza costante',
        'Crescita database contatti per promozioni dirette'
      ],
      savings: 'Velocità rotazione stock: x3'
    },
    secretSection: {
      killerPhrases: [
        'Fagli sentire il profumo attraverso lo schermo.',
        'La notifica "Appena Sfornato" batte qualsiasi post su Instagram.',
        'Trasforma il pane caldo in un evento.'
      ],
      scripts: [
        { title: 'Opening', content: 'Cosa succederebbe se ogni volta che inforna le focacce, 100 persone ricevessero un messaggio? Quante ne venderebbe prima che si raffreddino?' }
      ],
      objections: [
        { objection: 'Disturbiamo il cliente', response: 'Il cliente decide lui quali notifiche ricevere. Chi ama il pane caldo, le aspetta come un regalo.' }
      ],
      closingTechniques: ['Esempio pratico: invio di una notifica finta in diretta'],
      pricingStrategy: ['Focus sul valore dell\'impulso all\'acquisto'],
      urgencyTriggers: ['Il prodotto caldo si vende da solo, basta farlo sapere.']
    }
  },
  {
    id: '32',
    name: 'Vetrina Digitale dei Dolci',
    shortDescription: 'Pagina real-time che mostra la disponibilità attuale al banco',
    tagline: 'Quello che vedi, è quello che puoi avere.',
    icon: '🍩',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che vengono per un bignè specifico e scoprono che è finito, o che non sanno quali novità ci sono oggi.',
    stats: [
      { icon: '👁️', label: "Visite", value: "+40%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📸', label: "Qualità", value: "4K", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" },
      { icon: '🔁', label: "Refresh", value: "Auto", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Vetrina "Mistero"', desc: 'Il cliente entra senza sapere cosa c\'è', icon: '❓' },
      after: { title: 'Showroom Digitale', desc: 'Tutto il banco consultabile da remoto', icon: '📱' }
    },
    psychologyQuote: 'La varietà visiva stimola la dopamina. Vedere una vetrina piena online spinge il cliente a mettersi in auto.',
    solutions: [
      'Dashboard semplice per segnare prodotti "Esauriti"',
      'Galleria fotografica HD con descrizione ingredienti',
      'Integrazione con schermo in negozio (Digital Signage)',
      'Possibilità di ordinare direttamente dalla vetrina',
      'Alert "Ultimi 3 pezzi" automatico'
    ],
    economicBenefits: {
      title: 'Massima Visibilità',
      benefits: [
        'Riduzione delle domande ripetitive allo staff',
        'Valorizzazione di tutta la gamma (anche dei prodotti meno noti)',
        'Spinta sulle vendite stagionali tramite "In Evidenza"',
        'Aumento del tempo di permanenza sul sito e conoscenza brand'
      ],
      savings: 'Tempo spiegazione prodotti: -30%'
    },
    secretSection: {
      killerPhrases: [
        'La tua vetrina non finisce sulla strada, finisce nel loro taschino.',
        'Se non lo vedono, non lo desiderano.',
        'Falli scegliere mentre sono ancora a casa o in ufficio.'
      ],
      scripts: [
        { title: 'Opening', content: 'Molti non sanno che lei fa anche i macaron. Se fossero in vetrina digitale, ne venderebbe di più senza doverli nemmeno presentare.' }
      ],
      objections: [
        { objection: 'Aggiornarla è un lavoro extra', response: 'Basta un click su un tablet. Lo staff lo fa mentre mette via gli ultimi pezzi. 10 secondi netti.' }
      ],
      closingTechniques: ['Servizio fotografico professionale per i primi 20 prodotti'],
      pricingStrategy: ['Focus sulla riduzione dei tempi d\'attesa in negozio'],
      urgencyTriggers: ['La concorrenza ha già foto migliori su IG. Tu devi avere il banco in diretta.']
    }
  },
  {
    id: '33',
    name: 'Click & Collect "Salva Tempo"',
    shortDescription: 'Pagamento online e ritiro rapido per saltare la fila',
    tagline: 'Meno fila. Più dolcezza.',
    icon: '🏃',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    problem: 'La gente ha fretta al mattino. Vedere la fila fuori dal forno li spinge a andare altrove o a rinunciare.',
    stats: [
      { icon: '🏎️', label: "Fila", value: "Zero", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💳', label: "Pre-pagato", value: "95%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📊', label: "Coperti", value: "x2", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Lungo d\'attesa', desc: 'Stress, clienti che scappano vedendo gente', icon: '😫' },
      after: { title: 'Express Pickup', desc: 'Entri, prendi, esci in 30 secondi', icon: '⚡' }
    },
    psychologyQuote: 'Il tempo è il nuovo lusso. Chi permette al cliente di risparmiarlo, vince la sua fedeltà eterna.',
    solutions: [
      'Corsia preferenziale o punto ritiro dedicato',
      'Pagamento sicuro con Apple/Google Pay integrati',
      'QR Code univoco per il ritiro istantaneo',
      'Gestione fasce orarie per evitare assembramenti',
      'Stampa automatica scontrino in laboratorio all\'arrivo'
    ],
    economicBenefits: {
      title: 'Capacità Operativa',
      benefits: [
        'Aumento dei volumi venduti senza aumentare lo spazio banco',
        'Gestione ottimizzata degli ordini complessi (più prodotti)',
        'Incasso garantito (no ordini non ritirati)',
        'Migliore atmosfera in negozio (meno caos e urla)'
      ],
      savings: 'Costi gestione ordini: -40%'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli fare la fila. Fagli fare il download.',
        'La velocità raddoppia i tuoi incassi senza raddoppiare il locale.',
        'Il Click & Collect è oggi uno standard richiesto da tutti.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti clienti perde perché vedono la coda fino al marciapiede? Se sapessero che possono ritirare in 30 secondi, verrebbero tutti qui.' }
      ],
      objections: [
        { objection: 'Non ho spazio per un punto ritiro', response: 'Basta un metro di banco e un cartello. È un investimento di spazio che moltiplica il fatturato.' }
      ],
      closingTechniques: ['Design gratuito del cartello "Ritiro Prioritario"'],
      pricingStrategy: ['Focus sull\'aumento della rotazione clienti'],
      urgencyTriggers: ['Le ore di punta sono quelle dove perdi più soldi.']
    }
  },
  {
    id: '34',
    name: 'Kit "Pasticcere a Casa"',
    shortDescription: 'Box con basi pronte e video-tutorial per decorare torte a casa',
    tagline: 'Diventa lo Chef della tua cucina.',
    icon: '👨‍🍳',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che amano l\'home-baking ma non hanno tempo o capacità di fare le basi perfette (come la sfoglia o il pan di spagna).',
    stats: [
      { icon: '📦', label: "New Product", value: "Viral", color: "from-purple-500/20 to-purple-600/10", text: "text-purple-400" },
      { icon: '🎥', label: "Tutorial", value: "QR Ready", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💰', label: "Margine", value: "Ottimo", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Dolci deludenti', desc: 'Basi che crollano, molta fatica, poca resa', icon: '😞' },
      after: { title: 'Successo Gourmet', desc: 'Basi professionali, divertimento assicurato', icon: '🏆' }
    },
    psychologyQuote: 'Il kit permette al cliente di dire "l\'ho fatto io", usando la tua qualità. È un legame emotivo potentissimo.',
    solutions: [
      'Box tematiche (Bignè, Tiramisù professionale, Decorazione Torta)',
      'Sac-à-poche pre-riempite e basi già cotte/abbattute',
      'Video tutorial esclusivo accessibile via QR code',
      'Ingredienti pesati al grammo (zero scarti)',
      'Brandizzazione del packaging per regalo premium'
    ],
    economicBenefits: {
      title: 'Nuovi Mercati',
      benefits: [
        'Vendita di prodotti ad alto valore aggiunto (semilavorati proprietari)',
        'Destagionalizzazione delle vendite (box regalo tutto l\'anno)',
        'Visibilità social massiva grazie ai clienti che postano il risultato',
        'Bassi costi di packaging rispetto alla torta finita'
      ],
      savings: 'Tempo manodopera finitura: Risparmiato'
    },
    secretSection: {
      killerPhrases: [
        'Vendi l\'esperienza, non solo il dolce.',
        'Coinvolgi le famiglie e i bambini nel tuo brand.',
        'Il Kit è il regalo perfetto che non si rovina nel trasporto.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le mamme e i papà cercano attività da fare con i figli. Una sua box per decorare i biscotti è il prodotto col successo più veloce dell\'anno.' }
      ],
      objections: [
        { objection: 'Ruba vendite alle torte finite', response: 'No, attira un cliente diverso che altrimenti comprerebbe gli ingredienti al supermercato. Tu gli vendi la qualità.' }
      ],
      closingTechniques: ['Format video tutorial incluso nel primo setup'],
      pricingStrategy: ['Focus sulla componente esperienziale e ludica'],
      urgencyTriggers: ['I weekend e le piogge sono i motori di vendita di questi kit.']
    }
  },
  {
    id: '35',
    name: 'Fidelity "Il Forno di Fiducia"',
    shortDescription: 'Raccolta punti digitale per premiare la spesa quotidiana',
    tagline: 'Ogni pane merita un premio.',
    icon: '🧧',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    problem: 'Al forno il cliente è spesso anonimo. Non sai chi viene ogni giorno e non puoi incentivarli a tornare se saltano un giorno.',
    stats: [
      { icon: '🔄', label: "Ritorno", value: "+28%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '💳', label: "Wallet", value: "Smart", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⭐', label: "VIP base", value: "Active", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Cliente Ignoto', desc: 'Passa, compra, non lascia traccia', icon: '👤' },
      after: { title: 'Legame Digitale', desc: 'Profilato, premiato, fedele al brand', icon: '💎' }
    },
    psychologyQuote: 'Accumulare punti per il pane quotidiano trasforma una necessità in un gioco gratificante.',
    solutions: [
      'Punti basati sulla spesa o sul numero di visite',
      'Premi a scelta (es. pane omaggio, torta scontata)',
      'Notifiche push per punti in scadenza o sesto acquisto',
      'Integrazione con pagamenti per auto-caricamento punti',
      'Modulo "Porta un amico" con bonus omaggio'
    ],
    economicBenefits: {
      title: 'Dati e Guadagni',
      benefits: [
        'Aumento della spesa mensile pro-capite del 20%',
        'Recupero dei clienti "dormienti" tramite promozioni mirate',
        'Analisi dei periodi di picco e calo per singoli clienti',
        'Brand in primo piano nel wallet dello smartphone'
      ],
      savings: 'Efficacia promo: +40% rispetto al volantino'
    },
    secretSection: {
      killerPhrases: [
        'Premia il pane, ricevi il cuore.',
        'Sostituisci la tessera stropicciata con un\'icona sul telefono.',
        'La fedeltà non si compra, si coltiva ogni mattina.'
      ],
      scripts: [
        { title: 'Opening', content: 'Saprebbe dire chi sono i suoi 50 clienti più fedeli? Se domani non vengono, come fa a ricordargli che li sta aspettando?' }
      ],
      objections: [
        { objection: 'I margini sul pane sono bassi', response: 'Proprio per questo la fedeltà è vitale. Il costo di un cornetto omaggio è nullo rispetto a 30 acquisti sicuri.' }
      ],
      closingTechniques: ['Prima campagna di compleanno automatizzata gratuita'],
      pricingStrategy: ['Focus sul Lifetime Value del cliente di vicinato'],
      urgencyTriggers: ['Il Natale è vicino: premia i tuoi clienti e loro ti sceglieranno per i grandi ordini.']
    }
  },
  {
    id: '36',
    name: 'Prenotazioni Festività',
    shortDescription: 'Landing page dedicata per gestire ordini di Panettoni e Colombe',
    tagline: 'Le tue feste, senza stress.',
    icon: '🎄',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1543343033-02f5a5e0b62e?auto=format&fit=crop&w=800&q=80',
    problem: 'Il caos delle feste: liste scritte a mano, ordini persi, telefoni sempre occupati e gente che ritira in ritardo.',
    stats: [
      { icon: '📈', label: "Volume", value: "+35%", color: "from-red-500/20 to-red-600/10", text: "text-red-400" },
      { icon: '🛡️', label: "Errori", value: "Zero", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💳', label: "Pre-pagati", value: "100%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Inferno Feste', desc: 'Urla, foglietti persi, clienti arrabbiati', icon: '🔥' },
      after: { title: 'Serenità Natale', desc: 'Produzione pianificata, ordine perfetto', icon: '❄️' }
    },
    psychologyQuote: 'A Natale il cliente vuole solo una cosa: non avere problemi. La tua efficienza digitale gli regala serenità.',
    solutions: [
      'Sito vetrina dedicato ai prodotti delle festività',
      'Configurazione varianti (es. con o senza canditi)',
      'Scelta slot orario di ritiro con capienza limitata',
      'Gestione ordini aziendali massivi con fattura',
      'Countdown alla chiusura prenotazioni per urgenza'
    ],
    economicBenefits: {
      title: 'Picco di Fatturato',
      benefits: [
        'Massimizzazione delle vendite nel periodo più importante dell\'anno',
        'Sicurezza degli incassi tramite pre-pagamento totale',
        'Pianificazione acquisti packaging e materie prime di lusso',
        'Migliore gestione del personale extra durante il picco'
      ],
      savings: 'Recupero ordini non ritirati: 100%'
    },
    secretSection: {
      killerPhrases: [
        'Domina il Natale, non farti dominare.',
        'La tua qualità merita una gestione da serie A.',
        'Rendi l\'ordine delle feste un piacere, non un dovere.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanto fattura tra il 15 e il 24 dicembre? Se gestisse tutto online, potrebbe sfornare il 20% in più senza confusione al banco.' }
      ],
      objections: [
        { objection: 'I miei clienti sono anziani', response: 'Lo ordinano i figli o i nipoti per loro. E per chi proprio non riesce, lo staff carica l\'ordine online al posto loro.' }
      ],
      closingTechniques: ['Setup completo della landing page entro 48 ore'],
      pricingStrategy: ['Focus sulla scalabilità degli ordini in periodi di punta'],
      urgencyTriggers: ['I laboratori iniziano a produrre colombe ora: non aspettare la Pasqua.']
    }
  },
  {
    id: '37',
    name: 'Ingredienti e Tracciabilità',
    shortDescription: 'QR code sul packaging che racconta la storia delle farine e dei produttori',
    tagline: 'Dal campo al cuore. Trasparenza totale.',
    icon: '🌾',
    category: 'Pasticceria e Forni',
    activityType: 'bakery',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80',
    problem: 'La qualità artigianale è invisibile. Il cliente non sa distinguere la tua farina locale da quella industriale del supermercato.',
    stats: [
      { icon: '⭐', label: "Premium", value: "+15%", color: "from-amber-500/20 to-amber-600/10", text: "text-amber-400" },
      { icon: '📜', label: "Trust", value: "+60%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔗', label: "Stories", value: "x3", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Label Anonima', desc: '"È buono perché lo dico io"', icon: '😶' },
      after: { title: 'Storytelling Story', desc: 'Vedo il mulino, conosco la storia', icon: '📖' }
    },
    psychologyQuote: 'Conoscere l\'origine di un alimento ne migliora la percezione del gusto. La trasparenza è l\'ingrediente segreto.',
    solutions: [
      'Generazione QR Code univoci per tipologia di prodotto',
      'Pagine di storytelling con foto del mulino e del contadino',
      'Dettaglio nutrizionale e allergeni dinamico',
      'Sezione "Lo sapevi che?" con curiosità sulla lavorazione',
      'Link diretto per ri-ordinare lo stesso prodotto'
    ],
    economicBenefits: {
      title: 'Valore Percepito',
      benefits: [
        'Giustificazione premium del prezzo di vendita',
        'Posizionamento come autorità nel settore artigianale',
        'Differenziazione netta dalla GDO (Grande Distribuzione)',
        'Creazione di una community di intenditori'
      ],
      savings: 'Costi marketing: Sostituiti dallo storytelling'
    },
    secretSection: {
      killerPhrases: [
        'Non vendere un prodotto, vendi un territorio.',
        'La tracciabilità è la firma della tua onestà.',
        'Fallo sognare mentre mangia.'
      ],
      scripts: [
        { title: 'Opening', content: 'Perché la sua farina costa il triplo di quella del discount? Se il cliente scansiona e vede il campo di grano vicino al fiume, non glielo chiederà più.' }
      ],
      objections: [
        { objection: 'Dobbiamo stampare nuovi packaging', response: 'Basta una piccola etichetta adesiva o un timbro con il QR. Costa pochissimo e rende tantissimo.' }
      ],
      closingTechniques: ['Intervista allo Chef inclusa nella prima pagina di storia'],
      pricingStrategy: ['Focus sulla differenziazione tramite valori etici'],
      urgencyTriggers: ['La trasparenza è il trend #1 nel food oggi.']
    }
  },
  {
    id: '38',
    name: 'Salvaposto Digitale (Coda Virtuale)',
    shortDescription: 'QR code per una coda virtuale con notifica quando tocca a te',
    tagline: 'Meno attesa. Più gusto. Zero stress.',
    icon: '📱',
    category: 'Digitalizzazione',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb89a?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti accalcati davanti al bancone che ostruiscono il passaggio e scoraggiano chiunque voglia entrare.',
    stats: [
      { icon: '⏳', label: "Attesa", value: "-40%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🚶', label: "Traffico", value: "Fluido", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '😊', label: "Meteo ok", value: "+25%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Assembramento', desc: 'Caldo, urla, fila frustrante al sole', icon: '😫' },
      after: { title: 'Comfort Zone', desc: 'Prendi il numero via QR, aspetti dove vuoi', icon: '✨' }
    },
    psychologyQuote: 'Dare al cliente la libertà di aspettare dove preferisce rimuove la barriera psicologica della fila lunga.',
    solutions: [
      'Generazione numero di coda tramite scansione QR esterno',
      'Display dinamico per lo staff per chiamare il prossimo numero',
      'Notifica via browser o WhatsApp quando mancano 3 persone',
      'Integrazione con recensioni istantanee durante l\'attesa',
      'Dashboard analisi tempi medi di servizio per turni'
    ],
    economicBenefits: {
      title: 'Flusso e Conversione',
      benefits: [
        'Recupero dei clienti "scoraggiati" dalla folla esterna',
        'Migliore gestione del personale nei picchi serali',
        'Aumento del fatturato nei giorni di massimo afflusso',
        'Eliminazione dei conflitti per "chi tocca ora"'
      ],
      savings: 'Potenziale vendita persa: -15%'
    },
    secretSection: {
      killerPhrases: [
        'Il cliente deve lottare per il gelato, non per il posto in fila.',
        'Trasforma l\'attesa in parte dell\'esperienza positiva.',
        'Un locale ordinato fuori attira più gente dentro.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante persone girano i tacchi quando vedono la folla fuori dal suo locale il sabato sera? Con la coda virtuale, restano tutti nei paraggi.' }
      ],
      objections: [
        { objection: 'Gli anziani non sanno usare il QR', response: 'Lo staff può caricare un numero cartaceo nel sistema in un secondo, mantenendo la coda unificata.' }
      ],
      closingTechniques: ['Prova gratuita durante il prossimo weekend di sole'],
      pricingStrategy: ['Focus sul numero di coperti extra serviti'],
      urgencyTriggers: ['L\'estate sta arrivando: non farti trovare senza un sistema di gestione.']
    }
  },
  {
    id: '39',
    name: 'Menu Gusti in Tempo Reale',
    shortDescription: 'Web-app aggiornata costantemente sulla disponibilità dei gusti',
    tagline: 'Sapere cosa mangi, prima di entrare.',
    icon: '🍦',
    category: 'Digitalizzazione',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che chiedono 10 gusti diversi e tu devi ripetere "è finito" ogni volta, rallentando il servizio.',
    stats: [
      { icon: '⚡', label: "Velocità", value: "x2", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" },
      { icon: '🥣', label: "Gusti", value: "Realtime", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📉', label: "Domande", value: "-60%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Cartelli Manuali', desc: 'Difficili da cambiare, spesso errati', icon: '📝' },
      after: { title: 'Dynamic Board', desc: 'Aggiornamento istantaneo, display HD', icon: '🖥️' }
    },
    psychologyQuote: 'La chiarezza visiva velocizza il processo decisionale, riducendo le code del 30%.',
    solutions: [
      'Interfaccia ultra-rapida per lo staff (un click per "finito")',
      'Integrazione con schermi in store (Digital Signage)',
      'Badge "Appena Mantecato" automatico per i gusti freschi',
      'Visualizzazione ingredienti e origine materie prime',
      'Link diretto dal profilo Instagram al menu gusti'
    ],
    economicBenefits: {
      title: 'Efficienza Operativa',
      benefits: [
        'Aumento del numero di clienti serviti per ora',
        'Staff meno stressato e più concentrato sulla vendita',
        'Azzeramento dell\'insoddisfazione per gusti non comunicati',
        'Possibilità di spingere gusti specifici tramite "Consigliati"'
      ],
      savings: 'Tempo staff: 2 ore/giorno risparmiate'
    },
    secretSection: {
      killerPhrases: [
        'Fagli scegliere il gusto mentre sono ancora in fila.',
        'Sii trasparente, sii digitale, sii veloce.',
        'La sorpresa è bella, ma la certezza del gusto preferito è meglio.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanto tempo perde lo staff a dire "No, il pistacchio è finito"? Se il cliente lo sapesse prima, ordinerebbe un altro gusto in 5 secondi.' }
      ],
      objections: [
        { objection: 'Non ho tempo di aggiornare il menu', response: 'Il sistema è così semplice che lo fa il ragazzo al banco mentre toglie la vaschetta vuota. 2 secondi.' }
      ],
      closingTechniques: ['Integrazione gratuita con la tua pagina Google MyBusiness'],
      pricingStrategy: ['Focus sul volume d\'affari per ora di punta'],
      urgencyTriggers: ['I nuovi gusti stagionali hanno bisogno di visibilità immediata.']
    }
  },
  {
    id: '40',
    name: 'Filtro Allergeni Dinamico',
    shortDescription: 'Filtra i gusti per dieta o allergie direttamente dallo smartphone',
    tagline: 'Gelato per tutti. Sicuro al 100%.',
    icon: '🛡️',
    category: 'Digitalizzazione',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1549463591-1476b454base6?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti con intolleranze che hanno paura di ordinare o che fanno domande infinite che bloccano la fila.',
    stats: [
      { icon: '🥗', label: "Inclusività", value: "Max", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⚖️', label: "Legal", value: "Safe", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '👥', label: "New Cust", value: "+15%", color: "from-purple-500/20 to-purple-600/10", text: "text-purple-400" }
    ],
    beforeAfter: {
      before: { title: 'Il Leggìo', desc: 'Libro degli allergeni alto 10cm, illeggibile', icon: '📖' },
      after: { title: 'Smartphone App', desc: 'Cerchi "Senza Lattosio" e vedi solo quelli', icon: '🔍' }
    },
    psychologyQuote: 'La sicurezza alimentare crea un legame di fiducia inossidabile. Un cliente celiaco o vegano che si sente "al sicuro" diventa un fan a vita.',
    solutions: [
      'Database gusti con mappatura allergeni standard (UE)',
      'Interfaccia utente con toggle (Vegan, Gluten-free, No-Milk)',
      'Schede tecniche gusti visualizzabili via QR',
      'Notifiche su potenziali contaminazioni trasversali',
      'Traduzione automatica in 5 lingue per turisti'
    ],
    economicBenefits: {
      title: 'Nuove Nicchie',
      benefits: [
        'Acquisizione del pubblico vegano e intollerante (in forte crescita)',
        'Protezione legale grazie alla tracciabilità digitale degli allergeni',
        'Miglioramento dell\'immagine del brand (moderno e attento)',
        'Passaparola organico nelle community specializzate'
      ],
      savings: 'Tempo gestione domande intolleranze: -80%'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli sentire che "non può mangiare". Fagli scoprire cosa può.',
        'La trasparenza è il miglior marketing per una gelateria artigianale.',
        'Riduci lo stress dello staff che ha paura di sbagliare risposta.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti vegani o intolleranti al lattosio entrano e poi escono perché non sono sicuri degli ingredienti? Oggi perde almeno il 10% del mercato.' }
      ],
      objections: [
        { objection: 'Il mio gelato è già naturale', response: 'Ma il cliente non lo sa. Se lo vede sul suo telefono con un bollino verde, si fida molto di più.' }
      ],
      closingTechniques: ['Caricamento iniziale gratuito del tuo ricettario allergeni'],
      pricingStrategy: ['Focus sulla fidelizzazione delle nicchie ad alta spesa'],
      urgencyTriggers: ['Le nuove normative sulla trasparenza sono sempre più stringenti.']
    }
  },
  {
    id: '41',
    name: 'Abbonamento Gelato (Vasca Family)',
    shortDescription: 'Ricevi o ritira una vaschetta a settimana con prezzo agevolato',
    tagline: 'Il piacere del gelato, ogni settimana, a casa tua.',
    icon: '🏡',
    category: 'E-commerce',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    problem: 'Fatturato troppo legato al meteo e alle vendite d\'impulso nel weekend, con momenti di vuoto durante la settimana.',
    stats: [
      { icon: '💰', label: "Ricorrente", value: "High", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📈', label: "LTV", value: "x3", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🍦', label: "Kg/Mese", value: "+40%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Vendita Casuale', desc: 'Se piove o fa freddo, il locale è vuoto', icon: '☁️' },
      after: { title: 'Revenue Stabile', desc: 'Incasso garantito ogni lunedì da 100 famiglie', icon: '💎' }
    },
    psychologyQuote: 'L\'abbonamento trasforma un piacere occasionale in un rito familiare irrinunciabile.',
    solutions: [
      'Piani mensili per vaschette da 500g, 1kg o 1.5kg',
      'Scelta gusti settimanale via app entro il giovedì',
      'Consegna a domicilio o ritiro "Express" dedicato',
      'Vantaggi esclusivi per gli abbonati (gusti gourmet in anteprima)',
      'Fatturazione automatica e gestione sospensioni (es. ferie)'
    ],
    economicBenefits: {
      title: 'Stabilità Aziendale',
      benefits: [
        'Liquidità immediata a inizio mese',
        'Pianificazione precisa della produzione e degli acquisti',
        'Aumento della quota di mercato rispetto ai supermercati',
        'Fidelizzazione estrema (il cliente non compra più altrove)'
      ],
      savings: 'Costi acquisizione cliente: Ridotti a zero'
    },
    secretSection: {
      killerPhrases: [
        'Diventa il fornitore ufficiale di felicità della famiglia.',
        'Sostituisci il "Spero che vengano" con il "So quanto incasso".',
        'L\'abbonamento è il vero futuro della gastronomia artigianale.'
      ],
      scripts: [
        { title: 'Opening', content: 'Cosa succede se martedì piove? Il suo incasso cala. Ma se avesse 50 abbonati, martedì avrebbe già incassato le sue tazzine.' }
      ],
      objections: [
        { objection: 'Il gelato non si presta agli abbonamenti', response: 'Le famiglie consumano gelato tutto l\'anno. Offrirgli un piano comodo è la soluzione al loro desiderio.' }
      ],
      closingTechniques: ['Landing page per gli abbonamenti pronta in 24 ore'],
      pricingStrategy: ['Focus sul risparmio annuo per il cliente'],
      urgencyTriggers: ['Inizia ora per coprire anche i mesi meno caldi.']
    }
  },
  {
    id: '42',
    name: 'Fidelity Card "Il Decimo Cono"',
    shortDescription: 'Tessera punti digitale integrata nel Wallet dello smartphone',
    tagline: 'Per chi non può fare a meno del buon gelato.',
    icon: '🧧',
    category: 'Marketing Digitale',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    problem: 'Tessere cartacee che i bambini perdono o che si bagnano con il gelato, e tu non sai chi sono i tuoi fan.',
    stats: [
      { icon: '🔄', label: "Frequenza", value: "+30%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🤳', label: "Punti", value: "Auto", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📊', label: "Database", value: "+Rich", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Carta e Timbro', desc: 'Smaltita, persa, zero dati utili', icon: '📄' },
      after: { title: 'Smartphone App', desc: 'Sempre pronta, push di compleanno, premi', icon: '✨' }
    },
    psychologyQuote: 'Vedere la barra di caricamento del premio completarsi spinge il cliente a comprare il secondo gelato della giornata.',
    solutions: [
      'Integrazione Apple e Google Wallet (senza app da scaricare)',
      'Scansione punti tramite QR o codice a barre staff',
      'Premi personalizzati (Cono omaggio, Upgrade di formato)',
      'Notifiche push basate sulla posizione (Geo-fencing)',
      'Visualizzazione punti in tempo reale per il cliente'
    ],
    economicBenefits: {
      title: 'Retention Scientifica',
      benefits: [
        'Aumento del numero di visite medie mensili del 35%',
        'Creazione di un canale di comunicazione diretto (zero costi)',
        'Possibilità di premiare i "Top Spenders" con gusti VIP',
        'Dati certi sulle abitudini di consumo'
      ],
      savings: 'Costi rimpiazzo tessere carta: -100%'
    },
    secretSection: {
      killerPhrases: [
        'Un gelato omaggio ogni 10 è l\'investimento con il miglior ROI.',
        'Sii l\'icona nel portafoglio dei tuoi clienti più giovani.',
        'La fedeltà digitale non si dimentica a casa.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti ragazzi vengono qui ogni giorno? Se avessero la tessera sul telefono, verrebbero qui anche i loro amici per fare i punti insieme.' }
      ],
      objections: [
        { objection: 'Non voglio sconti che mangino il margine', response: 'Il premio è percepito come un regalo, ma avviene solo dopo 9 vendite a prezzo pieno garantite.' }
      ],
      closingTechniques: ['Design gratuito della grafica della tessera oggi'],
      pricingStrategy: ['Focus sulla frequenza di acquisto (F)'],
      urgencyTriggers: ['Le tessere cartacee sono vecchie e antigeniche.']
    }
  },
  {
    id: '43',
    name: 'Pre-ordine Vaschette Take-Away',
    shortDescription: 'Componi e paga la vaschetta online, ritira senza fila',
    tagline: 'Il tuo mix perfetto, già pesato e pronto.',
    icon: '🥡',
    category: 'E-commerce',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1549463591-1476b454 base6?auto=format&fit=crop&w=800&q=80',
    problem: 'Il cliente al bancone che ci mette 10 minuti a decidere i gusti della vaschetta mentre la fila fuori cresce.',
    stats: [
      { icon: '🏎️', label: "Ritiro", value: "30s", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📦', label: "Volume", value: "+20%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '💳', label: "Cashless", value: "100%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Stress Bancone', desc: 'Indecisione, attesa, fila che blocca', icon: '😫' },
      after: { title: 'Pick-Up Point', desc: 'Scegli dal divano, ritiri al volo', icon: '⚡' }
    },
    psychologyQuote: 'Poter scegliere i gusti con calma aumenta la varietà degli ordini e la soddisfazione finale.',
    solutions: [
      'Configuratore vaschette intuitivo (Gusto 1, Gusto 2, ecc.)',
      'Gestione disponibilità gusti in tempo reale (evita delusioni)',
      'Pagamento anticipato per garantire il ritiro ordini',
      'Area di ritiro "Fast Lane" dedicata',
      'Packaging termico ottimizzato incluso'
    ],
    economicBenefits: {
      title: 'Efficienza di Volume',
      benefits: [
        'Aumento della vendita di formati grandi (1kg e oltre)',
        'Ottimizzazione dei tempi dello staff nei momenti di picco',
        'Azzeramento dei no-show (tutto pagato online)',
        'Miglioramento dell\'atmosfera in negozio (meno caos)'
      ],
      savings: 'Tempo transazione per vaschetta: -90%'
    },
    secretSection: {
      killerPhrases: [
        'Vendi vaschette mentre sei chiuso.',
        'Non fargli decidere sotto pressione, fagli sognare il gelato a casa.',
        'La velocità raddoppia i tuoi incassi serali.'
      ],
      scripts: [
        { title: 'Opening', content: 'Domenica mattina la fila arriva in strada. Se i clienti potessero pre-ordinare la vaschetta del pranzo, quanti ne servirebbe in più?' }
      ],
      objections: [
        { objection: 'Il gelato si scioglie nell\'attesa', response: 'L\'ordine viene preparato solo 2 minuti prima dell\'orario di ritiro scelto o all\'arrivo del cliente (QR code).' }
      ],
      closingTechniques: ['Modulo pre-ordine pronto per il prossimo weekend'],
      pricingStrategy: ['Focus sulla capacità produttiva oraria'],
      urgencyTriggers: ['Il take-away è la fetta più grande del mercato del gelato artigianale.']
    }
  },
  {
    id: '44',
    name: 'Voucher Regalo "Gelato Sospeso"',
    shortDescription: 'Regala coni o vaschette agli amici tramite un codice QR',
    tagline: 'Regala un sorriso. Regala un gelato.',
    icon: '🎁',
    category: 'E-commerce',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1544411047-c491513685e1?auto=format&fit=crop&w=800&q=80',
    problem: 'La gente vorrebbe regalare un cono ma non sa come fare se non è fisicamente lì a pagare.',
    stats: [
      { icon: '🔥', label: "Virale", value: "High", color: "from-red-500/20 to-red-600/10", text: "text-red-400" },
      { icon: '💰', label: "New Sales", value: "+12%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📱', label: "Digital", value: "100%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" }
    ],
    beforeAfter: {
      before: { title: 'Assenza Regali', desc: 'Nessun modo semplice di regalare un gelato', icon: '🚫' },
      after: { title: 'Social Gift', desc: 'Mandi un QR su WhatsApp e l\'amico mangia', icon: '🎁' }
    },
    psychologyQuote: 'Il gelato è il regalo universale. Renderlo digitalmente immediato ne moltiplica le occasioni di acquisto.',
    solutions: [
      'Acquisto rapido "Cono Regalo" dal sito mobile',
      'Generazione e invio automatico Voucher via WhatsApp/Email',
      'Personalizzazione messaggio di auguri digitale',
      'Validazione Voucher in cassa istantanea',
      'Sezione "Gelato Sospeso" per beneficenza locale'
    ],
    economicBenefits: {
      title: 'Marketing Virale',
      benefits: [
        'Acquisizione di nuovi clienti (chi riceve il regalo)',
        'Cash flow anticipato per prodotti erogati successivamente',
        'Costi di transazione minimi per ticket bassi',
        'Aumento massiccio della brand awareness social'
      ],
      savings: 'Costi promozionali: Sostituiti dal passaparola'
    },
    secretSection: {
      killerPhrases: [
        'Falli parlare di te mentre si fanno regali.',
        'La semplicità è il motore dell\'acquisto d\'impulso.',
        'Ogni cono regalato è un ambasciatore del tuo brand.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti ragazzi vorrebbero fare lo scherzo di pagare il gelato a un amico a distanza? Con il Gelato Sospeso, lei vende 2 coni invece di uno.' }
      ],
      objections: [
        { objection: 'Ticket troppo basso per il digitale', response: 'Il sistema è automatizzato. Che venda 1 cono o 10 vaschette, il suo lavoro è lo stesso.' }
      ],
      closingTechniques: ['Campagna social "Regala un sorriso" pre-caricata'],
      pricingStrategy: ['Focus sull\'acquisizione nuovi contatti (Leads)'],
      urgencyTriggers: ['Le festività e i compleanni sono occasioni d\'oro.']
    }
  },
  {
    id: '45',
    name: 'Personalizzatore Torte Gelato',
    shortDescription: 'Configura la tua torta gelato: gusti, decorazioni e data di ritiro',
    tagline: 'Il tuo evento. Il tuo gelato. Un capolavoro.',
    icon: '🎂',
    category: 'Pasticceria e Forni',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80',
    problem: 'Ordini di torte confusi presi al volo mentre servite coni, con il rischio di sbagliare gusti o data di ritiro.',
    stats: [
      { icon: '📈', label: "Ordini", value: "+40%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⭐', label: "AOV", value: "+25€", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🛠️', label: "Custom", value: "High", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Foglietti persi', desc: 'Incomprensioni su gusti e dediche', icon: '📝' },
      after: { title: 'Order Flow', desc: 'Preventivo certo, dettagli chiari, cliente felice', icon: '🎂' }
    },
    psychologyQuote: 'La personalizzazione aumenta il valore percepito e riduce la sensibilità al prezzo.',
    solutions: [
      'Visualizzatore combinazioni di gusti e salse',
      'Scelta del formato (tronchetto, torta tonda, cuore)',
      'Modulo per dedica personalizzata con anteprima font',
      'Calendario prenotazioni integrato con orari di ritiro',
      'Richiesta acconto obbligatoria per confermare l\'ordine'
    ],
    economicBenefits: {
      title: 'Business Premium',
      benefits: [
        'Aumento netto dello scontrino medio annuale',
        'Pianificazione perfetta della produzione in laboratorio',
        'Zero sprechi e zero errori di ordinazione',
        'Clientela "eventi" alto spendente fidelizzata'
      ],
      savings: 'Tempo gestione ordini: -70%'
    },
    secretSection: {
      killerPhrases: [
        'Vendi l\'opera d\'arte, non solo il freddo.',
        'La torta gelato è il prodotto a più alto margine. Spingilo.',
        'Organizzazione digitale = Immagine di alto livello.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le torte gelato sono bellissime ma difficili da proporre mentre c\'è coda. Con il configuratore, il cliente lo fa con calma a casa sua.' }
      ],
      objections: [
        { objection: 'Non so fare le torte troppo complicate', response: 'Il configuratore lo impostiamo noi solo con quello che lei sa e vuole produrre eccellentemente.' }
      ],
      closingTechniques: ['Galleria fotografica premium dei tuoi modelli inclusa'],
      pricingStrategy: ['Focus sui prodotti "Signature" ad alto margine'],
      urgencyTriggers: ['Le domeniche e i compleanni non finiscono mai.']
    }
  },
  {
    id: '46',
    name: 'Alert "Gusto del Giorno"',
    shortDescription: 'Notifiche per avvisare quando tornano i gusti stagionali preferiti',
    tagline: 'Il tuo gusto preferito è tornato. Corri!',
    icon: '🔔',
    category: 'Marketing Digitale',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&w=800&q=80',
    problem: 'Fai un gusto speciale al Mango ma nessuno lo sa, oppure il cliente torna quando lo hai già finito.',
    stats: [
      { icon: '🚀', label: "Engagement", value: "+60%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" },
      { icon: '💨', label: "Sold Out", value: "Flash", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🤝', label: "Loyalty", value: "Strong", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Speranza', desc: 'Il cliente entra sperando ci sia il cocco', icon: '🤞' },
      after: { title: 'Azione', desc: 'Sms/WhatsApp: "Il Cocco Reale è pronto"', icon: '📲' }
    },
    psychologyQuote: 'La notifica personalizzata fa sentire il cliente speciale e ascoltato, scatenando la FOMO (Fear Of Missing Out).',
    solutions: [
      'Pulsante "Follow" per ogni singolo gusto del menu',
      'Invio automatico alert quando il gusto viene segnato come "Disponibile"',
      'Integrazione con database clienti (WhatsApp/Push/SMS)',
      'Statistiche su quali gusti sono più "attesi"',
      'Inviti esclusivi "Solo per te" per degustazioni nuovi gusti'
    ],
    economicBenefits: {
      title: 'Marketing a Costo Zero',
      benefits: [
        'Massimizzazione delle vendite di gusti stagionali o limitati',
        'Azzeramento dei tempi di permanenza del gusto in vaschetta',
        'Creazione di un database clienti segmentato per preferenze',
        'Aumento istantaneo del traffico in negozio con un messaggio'
      ],
      savings: 'Costi pubblicitari: -90%'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli cercare il gusto. Mandaglielo a casa.',
        'La pertinenza è la nuova frontiera del marketing food.',
        'Un gusto limitato venduto subito vale il doppio.'
      ],
      scripts: [
        { title: 'Opening', content: 'Qual è il suo gusto più amato? Se mandassimo un messaggio a 200 persone quando è pronto, quanto velocemente finirebbe la vaschetta?' }
      ],
      objections: [
        { objection: 'Odio gli spam', response: 'Non è spam se il cliente ha chiesto esplicitamente di essere avvisato per quel gusto specifico.' }
      ],
      closingTechniques: ['Prima campagna per il gusto stagionale inclusa'],
      pricingStrategy: ['Focus sulla velocità di rotazione del prodotto'],
      urgencyTriggers: ['I gusti stagionali durano poco: approfittane.']
    }
  },
  {
    id: '47',
    name: 'Recensioni Gelato Istantanee',
    shortDescription: 'QR code rapido per votare il gusto preferito e lasciare un feedback',
    tagline: 'La tua voce conta. Il tuo gusto decide.',
    icon: '⭐',
    category: 'Marketing Digitale',
    activityType: 'gelateria',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80',
    problem: 'Ricevi recensioni solo se qualcosa va male. Non sai mai oggettivamente quali gusti piacciono di più o di meno.',
    stats: [
      { icon: '📊', label: "Dati Veri", value: "100%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '👍', label: "Review Rate", value: "x5", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🧑‍🔬', label: "Product", value: "Opti", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Il Vuoto', desc: 'Speri che piaccia, ma non hai dati certi', icon: '❓' },
      after: { title: 'Intelligence', desc: 'Sai esattamente cosa migliorare domani', icon: '📈' }
    },
    psychologyQuote: 'Chiedere un parere subito dopo il primo morso massimizza il tasso di risposta positiva.',
    solutions: [
      'QR Code su coppette o tovaglioli con link a form rapido (3 sec)',
      'Votazione a stelle per gusto e cremosità',
      'Dashboard staff con classifica gusti del mese',
      'Sistema di gestione lamentele privato (intercetta prima di Google)',
      'Premio automatico "Sconto 1€" per chi lascia il feedback'
    ],
    economicBenefits: {
      title: 'Controllo Qualità',
      benefits: [
        'Miglioramento continuo del prodotto basato sui dati, non sulle chiacchiere',
        'Identificazione immediata di lotti difettosi o gusti non apprezzati',
        'Aumento massiccio della reputazione online (invito a Google Review)',
        'Personale più attento sapendo che il cliente vota il cono'
      ],
      savings: 'Costi consulenza food: Sostituiti dai tuoi clienti'
    },
    secretSection: {
      killerPhrases: [
        'Ascolta il mercato, non il tuo ego.',
        'La recensione al conetto è la tua polizza assicurativa.',
        'Rendi il cliente parte del tuo team creativo.'
      ],
      scripts: [
        { title: 'Opening', content: 'Come fa a sapere se la nuova ricetta del cioccolato piace davvero? Con il voto istantaneo lo sa dopo un\'ora, con dati certi.' }
      ],
      objections: [
        { objection: 'Temo i voti bassi', response: 'I voti bassi arrivano a lei privatamente, permettendole di scusarsi. Se non li ascolta lei, li leggerà su TripAdvisor.' }
      ],
      closingTechniques: ['Report mensile analisi gusti gratuito per 3 mesi'],
      pricingStrategy: ['Focus sulla qualità percepita del servizio'],
      urgencyTriggers: ['La stagione estiva è il momento per testare nuove ricette.']
    }
  },
  {
    id: '48',
    name: 'Prenotazione Controllo Vista Online',
    shortDescription: 'Calendario interattivo per esami e lenti, con promemoria automatici',
    tagline: 'La prevenzione non aspetta. Prenota in un click.',
    icon: '🗓️',
    category: 'Digitalizzazione',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=800&q=80',
    problem: 'Telefonate perse, clienti che dimenticano l\'appuntamento e buchi nel calendario che riducono la produttività.',
    stats: [
      { icon: '📅', label: "No-Show", value: "-50%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⏱️', label: "Booking", value: "24/7", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📱', label: "Sms Alert", value: "Auto", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Agenda Cartacea', desc: 'Confusion, errori di trascrizione, tempo perso al telefono', icon: '📝' },
      after: { title: 'Smart Booking', desc: 'Sincronizzazione reale, risposte automatiche', icon: '✨' }
    },
    psychologyQuote: 'Rendere la prenotazione fluida riduce l\'attrito iniziale e comunica un\'immagine di alta professionalità tecnologica.',
    solutions: [
      'Calendario sincronizzato con i turni degli optometristi',
      'Selezione specifica del motivo (esame vista, lenti, riparazione)',
      'Promemoria automatici via WhatsApp 24 ore prima',
      'Possibilità di annullamento o spostamento self-service',
      'Integrazione con il database prescrizioni esistente'
    ],
    economicBenefits: {
      title: 'Efficienza e Ricavi',
      benefits: [
        'Aumento del numero di controlli effettuati del 25%',
        'Riduzione drastica drli appuntamenti mancati',
        'Liberazione del personale dalla gestione telefonica',
        'Migliore gestione del flusso clienti in negozio'
      ],
      savings: 'Tempo admin: -10 ore/settimana'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli chiamare, fagli prenotare mentre ci pensano.',
        'L\'ordine inizia dal calendario.',
        'Il tempo del tuo professionista è la tua risorsa più preziosa.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti controlli della vista perde perché i clienti non hanno tempo di chiamare durante l\'orario di negozio? Con il booking online, prenota chiunque alle 11 di sera.' }
      ],
      objections: [
        { objection: 'Il sistema è troppo complicato per lo staff', response: 'È un tablet in sala che bippa. Più semplice che scrivere a penna su un foglio.' }
      ],
      closingTechniques: ['Attivazione immediata del calendario sul sito web'],
      pricingStrategy: ['Focus sulla saturazione delle ore del professionista'],
      urgencyTriggers: ['La stagione del ritorno a scuola è il momento di picco.']
    }
  },
  {
    id: '49',
    name: 'Try-On Virtuale (Specchio Digitale)',
    shortDescription: 'Filtro AR per "indossare" virtualmente le montature dallo smartphone',
    tagline: 'Trova lo stile perfetto, ovunque tu sia.',
    icon: '🤳',
    category: 'Digitalizzazione',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti indecisi che provano 50 montature o che non entrano perché non sanno se quel brand gli starà bene.',
    stats: [
      { icon: '👓', label: "Prove", value: "Infinite", color: "from-purple-500/20 to-purple-600/10", text: "text-purple-400" },
      { icon: '🚀', label: "Engagement", value: "+80%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🛒', label: "Decision", value: "Fast", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Indecisione', desc: 'Specchio fisico e timidezza nel provare', icon: '😕' },
      after: { title: 'Digital Look', desc: 'Selfie con gli occhiali e condivisione social', icon: '📸' }
    },
    psychologyQuote: 'Vedersi con il prodotto addosso abbatte la resistenza all\'acquisto e crea un desiderio immediato.',
    solutions: [
      'Integrazione AR (Realtà Aumentata) via browser (senza app)',
      'Scansione 3D delle montature best-seller in catalogo',
      'Pulsante "Condividi" per chiedere pareri ad amici su WhatsApp',
      'Suggerimento automatico basato sulla forma del viso (AI Face Shape)',
      'QR code in vetrina per provare gli occhiali anche a negozio chiuso'
    ],
    economicBenefits: {
      title: 'Marketing e Vendita',
      benefits: [
        'Aumento del tempo di permanenza sul sito web',
        'Conversione da "curioso" a "cliente in negozio" accelerata',
        'Riduzione dello stress del personale durante le prove massive',
        'Possibilità di pre-selezionare i modelli prima della visita'
      ],
      savings: 'Tempo prova in sede: -40%'
    },
    secretSection: {
      killerPhrases: [
        'La tua vetrina non dorme mai con l\'AR.',
        'Trasforma il gioco in una vendita seria.',
        'L\'occhiale è l\'accessorio più difficile da scegliere: rendilo facile.'
      ],
      scripts: [
        { title: 'Opening', content: 'Come attira i giovani nel suo negozio? Con un filtro AR che gli permette di vedersi con l\'ultimo modello di Ray-Ban mentre sono sul bus.' }
      ],
      objections: [
        { objection: 'La qualità del filtro non è reale', response: 'È un supporto alla scelta, non sostituisce la prova fisica, ma porta il cliente in negozio già convinto a comprare quel modello.' }
      ],
      closingTechniques: ['Inclusione di 50 modelli top brand nel set-up iniziale'],
      pricingStrategy: ['Focus sulla differenziazione tecnologica rispetto alla concorrenza'],
      urgencyTriggers: ['Le nuove collezioni sole hanno bisogno di un lancio WOW.']
    }
  },
  {
    id: '50',
    name: 'Abbonamento "Lenti Sempre Pronte"',
    shortDescription: 'Riordino automatico per lenti e liquidi, per non restare mai senza',
    tagline: 'Dimentica il riordino. Ci pensiamo noi.',
    icon: '📦',
    category: 'E-commerce',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1591147139959-1a0305584cc1?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che si accorgono all\'ultimo di aver finito le lenti e corrono dal primo ottico che capita.',
    stats: [
      { icon: '💎', label: "Loyalty", value: "Long", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔄', label: "Revenue", value: "Recur", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📉', label: "Churn", value: "-35%", color: "from-red-500/20 to-red-600/10", text: "text-red-400" }
    ],
    beforeAfter: {
      before: { title: 'Emergenza Lenti', desc: 'Giri 3 negozi perché hai finito l\'ultimo paio', icon: '🏃' },
      after: { title: 'Zero Pensieri', desc: 'Pacco pronto ogni 30 giorni, automatico', icon: '🏠' }
    },
    psychologyQuote: 'L\'abbonamento crea una dipendenza positiva dal servizio e rimuove la necessità di comparare i prezzi ogni volta.',
    solutions: [
      'Piani personalizzati basati sulla prescrizione dell\'utente',
      'Gestione pagamenti ricorrenti sicuri (Stripe/PayPal)',
      'Opzione Ritiro in Negozio (per portare traffico fisico)',
      'Modifica rapida del piano via WhatsApp',
      'Alert automatico quando è necessaria una nuova visita optometrica'
    ],
    economicBenefits: {
      title: 'Stabilità Finanziaria',
      benefits: [
        'Aumento del Life Time Value (LTV) del cliente del 300%',
        'Incassi certi e prevedibili ogni mese',
        'Blocco dei clienti verso la concorrenza online o locale',
        'Cross-selling facilitato su soluzioni e accessori'
      ],
      savings: 'Costi acquisizione: Ridotti per gli anni successivi'
    },
    secretSection: {
      killerPhrases: [
        'Proteggi la tua base clienti con il riordino ricorrente.',
        'Un cliente abbonato è un cliente blindato.',
        'La comodità batte il prezzo basso, sempre.'
      ],
      scripts: [
        { title: 'Opening', content: 'Qual è il suo prodotto più venduto? Le lenti. Eppure il cliente le compra dove capita. Con l\'abbonamento, le comprerà solo da lei per i prossimi 2 anni.' }
      ],
      objections: [
        { objection: 'I clienti non vogliono impegnarsi', response: 'È un abbonamento senza vincoli. Possono sospenderlo quando vogliono. Ma non lo faranno perché è troppo comodo.' }
      ],
      closingTechniques: ['Sconto extra del 5% per chi attiva il piano ricorrente'],
      pricingStrategy: ['Focus sulla marginalità totale annua per utente'],
      urgencyTriggers: ['Il mercato online sta mangiando le lenti a contatto: reagisci ora.']
    }
  },
  {
    id: '51',
    name: 'Digital Vision Card',
    shortDescription: 'Tessera digitale nel wallet con i dati della tua prescrizione',
    tagline: 'I tuoi occhi, nel tuo smartphone.',
    icon: '💳',
    category: 'Digitalizzazione',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che non ricordano i loro gradi o che perdono il foglietto della prescrizione.',
    stats: [
      { icon: '🤳', label: "Accesso", value: "Instant", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔍', label: "Errori", value: "Zero", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '✨', label: "UX", value: "Premium", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Foglietto SGualcito', desc: 'Illeggibile, perso in un cassetto', icon: '📄' },
      after: { title: 'Apple/Google Wallet', desc: 'Sempre con te, dati tecnici precisi', icon: '📱' }
    },
    psychologyQuote: 'Fornire uno strumento di utilità quotidiana aumenta la percezione di valore del brand oltre la semplice vendita.',
    solutions: [
      'Generazione automatica card dopo ogni controllo vista',
      'Integrazione con i principali ecosistemi mobile (iOS/Android)',
      'Update dinamico dei dati quando cambia la prescrizione',
      'Pulsante "Chiama Ottico" direttamente dalla card',
      'Area Note per specificare tipo di lenti e trattamenti'
    ],
    economicBenefits: {
      title: 'Dati e Servizio',
      benefits: [
        'Il cliente torna sempre da te perché sa che hai i suoi dati aggiornati',
        'Facilitazione ordini telefonici o via chat',
        'Immagine di estrema modernità e cura del cliente',
        'Zero tempo perso a cercare file in archivio'
      ],
      savings: 'Tempo ricerca dati: -15 min/cliente'
    },
    secretSection: {
      killerPhrases: [
        'Diventa l\'unico ottico nel telefono del tuo cliente.',
        'Informazione è potere. E sicurezza.',
        'La card digitale è il tuo biglietto da visita moderno.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante volte un cliente entra e dice "Non ricordo i gradi dell\'altra volta"? Se li avesse sul telefono, avremmo già iniziato a scegliere la montatura.' }
      ],
      objections: [
        { objection: 'Nessuno la usa davvero', response: 'Chi usa Apple Pay o i biglietti aerei ama avere tutto nel Wallet. È una questione di stile ed efficienza.' }
      ],
      closingTechniques: ['Set-up gratuito per i primi 100 clienti'],
      pricingStrategy: ['Focus sulla qualità del servizio post-vendita'],
      urgencyTriggers: ['Il digitale nel settore ottico è lo standard richiesto dai nuovi consumatori.']
    }
  },
  {
    id: '52',
    name: 'Alert Sostituzione Lenti Contatto',
    shortDescription: 'Promemoria automatici per cambiare le lenti al momento giusto',
    tagline: 'Salute visiva sotto controllo. Sempre.',
    icon: '🔔',
    category: 'Marketing Digitale',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1591147139959-1a0305584cc1?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che portano le lenti quindicinali per un mese, rischiando infezioni e rovinando il rapporto con l\'ottico.',
    stats: [
      { icon: '🏥', label: "Salute", value: "Safety", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔄', label: "Consumo", value: "+20%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🛡️', label: "Preven", value: "Max", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Approssimazione', desc: '"Le avrò messe 10 o 20 giorni fa?"', icon: '🤔' },
      after: { title: 'Disciplina', desc: 'Notifica WhatsApp: "Oggi apri una nuova coppia"', icon: '📲' }
    },
    psychologyQuote: 'Il promemoria basato sulla salute genera un altissimo tasso di ringraziamento e fedeltà emotiva.',
    solutions: [
      'Setup timer basato sulla tipologia (giornaliere, 2w, mensili)',
      'Invio alert personalizzato (WhatsApp o Notifica Push)',
      'Pulsante "Ordina nuove" integrato nel messaggio',
      'Consigli di igiene e manutenzione inviati a scadenze fisse',
      'Tracking dell\'usura per suggerire passaggi a lenti superiori'
    ],
    economicBenefits: {
      title: 'Vendita e Protezione',
      benefits: [
        'Aumento naturale della rotazione del prodotto e degli acquisti',
        'Miglioramento della salute oculare dei clienti (meno reclami)',
        'Posizionamento come consulente esperto e non solo venditore',
        'Marketing non invasivo ma estremamente pertinente'
      ],
      savings: 'Tasso di riacquisto: +40%'
    },
    secretSection: {
      killerPhrases: [
        'Prenditi cura dei suoi occhi, lui si prenderà cura del tuo business.',
        'La notifica è il tuo venditore silenzioso.',
        'Zero sprechi, zero rischi, solo visione perfetta.'
      ],
      scripts: [
        { title: 'Opening', content: 'Sapeva che il 60% degli utilizzatori di lenti a contatto le tiene più del dovuto? Questo le toglie vendite e mette a rischio i loro occhi. Risolviamo con un alert.' }
      ],
      objections: [
        { objection: 'Sembra troppo insistente', response: 'È un servizio di salute. Il cliente lo percepisce come un favore, non come una pubblicità.' }
      ],
      closingTechniques: ['Prima attivazione gratuita con l\'acquisto di una scatola'],
      pricingStrategy: ['Focus sulla prevenzione oculare'],
      urgencyTriggers: ['La prevenzione è il valore più alto che un ottico può offrire.']
    }
  },
  {
    id: '53',
    name: 'Video-Consulto Scelta Montatura',
    shortDescription: 'Chiamata brevissima per pre-selezionare i modelli ideali',
    tagline: 'Meno tempo in negozio. Più tempo per il tuo stile.',
    icon: '📹',
    category: 'Digitalizzazione',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=800&q=80',
    problem: 'Nervosismo del cliente davanti a troppi modelli e staff impegnato troppo a lungo per una singola scelta.',
    stats: [
      { icon: '⏳', label: "Store Time", value: "-50%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💎', label: "UX", value: "VIP", color: "from-purple-500/20 to-purple-600/10", text: "text-purple-400" },
      { icon: '🎯', label: "Selection", value: "Exact", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Stress da banco', desc: 'Indecisione tra 30 paia, pressione della fila', icon: '😫' },
      after: { title: 'VIP Treatment', desc: 'Arrivi e hai già 5 modelli perfetti per te', icon: '🌟' }
    },
    psychologyQuote: 'La pre-selezione elimina il "paradosso della scelta", rendendo l\'esperienza d\'acquisto rapida ed eccitante.',
    solutions: [
      'Piattaforma video integrata sul sito o via WhatsApp Business',
      'Analisi preliminare della forma del viso via webcam',
      'Creazione di un "Vassoio Digitale" con i modelli preferiti',
      'Prenotazione slot orario per prova fisica dei modelli scelti',
      'Consulenza d\'immagine dedicata (Visagismo)'
    ],
    economicBenefits: {
      title: 'Ottimizzazione Spazi',
      benefits: [
        'Aumento della produttività oraria del personale di vendita',
        'Miglioramento della soddisfazione del cliente alto spende',
        'Capacità di servire più persone contemporaneamente nello store fisico',
        'Riduzione dei resi su prodotti ordinati e non convinti'
      ],
      savings: 'Tempo vendita per cliente: -30 min'
    },
    secretSection: {
      killerPhrases: [
        'Vendi lo stile prima del prodotto.',
        'La consulenza digitale è il nuovo passaparola.',
        'Sii l\'ottico hi-tech che tutti desiderano.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti mariti o mogli sbuffano mentre il partner prova occhiali per un\'ora? Con il video-consulto, arrivano già decisi al 90%.' }
      ],
      objections: [
        { objection: 'Richiede troppo tempo allo staff', response: 'Il consulto dura 10 minuti online ma ne fa risparmiare 40 in negozio. È pura efficienza.' }
      ],
      closingTechniques: ['Prenotazione automatica slot "Solo Prova" post consulto'],
      pricingStrategy: ['Focus sul valore della consulenza d\'immagine'],
      urgencyTriggers: ['Il tempo è il nuovo lusso: dallo ai tuoi clienti.']
    }
  },
  {
    id: '54',
    name: 'Stato Riparazione Real-Time',
    shortDescription: 'Tracciamento online per sapere quando i tuoi occhiali sono pronti',
    tagline: 'Trasparenza totale. Zero attesa inutile.',
    icon: '🛠️',
    category: 'Digitalizzazione',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che chiamano ogni giorno per sapere se l\'occhiale è pronto o che vengono inutilmente in negozio.',
    stats: [
      { icon: '📞', label: "Phone Call", value: "-70%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📦', label: "Status", value: "Live", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '😊', label: "Mood", value: "Zen", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Il Mistero', desc: '"Chiameremo noi" (ma poi nessuno chiama)', icon: '📞' },
      after: { title: 'Smart Track', desc: '"In montaggio", "Controllo Qualità", "Pronto!"', icon: '✅' }
    },
    psychologyQuote: 'Conoscere lo stato di avanzamento di un lavoro riduce l\'ansia d\'attesa e aumenta la fiducia nella professionalità del laboratorio.',
    solutions: [
      'Dashboard interna semplificata per aggiornare lo stato (3 clic)',
      'Link di tracciamento univoco inviato via SMS/WhatsApp all\'accettazione',
      'Notifica automatica "Pronto per il Ritiro" con orari negozio',
      'Visualizzazione costi stimati per riparazioni fuori garanzia',
      'Possibilità di richiedere la consegna a domicilio a lavoro finito'
    ],
    economicBenefits: {
      title: 'Efficienza Laboratorio',
      benefits: [
        'Drastico calo del tempo sprecato a rispondere a domande di routine',
        'Migliore organizzazione del lavoro del tecnico montatore',
        'Clienti più felici e rilassati',
        'Immagine di efficienza da grande catena ma con tocco artigianale'
      ],
      savings: 'Tempo segreteria: -5 ore/settimana'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli venire il dubbio, dagli la certezza.',
        'La riparazione è il momento in cui dimostri quanto vali veramente.',
        'Zero chiamate = Più prodotti venduti.'
      ],
      scripts: [
        { title: 'Opening', content: 'Il sabato pomeriggio siamo sommersi di persone che chiedono "Sono pronti i miei?". Se lo sapessero dal telefono, lo store sarebbe più vivibile per chi deve comprare.' }
      ],
      objections: [
        { objection: 'Il tecnico non vuole perdere tempo a caricare i dati', response: 'Il caricamento avviene automaticamente quando scansiona il codice dell\'ordine. 1 secondo.' }
      ],
      closingTechniques: ['Integrazione con il tuo software gestionale attuale'],
      pricingStrategy: ['Focus sulla trasparenza operativa'],
      urgencyTriggers: ['Chi rompe l\'occhiale ha fretta: servilo meglio.']
    }
  },
  {
    id: '55',
    name: 'Modulo "Primo Porto" (Video Tutorial)',
    shortDescription: 'Guida interattiva per imparare a gestire le lenti a contatto',
    tagline: 'Niente paura. Diventa un esperto in 2 minuti.',
    icon: '👁️',
    category: 'Digitalizzazione',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=800&q=80',
    problem: 'Nuovi clienti che abbandonano le lenti perché hanno difficoltà nei primi giorni o hanno paura di farsi male.',
    stats: [
      { icon: '📈', label: "Success Rate", value: "+45%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📉', label: "Drop-out", value: "-60%", color: "from-red-500/20 to-red-600/10", text: "text-red-400" },
      { icon: '🎓', label: "Edu", value: "Smart", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" }
    ],
    beforeAfter: {
      before: { title: 'Frustrazione', desc: 'Mettere la lente al mignolo nel bagno di casa', icon: '😫' },
      after: { title: 'Padronanza', desc: 'Video-guida step-by-step sempre disponibile', icon: '🎓' }
    },
    psychologyQuote: 'L\'accompagnamento post-vendita nei momenti critici trasforma un utente timoroso in un cliente fedele e autonomo.',
    solutions: [
      'Serie di brevi video verticali ottimizzati per smartphone',
      'FAQ interattiva sulle sensazioni "normali" e "anormali"',
      'Check-list giornaliera: Igiene, Pulizia, Conservazione',
      'Area "SOS Ottico" per domande veloci via chat',
      'Certificato digitale di "Primo Porto" superato'
    ],
    economicBenefits: {
      title: 'Fidelizzazione At-Source',
      benefits: [
        'Drastica riduzione dei resi o dei rimborsi su lenti aperte',
        'Aumento del passaparola positivo tra chi "non ci riusciva"',
        'Risparmio di tempo per la formazione fisica in negozio',
        'Creazione di un legame di fiducia fin dal primo giorno'
      ],
      savings: 'Tempo formazione in sede: -45 min/cliente'
    },
    secretSection: {
      killerPhrases: [
        'Guadagna sulla vendita, costruisci sulla cura.',
        'La paura è il peggior nemico del fatturato.',
        'Fagli sentire che non è solo nel suo bagno.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti ragazzi decidono di passare alle lenti a contatto e poi mollano dopo 3 giorni perché non riescono a metterle? Stiamo perdendo clienti a vita.' }
      ],
      objections: [
        { objection: 'Basta quello che spiego io in negozio', response: 'In negozio il cliente è teso. A casa è rilassato ma non ricorda i passaggi. Il video è il suo angelo custode.' }
      ],
      closingTechniques: ['Accesso esclusivo al portale tutorial per ogni nuovo kit'],
      pricingStrategy: ['Focus sulla riduzione del tasso di abbandono'],
      urgencyTriggers: ['Il mercato dei teenager è il tuo bacino futuro: istruiscili bene.']
    }
  },
  {
    id: '56',
    name: 'Fidelity "Protezione Vista"',
    shortDescription: 'Programma punti che premia la prevenzione e la manutenzione',
    tagline: 'Vederci bene conviene. Letteralmente.',
    icon: '🛡️',
    category: 'Marketing Digitale',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1591147139959-1a0305584cc1?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che comprano l\'occhiale e poi spariscono per 4 anni, dimenticando il valore del tuo controllo.',
    stats: [
      { icon: '🔄', label: "Retention", value: "+50%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📊', label: "Visite/Anno", value: "2", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💰', label: "Cross-sell", value: "High", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Acquisto Spot', desc: 'Il cliente compra per necessità, poi si scorda di te', icon: '💨' },
      after: { title: 'Healthy Cycle', desc: 'Controllo annuo = Sconto sole = Cliente fedele', icon: '🔄' }
    },
    psychologyQuote: 'Premiare i comportamenti virtuosi (la prevenzione) crea un legame più profondo rispetto al semplice sconto sul prodotto.',
    solutions: [
      'Accumulo punti per controllo vista, pulizia ultrasuoni, acquisto kit',
      'Sconti crescenti per acquisto secondo occhiale (es. vista-sole)',
      'Bonus fedeltà per chi porta un amico per l\'esame della vista',
      'Notifiche push: "Il tuo occhiale ha bisogno di un Pit-Stop"',
      'Classifica "Occhi d\'Oro" per i clienti storici con premi VIP'
    ],
    economicBenefits: {
      title: 'Valore nel Tempo',
      benefits: [
        'Aumento massiccio della frequenza di visita in negozio',
        'Fidelizzazione del nucleo familiare (punti condivisibili)',
        'Spinta sulla vendita di prodotti accessori (spray, panni, catenelle)',
        'Database profilato per campagne vista-sole stagionali'
      ],
      savings: 'Churn rate (perdita clienti): -25%'
    },
    secretSection: {
      killerPhrases: [
        'Non vendere un occhiale, vendi una visione chiara per sempre.',
        'La prevenzione è la tua miglior strategia di marketing.',
        'Falli tornare prima che ne abbiano realmente bisogno.'
      ],
      scripts: [
        { title: 'Opening', content: 'Cosa fa un cliente tra un occhiale e l\'altro? Di solito nulla. Con la Fidelity Protezione, torna ogni 6 mesi per un piccolo premio.' }
      ],
      objections: [
        { objection: 'Abbiamo già troppi sconti', response: 'Questi non sono sconti al buio. Sono premi per chi viene in negozio e ti permette di vendergli altro.' }
      ],
      closingTechniques: ['Setup software fedeltà incluso nel pacchetto digital'],
      pricingStrategy: ['Focus sulla frequenza di acquisto annuale'],
      urgencyTriggers: ['La concorrenza delle catene è forte: sii più vicino e intelligente.']
    }
  },
  {
    id: '57',
    name: 'Richiesta Pit-Stop Vista',
    shortDescription: 'Prenota una regolazione e pulizia rapida in 5 minuti',
    tagline: 'Oltre il vetro. Visione perfetta in 5 minuti.',
    icon: '⚡',
    category: 'Digitalizzazione',
    activityType: 'optical',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che entrano dicendo "posso una cosa veloce?" mentre state servendo un occhiale da 500€, creando imbarazzo.',
    stats: [
      { icon: '🏎️', label: "Time", value: "5min", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🤝', label: "Trust", value: "+90%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🛍️', label: "Impulse", value: "Mid", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Interruzione', desc: '"Scusi, mi pulisce gli occhiali?" mentre vendi', icon: '😠' },
      after: { title: 'Express Flow', desc: 'Appuntamenti brevi programmati tra una vendita e l\'altra', icon: '⚡' }
    },
    psychologyQuote: 'Fornire un servizio gratuito o low-cost ultra-rapido genera il fenomeno della reciprocità: il cliente si sentirà in dovere di tornare da te per il prossimo acquisto.',
    solutions: [
      'Pulsante "Pit-Stop" rapido sulla home-page mobile',
      'Servizi inclusi: Serraggio viti, Regolazione naselli, Pulizia ultrasuoni',
      'Orari dedicati per non intasare le vendite principali',
      'Checkpoint automatico: "Controlliamo anche i gradi già che ci sei?"',
      'Invio feedback "Ti senti meglio ora?" post-intervento'
    ],
    economicBenefits: {
      title: 'Service Flow',
      benefits: [
        'Aumento del traffico pedonale qualificato in negozio',
        'Opportunità incredibile di up-selling su lenti e montature nuove',
        'Migliore gestione del tempo dello staff junior',
        'Passaparola: "Lì mi hanno sistemato gli occhiali in un minuto"'
      ],
      savings: 'Disturbo vendite principali: Azzerato'
    },
    secretSection: {
      killerPhrases: [
        'Il Pit-Stop è la tua porta d\'ingresso dorata.',
        'Regala 5 minuti, guadagna un cliente per 10 anni.',
        'La cura del dettaglio ti rende unico.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le persone hanno paura di disturbare per una vitina. Dagli un pulsante "Pit-Stop" e vedrai quante persone nuove entreranno nel suo negozio.' }
      ],
      objections: [
        { objection: 'Non vogliamo gente che non spende', response: 'Ogni persona che entra è una vendita potenziale. Se esce con l\'occhiale perfetto grazie a lei, tornerà quando vorrà cambiarlo.' }
      ],
      closingTechniques: ['Kit pulizia spray in omaggio alla prima prenotazione Pit-Stop'],
      pricingStrategy: ['Focus sull\'acquisizione di traffico (Foot-traffic)'],
      urgencyTriggers: ['Il sole estivo richiede occhiali perfettamente puliti e aderenti.']
    }
  },
  {
    id: '58',
    name: 'Virtual Tour 3D Interattivo',
    shortDescription: 'Esplorazione dell\'immobile a 360° online per scremare le visite fisiche',
    tagline: 'Visita la tua futura casa, senza alzarti dal divano.',
    icon: '🕶️',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    problem: 'Troppo tempo perso in visite fisiche con clienti poco qualificati o curiosi che non comprano.',
    stats: [
      { icon: '⏳', label: "Visite", value: "-60%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '👀', label: "Views", value: "3x", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🎯', label: "Target", value: "Qualif", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Visite a Vuoto', desc: 'Pomeriggi interi persi per far vedere case a chi non è convinto', icon: '😫' },
      after: { title: 'Filtro Digitale', desc: 'Arrivano in casa solo i clienti già innamorati del tour 3D', icon: '✨' }
    },
    psychologyQuote: 'L\'immersione 3D crea un senso di possesso anticipato nell\'acquirente, accelerando il legame emotivo con l\'immobile.',
    solutions: [
      'Scansione laser 3D ad alta definizione (Matterport style)',
      'Integrazione tour VR su portali immobiliari e sito agenzia',
      'Funzione "Dollhouse" per vedere la pianta 3D completa',
      'Misurazione digitale degli spazi integrata per il cliente',
      'Possibilità di guidare la visita remota in video-call'
    ],
    economicBenefits: {
      title: 'Tempo è Denaro',
      benefits: [
        'Risparmio di decine di ore uomo per ogni immobile venduto',
        'Maggiore visibilità sui portali grazie al contenuto multimediale',
        'Acquisizione incarichi facilitata dimostrando alta tecnologia',
        'Possibilità di vendere a clienti fuori regione o esteri'
      ],
      savings: 'Tempo agente: -15 ore/immobile'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli vedere le foto, fagli vivere la casa.',
        'La tua agenzia non chiude mai: è aperta 24/7 online.',
        'Trasforma i clic in contratti.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti curiosi le fanno perdere tempo ogni settimana? Con il tour 3D, chi la chiama ha già camminato per la casa ed è realmente interessato.' }
      ],
      objections: [
        { objection: 'Le foto bastano', response: 'Le foto possono nascondere difetti. Il 3D trasmette trasparenza e crea una fiducia che chiude la vendita prima.' }
      ],
      closingTechniques: ['Integrazione immediata nell\'annuncio top di gamma'],
      pricingStrategy: ['Caricare il costo del tour al venditore come servizio premium'],
      urgencyTriggers: ['Il mercato estero compra solo dopo aver visto il tour 3D.']
    }
  },
  {
    id: '59',
    name: 'Valutazione Immobile Istantanea',
    shortDescription: 'Tool online per stime preliminari, utile per acquisire venditori',
    tagline: 'Quanto vale la tua casa? Scoprilo in 30 secondi.',
    icon: '📊',
    category: 'Marketing Digitale',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    problem: 'Difficoltà nell\'intercettare proprietari che vogliono vendere prima che chiamino la concorrenza.',
    stats: [
      { icon: '📈', label: "Leads", value: "+120%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🏠', label: "Incarichi", value: "+25%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⏱️', label: "Risposta", value: "Instant", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Ricerca Fredda', desc: 'Telefonate a tappeto e volantini nei citofoni', icon: '📞' },
      after: { title: 'Lead Magnet', desc: 'I proprietari lasciano i dati per avere la valutazione', icon: '🧲' }
    },
    psychologyQuote: 'La curiosità sul valore del proprio patrimonio è la leva più forte per iniziare una conversazione con un potenziale venditore.',
    solutions: [
      'Algoritmo di stima basato sui prezzi OMI e compravendite recenti',
      'Landing page dedicata all\'acquisizione venditori',
      'Report PDF personalizzato inviato automaticamente via email',
      'Alert notifica all\'agente per follow-up immediato',
      'Integrazione con database catastali per precisione dati'
    ],
    economicBenefits: {
      title: 'Acquisizione Intelligente',
      benefits: [
        'Costo per lead venditore drasticamente ridotto',
        'Database di potenziali venditori sempre aggiornato',
        'Posizionamento come autorità ed esperto del mercato locale',
        'Conversione facilitata da stima online a sopralluogo fisico'
      ],
      savings: 'Costi marketing acquisizione: -40%'
    },
    secretSection: {
      killerPhrases: [
        'Semplifica la curiosità, monetizza l\'interesse.',
        'Acquisire un immobile è difficile, farsi chiamare dal proprietario è smart.',
        'La valutazione è l\'inizio di ogni grande contratto.'
      ],
      scripts: [
        { title: 'Opening', content: 'Come entra in contatto con chi vuole vendere oggi? Aspetta che chiamino lei o gli offre un servizio utile che le regala il loro contatto?' }
      ],
      objections: [
        { objection: 'Le stime automatiche non sono precise', response: 'Esatto, ed è per questo che il report dice "Stima preliminare, contatta l\'agente per il valore reale". È la scusa perfetta per il sopralluogo.' }
      ],
      closingTechniques: ['Campagna Facebook/Instagram mirata su "Valuta Casa"'],
      pricingStrategy: ['Focus sul volume di nuovi incarichi generati'],
      urgencyTriggers: ['Il mercato sta cambiando: i venditori hanno bisogno di certezze ora.']
    }
  },
  {
    id: '60',
    name: 'Booking Appuntamenti Visita',
    shortDescription: 'Calendario digitale per prenotare i sopralluoghi in autonomia',
    tagline: 'La casa dei tuoi sogni, all\'ora che vuoi tu.',
    icon: '📅',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1506784919141-93b4822ae256?auto=format&fit=crop&w=800&q=80',
    problem: 'Decine di chiamate per coordinare l\'agenda dell\'agente, del venditore e dell\'acquirente.',
    stats: [
      { icon: '⏱️', label: "Coord", value: "-80%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔔', label: "Reminder", value: "Auto", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🌙', label: "Night Book", value: "+30%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Caos Telefonico', desc: 'Rincorrersi al telefono per trovare un buco libero', icon: '📱' },
      after: { title: 'Sync Perfetto', desc: 'Slot prenotabili online e notifiche WhatsApp a tutti', icon: '✅' }
    },
    psychologyQuote: 'Dare all\'acquirente il controllo sulla prenotazione aumenta il tasso di conversione dall\'annuncio alla visita fisica.',
    solutions: [
      'Calendario sincronizzato con Google/Outlook dell\'agente',
      'Finestre temporali specifiche per ogni immobile (Open House)',
      'Richiesta dati di contatto obbligatoria per la prenotazione',
      'Promemoria automatici via SMS per ridurre i bidoni',
      'Integrazione con i principali portali (Immobiliare.it/Idealista)'
    ],
    economicBenefits: {
      title: 'Produttività Operativa',
      benefits: [
        'Azzeramento del tempo speso in segreteria per gli appuntamenti',
        'Migliore gestione logistica degli spostamenti degli agenti',
        'Tracking dei clienti più attivi e pronti all\'acquisto',
        'Immagine di agenzia strutturata e professionale'
      ],
      savings: 'Tempo segreteria: -12 ore/settimana'
    },
    secretSection: {
      killerPhrases: [
        'Non farti rincorrere, fatti prenotare.',
        'L\'appuntamento è il primo passo verso la provvigione.',
        'La tua agenda è il tuo asset: digitalizzala.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanto tempo perde a richiamare chi le lascia messaggi sui portali? Con il booking, arrivano direttamente nel suo calendario.' }
      ],
      objections: [
        { objection: 'Devo prima sentire il proprietario', response: 'Può impostare slot pre-approvati dal proprietario o usare il sistema per raccogliere le preferenze e confermarle con un clic.' }
      ],
      closingTechniques: ['Attivazione bottoni "Prenota Visita" su ogni annuncio'],
      pricingStrategy: ['Focus sull\'efficienza dello staff'],
      urgencyTriggers: ['Le case belle vanno a ruba: il booking deve essere istantaneo.']
    }
  },
  {
    id: '61',
    name: 'Area Riservata Venditore',
    shortDescription: 'Dashboard per monitorare views e feedback in tempo reale',
    tagline: 'La vendita della tua casa, in totale trasparenza.',
    icon: '🔐',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    problem: 'Venditori ansiosi che chiamano ogni giorno chiedendo "Come sta andando?" e "Cosa ha detto quello della visita?".',
    stats: [
      { icon: '😊', label: "Soddisf", value: "Max", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📞', label: "Calls", value: "-70%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📊', label: "Report", value: "24/7", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Il Buio', desc: 'Settimane senza sentire l\'agente, senso di abbandono', icon: '👤' },
      after: { title: 'Controllo Totale', desc: 'Vedi i clic, i feedback e i passi fatti per vendere', icon: '📉' }
    },
    psychologyQuote: 'La trasparenza riduce l\'ansia del cliente e giustifica il valore della provvigione richiesta.',
    solutions: [
      'Accesso con login per ogni venditore affidatario',
      'Statistiche aggregate (Views, Salvati, Contatti ricevuti)',
      'Modulo feedback post-visita caricato dall\'agente in 1 minuto',
      'Documentazione dell\'immobile centralizzata e sicura',
      'Chat diretta con l\'agente assegnato'
    ],
    economicBenefits: {
      title: 'Differenziazione Competitiva',
      benefits: [
        'Aumento del tasso di acquisizione incarichi in esclusiva',
        'Miglioramento drastico del passaparola positivo dei venditori',
        'Riduzione dello stress gestionale per gli account dell\'agenzia',
        'Dati oggettivi per richiedere ribassi prezzo se necessario'
      ],
      savings: 'Tempo reportistica manuale: Azzerato'
    },
    secretSection: {
      killerPhrases: [
        'La fiducia si costruisce con i dati, non con le promesse.',
        'Sii l\'agenzia che parla con i fatti.',
        'Un cliente informato è un cliente felice.'
      ],
      scripts: [
        { title: 'Opening', content: 'Il suo cliente proprietario si sente abbandonato dopo la firma? Gli dia una dashboard e gli faccia vedere quanto sta lavorando per lui.' }
      ],
      objections: [
        { objection: 'Se non ci sono visite sembra che non lavoro', response: 'Al contrario, gli mostra che l\'annuncio è visto ma il mercato non risponde. È la base per discutere del prezzo.' }
      ],
      closingTechniques: ['Demo dell\'area riservata durante la fase di acquisizione'],
      pricingStrategy: ['Focus sulla fidelizzazione del cliente alto-vendente'],
      urgencyTriggers: ['La concorrenza è agguerrita: la tecnologia è la tua difesa.']
    }
  },
  {
    id: '62',
    name: 'Calcolatore Mutuo e Rata',
    shortDescription: 'Widget per simulare la fattibilità finanziaria sull\'annuncio',
    tagline: 'Scopri se è la tua casa, scopri quanto ti costa.',
    icon: '🧮',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    problem: 'Agenti che portano in visita clienti che non hanno la minima idea della loro capacità di mutuo.',
    stats: [
      { icon: '💰', label: "Leads", value: "+30%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🏦', label: "Mutui", value: "+15%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🎯', label: "Qualific", value: "+50%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Sogni Infranti', desc: 'Vedere case da 300k con budget da 200k', icon: '💔' },
      after: { title: 'Concretezza', desc: 'Simulazione rata immediata e contatto creditizio rapido', icon: '💵' }
    },
    psychologyQuote: 'Concretizzare il costo in una rata mensile rende l\'acquisto più reale e meno spaventoso per il cliente.',
    solutions: [
      'Calcolatore dinamico integrato in ogni pagina immobile',
      'Aggiornamento tassi (Fissi/Variabili) in tempo reale',
      'Opzione "Richiedi Pre-fattibilità" con partner creditizio',
      'Visualizzazione spese accessorie (Notaio, Agenzia, Tasse)',
      'Grafico ammortamento interattivo'
    ],
    economicBenefits: {
      title: 'Lead Enrichment',
      benefits: [
        'Migliore qualificazione dei potenziali acquirenti',
        'Nuova fonte di revenue tramite referral con broker mutui',
        'Aumento della fiducia del cliente nel servizio dell\'agenzia',
        'Riduzione delle proposte d\'acquisto subordinate al mutuo che falliscono'
      ],
      savings: 'Tempo visite non fattibili: -30%'
    },
    secretSection: {
      killerPhrases: [
        'Trasforma i desideri in numeri sostenibili.',
        'La trasparenza finanziaria chiude le vendite.',
        'Aiutali a comprare, non solo a guardare.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante proposte saltano per colpa del mutuo? Se il cliente sa già quanto pagherà ogni mese, la trattativa è tutta in discesa.' }
      ],
      objections: [
        { objection: 'I tassi cambiano troppo spesso', response: 'Il tool è collegato ad API finanziarie. Si aggiorna da solo, lei non deve fare nulla.' }
      ],
      closingTechniques: ['Integrazione banner "Calcola Rata" sotto il prezzo'],
      pricingStrategy: ['Revenue sharing con partner creditizi'],
      urgencyTriggers: ['I tassi stanno salendo: i clienti hanno bisogno di calcoli precisi ora.']
    }
  },
  {
    id: '63',
    name: 'Digital Welcome Book Quartiere',
    shortDescription: 'Info su servizi, scuole e trasporti inviate post-visita',
    tagline: 'Non compri solo una casa, compri una vita nuova.',
    icon: '📖',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1524813686514-a570f97735e9?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che amano la casa ma hanno dubbi sulla zona, sui supermercati o sulle scuole vicine.',
    stats: [
      { icon: '📍', label: "Info zone", value: "Comp", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⭐', label: "Review", value: "High", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '💖', label: "Emotion", value: "+40%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Dubbi post-visita', desc: '"Chissà se c\'è la palestra vicino?"', icon: '🧐' },
      after: { title: 'Accoglienza', desc: 'Guida digitale del quartiere inviata su WhatsApp', icon: '🎁' }
    },
    psychologyQuote: 'Fornire informazioni sul contesto abbassa la percezione del rischio e aiuta il cliente a visualizzarsi già residente.',
    solutions: [
      'Mappa interattiva con punti di interesse (Scuole, Mezzi, Parchi)',
      'Mini-guida PDF o Web-app generata automaticamente per zona',
      'Integrazione recensioni locali e segreti del quartiere',
      'Contatti utili dell\'amministratore e dei servizi locali',
      'Personalizzazione con brand agenzia e foto dell\'agente'
    ],
    economicBenefits: {
      title: 'Marketing Emozionale',
      benefits: [
        'Aumento vertiginoso della qualità percepita post-visita',
        'Strumento unico che la concorrenza locale non offre',
        'Facilitazione della decisione d\'acquisto per famiglie con figli',
        'Cura del cliente che si trasforma in recensioni a 5 stelle'
      ],
      savings: 'Tempo spiegazioni quartiere: -15 min/cliente'
    },
    secretSection: {
      killerPhrases: [
        'Vendi il quartiere, la casa si venderà da sola.',
        'La cura inizia dove finisce la visita.',
        'Sii il cicerone del loro sogno.'
      ],
      scripts: [
        { title: 'Opening', content: 'Cosa succede dopo che il cliente esce dalla casa? Riceve un messaggio "Le è piaciuta?" o un regalo digitale che gli spiega come sarà la sua vita lì?' }
      ],
      objections: [
        { objection: 'Il lavoro è troppo per ogni casa', response: 'Il sistema crea guide per zone. Una volta fatta la zona "Centro", va bene per tutti gli appartamenti lì.' }
      ],
      closingTechniques: ['Invio automatico link post-scansione QR in visita'],
      pricingStrategy: ['Focus sulla Customer Experience'],
      urgencyTriggers: ['Le persone cercano community, non solo mattoni.']
    }
  },
  {
    id: '64',
    name: 'Proposta d\'Acquisto Digitale',
    shortDescription: 'Sistema per inviare manifestazioni d\'interesse online',
    tagline: 'Veloce. Sicura. Formale. La tua offerta in un clic.',
    icon: '📝',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che "ci pensano" troppo perché spaventati dalla burocrazia o dalla firma in ufficio.',
    stats: [
      { icon: '🚀', label: "Offerte", value: "+35%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📜', label: "Burocr", value: "-90%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🔒', label: "Legal", value: "Verified", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Attesa e Dubbio', desc: 'Stampare fuori, firmare, scannerizzare, rimandare', icon: '📂' },
      after: { title: 'Azione Rapida', desc: 'Compilazione guidata e firma OTP su smartphone', icon: '✍️' }
    },
    psychologyQuote: 'Abbassare la barriera d\'ingresso tecnica durante un momento di eccitazione porta a un numero maggiore di proposte formalizzate.',
    solutions: [
      'Modulo proposta pre-compilato con i dati dell\'immobile',
      'Integrazione firma elettronica semplice o avanzata (OTP)',
      'Gestione deposito cauzionale via bonifico istantaneo tracciato',
      'Checklist automatica documenti identità acquirente',
      'Notifica immediata al venditore per accettazione remota'
    ],
    economicBenefits: {
      title: 'Chiusura Accelerata',
      benefits: [
        'Aumento del numero di vendite concluse per l\'agenzia',
        'Riduzione dei tempi tra la visita e la proposta formale',
        'Tracciabilità legale di ogni passo della trattativa',
        'Minor dispendio di carta e costi di archiviazione fisica'
      ],
      savings: 'Tempo chiusura pratica: -3 giorni'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli cambiare idea, fagli firmare ora.',
        'La tecnologia che accorcia le distanze tra proposta e rogito.',
        'La semplicità è il miglior alleato del venditore.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti clienti le dicono "Sì mi piace, mando la proposta lunedì" e poi spariscono? Con il tablet in mano, la proposta si fa in 2 minuti a fine visita.' }
      ],
      objections: [
        { objection: 'Gli avvocati dicono che non è sicura', response: 'Usiamo protocolli di firma digitale a norma eIDAS, con lo stesso valore legale della firma a penna.' }
      ],
      closingTechniques: ['Firma della proposta "al volo" durante l\'Open House'],
      pricingStrategy: ['Focus sul tasso di conversione Visita-Proposta'],
      urgencyTriggers: ['In un mercato che corre, vince chi propone prima.']
    }
  },
  {
    id: '65',
    name: 'Alert "Nuova Casa" WhatsApp',
    shortDescription: 'Notifiche prioritarie per immobili corrispondenti ai filtri',
    tagline: 'Sii il primo. Ricevi gli immobili prima degli altri.',
    icon: '📲',
    category: 'Marketing Digitale',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1512428559083-a400a4b82c9a?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che si lamentano di aver visto la casa già venduta o di non aver ricevuto la mail dei portali.',
    stats: [
      { icon: '💬', label: "Open Rate", value: "98%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🏎️', label: "Speed", value: "Real-time", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📱', label: "Click", value: "High", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Email Ignorate', desc: 'Annunci persi tra le promozioni o finiti in spam', icon: '📧' },
      after: { title: 'Accesso VIP', desc: 'Messaggio WhatsApp: "È uscita la casa che cercavi!"', icon: '⚡' }
    },
    psychologyQuote: 'La notifica push su WhatsApp crea un senso di esclusività e urgenza che l\'email non può minimamente eguagliare.',
    solutions: [
      'Filtri personalizzati (Zona, Prezzo, Metri, Stanze)',
      'Integrazione API WhatsApp Business per invio automatico',
      'Scheda immobile interattiva visualizzabile in-chat',
      'Pulsante "Prenota Visita" direttamente sotto il messaggio',
      'Algoritmo di matching smart basato sui desiderata dell\'utente'
    ],
    economicBenefits: {
      title: 'Velocità di Vendita',
      benefits: [
        'Immobili venduti nella cerchia "privata" prima di andare online',
        'Riduzione dei costi pubblicitari sui portali immobiliari',
        'Database di acquirenti iper-profilato e reattivo',
        'Feedback immediato dal mercato su ogni nuovo inserimento'
      ],
      savings: 'Tempo a mercato (DOM): -20%'
    },
    secretSection: {
      killerPhrases: [
        'Anticipa il mercato, domina la zona.',
        'I portali sono per tutti, WhatsApp è per i tuoi clienti migliori.',
        'La velocità è l\'unica moneta che conta oggi.'
      ],
      scripts: [
        { title: 'Opening', content: 'Perché far scoprire le sue case ai clienti su Immobiliare.it insieme a quelle degli altri, quando può essere lei il primo a mandargliele in tasca?' }
      ],
      objections: [
        { objection: 'I clienti non vogliono spam su WhatsApp', response: 'È un servizio richiesto da loro dopo che hanno lasciato i filtri. Non è spam, è valore.' }
      ],
      closingTechniques: ['Iscrizione alla "Priority List" obbligatoria post-visita'],
      pricingStrategy: ['Focus sulla velocità di rotazione del portafoglio'],
      urgencyTriggers: ['Le migliori occasioni durano meno di 48 ore.']
    }
  },
  {
    id: '66',
    name: 'Checklist Documenti Vendita',
    shortDescription: 'Spazio cloud condiviso per caricare planimetrie e certificati',
    tagline: 'Niente sorprese al rogito. Tutto in ordine, subito.',
    icon: '📂',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=800&q=80',
    problem: 'Documenti mancanti scoperti a una settimana dal notaio che fanno saltare mesi di lavoro.',
    stats: [
      { icon: '🛡️', label: "Safety", value: "Max", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📂', label: "Archiv", value: "Cloud", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📉', label: "Imprev", value: "-80%", color: "from-red-500/20 to-red-600/10", text: "text-red-400" }
    ],
    beforeAfter: {
      before: { title: 'Busta di Plastica', desc: 'Planimetrie stropicciate, visure vecchie, caos', icon: '📁' },
      after: { title: 'Vault Digitale', desc: 'Folder ordinato con APE, Titoli, Planimetrie verificate', icon: '🏛️' }
    },
    psychologyQuote: 'L\'ordine documentale trasmette una sensazione di sicurezza che riduce i ripensamenti dell\'acquirente durante la trattativa.',
    solutions: [
      'Cloud sicuro personalizzato per ogni immobile in vendita',
      'Checklist guidata per il venditore (Cosa manca? Cosa scade?)',
      'Caricamento diretto da smartphone (foto -> PDF)',
      'Notifica automatica all\'agente quando un file viene caricato',
      'Cartella "Pronto per Notaio" con accesso per il professionista'
    ],
    economicBenefits: {
      title: 'Sicurezza Giuridica',
      benefits: [
        'Azzeramento dei fallimenti di compravendita per vizi documentali',
        'Miglioramento della reputazione professionale presso i notai',
        'Riduzione dello stress per l\'agente immobiliare e le parti',
        'Facilitazione nella richiesta di mutuo dell\'acquirente'
      ],
      savings: 'Tempo gestione pratiche: -8 ore/immobile'
    },
    secretSection: {
      killerPhrases: [
        'Il rogito si prepara al momento dell\'incarico.',
        'La tranquillità dei tuoi clienti è il tuo miglior biglietto da visita.',
        'Zero imprevisti, solo brindisi.'
      ],
      scripts: [
        { title: 'Opening', content: 'Dormirebbe tranquillo sapendo che manca una conformità urbanistica? Organizziamo tutto subito nel cloud dell\'agenzia.' }
      ],
      objections: [
        { objection: 'Il cliente non è capace a caricare i file', response: 'Gli basta fare una foto al foglio. Al resto pensiamo noi o il sistema che converte in PDF.' }
      ],
      closingTechniques: ['Fornitura del "Dossier Immobile" completo alla proposta'],
      pricingStrategy: ['Focus sulla tutela legale'],
      urgencyTriggers: ['I controlli dei notai sono sempre più severi.']
    }
  },
  {
    id: '67',
    name: 'Home Staging Virtuale',
    shortDescription: 'Render grafici che mostrano il potenziale tramite QR code',
    tagline: 'Guarda oltre i muri. Immagina la tua casa.',
    icon: '🏠',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1600585154340-be6199fbfd0b?auto=format&fit=crop&w=800&q=80',
    problem: 'Appartamenti vecchi, vuoti o male arredati che non attirano offerte e restano invenduti.',
    stats: [
      { icon: '✨', label: "Appealing", value: "+70%", color: "from-purple-500/20 to-purple-400/10", text: "text-purple-400" },
      { icon: '💰', label: "Price", value: "+10%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📉', label: "Tempo", value: "-45%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" }
    ],
    beforeAfter: {
      before: { title: 'Tristezza', desc: 'Stanze buie con mobili della nonna', icon: '🏚️' },
      after: { title: 'Potenziale', desc: 'Render fotorealistico: come potrebbe diventare', icon: '✨' }
    },
    psychologyQuote: 'La maggior parte dei clienti non ha capacità di visualizzazione spaziale: mostrare "cosa può diventare" abbatte il muro del pregiudizio.',
    solutions: [
      'Render 3D fotorealistici basati sulle foto reali dell\'immobile',
      'QR code posizionati fisicamente nelle stanze durante la visita',
      'Confronto Slider "Adesso vs Dopo" interattivo da smartphone',
      'Preventivo di ristrutturazione indicativo abbinato al render',
      'Opzione di personalizzazione finiture in tempo reale (AI)'
    ],
    economicBenefits: {
      title: 'Valorizzazione Asset',
      benefits: [
        'Vendita di immobili "difficili" in metà del tempo medio',
        'Aumento del prezzo di chiusura (minore richiesta di sconti)',
        'Acquisizione incarichi di immobili da ristrutturare facilitata',
        'Collaborazione con studi di architettura e imprese'
      ],
      savings: 'Costi home staging fisico: -90%'
    },
    secretSection: {
      killerPhrases: [
        'Vendi il futuro, non il passato.',
        'Regala occhi nuovi ai tuoi clienti.',
        'La bellezza è una scelta tecnologica.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti clienti dicono "Eh ma è da ristrutturare" e se ne vanno? Gli faccia inquadrare il QR e gli faccia vedere la reggia che può diventare.' }
      ],
      objections: [
        { objection: 'Costa troppo fare i render', response: 'Costa molto di più abbassare il prezzo di 20.000€ perché la casa sembra brutta agli occhi del cliente.' }
      ],
      closingTechniques: ['Inclusione render nella brochure di lusso dell\'immobile'],
      pricingStrategy: ['Focus sulla massimizzazione del prezzo di vendita'],
      urgencyTriggers: ['Le case "brutte" stanno ferme, quelle "potenziali" volano.']
    }
  },
  {
    id: '68',
    name: 'Try-On Virtuale Gioielli',
    shortDescription: 'Realtà aumentata per "indossare" anelli e orologi tramite smartphone',
    tagline: 'Il lusso sulle tue mani, ovunque tu sia.',
    icon: '💍',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che hanno paura di entrare in gioielleria per "solo vedere" o che non sanno come sta l\'oggetto addosso.',
    stats: [
      { icon: '🤳', label: "Prove", value: "Unlimited", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🚀', label: "Interest", value: "+85%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '✨', label: "Experience", value: "Premium", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Timidezza', desc: 'Guardare la vetrina senza il coraggio di entrare a provare', icon: '😕' },
      after: { title: 'Interazione AR', desc: 'Provare l\'anello sul dito con la fotocamera del cell', icon: '✨' }
    },
    psychologyQuote: 'L\'esperienza di indossare virtualmente un gioiello abbatte la barriera della soggezione psicologica tipica delle gioiellerie.',
    solutions: [
      'Integrazione AR (Realtà Aumentata) via browser per anelli e orologi',
      'Fitting digitale preciso basato sulla dimensione della mano',
      'Funzione "Confronta Modelli" in tempo reale',
      'Pulsante "Invia foto a partner" per suggerimenti regalo',
      'QR code in vetrina per prove notturne a negozio chiuso'
    ],
    economicBenefits: {
      title: 'Conversion & Engagement',
      benefits: [
        'Aumento del traffico qualificato in negozio del 40%',
        'Riduzione dello stress da prova per i clienti timidi',
        'Acquisizione leads tramite salvataggio prove virtuali',
        'Marketing virale grazie alle condivisioni social delle prove'
      ],
      savings: 'Tempo vendita assistita: -30%'
    },
    secretSection: {
      killerPhrases: [
        'Trasforma ogni smartphone in un camerino di lusso.',
        'Elimina la paura del bancone, crea la voglia di possesso.',
        'La bellezza non ha bisogno di spiegazioni, ha bisogno di essere vista.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante persone guardano le sue vetrine e poi vanno via? Se potessero provare quegli occhiali o quegli orologi inquadrando un QR, entrerebbero già convinte.' }
      ],
      objections: [
        { objection: 'Non sostituisce il tocco fisico', response: 'Assolutamente, ma è l\'esca perfetta per far sedere il cliente nel suo salottino privato.' }
      ],
      closingTechniques: ['Incentivo "Sconto Prova AR" per il primo acquisto in sede'],
      pricingStrategy: ['Focus sul valore dell\'experience wow'],
      urgencyTriggers: ['Le nuove collezioni hanno bisogno di un lancio digitale d\'impatto.']
    }
  },
  {
    id: '69',
    name: 'Configuratore Anelli di Fidanzamento',
    shortDescription: 'Tool online per scegliere montatura e pietre con calcolo immediato del prezzo',
    tagline: 'Crea il simbolo del tuo amore. Unico, come voi.',
    icon: '💎',
    category: 'E-commerce',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti confusi dai prezzi e dalle infinite combinazioni di pietre/metalli, timorosi di sforare il budget.',
    stats: [
      { icon: '💰', label: "Price Transp", value: "100%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🎨', label: "Combinaz", value: "10k+", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📈', label: "Conversion", value: "+50%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Incertezza', desc: '"Chissà quanto costa questa combinazione?"', icon: '❓' },
      after: { title: 'Certezze', desc: 'Prezzo aggiornato in tempo reale ad ogni modifica', icon: '✅' }
    },
    psychologyQuote: 'Partecipare alla creazione del prodotto aumenta significativamente il valore percepito e l\'attaccamento emotivo.',
    solutions: [
      'Scelta del metallo (Oro 18k, Platino, Oro Rosa)',
      'Selezione pietra centrale (Carati, Taglio, Colore, Purezza)',
      'Visualizzazione 3D ruotabile ad alta risoluzione',
      'Integrazione certificati pietre (GIA/IGI) consultabili',
      'Salvataggio bozza e prenotazione appuntamento per visione dal vivo'
    ],
    economicBenefits: {
      title: 'Efficienza & ROI',
      benefits: [
        'Aumento dello scontrino medio grazie all\'upselling guidato',
        'Lead altamente profilati pronti per la chiusura in negozio',
        'Riduzione infinita del tempo passato a fare preventivi a mano',
        'Fornitura di dati precisi su quali combinazioni sono più cercate'
      ],
      savings: 'Tempo preventivazione: -80%'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli comprare un anello, fagli creare un ricordo.',
        'La trasparenza del prezzo costruisce la fiducia nel valore.',
        'Chi crea, compra.'
      ],
      scripts: [
        { title: 'Opening', content: 'Il cliente oggi vuole sapere quanto spende prima di sedersi al bancone. Gli dia il configuratore e lo faccia sognare entro il suo budget.' }
      ],
      objections: [
        { objection: 'Rovina la professionalità del gioielliere', response: 'Al contrario, mostra che siete moderni. La vostra competenza entra in gioco quando lui viene a vedere la pietra selezionata dal vivo.' }
      ],
      closingTechniques: ['Call to action: "Riserva questa combinazione per 48 ore"'],
      pricingStrategy: ['Margine dinamico basato sul prezzo pietre in tempo reale'],
      urgencyTriggers: ['La stagione dei matrimoni si prepara mesi prima.']
    }
  },
  {
    id: '70',
    name: 'Booking "Consulenza Privata"',
    shortDescription: 'Prenotazione di appuntamenti esclusivi in sede o videochiamata',
    tagline: 'Il tuo momento prezioso merita tutta la nostra attenzione.',
    icon: '🤝',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=800&q=80',
    problem: 'Soggiorno in gioielleria interrotto da altri clienti, mancanza di privacy per acquisti importanti.',
    stats: [
      { icon: '⭐', label: "VIP UX", value: "Top", color: "from-purple-500/20 to-purple-400/10", text: "text-purple-400" },
      { icon: '⏳', label: "No Wait", value: "100%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📈', label: "Closing", value: "+35%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Interruzioni', desc: 'Comprare un diamante con persone che chiedono un cambio batteria', icon: '📞' },
      after: { title: 'Esclusività', desc: 'Porte chiuse e consulente dedicato per la tua ora d\'oro', icon: '🥂' }
    },
    psychologyQuote: 'L\'esclusività temporale aumenta la percezione di importanza dell\'acquisto e giustifica fasce di prezzo più alte.',
    solutions: [
      'Calendario online per appuntamenti fisici o virtuali',
      'Modulo pre-colloquio per capire i gusti e preparare il vassoio',
      'Promemoria automatici via SMS con "access code" per il negozio',
      'Opzione videochiamata ultra-HD per clienti fuori città',
      'Integrazione con database CRM per conoscere lo storico del cliente'
    ],
    economicBenefits: {
      title: 'Customer Lifetime Value',
      benefits: [
        'Clienti più rilassati che spendono di più e con gioia',
        'Migliore organizzazione del personale e dei turni',
        'Acquisizione di una clientela di fascia alta che cerca privacy',
        'Riduzione drastica dei tempi morti in negozio'
      ],
      savings: 'Tempo gestionale: -5 ore/settimana'
    },
    secretSection: {
      killerPhrases: [
        'Vendi il servizio, il gioiello è la conseguenza.',
        'Crea l\'evento, non solo la transazione.',
        'Il lusso è tempo dedicato senza interruzioni.'
      ],
      scripts: [
        { title: 'Opening', content: 'Come tratta i suoi clienti migliori? Gli fa fare la fila o gli offre un appuntamento riservato con il vassoio già pronto per loro?' }
      ],
      objections: [
        { objection: 'I clienti non vogliono prenotare', response: 'Chi deve fare un acquisto importante ama sapere che avrà la vostra totale attenzione.' }
      ],
      closingTechniques: ['Omaggio "Kit Pulizia" per chi prenota la prima consulenza online'],
      pricingStrategy: ['Focus sulla qualità del tempo vendita'],
      urgencyTriggers: ['Le festività (Natale, S.Valentino) richiedono una gestione VIP.']
    }
  },
  {
    id: '71',
    name: 'Digital Warranty & Stone Certificate',
    shortDescription: 'Archivio sicuro per certificati e garanzie digitalizzate',
    tagline: 'La sicurezza del tuo valore, sempre in tasca.',
    icon: '🔐',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1591147139959-1a0305584cc1?auto=format&fit=crop&w=800&q=80',
    problem: 'Smarrimento dei certificati cartacei delle pietre o delle garanzie degli orologi, svalutando l\'oggetto.',
    stats: [
      { icon: '🏠', label: "Accessibility", value: "24/7", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🛡️', label: "Safety", value: "Cloud", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📉', label: "Loss Risk", value: "-95%", color: "from-red-500/20 to-red-400/10", text: "text-red-400" }
    ],
    beforeAfter: {
      before: { title: 'Caos Cartaceo', desc: 'Foglio ingiallito o perso in un cassetto durante il trasloco', icon: '📄' },
      after: { title: 'Vault Digitale', desc: 'Tutti i PDF originali e foto HD salvati in un\'area protetta', icon: '🔒' }
    },
    psychologyQuote: 'Fornire un deposito sicuro per i certificati aumenta la percezione di affidabilità del rivenditore post-vendita.',
    solutions: [
      'Area riservata cliente con accesso via app o sito',
      'Scansione automatica e upload certificati IGI, GIA, HRD',
      'Storico degli acquisti con date e scadenze garanzia',
      'Pulsante per la perizia o il rinnovo assicurativo',
      'Download immediato per pratiche assicurative in caso di furto'
    ],
    economicBenefits: {
      title: 'Fidelizzazione At-Source',
      benefits: [
        'Il cliente non ti dimentica e torna per le revisioni future',
        'Facilitazione del mercato dell\'usato (buy-back) trasparente',
        'Immagine hi-tech che distingue dalle gioiellerie tradizionali',
        'Database profilato dei beni posseduti per offerte mirate'
      ],
      savings: 'Tempo ricerca in archivio: Azzerato'
    },
    secretSection: {
      killerPhrases: [
        'Proteggi il valore, fidati della tecnologia.',
        'La carta si perde, il digitale resta eterno.',
        'Sii il custode digitale dei beni preziosi dei tuoi clienti.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanto vale un orologio senza la sua garanzia originale? Molto meno. Diamo ai suoi clienti la tranquillità di non perderla mai più.' }
      ],
      objections: [
        { objection: 'Il cartaceo serve ancora per legge', response: 'Il cartaceo resta a loro, il digitale è la loro copia di sicurezza sempre pronta all\'uso.' }
      ],
      closingTechniques: ['Integrazione automatica al momento della vendita'],
      pricingStrategy: ['Focus sulla tutela del valore nel tempo'],
      urgencyTriggers: ['Il mercato degli investimenti in beni rifugio richiede dati certi.']
    }
  },
  {
    id: '72',
    name: 'Stato Laboratorio Real-Time',
    shortDescription: 'Tracciamento online della riparazione o messa a misura',
    tagline: 'Aspettare è più dolce quando sai a che punto sei.',
    icon: '🛠️',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che chiamano nervosi per sapere se l\'anello è pronto o se l\'orologio è tornato dall\'assistenza.',
    stats: [
      { icon: '📞', label: "Calls", value: "-60%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⏱️', label: "Status", value: "Live", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '😊', label: "Peace", value: "Max", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Incertezza', desc: '"L\'avevo lasciato 2 settimane fa, sarà pronto?"', icon: '❓' },
      after: { title: 'Trasparenza', desc: '"In lucidatura", "Controllo qualità", "Pronto!"', icon: '✅' }
    },
    psychologyQuote: 'La visibilità del processo artigianale aumenta la pazienza del cliente e la percezione del lavoro svolto.',
    solutions: [
      'Link di tracciamento univoco inviato via WhatsApp',
      'Stati personalizzati: Accettato, Smontaggio, Riparazione, Lucidatura, Pronto',
      'Foto del gioiello prima e dopo l\'intervento caricate dal tecnico',
      'Notifica automatica di ritiro con orari del negozio',
      'Integrazione con il sistema di spedizione per consegne a casa'
    ],
    economicBenefits: {
      title: 'Efficienza Laboratorio',
      benefits: [
        'Meno tempo perso al telefono per dare informazioni di routine',
        'Organizzazione del flusso di cassa (avvisi di pagamento pronti)',
        'Maggiore soddisfazione post-riparazione',
        'Immagine di laboratorio ultra-professionale'
      ],
      savings: 'Tempo admin laboratorio: -4 ore/settimana'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli venire l\'ansia, dagli la notizia.',
        'La riparazione è una forma d\'arte, mostragliela.',
        'Semplifica la vita al tuo tecnico e al tuo cliente.'
      ],
      scripts: [
        { title: 'Opening', content: 'Il sabato la chiamano in 50 per sapere se i loro gioielli sono pronti? Se potessero vederlo dal telefono, la sua bottega sarebbe molto più tranquilla.' }
      ],
      objections: [
        { objection: 'Troppo lavoro caricare i dati', response: 'Si fa scansionando il QR della busta. 1 secondo per cambiare stato.' }
      ],
      closingTechniques: ['Invio link tracciamento al momento dell\'accettazione busta'],
      pricingStrategy: ['Focus sulla trasparenza del servizio'],
      urgencyTriggers: ['I regali per occasioni (compleanni, lauree) hanno scadenze fisse.']
    }
  },
  {
    id: '73',
    name: 'Alert Manutenzione Orologi',
    shortDescription: 'Promemoria automatici per revisione periodica e impermeabilità',
    tagline: 'Il battito del tuo tempo, curato con precisione.',
    icon: '⌚',
    category: 'Marketing Digitale',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    problem: 'Orologi di lusso che si rovinano per mancanza di lubrificazione o infiltrazioni, causando riparazioni costose.',
    stats: [
      { icon: '🏥', label: "Watch Health", value: "Safety", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔄', label: "Retention", value: "+45%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📉', label: "Costly Rep", value: "-30%", color: "from-red-500/20 to-red-400/10", text: "text-red-400" }
    ],
    beforeAfter: {
      before: { title: 'Trascuratezza', desc: 'Orologio che si ferma dopo 5 anni perché dimenticato', icon: '🛑' },
      after: { title: 'Cura Preventiva', desc: 'Alert WhatsApp: "È ora del test impermeabilità estivo"', icon: '📲' }
    },
    psychologyQuote: 'Agire come un "medico dell\'orologio" sposta la relazione dal piano commerciale a quello della cura professionale.',
    solutions: [
      'Database scadenze basato sul calibro e l\'età dell\'orologio',
      'Invio alert personalizzato prima dell\'estate (test impermeabilità)',
      'Consigli di conservazione durante i periodi di inutilizzo',
      'Prenotazione rapida "Pit-Stop Service"',
      'Tracking della cronologia interventi per mantenere il valore'
    ],
    economicBenefits: {
      title: 'Recurring Revenue',
      benefits: [
        'Aumento naturale delle entrate da laboratorio e service',
        'Ritorno costante del cliente in negozio ogni 2-3 anni',
        'Opportunità di cross-selling su nuovi modelli durante la visita',
        'Fidelizzazione estrema degli appassionati di orologeria'
      ],
      savings: 'Costi acquisizione cliente: Azzerati per il service'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli rompere l\'orologio, fagli mantenere il valore.',
        'La revisione è il segreto per l\'eternità.',
        'Sii la sentinella del loro investimento.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti suoi clienti hanno orologi meccanici? Sanno che ogni 5 anni hanno bisogno di olio nuovo? Se glielo ricorda lei, porteranno l\'orologio solo da lei.' }
      ],
      objections: [
        { objection: 'Sembra che voglio fargli spendere soldi', response: 'Al contrario, gli sta facendo risparmiare i 1000€ di una riparazione seria futura. È consulenza, non vendita.' }
      ],
      closingTechniques: ['Certificato di revisione incluso post-vmdita'],
      pricingStrategy: ['Focus sulla durata del bene rifugio'],
      urgencyTriggers: ['L\'estate è il momento in cui l\'impermeabilità fallisce: attivati a giugno.']
    }
  },
  {
    id: '74',
    name: 'Voucher Regalo "Momento Prezioso"',
    shortDescription: 'Buoni digitali personalizzabili con video-messaggio',
    tagline: 'Regala un\'emozione, incorniciata nel digitale.',
    icon: '🎁',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1549463327-f9962e7bad95?auto=format&fit=crop&w=800&q=80',
    problem: 'Voucher regalo cartacei tristi e anonimi, che non trasmettono l\'importanza del bijoux.',
    stats: [
      { icon: '🎬', label: "Video Gift", value: "Wow", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💖', label: "Emotion", value: "Max", color: "from-pink-500/20 to-pink-600/10", text: "text-pink-400" },
      { icon: '💸', label: "Usage Rate", value: "95%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Busta Bianca', desc: 'Un pezzo di carta con una cifra scritta a penna', icon: '✉️' },
      after: { title: 'Digital Surprise', desc: 'QR code che apre un video emozionale e il saldo regalo', icon: '🤳' }
    },
    psychologyQuote: 'L\'aggiunta di un elemento multimediale personalizzato trasforma un "permesso di spesa" in un vero e proprio regalo emotivo.',
    solutions: [
      'Creazione voucher istantanea dal sito o in negozio',
      'Caricamento video-messaggio del donatore via smartphone',
      'Consegna programmata via email o WhatsApp',
      'Design di lusso personalizzato con il brand della gioielleria',
      'Tracciamento saldo residuo e scadenza via link'
    ],
    economicBenefits: {
      title: 'Sales Booster',
      benefits: [
        'Aumento delle vendite last-minute (regali dell\'ultimo secondo)',
        'Acquisizione di un nuovo cliente (il destinatario del regalo)',
        'Migliore gestione contabile dei buoni emessi',
        'Impatto "Wow" che genera passaparola tra gli amici'
      ],
      savings: 'Costi spedizione e stampa: Azzerati'
    },
    secretSection: {
      killerPhrases: [
        'Non regalare un buono, regala un\'emozione che dura.',
        'La bellezza della convenienza incontra il lusso del video.',
        'Punta al cuore per arrivare al portafoglio.'
      ],
      scripts: [
        { title: 'Opening', content: 'Il marito ritardatario alle 19:30 del 24 Dicembre? Gli venda un voucher digitale con video-dedica. Lo salverà e farà un figurone.' }
      ],
      objections: [
        { objection: 'I gioielli non si regalano con un buono', response: 'Vero, ma il voucher permette a lei di scegliere l\'oggetto dei suoi sogni con il sorriso di lui.' }
      ],
      closingTechniques: ['Pulsante "Regala Ora" su ogni prodotto del catalogo'],
      pricingStrategy: ['Focus sull\'emozione del dono'],
      urgencyTriggers: ['Le festività sono il momento d\'oro per i voucher digitali.']
    }
  },
  {
    id: '75',
    name: 'Servizio "Cerca il tuo Vintage"',
    shortDescription: 'Modulo per richiedere la ricerca di modelli d\'epoca o fuori produzione',
    tagline: 'Alcuni tesori non sono in vetrina. Li troviamo noi per te.',
    icon: '🕵️',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1509192997181-48310023456c?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che cercano un modello specifico (es. Rolex anni 70) e non sanno dove trovarlo senza rischiare truffe.',
    stats: [
      { icon: '🔍', label: "Found Rate", value: "High", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🛡️', label: "Security", value: "100%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '💰', label: "Premium Fee", value: "Yes", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Rischio Online', desc: 'Siti stranieri dubbi con prezzi troppo bassi e rischi dogana', icon: '😰' },
      after: { title: 'Garanzia Fisica', desc: 'Il tuo gioielliere di fiducia cerca, verifica e garantisce il pezzo', icon: '🏛️' }
    },
    psychologyQuote: 'Il servizio di ricerca personalizzata trasforma il gioielliere in un consulente/investitore alleato del cliente.',
    solutions: [
      'Form di richiesta dettagliato (Modello, Anno, Budget, Condizioni)',
      'Accesso dell\'agenzia a reti di broker internazionali',
      'Notifica "Pezzo individuato" con galleria fotografica e perizia',
      'Modulo richiesta pre-ordine per procedere all\'acquisto sicuro',
      'Certificato di autenticità e lecita provenienza garantito'
    ],
    economicBenefits: {
      title: 'High-End Commissions',
      benefits: [
        'Accesso a vendite di altissimo valore senza avere merce a magazzino',
        'Fidelizzazione dei collezionisti e della clientela altospendente',
        'Consolidamento della reputazione di esperti mondiali',
        'Margini puliti sul servizio di reperimento e garanzia'
      ],
      savings: 'Costi di magazzino per pezzi rari: Azzerati'
    },
    secretSection: {
      killerPhrases: [
        'Non aspettare la fortuna, ordina la ricercatezza.',
        'La fiducia è il miglior bene di lusso.',
        'Trovi l\'introvabile, venda l\'impagabile.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti le chiedono modelli che non ha in casa? Invece di dire "No", dica "Lasci i dati, glielo trovo io in tutto il mondo".' }
      ],
      objections: [
        { objection: 'È troppo difficile da gestire', response: 'Esistono network professionali pronti. Lei deve solo essere il garante locale per il suo cliente.' }
      ],
      closingTechniques: ['Firma accordo di ricerca con acconto'],
      pricingStrategy: ['Focus sulla rarità e sulla sicurezza dell\'acquisto'],
      urgencyTriggers: ['I prezzi del vintage salgono: prima lo troviamo, meno costa.']
    }
  },
  {
    id: '76',
    name: 'Wishlist Condivisibile WhatsApp',
    shortDescription: 'Salva i pezzi preferiti e invia "suggerimenti" ad amici o partner',
    tagline: 'Fatti fare il regalo giusto. Senza dirlo.',
    icon: '💝',
    category: 'Marketing Digitale',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    problem: 'Acquirenti che ricevono regali sbagliati o mariti disperati che non sanno cosa comprare.',
    stats: [
      { icon: '🛒', label: "Conversion", value: "+25%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔗', label: "Share", value: "High", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '😊', label: "No Returns", value: "-90%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Il Tiro al Segno', desc: 'Indovinare i gusti sperando vada bene (e poi tornare a cambiare)', icon: '🏹' },
      after: { title: 'Bersaglio Centro', desc: 'Ricevere il link: "Questo è quello che amo"', icon: '🎯' }
    },
    psychologyQuote: 'La wishlist digitale riduce il rischio sociale del regalo sbagliato e facilita l\'azione d\'acquisto del donatore.',
    solutions: [
      'Pulsante "Aggiungi ai Desideri" su tutto il catalogo online',
      'Creazione pagina wishlist personale condivisibile via link',
      'Bottone "Suggerisci a lui/lei" con testo pre-impostato divertente',
      'Alert notifica all\'agente se un pezzo della wishlist è in sconto',
      'Incentivo "Sconto Wishlist" se condivisa con almeno 3 persone'
    ],
    economicBenefits: {
      title: 'Targeting Virale',
      benefits: [
        'Nuovi potenziali clienti che entrano nel funnel tramite condivisione',
        'Riduzione dei costi di gestione dei resi e dei cambi',
        'Analisi dei trend: saprai esattamente cosa sognano le tue clienti',
        'Aumento delle vendite nelle ricorrenze (Compleanni, Anniversari)'
      ],
      savings: 'Tempo gestione cambi post-festa: -70%'
    },
    secretSection: {
      killerPhrases: [
        'Aiuta i mariti a diventare eroi.',
        'La wishlist è il tuo miglior venditore indiretto.',
        'Crea desideri che si avverano.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti cambi fa dopo Natale? Se le clienti avessero mandato la wishlist ai mariti, avrebbe venduto il doppio e avrebbe il negozio vuoto di resi.' }
      ],
      objections: [
        { objection: 'È un po\' infantile', response: 'Il lusso vive di desideri. Le grandi firme mondiali lo usano proprio perché semplifica la vendita.' }
      ],
      closingTechniques: ['Promozione "Realizza un Desiderio" con estrazione premi'],
      pricingStrategy: ['Focus sulla frequenza di acquisto legato ad eventi'],
      urgencyTriggers: ['Le date speciali non aspettano: la wishlist deve essere pronta.']
    }
  },
  {
    id: '77',
    name: 'Guida Digitale Cura Gioiello',
    shortDescription: 'Consigli pratici e video su come pulire e mantenere i preziosi',
    tagline: 'Falli brillare per sempre. Con i segreti degli esperti.',
    icon: '✨',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1549463327-f9962e7bad95?auto=format&fit=crop&w=800&q=80',
    problem: 'Pietre opache e metalli ossidati perché il cliente usa prodotti sbagliati (es. candeggina), rovinando il gioiello.',
    stats: [
      { icon: '⭐', label: "Brillantezza", value: "Long", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🛡️', label: "Damage", value: "-90%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🎓', label: "Edu UX", value: "Pro", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Opacità', desc: 'Anello spento dopo un anno d\'uso quotidiano e creme mani', icon: '🌫️' },
      after: { title: 'Splendore', desc: 'Ogni gioiello torna come nuovo grazie ai tuoi tutorial', icon: '✨' }
    },
    psychologyQuote: 'L\'educazione del cliente crea un senso di gratitudine e posiziona il brand come la massima autorità del settore.',
    solutions: [
      'Serie di video brevi "Come pulire il tuo smeraldo/oro/perle"',
      'Checklist prodotti approvati e prodotti vietati',
      'Invito semestrale "Vieni per una pulizia gratuita profonda"',
      'Vendita kit manutenzione integrata nella guida',
      'FAQ su cosa fare se cade una pietra o si rompe una maglia'
    ],
    economicBenefits: {
      title: 'Expert Authority',
      benefits: [
        'Aumento della fiducia del cliente nella qualità dei tuoi prodotti',
        'Riduzione delle lamentele post-vendita per naturale usura',
        'Vendita aggiuntiva di kit di pulizia e accessori di lusso',
        'Traffico in negozio tramite l\'invito alla pulizia gratuita'
      ],
      savings: 'Tempo spiegazioni verbali: -20 min/cliente'
    },
    secretSection: {
      killerPhrases: [
        'Insegna il valore della manutenzione, venda la qualità eterna.',
        'Un cliente istruito è un cliente che apprezza il valore.',
        'La bellezza va curata, non solo posseduta.'
      ],
      scripts: [
        { title: 'Opening', content: 'I clienti rovinano le perle con il profumo? Gli dia la guida digitale e vedrà che la chiameranno "il mio gioielliere di fiducia" per la vita.' }
      ],
      objections: [
        { objection: 'Se imparano a pulirli da soli non vengono qui', response: 'Verranno da lei per le cose serie e per comprare il nuovo, perché si fidano solo dei consigli che lei ha dato.' }
      ],
      closingTechniques: ['QR code inciso all\'interno della scatola regalo'],
      pricingStrategy: ['Focus sul servizio post-vendita educativo'],
      urgencyTriggers: ['La luce estiva perdona meno: i gioielli devono splendere.']
    }
  },
  {
    id: '78',
    name: 'Booking Sale in Tempo Reale',
    shortDescription: 'Calendario online per controllare le disponibilità e bloccare la sala istantaneamente',
    tagline: 'La festa dei tuoi sogni, prenotata in un clic.',
    icon: '🗓️',
    category: 'Digitalizzazione',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    problem: 'Genitori che chiamano a ripetizione per date già occupate o che "ci pensano" troppo perdendo la data.',
    stats: [
      { icon: '⏱️', label: "Prenotaz", value: "+45%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📞', label: "Chiamate", value: "-70%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🌙', label: "Notturno", value: "30%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Gestione Manuale', desc: 'Agende cartacee, messaggi persi e rincorsa telefonica costante', icon: '📞' },
      after: { title: 'Self-Booking', desc: 'Genitori scelgono e bloccano la data anche alle 11 di sera', icon: '⚡' }
    },
    psychologyQuote: 'La possibilità di prenotare istantaneamente riduce l\'ansia da disponibilità e chiude la vendita nell\'apice dell\'entusiasmo.',
    solutions: [
      'Calendario interattivo integrato sul sito e link WhatsApp',
      'Gestione multi-sala con slot orari differenziati',
      'Acconto online tramite Stripe/PayPal per bloccare la data',
      'Notifiche automatiche di conferma via email e SMS',
      'Pannello di controllo per visualizzare il planning settimanale'
    ],
    economicBenefits: {
      title: 'Efficienza Operativa',
      benefits: [
        'Massimizzazione delle occupazioni delle sale (Open slots)',
        'Riduzione drastica del lavoro di segreteria',
        'Certezza degli incassi grazie agli acconti automatici',
        'Nessun rischio di double-booking umano'
      ],
      savings: 'Tempo admin: -10 ore/settimana'
    },
    secretSection: {
      killerPhrases: [
        'Non farti rincorrere, fatti prenotare.',
        'La tua sala è aperta 24/7 online.',
        'Chiudili subito prima che vedano la concorrenza.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le è mai capitato di perdere una festa perché ha risposto al messaggio dopo 2 ore? Con il booking online, il cliente firma e paga mentre lei sta facendo altro.' }
      ],
      objections: [
        { objection: 'Voglio prima parlare con il genitore', response: 'Il sistema raccoglie i dati, l\'acconto conferma l\'interesse. Può sempre chiamarli dopo la conferma automatica per i dettagli.' }
      ],
      closingTechniques: ['Tariffa "Early Bird" per chi prenota via web'],
      pricingStrategy: ['Focus sulla velocità di conversione'],
      urgencyTriggers: ['Il weekend del compleanno non aspetta nessuno!']
    }
  },
  {
    id: '79',
    name: 'Configuratore di Party Pack',
    shortDescription: 'Web-app per comporre il pacchetto festa con preventivo immediato',
    tagline: 'La festa perfetta, pezzo dopo pezzo.',
    icon: '🍔',
    category: 'Digitalizzazione',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80',
    problem: 'Preventivi complessi che cambiano ogni volta: "Quanti bambini? Carne o pesce? Animazione inclusa?".',
    stats: [
      { icon: '💰', label: "Upsell", value: "+30%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⏱️', label: "Prevent.", value: "Instant", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🍰', label: "Opzioni", value: "Clear", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Confusione', desc: 'Spiegare pacchetti al telefono per 20 minuti senza concludere', icon: '❓' },
      after: { title: 'Self-Service Pro', desc: 'Il genitore aggiunge buffet e torta, vede il conto e conferma', icon: '🛒' }
    },
    psychologyQuote: 'Il potere di "comporre" la propria festa aumenta il valore percepito degli extra e riduce la percezione del costo totale.',
    solutions: [
      'Scelta pacchetto base (Entry, Premium, VIP)',
      'Add-on trascinabili (Animatore extra, Truccabimbi, Gonfiabili)',
      'Selezione menu buffet e tipologia di torta',
      'Calcolo della quota per bambino in tempo reale',
      'Generazione PDF riepilogativo per la famiglia'
    ],
    economicBenefits: {
      title: 'Massimizzazione Ricavi',
      benefits: [
        'Aumento dello scontrino medio tramite cross-selling visivo',
        'Riduzione errori di preventivazione e costi cibo extra',
        'Facilità nel vendere servizi di terzi (es. maghi, torte esterne)',
        'Database preciso delle preferenze dei clienti'
      ],
      savings: 'Tempo telefonate preventivi: -15 min/festa'
    },
    secretSection: {
      killerPhrases: [
        'Fagli costruire la loro felicità (ed il tuo margine).',
        'Le immagini vendono più delle parole al telefono.',
        'La trasparenza è l\'arma segreta contro la richiesta di sconti.'
      ],
      scripts: [
        { title: 'Opening', content: 'Invece di mandare un PDF statico, mandi un link dove possono aggiungere la fontana di cioccolato o il truccabimbi con un tasto. Vedrà quanto aumentano gli extra.' }
      ],
      objections: [
        { objection: 'Troppe opzioni li confondono', response: 'Il configuratore è a step: Pacchetto -> Animazione -> Buffet. È una guida, non una giungla.' }
      ],
      closingTechniques: ['Sconto 5% se confermano il Party Pack entro 24h dal preventivo online'],
      pricingStrategy: ['Focus sui margini degli extra'],
      urgencyTriggers: ['Le torte personalizzate richiedono tempo, aggiungila ora!']
    }
  },
  {
    id: '80',
    name: 'Invito Digitale Personalizzato',
    shortDescription: 'Generatore di inviti via WhatsApp con mappa e modulo RSVP',
    tagline: 'Invitare non è mai stato così divertente.',
    icon: '📩',
    category: 'Marketing Digitale',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1512418490979-92798ccc13b0?auto=format&fit=crop&w=800&q=80',
    problem: 'Inviti cartacei persi, geolocalizzazione assente, genitori che dimenticano di confermare.',
    stats: [
      { icon: '🏃', label: "RSVP", value: "Comp", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📍', label: "No Persi", value: "GPS", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📢', label: "Branding", value: "Max", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Caos Conferme', desc: 'Genitori che chiamano il festeggiato a raffica il giorno prima', icon: '📱' },
      after: { title: 'Gestione Smart', desc: 'Grafica wow, tasto "Conferma" e link "Come arrivare"', icon: '✨' }
    },
    psychologyQuote: 'Rendere l\'invito un\'esperienza digitale riduce lo sforzo del genitore ospite e garantisce una partecipazione superiore.',
    solutions: [
      'Template grafici personalizzabili con foto del bambino',
      'Integrazione pulsante RSVP (Vengo / Non Vengo)',
      'Link geolocalizzato Google Maps della sala',
      'Area riservata per il genitore festeggiato con lista confermati',
      'Possibilità di aggiungere la lista regali digitale'
    ],
    economicBenefits: {
      title: 'Virality & Tracking',
      benefits: [
        'La tua sala finisce in tasca a 20-30 nuovi potenziali clienti (i genitori)',
        'Migliore pianificazione del buffet in base alle conferme reali',
        'Acquisizione di contatti per future promozioni (GDPR compliant)',
        'Immagine di servizio superiore e innovativo'
      ],
      savings: 'Spreco buffet (oversize): -20%'
    },
    secretSection: {
      killerPhrases: [
        'Vendi la comodità, non solo l\'invito.',
        'La tua pubblicità è nelle mani di tutti i genitori della classe.',
        'Semplifica la vita alla tua vera cliente: la mamma.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti invitati vengono alla festa? Se lo sa online 3 giorni prima, evita di comprare pizzette per 50 se ne vengono 30. Gli faccia risparmiare con l\'RSVP.' }
      ],
      objections: [
        { objection: 'Amiamo il cartaceo', response: 'Il digitale è per chi deve arrivare al locale e confermare. Può sempre stampare una copia ricordo!' }
      ],
      closingTechniques: ['Includere il generatore di inviti in tutti i pacchetti festa'],
      pricingStrategy: ['Focus sul valore del passaparola'],
      urgencyTriggers: ['È ora di mandare gli inviti: pronti in 2 minuti!']
    }
  },
  {
    id: '81',
    name: 'Modulo Gestione Intolleranze',
    shortDescription: 'Link per permettere ai genitori degli invitati di segnalare allergie',
    tagline: 'Divertimento sicuro, per ognuno di loro.',
    icon: '🛡️',
    category: 'Digitalizzazione',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    problem: 'Scoprire che un bambino è celiaco o allergico al latte mentre sta già mangiando la torta.',
    stats: [
      { icon: '🛡️', label: "Sicurezza", value: "Max", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📋', label: "Lista", value: "Auto", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '💖', label: "Care", value: "99%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Rischio Allergie', desc: 'Ansia costante della sala e dei genitori per ingredienti ignoti', icon: '🚑' },
      after: { title: 'Controllo Totale', desc: 'Report stampato con bambini allergici e alternative pronte', icon: '📝' }
    },
    psychologyQuote: 'La sicurezza alimentare è la preoccupazione n.1 dei genitori moderni: mostrare cura in questo settore crea una fiducia granitica.',
    solutions: [
      'Modulo integrato nell\'invito RSVP per segnalazioni',
      'Database icone allergeni per una lettura rapida dello staff',
      'Generazione etichette "Special Food" per i piatti dedicati',
      'Archivio storico per prevenire rischi in feste future',
      'Informativa legale integrata per la responsabilità della sala'
    ],
    economicBenefits: {
      title: 'Risk Management',
      benefits: [
        'Azzeramento incidenti legati a intolleranze alimentari',
        'Migliore gestione del magazzino prodotti speciali (gluteen-free)',
        'Qualità percepita altissima da parte dei genitori colpiti',
        'Riduzione dello stress per gli addetti al buffet'
      ],
      savings: 'Tempo interviste genitori: -30 min/evento'
    },
    secretSection: {
      killerPhrases: [
        'Non rischiare la festa, pianifica la sicurezza.',
        'La tranquillità non ha prezzo, ma si digitalizza.',
        'Sii la sala più attenta e sicura della città.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le è mai capitato il panico da "questo bimbo è allergico?". Con il nostro modulo lo sa prima e ha già la sua alternativa pronta. Professionalità pura.' }
      ],
      objections: [
        { objection: 'Il buffet è standard', response: 'Il modulo le permette di sapere se deve comprare 1 pacco di biscotti senza glutine o 10. Risparmia e fa bella figura.' }
      ],
      closingTechniques: ['Badge "Safe Party" sul materiale promozionale'],
      pricingStrategy: ['Focus sulla tutela legale e reputazionale'],
      urgencyTriggers: ['La salute dei bambini è la priorità assoluta.']
    }
  },
  {
    id: '82',
    name: 'Pre-ordine Catering Genitori',
    shortDescription: 'Menu dedicato per gli adulti (es. aperitivi) ordinabile in anticipo',
    tagline: 'Mentre loro giocano, voi rilassatevi.',
    icon: '🥂',
    category: 'Digitalizzazione',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    problem: 'Sale piene di genitori annoiati che restano tutto il tempo in piedi senza consumare nulla.',
    stats: [
      { icon: '💰', label: "Food Rev", value: "+40%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '😊', label: "Adult UX", value: "Pro", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⏱️', label: "No Wait", value: "Realtime", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Boredom', desc: 'Genitori che guardano l\'orologio aspettando la fine', icon: '⌚' },
      after: { title: 'Social Party', desc: 'Aperitivo rinforzato per gli adulti pronto al loro arrivo', icon: '🍹' }
    },
    psychologyQuote: 'Il successo di una festa di bambini dipende dal 50% dalla soddisfazione dei genitori che li accompagnano.',
    solutions: [
      'Digital Menu "Solo per Grandi" inviato con l\'invito',
      'Pre-acquisto vassoi aperitivo o bottiglia di spumante',
      'Area riservata del sito per il pagamento extra genitori',
      'Sincronizzazione orario consegna con l\'animazione',
      'Gestione quote "Aperitivo in condivisione"'
    ],
    economicBenefits: {
      title: 'Extra Profit',
      benefits: [
        'Trasformazione delle "ore morte" in profitto puro bar/catering',
        'Fidelizzazione dei genitori che scelgono la sala anche per l\'aperitivo',
        'Ottimizzazione degli ordini fornitore grazie ai pre-ordini',
        'Aumento del tempo di permanenza nel locale'
      ],
      savings: 'Incasso extra medio: €100 - €300/festa'
    },
    secretSection: {
      killerPhrases: [
        'Non vendere solo giochi, vendi relax per i genitori.',
        'Sostituisci il disordine con un aperitivo di classe.',
        'La tua cassa ringrazia quando i genitori si divertono.'
      ],
      scripts: [
        { title: 'Opening', content: 'Invece di avere genitori che mangiano le pizzette dei bambini, gli venda un taglierino e una bollicina. Le feste saranno molto più chic e redditizie.' }
      ],
      objections: [
        { objection: 'I genitori portano roba da fuori', response: 'Con un pre-ordine facile e un prezzo corretto, preferiranno trovare tutto pronto e fresco al loro arrivo.' }
      ],
      closingTechniques: ['Promozione "Pack Genitori" in omaggio per chi prenota infrasettimanale'],
      pricingStrategy: ['Focus sul cross-selling ad alto margine'],
      urgencyTriggers: ['Le scorte dell\'aperitivo finiscono presto, prenota ora.']
    }
  },
  {
    id: '83',
    name: 'Galleria Foto Privata post-evento',
    shortDescription: 'Area protetta dove condividere i ricordi della festa con gli invitati',
    tagline: 'Rivivi la magia, ogni volta che vuoi.',
    icon: '📸',
    category: 'Digitalizzazione',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1472653372332-9b0d1e0283f5?auto=format&fit=crop&w=800&q=80',
    problem: 'Genitori che tempestano di messaggi: "Hai fatto foto a mio figlio?" e link wetransfer scaduti dopo 7 giorni.',
    stats: [
      { icon: '⭐', label: "Soddisf", value: "High", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔄', label: "Traffic", value: "+60%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🔒', label: "Security", value: "Privat", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Oblio Post-Festa', desc: 'Le foto restano nel telefono e nessuno le vede più', icon: '📂' },
      after: { title: 'Ricordo Eterno', desc: 'Album digitale brandizzato con le foto dell\'animatore', icon: '💓' }
    },
    psychologyQuote: 'La condivisione sociale dei ricordi positivi prolunga l\'effetto del servizio e consolida il legame con il locale.',
    solutions: [
      'Caricamento rapido foto da parte del personale o animatore',
      'Accesso protetto da password univoca per ogni compleanno',
      'Download foto in alta risoluzione per i genitori',
      'Integrazione pulsanti social per condivisione (con filigrana sala)',
      'Possibilità di ordinare stampe o fotolibri direttamente dall\'app'
    ],
    economicBenefits: {
      title: 'Customer Lifetime',
      benefits: [
        'Traffico ricorrente sul tuo sito nei giorni post-festa',
        'Possibilità di mostrare banner promozionali durante la visione foto',
        'Acquisizione di nuovi iscritti alla newsletter dei genitori',
        'Posizionamento come punto di riferimento tecnologico'
      ],
      savings: 'Richieste foto manuali: Azzerate'
    },
    secretSection: {
      killerPhrases: [
        'Il valore di una festa è nel ricordo che ne resta.',
        'Sii la sala che regala anche le foto del divertimento.',
        'Trasforma ogni clic in una futura prenotazione.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanto paga l\'animatore? Gli faccia fare 20 foto e le metta nell\'area riservata del suo sito. Ogni genitore entrerà nel SUO sito per vederle.' }
      ],
      objections: [
        { objection: 'Privacy dei minori', response: 'Usiamo accessi privati e protetti. Solo i partecipanti autorizzati vedono le foto. Massima sicurezza.' }
      ],
      closingTechniques: ['Offerta "Servizio Foto Incluso" per i pacchetti Top'],
      pricingStrategy: ['Focus sull\'engagement post-vendita'],
      urgencyTriggers: ['Le foto scadono tra 30 giorni: guardale ora!']
    }
  },
  {
    id: '84',
    name: 'Checklist "Tutto Pronto"',
    shortDescription: 'Promemoria automatico per i genitori (calze antiscivolo, torte, ecc.)',
    tagline: 'Nessuna dimenticanza, solo divertimento.',
    icon: '✅',
    category: 'Digitalizzazione',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    problem: 'Feste che iniziano in ritardo perché "ho dimenticato la candelina" o bambini che non possono giocare perché senza calze adatte.',
    stats: [
      { icon: '⏱️', label: "Puntualità", value: "+25%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📉', label: "Stress", value: "-80%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🛍️', label: "Extra Sale", value: "Auto", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Il Panico del Giorno', desc: '"Manca la torta!", "Non abbiamo pile!", "Dov\'è il regalo?"', icon: '🤯' },
      after: { title: 'Zen Party', desc: 'Notifica 24h prima con la lista delle cose da fare', icon: '🧘' }
    },
    psychologyQuote: 'Fornire una checklist operativa riduce l\'ansia da prestazione del genitore festeggiato e lo rende un alleato della sala.',
    solutions: [
      'Checklist pre-impostata (Calze, Candeline, Numero, Torta)',
      'Alert automatico via WhatsApp 48h e 24h prima del party',
      'Opzione "Dimenticato qualcosa? Link acquisto rapido" per extra in sala',
      'Suggerimenti per i genitori ospiti nel messaggio RSVP',
      'Note sulla logistica (parcheggio, orario di apertura anticipata)'
    ],
    economicBenefits: {
      title: 'Workflow Optimization',
      benefits: [
        'Inizio delle feste puntuale al minuto desiderato',
        'Meno tempo perso dal personale per risolvere emergenze altrui',
        'Possibilità di vendere candeline/calze a chi le ha comunque scordate',
        'Feedback positivo sulla cura del dettaglio dell\'organizzazione'
      ],
      savings: 'Tempo gestione crisi: -1 ora/festa'
    },
    secretSection: {
      killerPhrases: [
        'Il genitore rilassato è quello che prenota l\'anno prossimo.',
        'Dimentica il caos, abbraccia l\'automazione.',
        'Sii il braccio destro segreto di ogni mamma.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante volte le salta il planning perché la torta arriva mezz\'ora dopo? Con i promemoria automatici, ha il 90% di puntualità in più.' }
      ],
      objections: [
        { objection: 'Sono già grandi, sanno cosa fare', response: 'Con 30 invitati e un bambino eccitato, anche un genitore esperto va in tilt. Il promemoria è un salvavita.' }
      ],
      closingTechniques: ['Integrazione nel "Kit Benvenuto" digitale'],
      pricingStrategy: ['Focus sulla qualità organizzativa'],
      urgencyTriggers: ['Mancano 24 ore alla festa: mancano le calze?']
    }
  },
  {
    id: '85',
    name: 'Fidelity "Compleanno Amico"',
    shortDescription: 'Sconto speciale per chi festeggia dopo essere stato invitato',
    tagline: 'Il divertimento è contagioso. Premialo.',
    icon: '🎟️',
    category: 'Marketing Digitale',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    problem: 'Invitati che si sono divertiti ma prenotano nella sala concorrente perché si dimenticano della tua.',
    stats: [
      { icon: '🔄', label: "Recupero", value: "+35%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📦', label: "Nuove Feste", value: "+20%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📧', label: "Database", value: "Comp", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Opportunità Persa', desc: 'Genitori entusiasti che non vengono ricontattati', icon: '😞' },
      after: { title: 'Funnel Automatico', desc: 'Alert post-festa: "Ti sei divertito? Prenota la tua con lo sconto"', icon: '💸' }
    },
    psychologyQuote: 'La reciprocità e l\'ancoraggio temporale aumentano la probabilità di prenotazione mentre il ricordo positivo è fresco.',
    solutions: [
      'Tracking degli invitati tramite il modulo RSVP',
      'Invio automatico voucher sconto 48h dopo la festa partecipata',
      'Coupon personalizzato con scadenza (es: valido entro 3 mesi)',
      'Possibilità di regalare il voucher a un altro genitore',
      'Classifica "Super Amico" per chi porta più compleanni'
    ],
    economicBenefits: {
      title: 'Customer Acquisition',
      benefits: [
        'Costo di acquisizione nuovo cliente quasi a zero',
        'Riempimento dei giorni feriali tramite sconti mirati agli invitati',
        'Creazione di una community di fedelissimi del locale',
        'Monitoraggio reale dell\'efficacia dell\'animazione sulla clientela'
      ],
      savings: 'Costi Marketing: -40%'
    },
    secretSection: {
      killerPhrases: [
        'Ogni invitato è un assegno da incassare tra 6 mesi.',
        'Premia la gioia, monetizza l\'invito.',
        'La fedeltà inizia con un gesto inaspettato.'
      ],
      scripts: [
        { title: 'Opening', content: 'Se ha 30 invitati a festa, ha 30 futuri clienti in sala. Se gli manda un messaggino con un pensierino il lunedì dopo, dove pensa che faranno la loro festa?' }
      ],
      objections: [
        { objection: 'Non voglio abbassare i prezzi', response: 'Il voucher può essere un extra omaggio (es: buffet genitori gratis) invece di uno sconto monetario. Valore alto, costo basso.' }
      ],
      closingTechniques: ['Emissione voucher rapida via QR in sala'],
      pricingStrategy: ['Focus sul Lifetime Value del cliente'],
      urgencyTriggers: ['Coupon valido solo per le prossime 5 prenotazioni!']
    }
  },
  {
    id: '86',
    name: 'Richiesta Assistenza Sala QR',
    shortDescription: 'QR code nel box festa per chiamare lo staff istantaneamente',
    tagline: 'Sempre con te, senza essere tra i piedi.',
    icon: '🔔',
    category: 'Digitalizzazione',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800&q=80',
    problem: 'Genitori che devono vagare per il locale cercando qualcuno per "manca l\'acqua" o "serve un vassoio", lasciando i bambini soli.',
    stats: [
      { icon: '⏱️', label: "Risposta", value: "-90%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '😊', label: "Relax", value: "Max", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📱', label: "Staff", value: "Sync", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Genitore allo Sbaraglio', desc: 'Caccia al tesoro per trovare l\'addetto sala mentre i bimbi corrono', icon: '🔦' },
      after: { title: 'Magic Button', desc: 'Scansione QR e staff che arriva con quello che serve', icon: '🧞' }
    },
    psychologyQuote: 'La sensazione di avere assistenza istantanea al bisogno aumenta drasticamente il rating di "servizio di lusso".',
    solutions: [
      'Adesivi QR code su ogni tavolo o box festa dedicati',
      'Dashboard notifiche su smartphone/smartwatch dello staff',
      'Opzioni pre-definite: "Più bibite", "Serve pulizia", "Aiuto candeline"',
      'Monitoraggio tempi di risposta per migliorare il servizio',
      'Messaggio di conferma: "Arriviamo da te tra 2 minuti!"'
    ],
    economicBenefits: {
      title: 'Labor Optimization',
      benefits: [
        'Meno personale necessario che gira "a vuoto" per le sale',
        'Staff più focalizzato e meno stressato durante il caos',
        'Interventi rapidi prima che il cliente si spazientisca',
        'Analisi dei problemi ricorrenti per ottimizzare i processi'
      ],
      savings: 'Tempo staff: -2 ore/giorno'
    },
    secretSection: {
      killerPhrases: [
        'Il cameriere fantasma ma presente è il miglior servizio.',
        'Elimina la frustrazione, aggiungi automazione.',
        'La velocità è il miglior complimento che puoi ricevere.'
      ],
      scripts: [
        { title: 'Opening', content: 'Il suo staff è sempre occupato? Gli dia il QR. Arriveranno nel punto giusto solo quando serve veramente, facendo sentire il cliente ultra-curato.' }
      ],
      objections: [
        { objection: 'I bambini giocheranno con il QR', response: 'Possiamo impostare una convalida o mettere il QR in un punto alto riservato al genitore festeggiato.' }
      ],
      closingTechniques: ['Demo del tasto "Magico" durante il tour della sala'],
      pricingStrategy: ['Focus sulla Customer Satisfaction'],
      urgencyTriggers: ['Il momento della torta non può aspettare lo staff!']
    }
  },
  {
    id: '87',
    name: 'Video-Dedica Digitale',
    shortDescription: 'QR code per registrare video-auguri che diventano un ricordo unico',
    tagline: 'Le parole volano, le emozioni restano.',
    icon: '🤳',
    category: 'Digitalizzazione',
    activityType: 'kids',
    image: 'https://images.unsplash.com/photo-1542750017-fef98ae25595?auto=format&fit=crop&w=800&q=80',
    problem: 'Bigliettini d\'auguri che finiscono nel cestino e video sparsi in 30 telefoni diversi mai visti.',
    stats: [
      { icon: '💓', label: "Emozione", value: "High", color: "from-pink-500/20 to-pink-600/10", text: "text-pink-400" },
      { icon: '🎥', label: "Ricordo", value: "Eterno", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '✨', label: "UX", value: "Wow", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Biglietti Persi', desc: 'Sperare che qualcuno ti mandi il video della torta via WhatsApp', icon: '🗑️' },
      after: { title: 'Video-Wall', desc: 'Tutti gli auguri racchiusi in un unico album digitale brandizzato', icon: '🎞️' }
    },
    psychologyQuote: 'Catturare l\'audio e il video degli amici crea un ancoraggio emotivo potente tra l\'evento e il luogo in cui è avvenuto.',
    solutions: [
      'Corner fotografico con QR code "Lascia il tuo messaggio"',
      'Registrazione video istantanea via browser (niente app)',
      'Montaggio automatico dei video con musica e logo della sala',
      'Invio link finale al genitore festeggiato il giorno dopo',
      'Possibilità di mostrare i video in diretta sul proiettore della sala'
    ],
    economicBenefits: {
      title: 'Brand Advocacy',
      benefits: [
        'Il tuo logo finisce nel "video della vita" del bambino',
        'Differenziazione assoluta rispetto alle ludoteche standard',
        'Contenuti multimediali pronti per i tuoi canali social (con consenso)',
        'Il cliente percepisce un valore aggiunto immenso a costo zero'
      ],
      savings: 'Costi montaggio video manuale: Azzerati'
    },
    secretSection: {
      killerPhrases: [
        'Vendi l\'emozione, il montaggio lo fa l\'app.',
        'Sii la sala che fa piangere di gioia i genitori.',
        'Un ricordo digitale è un cliente fedele.'
      ],
      scripts: [
        { title: 'Opening', content: 'Cosa regala al festeggiato alla fine? Un gadget di plastica da 1€ o il video con tutti gli amici che gli dicono quanto gli vogliono bene? Scelga la magia.' }
      ],
      objections: [
        { objection: 'Nessuno ha voglia di fare video', response: 'L\'animatore può guidare il momento o farlo diventare un gioco a premi. La partecipazione è altissima.' }
      ],
      closingTechniques: ['Mostrare un esempio di "Video-Memory" in fase di vendita'],
      pricingStrategy: ['Focus sull\'esclusività emotiva'],
      urgencyTriggers: ['Le piccole voci crescono in fretta, registrane una ora!']
    }
  },
  // --- BEACH & CHALET (Completamento a 10) ---
  {
    id: '88',
    name: 'Personal Concierge Digitale',
    shortDescription: 'Assistenza via WhatsApp/Web per prenotazioni extra, taxi e info locali',
    tagline: 'Il lusso della comodità, a portata di click.',
    icon: '👤',
    category: 'Digitalizzazione',
    activityType: 'beach',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che non sanno a chi chiedere info, staff interrotto continuamente per piccole commissioni.',
    stats: [
      { icon: '🌟', label: "Premium", value: "Top", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⏱️', label: "Risposta", value: "Instant", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📈', label: "Extra Sale", value: "+20%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Disorientamento', desc: 'Clienti che vagano cercando info su ristoranti o trasporti', icon: '🤷' },
      after: { title: 'Servizio Gold', desc: 'Assistente dedicato che risolve ogni dubbio in tempo reale', icon: '👑' }
    },
    psychologyQuote: 'Fornire assistenza proattiva trasforma una semplice giornata in spiaggia in un\'esperienza di ospitalità di alto livello.',
    solutions: [
      'Chatbot WhatsApp configurato con tutte le info del territorio',
      'Pulsante rapido web per prenotazione transfer e ristoranti partner',
      'Area "Consigli dell\'Esperto" con luoghi segreti e orari consigliati',
      'Integrazione con servizi di concierge esterni via API',
      'Monitoraggio delle richieste più frequenti per ottimizzare il servizio'
    ],
    economicBenefits: {
      title: 'Percezione e Commissioni',
      benefits: [
        'Nuovo canale di entrate tramite commissioni con partner locali',
        'Staff della spiaggia libero di occuparsi delle operazioni critiche',
        'Aumento del punteggio recensioni grazie all\'attenzione al cliente',
        'Fidelizzazione dei clienti "high spender" che cercano esclusività'
      ],
      savings: 'Tempo staff: -2 ore/giorno'
    },
    secretSection: {
      killerPhrases: [
        'Non fargli alzare il dito dal lettino, solo per cliccare.',
        'Sii il punto di riferimento totale per la sua vacanza.',
        'Il servizio concierge è la differenza tra uno chalet ed un resort.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante volte le chiedono dove si mangia bene o come trovare un taxi? Se avesse un link che risponde a tutto e prenota per loro? Farebbe sentire il cliente un re e lei risparmierebbe tempo.' }
      ],
      objections: [
        { objection: 'Vogliamo il contatto umano', response: 'Il concierge digitale filtra le richieste banali. Quando il cliente avrà bisogno di altro, lo staff sarà meno stressato e più sorridente.' }
      ],
      closingTechniques: ['Demo del concierge via WhatsApp in tempo reale'],
      pricingStrategy: ['Focus sulla customer satisfaction e referral'],
      urgencyTriggers: ['I clienti premium scelgono dove sono più coccolati.']
    }
  },
  {
    id: '89',
    name: 'Gestione Inventario & Drink Cost',
    shortDescription: 'Controllo real-time delle scorte del bar e analisi margini cocktail',
    tagline: 'Ogni goccia conta. Ottimizza il tuo margine.',
    icon: '📊',
    category: 'Analisi Dati',
    activityType: 'beach',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    problem: 'Sprechi al bar, ammanchi di magazzino difficili da tracciare e cocktail venduti sottocosto.',
    stats: [
      { icon: '💰', label: "Margine", value: "+15%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📉', label: "Sprechi", value: "-25%", color: "from-red-500/20 to-red-600/10", text: "text-red-400" },
      { icon: '📦', label: "Scorte", value: "Auto", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" }
    ],
    beforeAfter: {
      before: { title: 'Gestione al Buio', desc: 'Si ordina quando finisce la roba, senza conoscere il food cost reale', icon: '🌑' },
      after: { title: 'Precisione Chirurgica', desc: 'Dashboard con costi al centesimo e alert scorte in esaurimento', icon: '🎯' }
    },
    psychologyQuote: 'La consapevolezza dei costi trasforma un gestore in un imprenditore profittevole.',
    solutions: [
      'Calcolo dinamico del drink cost per ogni ricetta cocktail',
      'Inventario digitale con scarico automatico alla vendita POS',
      'Alert automatici per "Order point" fornitore',
      'Analisi sprechi e "free pouring" dello staff',
      'Report settimanale sui prodotti ad alto e basso margine'
    ],
    economicBenefits: {
      title: 'Profit Optimization',
      benefits: [
        'Riduzione immediata degli ammanchi di magazzino non giustificati',
        'Migliore negoziazione con i fornitori basata su dati di consumo reali',
        'Eliminazione dei prodotti che non generano profitto o sono troppo costosi',
        'Aumento del margine netto complessivo del bar del 10-15%'
      ],
      savings: 'Risparmio scorte: €2.000 - €5.000/stagione'
    },
    secretSection: {
      killerPhrases: [
        'Smetti di regalare il tuo margine al fornitore.',
        'Se non lo misuri, non lo stai gestendo, lo stai solo guardando.',
        'La differenza tra utile e perdita è in quel centimetro di gin in più.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le è mai capitato di finire il gin il sabato sera alle 22? O di accorgersi che un cocktail le costa più di quanto lo vende? Con il nostro sistema ha tutto sotto controllo in un click.' }
      ],
      objections: [
        { objection: 'Lo staff non ha tempo di caricare i pesi', response: 'Il sistema è integrato: carichi una volta, scarica da solo con lo scontrino. Più facile di così non si può.' }
      ],
      closingTechniques: ['Audit gratuito del drink cost sui 3 cocktail più venduti'],
      pricingStrategy: ['Focus sul ROI immediato tramite riduzione sprechi'],
      urgencyTriggers: ['Ogni giorno di caos al bar sono centinaia di euro buttati.']
    }
  },
  {
    id: '90',
    name: 'Analisi Meteo & Dynamic Pricing',
    shortDescription: 'Prezzi ombrelloni dinamici basati su meteo, giorno e domanda reale',
    tagline: 'Il prezzo giusto, al momento giusto, per il meteo giusto.',
    icon: '🌦️',
    category: 'Analisi Dati',
    activityType: 'beach',
    image: 'https://images.unsplash.com/photo-1544333346-64e4fe1fdeb5?auto=format&fit=crop&w=800&q=80',
    problem: 'Prezzi fissi che non attirano clienti nei giorni incerti e perdono profitto nei giorni "sold out".',
    stats: [
      { icon: '📈', label: "Revenue", value: "+20%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🏖️', label: "Occupaz", value: "+30%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⚖️', label: "Fairness", value: "High", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Prezzo Statico', desc: 'Stesso prezzo con sole o pioggia, weekend o feriale', icon: '🛑' },
      after: { title: 'Strategia Smart', desc: 'Prezzi che cambiano per massimizzare l\'incasso in ogni condizione', icon: '⚡' }
    },
    psychologyQuote: 'Il dinamismo dei prezzi è accettato dai clienti se percepito come un\'opportunità di risparmio per i tempi meno affollati.',
    solutions: [
      'Algoritmo di pricing basato su previsioni meteo a 48h',
      'Integrazione con il sistema di booking per cambi prezzi istantanei',
      'Offerte automatiche "Last Minute" per giorni con pioggia prevista',
      'Surplus automatico per ponti e festività ad alta richiesta',
      'Analisi storica della domanda per impostare le soglie di prezzo'
    ],
    economicBenefits: {
      title: 'Massimizzazione Occupazione',
      benefits: [
        'Riempimento della spiaggia anche in giornate "così così" con prezzi light',
        'Aumento del fatturato nei weekend di punta catturando la massima disponibilità di spesa',
        'Migliore gestione del personale modulata sull\'affluenza prevista',
        'Analisi precisa del valore reale di ogni singolo ombrellone'
      ],
      savings: 'Aumento fatturato: €5.000 - €15.000/stagione'
    },
    secretSection: {
      killerPhrases: [
        'Non lasciare ombrelloni vuoti solo perché il prezzo è troppo alto per una giornata nuvolosa.',
        'La tua spiaggia è come un aereo: un posto vuoto oggi è perso per sempre.',
        'Vendi l\'opportunità, non il pezzo di plastica sulla sabbia.'
      ],
      scripts: [
        { title: 'Opening', content: 'Come decide il prezzo oggi? A naso? E se un algoritmo lo facesse per lei, abbassandolo per riempire quando c\'è una nuvola e alzandolo quando tutti litigano per un posto?' }
      ],
      objections: [
        { objection: 'I fedelissimi si lamentano', response: 'Possiamo bloccare il prezzo per i clienti stagionali o residenti. Il dinamismo lo applichiamo solo ai turisti e ai nuovi lead.' }
      ],
      closingTechniques: ['Offerta integrazione gratuita con gateway di prenotazione'],
      pricingStrategy: ['Focus sulla massimizzazione del profitto marginale'],
      urgencyTriggers: ['Il meteo cambia ogni ora, la tua strategia di vendita anche?']
    }
  },
  // --- HOTEL & B&B (10 Servizi) ---
  {
    id: '91',
    name: 'Digital Check-in & Self Check-in',
    shortDescription: 'Invio documenti e firma digitale prima dell\'arrivo in struttura',
    tagline: 'Zero file, solo ospitalità.',
    icon: '📲',
    category: 'Digitalizzazione',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    problem: 'Check-in lenti, burocrazia che stressa l\'ospite e personale bloccato in reception per ore.',
    stats: [
      { icon: '⏱️', label: "Time Save", value: "-80%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '😊', label: "Guest Satisfaction", value: "9/10", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🛡️', label: "Privacy", value: "Safe", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Burocrazia Arcaica', desc: 'Ospiti stanchi che aspettano con i bagagli in mano', icon: '📋' },
      after: { title: 'Arrivo Smart', desc: 'Chiave già pronta e ospite che va dritto in camera in 2 minuti', icon: '✨' }
    },
    psychologyQuote: 'I primi 10 minuti definiscono l\'intera percezione del soggiorno: rendili piacevoli, non burocratici.',
    solutions: [
      'Link di pre-checkin inviato via email/WhatsApp 24h prima',
      'Scansione automatica documenti tramite smartphone',
      'Firma digitale liberatorie e privacy GDPR',
      'Pagamento tassa di soggiorno online anticipato',
      'Integrazione con Alloggiati Web per invio automatico questura'
    ],
    economicBenefits: {
      title: 'Efficienza Operativa',
      benefits: [
        'Riduzione drastica dei costi di personale alla reception',
        'Possibilità di gestire arrivi fuori orario senza costi extra',
        'Eliminazione degli errori manuali nei dati degli alloggiati',
        'Migliore gestione del workflow del reparto pulizie'
      ],
      savings: 'Risparmio costo staff: €3.000 - €8.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Trasforma la tua reception in un salotto, non in uno sportello bancario.',
        'L\'ospite vuole riposare, non compilare moduli.',
        'Sii l\'hotel più veloce della città.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanto tempo perde il suo staff a copiare documenti a mano? E quanto tempo aspetta un ospite che ha viaggiato 5 ore? Con il check-in digitale, risolve tutto prima che arrivino.' }
      ],
      objections: [
        { objection: 'Vogliamo accogliere di persona', response: 'L\'accoglienza è parlare di cosa visitare e offrire un drink, non fotocopiare la carta d\'identità. Libera il personale per l\'ospitalità vera.' }
      ],
      closingTechniques: ['Prova gratuita per i primi 50 arrivi'],
      pricingStrategy: ['Focus sul valore del tempo dello staff'],
      urgencyTriggers: ['Le grandi catene lo fanno già. Non restare indietro.']
    }
  },
  {
    id: '92',
    name: 'Mobile Key (Smartphone come chiave)',
    shortDescription: 'Sostituisci le card fisiche con l\'apertura via Bluetooth o Web app',
    tagline: 'La chiave del futuro è in tasca al tuo ospite.',
    icon: '🔑',
    category: 'Digitale',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    problem: 'Chiavi smarrite, card che si smagnetizzano, costi di sostituzione continui.',
    stats: [
      { icon: '📱', label: "Tech", value: "Adv", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📉', label: "Costi", value: "-60%", color: "from-red-500/20 to-red-600/10", text: "text-red-400" },
      { icon: '🔓', label: "Security", value: "High", color: "from-green-500/20 to-green-600/10", text: "text-green-400" }
    ],
    beforeAfter: {
      before: { title: 'Card Fisica', desc: 'Card smarrite e reception chiamata ad ogni ora per riaprire', icon: '💳' },
      after: { title: 'Accesso Mobile', desc: 'L\'ospite apre camera, portone e garage con un tasto sul telefono', icon: '📲' }
    },
    psychologyQuote: 'Il controllo tramite il proprio dispositivo personale aumenta il senso di sicurezza e modernità percepita.',
    solutions: [
      'Integrazione con serrature elettroniche Bluetooth/NFC',
      'Invio chiave digitale via WhatsApp o email post-checkin',
      'Revoca automatica della chiave al momento del checkout',
      'Accesso geolocalizzato (apertura portone automatica all\'arrivo)',
      'Gestione accessi staff con log temporali precisi'
    ],
    economicBenefits: {
      title: 'Risparmio Fisico',
      benefits: [
        'Eliminazione acquisto card plastiche e sistemi di scrittura',
        'Azzeramento dei no-show alla reception per smarrimento chiavi',
        'Minori costi di manutenzione serrature tradizionali',
        'Potenziale riduzione polizza assicurativa per maggiore tracciabilità'
      ],
      savings: 'Risparmio operativo: €1.500 - €3.500/anno'
    },
    secretSection: {
      killerPhrases: [
        'Nessuno dimentica mai il telefono, ma tutti dimenticano la chiave.',
        'La tua struttura diventa intelligente senza cambiare i muri.',
        'Vendi la libertà di entrare senza passaggi burocratici.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante card ricompra ogni anno? Con la chiave mobile, il suo ospite arriva, ha già la chiave sul telefono e sale in camera. Magia.' }
      ],
      objections: [
        { objection: 'Se il telefono è scarico?', response: 'Abbiamo sempre una card di backup o un codice d\'emergenza fisico. Ma il 95% userà il telefono con entusiasmo.' }
      ],
      closingTechniques: ['Update tecnologico senza opere murarie'],
      pricingStrategy: ['Focus sulla riduzione dei costi fissi'],
      urgencyTriggers: ['Risparmia sui costi di reception notturna da subito.']
    }
  },
  {
    id: '93',
    name: 'Guest Experience Platform (App)',
    shortDescription: 'App personalizzata per prenotare SPA, room service e attività locali',
    tagline: 'Tutto il tuo hotel, in un palmo di mano.',
    icon: '🏨',
    category: 'Digitalizzazione',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    problem: 'Ospiti che non sanno quali servizi offri, telefonate continue al personale per info banali.',
    stats: [
      { icon: '💰', label: "Revenue", value: "+25%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '💬', label: "Chat", value: "Live", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⭐', label: "Rating", value: "Top", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Informazione Frammentata', desc: 'Libretti cartacei in camera spesso ignorati o datati', icon: '📖' },
      after: { title: 'Hub Digitale', desc: 'Ospite che ordina la colazione dal letto con un click', icon: '📱' }
    },
    psychologyQuote: 'Facilitare l\'acquisto riducendo l\'attrito del contatto umano aumenta il volume dell\'upselling.',
    solutions: [
      'Web-App brandizzata accessibile via QR code in camera',
      'Prenotazione slot orari per SPA e Palestra',
      'Menu Room Service digitale con foto e pagamenti in camera',
      'Chat diretta con il concierge per richieste speciali',
      'Guide locali e itinerari suggeriti dal gestore'
    ],
    economicBenefits: {
      title: 'Aumento Ricavi Extra',
      benefits: [
        'Incremento vendite Room Service tramite foto accattivanti',
        'Maggiore occupazione della SPA in orari di bassa affluenza (push info)',
        'Efficienza nella gestione degli ordini (vanno dritti in cucina/SPA)',
        'Riduzione errori di trascrizione ordini telefonici'
      ],
      savings: 'Aumento ricavi servizi: +€4.000 - €12.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Il tuo ospite vuole spendere, rendiglielo facile.',
        'L\'app non sostituisce il sorriso, lo valorizza risolvendo la noia.',
        'Sii più di un posto dove dormire: sii un assistente di viaggio.'
      ],
      scripts: [
        { title: 'Opening', content: 'Sa quanto perde perché la gente non sa che ha un massaggio disponibile o una cena a tema? Se glielo mette sotto gli occhi sul telefono, la cassa canta.' }
      ],
      objections: [
        { objection: 'I clienti non vogliono scaricare app', response: 'È una Web-App! Basta inquadrare un QR. Nessun download, accesso immediato e fluido.' }
      ],
      closingTechniques: ['Setup gratuito dei primi 5 servizi nell\'app'],
      pricingStrategy: ['Focus sull\'aumento dello scontrino medio ospite'],
      urgencyTriggers: ['Ogni camera senza QR è un\'opportunità di vendita persa.']
    }
  },
  {
    id: '94',
    name: 'Automazione Domotica & Risparmio Energetico',
    shortDescription: 'Controllo intelligente luci e clima quando l\'ospite non è in camera',
    tagline: 'Sostenibilità che si trasforma in utile netto.',
    icon: '🔋',
    category: 'Automazione',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1558002038-103792e01081?auto=format&fit=crop&w=800&q=80',
    problem: 'Bollette energetiche altissime a causa di climatizzatori accesi 24/7 in camere vuote.',
    stats: [
      { icon: '📉', label: "Bolletta", value: "-30%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🌿', label: "Eco", value: "Green", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⚙️', label: "Control", value: "Remote", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Spreco Energetico', desc: 'Clima a 18 gradi con finestra aperta mentre l\'ospite è in spiaggia', icon: '💸' },
      after: { title: 'Struttura Smart', desc: 'Spegnimento automatico al check-out e sensori finestra/presenza', icon: '🌱' }
    },
    psychologyQuote: 'Gli ospiti moderni apprezzano e premiano le strutture che dimostrano un impegno reale verso la sostenibilità.',
    solutions: [
      'Sensori di presenza e contatti finestra wireless (senza opere murarie)',
      'Termostati intelligenti controllabili da remoto dalla reception',
      'Scenari di Benvenuto: clima acceso solo 15 minuti prima dell\'arrivo',
      'Master switch digitale che toglie tensione a carichi inutili',
      'Analisi dei consumi per camera per rilevare anomalie o guasti'
    ],
    economicBenefits: {
      title: 'Riduzione Costi Fissi',
      benefits: [
        'Taglio drastico della bolletta elettrica e gas (fino al 40%)',
        'Maggiore durata degli apparecchi climatizzatori (meno usura)',
        'Miglioramento della classe energetica della struttura',
        'Marketing "Green" per attirare clientela consapevole'
      ],
      savings: 'Risparmio energetico: €500 - €1.200 per camera/anno'
    },
    secretSection: {
      killerPhrases: [
        'Non pagare per il freddo che nessuno sente.',
        'La domotica si paga da sola con le prime 12 bollette.',
        'Proteggi l\'ambiente e il tuo conto corrente contemporaneamente.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le è mai capitato di entrare in una camera vuota e trovarla gelata con la finestra aperta? Sta letteralmente buttando soldi fuori dalla finestra. Possiamo fermarlo oggi.' }
      ],
      objections: [
        { objection: 'L\'ospite vuole trovare fresco', response: 'Il sistema accende il clima solo quando l\'ospite entra o poco prima sulla base del check-in. Comfort totale, spreco zero.' }
      ],
      closingTechniques: ['Audit energetico gratuito su 2 camere campione'],
      pricingStrategy: ['Focus sul ROI basato sul risparmio in bolletta'],
      urgencyTriggers: ['I costi energetici continuano a salire. Ogni mese di ritardo costa caro.']
    }
  },
  {
    id: '95',
    name: 'Gestione PMS Cloud Integrato',
    shortDescription: 'Software gestionale accessibile ovunque per prenotazioni, conti e pulizie',
    tagline: 'Il cuore della tua operatività, ovunque tu sia.',
    icon: '☁️',
    category: 'Digitalizzazione',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    problem: 'Sistemi obsoleti che girano solo su un PC, disconnessi dai canali di vendita (OTA) e difficili da usare.',
    stats: [
      { icon: '⚡', label: "Sync", value: "Realtime", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🌍', label: "Remote", value: "Ok", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📈', label: "Direct", value: "+15%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Overbooking e Caos', desc: 'Aggiornamento manuale dei portali e conti su fogli excel', icon: '📝' },
      after: { title: 'Automazione Totale', desc: 'Prenotazione che entra, scarica disponibilità e prepara il conto', icon: '🚀' }
    },
    psychologyQuote: 'Un sistema fluido riduce lo stress dei collaboratori, riflettendosi in un servizio migliore al cliente finale.',
    solutions: [
      'Migrazione dati da sistemi legacy al cloud sicuro',
      'Channel Manager integrato per sincronizzazione automatica Booking/Airbnb',
      'App dedicata per il reparto housekeeping (stato camere in tempo reale)',
      'Fatturazione elettronica e invio corrispettivi automatico',
      'Modulo booking engine per prenotazioni dirette senza commissioni'
    ],
    economicBenefits: {
      title: 'Massimizzazione Profitti',
      benefits: [
        'Eliminazione degli errori di overbooking (e relativi costi di spostamento)',
        'Mantenimento dei prezzi allineati su tutti i canali per massimizzare il RevPAR',
        'Risparmio immenso di tempo amministrativo per fatturazione e report',
        'Aumento delle prenotazioni dirette (risparmio commissioni OTA 15-20%)'
      ],
      savings: 'Tempo amministrativo: -50% / Commissioni salvate: +€3.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Smetti di essere schiavo della tua stessa reception.',
        'Se il tuo gestionale non ti fa guadagnare di più, è solo un costo.',
        'Prendi il controllo della tua struttura da uno smartphone,anche in spiaggia.'
      ],
      scripts: [
        { title: 'Opening', content: 'Usa ancora quel programma installato sul PC vecchio? Se domani si rompe il disco fisso, cosa succede alla sua azienda? Passiamo al cloud, è più sicuro e le fa vendere di più.' }
      ],
      objections: [
        { objection: 'Il personale è abituato al vecchio', response: 'Offriamo formazione completa. Il nuovo sistema è così intuitivo che impareranno in 2 ore, e lo ameranno perché gli toglie il lavoro noioso.' }
      ],
      closingTechniques: ['Migrazione dati gratuita inclusa'],
      pricingStrategy: ['Abbonamento mensile basato sul numero camere'],
      urgencyTriggers: ['L\'alta stagione arriva: affrontala con un sistema che non si blocca.']
    }
  },
  {
    id: '96',
    name: 'CRM & Marketing Automation Post-Stay',
    shortDescription: 'Email personalizzate post-viaggio e codici sconto per il ritorno',
    tagline: 'L\'ospite parte, il legame resta.',
    icon: '💌',
    category: 'Marketing Digitale',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che vengono una volta e non tornano più perché l\'hotel non mantiene i contatti.',
    stats: [
      { icon: '🔄', label: "Retention", value: "+40%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📧', label: "Open Rate", value: "35%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '💰', label: "ROI", value: "High", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Silenzio Assordante', desc: 'Dopo il checkout l\'ospite viene dimenticato per sempre', icon: '😶' },
      after: { title: 'Fidelizzazione Continua', desc: 'Codice sconto per il compleanno e newsletter con le novità del territorio', icon: '💖' }
    },
    psychologyQuote: 'Mantenere un cliente esistente costa 7 volte meno che acquisirne uno nuovo tramite pubblicità.',
    solutions: [
      'Segmentazione automatica ospiti (Famiglie, Business, Coppie)',
      'Flussi di email automatici post-checkout (Grazie, Richiesta Feedback)',
      'Promo personalizzate basate sulle preferenze passate',
      'Newsletter mensile con eventi locali per stimolare il ritorno',
      'Integrazione con programmi fedeltà a livelli (Silver, Gold, Platinum)'
    ],
    economicBenefits: {
      title: 'Customer Lifetime Value',
      benefits: [
        'Aumento del tasso di ritorno (Repeat Guests) dal 10% al 30%',
        'Più recensioni positive su TripAdvisor e Google grazie ai solleciti smart',
        'Analisi dei periodi di bassa stagione coperti da promozioni mirate ai vecchi clienti',
        'Costruzione di un database proprietario (asset aziendale di valore)'
      ],
      savings: 'Costi acquisizione clienti: -35%'
    },
    secretSection: {
      killerPhrases: [
        'Il segreto del successo non è riempire oggi, è sapere chi verrà domani.',
        'Un cliente fedele è il tuo miglior venditore.',
        'Sostituisci la speranza con un piano di marketing automatico.'
      ],
      scripts: [
        { title: 'Opening', content: 'Sa quanti dei suoi ospiti tornerebbero se solo ricevevano un piccolo incentivo al momento giusto? Noi automatizziamo tutto questo, così lei non deve muovere un dito.' }
      ],
      objections: [
        { objection: 'Non vogliamo disturbare', response: 'Il marketing ben fatto non disturba, offre valore. Mandiamo solo info utili e sconti che gli ospiti amano ricevere.' }
      ],
      closingTechniques: ['Setup della prima campagna "Bentornato" gratuito'],
      pricingStrategy: ['Focus sul valore del database clienti'],
      urgencyTriggers: ['Stai regalando i tuoi ospiti a Booking.com. Riprenditeli.']
    }
  },
  {
    id: '97',
    name: 'Wi-Fi Marketing & Data Collection',
    shortDescription: 'Accesso Wi-Fi via Social o Email per raccogliere database contatti',
    tagline: 'Metti il tuo Wi-Fi a lavorare per il tuo marketing.',
    icon: '📶',
    category: 'Marketing Digitale',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    problem: 'Ospiti che usano il Wi-Fi gratis ma l\'hotel non sa nulla di loro (età, interessi, email).',
    stats: [
      { icon: '📧', label: "Leads", value: "Max", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💬', label: "Social", value: "+50%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⭐', label: "Reviews", value: "Auto", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Connessione Anonima', desc: 'Password scritta su un foglietto alla reception, nessun dato salvato', icon: '🔒' },
      after: { title: 'Social Login', desc: 'Ospite accede e la tua pagina Facebook riceve un Like automatico', icon: '🚀' }
    },
    psychologyQuote: 'Lo scambio "Connessione in cambio di Email" è percepito come uno scambio equo e non invasivo.',
    solutions: [
      'Captive Portal personalizzato con grafica dell\'hotel',
      'Social Login (Facebook, Google, Instagram)',
      'Redirect automatico su pagina promozionale post-login',
      'Limitazione banda per evitare abusi di download',
      'Invio push/email non appena l\'ospite entra in struttura'
    ],
    economicBenefits: {
      title: 'Database Evolution',
      benefits: [
        'Crescita automatica del database email di centinaia di contatti al mese',
        'Aumento dei follower social senza campagne a pagamento',
        'Migliore sicurezza legale (tracciamento log accessi obbligatorio)',
        'Possibilità di mostrare offerte speciali del bar/ristorante appena si collegano'
      ],
      savings: 'Valore database generato: €2.000 - €5.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Non regalare il Wi-Fi, barattalo con il futuro della tua azienda.',
        'La password è un ostacolo, il social login è un ponte.',
        'Chi si connette oggi è il tuo cliente di domani.'
      ],
      scripts: [
        { title: 'Opening', content: 'Regala ancora la password su carta? Sta perdendo l\'opportunità di sapere CHI sono i suoi ospiti. Con il nostro sistema, ogni ospite che si connette diventa un lead nel suo CRM.' }
      ],
      objections: [
        { objection: 'Sembra complicato per l\'ospite', response: 'È un click su "Accedi con Google". Più veloce che scrivere una password lunga e complessa.' }
      ],
      closingTechniques: ['Installazione e test router smart gratuito'],
      pricingStrategy: ['Focus sulla generazione di leads qualificati'],
      urgencyTriggers: ['Migliaia di ospiti passano ogni anno. Quanti ne hai salvati?']
    }
  },
  {
    id: '98',
    name: 'Revenue Management Intelligente',
    shortDescription: 'Analisi competitiva e prezzi dinamici per massimizzare il riempimento',
    tagline: 'Vendi al prezzo che il mercato è disposto a pagare.',
    icon: '📈',
    category: 'Analisi Dati',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    problem: 'Perdere vendite perché i prezzi sono troppo alti o perdere margine perché sono troppo bassi rispetto ai competitor.',
    stats: [
      { icon: '💰', label: "RevPAR", value: "+18%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📊', label: "Data", value: "Sci", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⚡', label: "Fast", value: "Auto", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Prezzi a Listino', desc: 'Prezzi fissi per stagione, ignorando eventi e competitor', icon: '📅' },
      after: { title: 'Pricing Dinamico', desc: 'Prezzi che fluttuano in base a domanda, meteo e occupazione reale', icon: '🌊' }
    },
    psychologyQuote: 'Il prezzo non è un valore assoluto, è un valore relativo alla scarsità e alla domanda del momento.',
    solutions: [
      'Software di Rate Shopper per spiare i prezzi dei competitor 24/7',
      'Algoritmo predittivo basato su eventi locali e voli aerei',
      'Automazione del cambio prezzi sul Channel Manager',
      'Analisi della domanda storica e previsione occupazione',
      'Consulenza mensile con esperto Revenue per settaggio strategie'
    ],
    economicBenefits: {
      title: 'Ottimizzazione Fatturato',
      benefits: [
        'Incremento dell\'occupazione nei periodi di bassa stagione',
        'Esplosione dei margini nei periodi di altissima domanda (Sold Out)',
        'Migliore posizionamento sui portali grazie alle tariffe competitive',
        'Dati certi per decidere investimenti e budgeting'
      ],
      savings: 'Incremento fatturato netto: €10.000 - €50.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Segui il mercato, o fatti guidare dal profitto.',
        'L\'hotel non è un museo, i prezzi non devono restare immobili.',
        'Massimizza ogni singola notte, ogni singola camera.'
      ],
      scripts: [
        { title: 'Opening', content: 'Come decide il prezzo per il prossimo ponte? Guarda cosa fa il vicino? E se avesse un software che lo fa meglio, basandosi su dati scientifici?' }
      ],
      objections: [
        { objection: 'Il mio hotel è unico', response: 'Proprio perché è unico merita il prezzo massimo che il cliente è disposto a pagare. Il revenue management trova quel punto esatto.' }
      ],
      closingTechniques: ['Audit storico gratuito degli ultimi 6 mesi'],
      pricingStrategy: ['Focus sull\'incremento del RevPAR'],
      urgencyTriggers: ['Ogni notte venduta sottoprezzo è un regalo che fai senza motivo.']
    }
  },
  {
    id: '99',
    name: 'Virtual Tour 3D Stanze & SPA',
    shortDescription: 'Esperienza immersiva per far visitare la struttura online prima del booking',
    tagline: 'Falli innamorare prima ancora che arrivino.',
    icon: '👓',
    category: 'Digitalizzazione',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1542750017-fef98ae25595?auto=format&fit=crop&w=800&q=80',
    problem: 'Foto che non rendono giustizia agli spazi e ospiti che temono "sorprese" negative all\'arrivo.',
    stats: [
      { icon: '✨', label: "Trust", value: "High", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🔄', label: "Conv", value: "+300%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🕒', label: "Time", value: "+5m", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Immagini Piatte', desc: 'Foto grandangolari che sembrano finte e poco trasparenti', icon: '🖼️' },
      after: { title: 'Realtà Immersiva', desc: 'Ospite che cammina virtualmente tra le stanze e la SPA dal suo PC', icon: '🕶️' }
    },
    psychologyQuote: 'La riduzione dell\'incertezza tramite la visione reale degli spazi aumenta drasticamente la propensione al checkout.',
    solutions: [
      'Scansione Matterport ad alta risoluzione di tutta la struttura',
      'Integrazione punti informativi cliccabili (Tag) dentro il tour',
      'Modalità "Dollhouse" per vedere l\'intera pianta dell\'hotel',
      'Integrazione nel proprio sito web e su Google Street View',
      'Possibilità di prenotare la camera specifica direttamente dal tour 3D'
    ],
    economicBenefits: {
      title: 'Direct Booking Boost',
      benefits: [
        'Aumento del tempo di permanenza sul sito (migliore SEO)',
        'Esplosione delle prenotazioni dirette rispetto alle OTA',
        'Riduzione dei rimborsi o lamentele "non era come in foto"',
        'Strumento di vendita potente per eventi, matrimoni e meeting'
      ],
      savings: 'Costi commissioni salvati: +15-20% sul booking diretto'
    },
    secretSection: {
      killerPhrases: [
        'Porta il tuo hotel a casa del cliente.',
        'La trasparenza è il marketing più potente del mondo.',
        'Niente più "aspettative vs realtà": solo realtà.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le sue stanze sono bellissime, ma le foto non lo dicono abbastanza. Con il tour 3D, il cliente ci cammina dentro. Scommettiamo che prenota subito?' }
      ],
      objections: [
        { objection: 'È costoso da produrre', response: 'È un investimento che dura anni. E basta UNA prenotazione diretta in più al mese per pagarselo in brevissimo tempo.' }
      ],
      closingTechniques: ['Esempio di tour 3D di successo di un competitor'],
      pricingStrategy: ['Focus sull\'aumento della conversione web'],
      urgencyTriggers: ['I tuoi competitor mostrano ancora solo foto. Distinguiti ora.']
    }
  },
  {
    id: '100',
    name: 'Upselling Room Service & Drink',
    shortDescription: 'Piattaforma per ordinare colazione o aperitivi in camera via smartphone',
    tagline: 'Il comfort del servizio, la velocità del digitale.',
    icon: '🥂',
    category: 'E-commerce',
    activityType: 'hotel',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
    problem: 'Personale che deve rispondere al telefono per ordini room service, spesso perdendo tempo e dettagli.',
    stats: [
      { icon: '💰', label: "Scontrino", value: "+22%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⚡', label: "Speed", value: "Fast", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '😊', label: "Ease", value: "Max", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Ordine Voce', desc: 'Telefonate concitate e possibili errori nel segnare i piatti', icon: '📞' },
      after: { title: 'Tap & Eat', desc: 'Menu visivo con varianti ed extra scelti con calma dall\'ospite', icon: '🥗' }
    },
    psychologyQuote: 'Vedere l\'immagine di un cibo delizioso attiva i centri del desiderio molto più di una descrizione testuale.',
    solutions: [
      'Menu digitale con modificatori (es. con ghiaccio, senza cipolla)',
      'Notifica immediata via tablet in cucina o bar',
      'Addebito automatico sul conto della camera',
      'Orari di disponibilità dinamici (es. solo colazione, solo cena)',
      'Promo "Combo" suggerite automaticamente (es. Drink + Snack)'
    ],
    economicBenefits: {
      title: 'Efficienza F&B',
      benefits: [
        'Aumento degli ordini d\'impulso grazie alla facilità d\'uso',
        'Riduzione drastica degli errori di ordinazione',
        'Lo staff si concentra sulla preparazione e consegna, non al telefono',
        'Analisi dei piatti più amati per ottimizzare il menu'
      ],
      savings: 'Aumento ricavi F&B: +€15 - €30 per ospite'
    },
    secretSection: {
      killerPhrases: [
        'Rendi il tuo room service lo strumento di profitto più divertente.',
        'L\'ospite pigro è il tuo miglior cliente, se lo servi bene.',
        'Ogni colazione venduta in camera è un successo di margine.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti ospiti scendono al bar perché non hanno voglia di chiamare o non trovano il menu? Se avessero un QR sul comodino, ordinerebbero un drink in più ogni sera.' }
      ],
      objections: [
        { objection: 'Non abbiamo molto personale', response: 'Proprio per questo! Risparmia il tempo della chiamata. Quando l\'ordine arriva, lo staff deve solo portarlo. Più efficiente.' }
      ],
      closingTechniques: ['Integrazione gratuita con grafiche QR per le camere'],
      pricingStrategy: ['Focus sul cross-selling e up-selling'],
      urgencyTriggers: ['Massimizza l\'incasso del bar senza assumere nuovi baristi.']
    }
  },
  // --- REAL ESTATE (10 Servizi) ---
  {
    id: '101',
    name: 'Virtual Tour 3D & Matterport',
    shortDescription: 'Visite immersive 24/7 senza spostarsi da casa',
    tagline: 'L\'immobile prende vita, ovunque tu sia.',
    icon: '🏠',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che perdono tempo in visite inutili e immobili che rimangono invenduti per scarsa trasparenza fotografica.',
    stats: [
      { icon: '👁️', label: "Visite", value: "+300%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⏱️', label: "Time-to-sell", value: "-40%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🌍', label: "Reach", value: "Global", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Foto Grandangolo', desc: 'Immagini che distorcono la realtà e creano delusioni all\'arrivo', icon: '📸' },
      after: { title: 'Gemello Digitale', desc: 'Navigazione millimetrica e realistica di ogni stanza', icon: '💎' }
    },
    psychologyQuote: 'La possibilità di esplorare uno spazio in autonomia crea un senso di possesso e sicurezza prima ancora del primo passo fisico.',
    solutions: [
      'Rilievo con tecnologia Matterport Pro3',
      'Integrazione Tag informativi su finiture e impianti',
      'Planimetrie 2D/3D generate automaticamente dal tour',
      'Pubblicazione su Google Street View e portali immobiliari',
      'Modalità VR per visori di realtà virtuale'
    ],
    economicBenefits: {
      title: 'Ottimizzazione Vendita',
      benefits: [
        'Qualificazione estrema dei lead (chi chiama ha già visto tutto)',
        'Riduzione dei costi di trasferta per l\'agente',
        'Immagine premium dell\'agenzia sul mercato',
        'Aumento del numero di mandati in esclusiva'
      ],
      savings: 'Risparmio tempo visite inutili: €2.000 - €5.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Non vendere una casa, vendi l\'emozione di entrarci subito.',
        'Sii l\'unica agenzia che non fa perdere tempo ai suoi clienti.',
        'Il tour 3D lavora per te mentre dormi.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le piacerebbe se solo i clienti realmente interessati venissero a visitare i suoi immobili? Con il Matterport, filtrano se stessi.' }
      ],
      objections: [
        { objection: 'Il cliente vuole vedere dal vivo', response: 'Certamente! Ma dopo aver visto il tour 3D, la visita fisica serve solo a firmare la proposta.' }
      ],
      closingTechniques: ['Dimostrazione effetto "Casa delle bambole"'],
      pricingStrategy: ['Focus sulla velocità di rotazione del portafoglio immobili'],
      urgencyTriggers: ['Il mercato corre, le foto piatte non bastano più.']
    }
  },
  {
    id: '102',
    name: 'Lead Generation Immobiliari (Ads)',
    shortDescription: 'Campagne mirate per acquisire nuovi mandati e venditori',
    tagline: 'Il tuo telefono che squilla per nuovi mandati.',
    icon: '🎯',
    category: 'Marketing Digitale',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    problem: 'Dipendenza dai portali immobiliari (costosi) e difficoltà nel trovare persone che vogliono vendere casa.',
    stats: [
      { icon: '📈', label: "Mandati", value: "+25%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💰', label: "CPL", value: "Low", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🏢', label: "Brand", value: "Auth", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Passaparola', desc: 'Sperare che qualcuno entri in agenzia o chiamare a freddo', icon: '📞' },
      after: { title: 'Macchina Lead', desc: 'Flusso costante di persone che chiedono una valutazione gratuita', icon: '⚙️' }
    },
    psychologyQuote: 'Chi offre valore (valutazione gratuita) prima di chiedere un impegno (mandato) vince la fiducia nel mercato iper-competitivo.',
    solutions: [
      'Campagne Meta & Google Ads geo-localizzate per quartiere',
      'Landing page specifiche per "Vendi Casa" e "Cerca Casa"',
      'Funnel di qualificazione automatica tramite form intelligente',
      'Retargeting su chi ha visitato il sito ma non ha contattato',
      'Analisi della concorrenza locale e posizionamento unico'
    ],
    economicBenefits: {
      title: 'Crescita Portafoglio',
      benefits: [
        'Acquisizione di mandati a costi inferiori rispetto ai metodi tradizionali',
        'Costruzione di un database proprietario di potenziali venditori',
        'Maggiore potere contrattuale grazie al flusso costante di richieste',
        'Indipendenza strategica dai grandi portali generalisti'
      ],
      savings: 'Aumento fatturato provvigioni: +€20.000 - €50.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Smetti di inseguire i mandati, falli venire da te.',
        'In zona non devi essere uno dei tanti, devi essere L\'UNICO.',
        'La pubblicità è un investimento se produce venditori.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanto paga ogni mese ai portali? E se quei soldi li usassimo per farle acquisire mandati DIRETTI che nessun altro ha?' }
      ],
      objections: [
        { objection: 'Ho già provato Facebook e non funziona', response: 'Il problema non è lo strumento, è la strategia. Senza una landing page di conversione, sono solo soldi buttati. Noi curiamo tutto il processo.' }
      ],
      closingTechniques: ['Offerta primo mese di gestione gratuita'],
      pricingStrategy: ['Focus sul costo di acquisizione del mandato'],
      urgencyTriggers: ['I tuoi concorrenti stanno già presidiando il territorio online.']
    }
  },
  {
    id: '103',
    name: 'Valutazione Immobile con AI',
    shortDescription: 'Algoritmi di stima automatica per lead immediati sul sito',
    tagline: 'Il valore della tua casa, calcolato dalla scienza.',
    icon: '📊',
    category: 'Analisi Dati',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    problem: 'Proprietari curiosi del valore di casa loro ma restii a chiamare un agente per paura di pressioni.',
    stats: [
      { icon: '🚀', label: "Leads", value: "+150%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🤖', label: "Tech", value: "AI", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🎯', label: "Accuracy", value: "95%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Richiesta Info', desc: 'Il cliente deve chiamare e aspettare un appuntamento', icon: '⌛' },
      after: { title: 'Self-Service', desc: 'Report immediato via email in cambio dei dati di contatto', icon: '📧' }
    },
    psychologyQuote: 'La gratificazione istantanea batte l\'attesa burocratica: dai una risposta subito per catturare l\'attenzione.',
    solutions: [
      'Widget di valutazione integrato in home page',
      'Algoritmo basato su compravendite reali in zona (Big Data)',
      'Report PDF professionale brandizzato inviato automaticamente',
      'Notifica immediata all\'agente per il follow-up telefonico',
      'Dashboard per monitorare l\'andamento dei valori nel tempo'
    ],
    economicBenefits: {
      title: 'Efficienza Acquisizione',
      benefits: [
        'Generazione lead h24 anche mentre l\'ufficio è chiuso',
        'Percezione di agenzia tecnologica e all\'avanguardia',
        'Database di indirizzi esatti degli immobili pronti per essere acquisiti',
        'Facilita l\'approccio a freddo con dati concreti in mano'
      ],
      savings: 'Tempo valutazione preliminare: -80%'
    },
    secretSection: {
      killerPhrases: [
        'Sia l\'agenzia che dà risposte, non quella che fa domande.',
        'L\'AI non ti sostituisce, ma ti porta il cliente in ufficio.',
        'La curiosità del proprietario è la tua miniera d\'oro.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanta gente passa sul suo sito e se ne va senza lasciare traccia? Dia loro una stima istantanea e vedrà quanti contatti inizierà a ricevere.' }
      ],
      objections: [
        { objection: 'Le stime online non sono precise', response: 'Esatto! Il report serve ad attirare il cliente. Poi lei interviene per dire: "L\'algoritmo dice X, ma con la mia esperienza vediamo perché è Y". È il gancio perfetto.' }
      ],
      closingTechniques: ['Integrazione gratuita del widget sul sito esistente'],
      pricingStrategy: ['Abbonamento mensile basato sull\'utilizzo'],
      urgencyTriggers: ['Chi cerca il valore oggi, vende tra tre mesi. Scrivili ora.']
    }
  },
  {
    id: '104',
    name: 'CRM Immobiliare Avanzato',
    shortDescription: 'Gestione lead e incroci automatici domanda/offerta',
    tagline: 'L\'intelligenza che connette case e persone.',
    icon: '🤝',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    problem: 'Lead che si perdono in fogli excel, agenti che dimenticano i richiami e "incroci" fatti a memoria.',
    stats: [
      { icon: '🔄', label: "Incroci", value: "Auto", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📈', label: "Effici", value: "+50%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📱', label: "Cloud", value: "Ubiqu", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Post-it e Caos', desc: 'Informazioni frammentate e opportunità perse per dimenticanza', icon: '📝' },
      after: { title: 'Memoria d\'Acciaio', desc: 'Tutto sotto controllo in un unico hub digitale accessibile da mobile', icon: '💻' }
    },
    psychologyQuote: 'La rapidità di risposta è il fattore numero uno nella scelta di un consulente professionale.',
    solutions: [
      'Importazione automatica lead dai portali (Immobiliare.it, Idealista, ecc.)',
      'Algoritmo di matching automatico Richieste / Immobili',
      'Gestione agenda condivisa e remind appuntamenti via SMS/WhatsApp',
      'Statistiche e KPI sulle performance di ogni agente',
      'Archivio storico delle obiezioni e feedback visite'
    ],
    economicBenefits: {
      title: 'Produttività Team',
      benefits: [
        'Aumento del numero di vendite concluse per ogni agente',
        'Riduzione drastica del turnover dei lead non lavorati',
        'Migliore qualità della vita lavorativa per lo staff',
        'Tracciabilità totale dell\'investimento marketing'
      ],
      savings: 'Tempo gestionale: -10 ore/settimana per agente'
    },
    secretSection: {
      killerPhrases: [
        'Se non è nel CRM, non esiste.',
        'Vendi di più faticando di meno grazie all\'automazione.',
        'Il tuo database è il vero valore della tua agenzia.'
      ],
      scripts: [
        { title: 'Opening', content: 'Sa quanti soldi sta lasciando sul tavolo perché un lead non è stato richiamato in tempo? Con un CRM moderno, nulla sfugge.' }
      ],
      objections: [
        { objection: 'Siamo piccoli, non serve', response: 'Proprio perché siete piccoli dovete essere più veloci dei grandi. Il CRM vi dà quella velocità.' }
      ],
      closingTechniques: ['Setup iniziale e migrazione dati inclusa'],
      pricingStrategy: ['Focus sulla scalabilità del business'],
      urgencyTriggers: ['Più aspetti, più il tuo database diventa obsoleto e inutile.']
    }
  },
  {
    id: '105',
    name: 'Home Staging Virtuale',
    shortDescription: 'Rendering 3D per immobili da ristrutturare o vuoti',
    tagline: 'Mostra il potenziale, non solo i mattoni.',
    icon: '🏢',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1536376074432-af42d59aa4b4?auto=format&fit=crop&w=800&q=80',
    problem: 'Case vecchie o vuote che sembrano tristi e piccole, allontanando i compratori non fantasiosi.',
    stats: [
      { icon: '✨', label: "Visual", value: "Wow", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💰', label: "Value", value: "+15%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⚡', label: "Fast", value: "Instant", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Muro Sclostato', desc: 'Case che richiedono troppa immaginazione per essere amate', icon: '🏚️' },
      after: { title: 'Design Moderno', desc: 'Rendering fotorealistici che mostrano come potrebbe essere casa dopo i lavori', icon: '🛋️' }
    },
    psychologyQuote: 'Le persone non comprano ciò che vedono, comprano ciò che SOGNANO di vedere.',
    solutions: [
      'Rendering fotorealistici partendo da semplici foto',
      'Arredamento virtuale in diversi stili (Moderno, Classico, Scandive)',
      'Possibilità di cambiare pavimenti e colori pareti in tempo reale',
      'Consegna immagini in 48 ore lavorative',
      'Integrazione link del rendering negli annunci sui portali'
    ],
    economicBenefits: {
      title: 'Aumento Valore Percepito',
      benefits: [
        'Vendita di immobili difficili a prezzi più alti',
        'Riduzione delle trattative al ribasso basate sui difetti estetici',
        'Distinzione netta rispetto agli annunci della concorrenza',
        'Fornisce un\'idea chiara dei costi di ristrutturazione (se abbinato a preventivi)'
      ],
      savings: 'Costi Home Staging fisico: -90%'
    },
    secretSection: {
      killerPhrases: [
        'Vendi il futuro, non il passato.',
        'I sogni costano meno dei mobili veri.',
        'La bellezza vende più in fretta della polvere.'
      ],
      scripts: [
        { title: 'Opening', content: 'L\'immobile è fermo da mesi? È perché la gente non riesce a immaginarselo finito. Con questi rendering, venderemo il progetto, non il cantiere.' }
      ],
      objections: [
        { objection: 'È ingannevole', response: 'Assolutamente no! Mettiamo sempre "Proposta di arredamento virtuale". Serve ad aiutare il compratore a capire gli spazi.' }
      ],
      closingTechniques: ['Promessa di rimborso se l\'annuncio non triplica i click'],
      pricingStrategy: ['Prezzo fisso per pacchetto di 3/5 foto'],
      urgencyTriggers: ['Stanco di vedere quell\'immobile ancora sul tuo listino?']
    }
  },
  {
    id: '106',
    name: 'Firma Elettronica Proposte',
    shortDescription: 'Digitalizzazione contratti e firme a distanza legali',
    tagline: 'Firma l\'affare ovunque, in totale sicurezza.',
    icon: '✍️',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti distanti che ritardano le firme, carte perse e viaggi inutili solo per siglare un foglio.',
    stats: [
      { icon: '⚡', label: "Closing", value: "Instant", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⚖️', label: "Legal", value: "Full", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📂', label: "Storage", value: "Safe", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Stampante e Fax', desc: 'Rincorrere il cliente per una firma manuale con giorni di attesa', icon: '📠' },
      after: { title: 'Docusign Ready', desc: 'Link sul cellulare, firma col dito in 10 secondi e contratto valido', icon: '📲' }
    },
    psychologyQuote: 'Rimuovere l\'attrito fisico tra la decisione e l\'atto della firma aumenta del 30% la possibilità di chiudere subito.',
    solutions: [
      'Integrazione con sistemi di firma certificata (OTP via SMS)',
      'Gestione modelli contrattuali pronti all\'uso',
      'Tracking dello stato del documento (Visto, In attesa, Firmato)',
      'Backup automatico in cloud per 10 anni (normativa)',
      'Possibilità di firma multipla per più comproprietari'
    ],
    economicBenefits: {
      title: 'Business Velocity',
      benefits: [
        'Nessuna perdita di contratti per ripensamenti dell\'ultimo minuto',
        'Risparmio enorme su carta, toner e corrieri',
        'Ordine perfetto nell\'archivio digitale dell\'agenzia',
        'Immagine di estrema professionalità e modernità'
      ],
      savings: 'Tempo amministrativo e viaggi: €1.500 - €4.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Il ferro va battuto finché è caldo, e firmato finché sono convinti.',
        'La burocrazia uccide le vendite, il digitale le accelera.',
        'Sii l\'agenzia 100% paperless.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante volte ha perso una proposta perché il cliente doveva tornare a casa, parlarne e poi non si è più fatto vedere? Con la firma digitale, chiudiamo qui, ora.' }
      ],
      objections: [
        { objection: 'Ha valore legale?', response: 'Certamente! Usiamo standard europei eIDAS. È più sicuro di una firma a penna che chiunque potrebbe disconoscere.' }
      ],
      closingTechniques: ['Prova immediata su un modulo di privacy'],
      pricingStrategy: ['Pay-per-envelope o abbonamento flat'],
      urgencyTriggers: ['Non lasciare che la notte porti consiglio... e dubbi. Firma ora.']
    }
  },
  {
    id: '107',
    name: 'Video Marketing Immobiliare',
    shortDescription: 'Droni, riprese emozionali e social reels per la boutique agency',
    tagline: 'Ogni casa ha una storia. Raccontala con un film.',
    icon: '🎥',
    category: 'Digitalizzazione',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1473163922596-302927dcc3ce?auto=format&fit=crop&w=800&q=80',
    problem: 'Annunci statici che non attirano l\'attenzione sui social e immobili di lusso non valorizzati a sufficienza.',
    stats: [
      { icon: '🎬', label: "Visuals", value: "Cine", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📱', label: "Views", value: "+500%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🌟', label: "Prestige", value: "High", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Foto Sfocate', desc: 'Nessun impatto emotivo, l\'utente scorre oltre senza fermarsi', icon: '🖼️' },
      after: { title: 'Storytelling', desc: 'Video che fa sentire il cliente già dentro la casa dei suoi sogni', icon: '🍿' }
    },
    psychologyQuote: 'Il movimento cattura l\'attenzione 5 volte di più di un\'immagine statica e crea un legame affettivo profondo.',
    solutions: [
      'Riprese col drone 4K per esterni e contesto quartiere',
      'Video-walkthrough dinamici degli interni con gimbal professionale',
      'Montaggio specifico per Social (TikTok/Reels) con musica di tendenza',
      'Intervista emozionale all\'agente che descrive i plus dell\'immobile',
      'Sottotitoli multilingua per mercato estero (lusso)'
    ],
    economicBenefits: {
      title: 'Viralità e Brand',
      benefits: [
        'Aumento esponenziale della visibilità agenzia (senza ads pagate)',
        'Acquisizione di mandati di lusso grazie alla qualità della promozione',
        'Fidelizzazione immediata del venditore che vede il suo immobile valorizzato',
        'Migliore tasso di conversione dalle piattaforme social'
      ],
      savings: 'Costi agenzia video esterna: -50% (pacchetti bulk)'
    },
    secretSection: {
      killerPhrases: [
        'Non mostrare la casa, mostra la vita che ci faranno dentro.',
        'Sii il regista del tuo successo immobiliare.',
        'Un secondo di video vale più di mille parole di descrizione.'
      ],
      scripts: [
        { title: 'Opening', content: 'Questo immobile merita più di qualche foto. Merita un video che lo faccia brillare sui social. Scommettiamo che diventa virale?' }
      ],
      objections: [
        { objection: 'Costa troppo produrli', response: 'Produciamo video per tutto il suo portafoglio con un abbonamento flat. Costa meno di un annuncio premium sul portale.' }
      ],
      closingTechniques: ['Mostrare il reel dell\'ultimo immobile venduto in 7 giorni'],
      pricingStrategy: ['Abbonamento mensile per X video'],
      urgencyTriggers: ['Gli immobili presentati in video si vendono il doppio più velocemente.']
    }
  },
  {
    id: '108',
    name: 'WhatsApp Marketing per Appuntamenti',
    shortDescription: 'Automazione remind e invio brochure via chat istantanea',
    tagline: 'Vicinanza assoluta, risposta immediata.',
    icon: '💬',
    category: 'Marketing Digitale',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80',
    problem: 'No-show agli appuntamenti (gente che non si presenta), brochure perse nelle email e tempi di risposta lenti.',
    stats: [
      { icon: '📱', label: "Open Rate", value: "98%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '❌', label: "No-Show", value: "-70%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '⚡', label: "Speed", value: "Instant", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Email Ignorate', desc: 'Brochure che finiscono in SPAM e clienti che dimenticano la visita', icon: '📧' },
      after: { title: 'Chat Onnipresente', desc: 'Tutto sul telefono del cliente, conferma rapida e link utili sempre a portata', icon: '✅' }
    },
    psychologyQuote: 'WhatsApp è lo spazio dell\'intimità: entrarci con garbo crea un rapporto di fiducia immediato col cliente.',
    solutions: [
      'Invio automatico remind appuntamento 24h e 2h prima',
      'Chatbot per risposte alle FAQ notturne (metrature, classe en, ecc)',
      'Invio pulsante interattivo per conferma/disdetta volo',
      'Archivio documenti cliente sicuro via chat protetta',
      'Broadcast di nuovi immobili in "anteprima" ai clienti in database'
    ],
    economicBenefits: {
      title: 'Efficientamento Tempo',
      benefits: [
        'Eliminazione dei viaggi a vuoto per agenti (no-show rari)',
        'Raccolta feedback immediata post-visita tramite form chat',
        'Riduzione drastica delle telefonate banali di info',
        'Velocità di invio documenti per chiudere la trattativa'
      ],
      savings: 'Tempo segreteria: -15 ore/mese'
    },
    secretSection: {
      killerPhrases: [
        'Sii nel palmo della mano del tuo cliente.',
        'Se non rispondi in 5 minuti, ha già chiamato un altro.',
        'Taglia il rumore delle email e parla diretto al loro cuore.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le persone non leggono più le email, ma guardano WhatsApp cento volte al giorno. Portiamo la sua agenzia dove i clienti sono davvero.' }
      ],
      objections: [
        { objection: 'È troppo invasivo', response: 'Mandiamo solo comunicazioni utili e concordate. I clienti adorano la comodità di un promemoria sul telefono.' }
      ],
      closingTechniques: ['Demo live dell\'automazione remind'],
      pricingStrategy: ['Focus sulla riduzione del tasso di inattività'],
      urgencyTriggers: ['Mentre leggono la tua email, stanno già parlando con la concorrenza su WhatsApp.']
    }
  },
  {
    id: '109',
    name: 'Portale Clienti Venditori',
    shortDescription: 'Dashboard trasparente per mostrare click, visite e feedback in tempo reale',
    tagline: 'Fiducia totale tramite la trasparenza dei dati.',
    icon: '🔑',
    category: 'Analisi Dati',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    problem: 'Venditori che chiamano continuamente per sapere "come va la vendita" e si sentono abbandonati dopo la firma del mandato.',
    stats: [
      { icon: '⭐', label: "Trust", value: "Max", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📉', label: "Call Stress", value: "-90%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🔥', label: "Excl Rate", value: "+40%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Nebbia Informativa', desc: 'Il venditore non sa quanti hanno visto il suo annuncio e perché non vendono', icon: '🌫️' },
      after: { title: 'Trasparenza Cristallina', desc: 'Area riservata con grafico click portali e commenti degli acquirenti', icon: '📊' }
    },
    psychologyQuote: 'L\'incertezza genera ansia; la visualizzazione dei dati trasforma il venditore in un alleato consapevole della strategia di prezzo.',
    solutions: [
      'Area riservata web per ogni venditore con accesso dedicato',
      'Aggregazione dati click da Immobiliare, Idealista e Sito Agenzia',
      'Log delle visite effettuate con feedback anonimizzato degli acquirenti',
      'Alert automatico quando è necessaria una revisione dei prezzi',
      'Download report periodico per consulenze di persona'
    ],
    economicBenefits: {
      title: 'Authority e Ritenzione',
      benefits: [
        'Giustificazione immediata del ribasso prezzo (dati alla mano, non opinioni)',
        'Facilita il rinnovo dei mandati in scadenza',
        'Riduzione drastica del tempo speso al telefono per aggiornamenti banali',
        'Passaparola eccezionale da parte dei venditori soddisfatti del servizio'
      ],
      savings: 'Tempo gestione rapporto clienti: -20 ore/mese'
    },
    secretSection: {
      killerPhrases: [
        'Non dire loro cosa succede, mostralo con i numeri.',
        'La trasparenza è l\'antidoto alla diffidenza verso gli agenti.',
        'Sii il partner tecnologico che meritano.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quante volte i suoi venditori la chiamano per sapere quanti hanno visto l\'annuncio? Con il nostro portale, lo vedono da soli sul telefono. Lei sembra un genio dei dati.' }
      ],
      objections: [
        { objection: 'Se i dati sono brutti?', response: 'Proprio allora servono! Se l\'immobile ha pochi click, abbiamo la prova scientifica che il prezzo è fuori mercato. Diventa facile convincerli a scendere.' }
      ],
      closingTechniques: ['Mostrare un portale demo in fase di acquisizione mandato'],
      pricingStrategy: ['Focus sulla differenziazione rispetto alle agenzie "vecchia scuola"'],
      urgencyTriggers: ['Il 70% dei venditori cambia agenzia per "mancanza di comunicazione".']
    }
  },
  {
    id: '110',
    name: 'SEO per Agenzie Locali',
    shortDescription: 'Posizionamento su Google per zone e quartieri specifici',
    tagline: 'Sii il primo risultato dove la gente cerca casa.',
    icon: '🌐',
    category: 'Marketing Digitale',
    activityType: 'realestate',
    image: 'https://images.unsplash.com/photo-1572021335469-3171624c1c5a?auto=format&fit=crop&w=800&q=80',
    problem: 'Scomparire su Google dietro i grandi portali o non essere trovati dai locali che cercano "Agenzia in [Zona]".',
    stats: [
      { icon: '🔝', label: "Rank", value: "Pos 1", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '👥', label: "Traffic", value: "+200%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🗺️', label: "Local", value: "King", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Invisibilità', desc: 'Sito dell\'agenzia che nessuno visita, sommerso dai giganti', icon: '👻' },
      after: { title: 'Dominio Locale', desc: 'Prima pagina per parole chiave d\'acquisto in zone specifiche', icon: '🏆' }
    },
    psychologyQuote: 'Essere in alto su Google conferisce un\'autorità implicita che nessuna pubblicità a pagamento può eguagliare.',
    solutions: [
      'Ottimizzazione Google Business Profile (Mappe)',
      'Creazione pagine di destinazione per ogni rione/zona coperta',
      'Scrittura blog "Vivere a [Città/Zona]" per catturare traffico informativo',
      'Link building locale con partner e testate giornalistiche di zona',
      'Ottimizzazione velocità sito per dispositivi mobili (Core Web Vitals)'
    ],
    economicBenefits: {
      title: 'Asset a Lungo Termine',
      benefits: [
        'Traffico organico (gratuito) che dura anni',
        'Indipendenza totale dalle piattaforme di social advertising',
        'Miglioramento della conversione globale del sito web',
        'Attrattività per nuovi agenti che vogliono lavorare con un leader digitale'
      ],
      savings: 'Costi per Click risparmiati: €3.000 - €7.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Se non sei in prima pagina, non esisti per chi cerca casa.',
        'Diventa il proprietario del quartiere digitale.',
        'Il SEO è come un immobile: acquisti oggi, godi i frutti per sempre.'
      ],
      scripts: [
        { title: 'Opening', content: 'I grandi portali dominano l\'Italia, ma lei può dominare il suo CAP. Vediamo come portarla sopra tutti i suoi vicini.' }
      ],
      objections: [
        { objection: 'Ci vuole troppo tempo', response: 'Vero, per i risultati serviranno mesi. Ma ogni giorno che aspetta è un giorno di vantaggio che regala alla concorrenza. Iniziamo subito le fondamenta.' }
      ],
      closingTechniques: ['Audit SEO gratuito del sito attuale'],
      pricingStrategy: ['Canone mensile di manutenzione e crescita'],
      urgencyTriggers: ['Google sta aggiornando l\'algoritmo. Chi è pronto vince, gli altri spariscono.']
    }
  },
  // --- JEWELRY (10 Servizi) ---
  {
    id: '111',
    name: 'Prova Virtuale Gioielli (AR)',
    shortDescription: 'Realtà Aumentata per provare anelli e orologi dallo smartphone',
    tagline: 'Vedi come ti sta, prima di toccarlo.',
    icon: '💍',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti indecisi che non vogliono entrare in boutique "solo per provare" o acquisti online con alto tasso di reso.',
    stats: [
      { icon: '🤳', label: "AR Try-on", value: "Smart", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📉', label: "Resi", value: "-45%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🛒', label: "Conv", value: "+25%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Immaginazione', desc: 'Guardare una foto piatta e cercare di capire se sta bene sulla propria mano', icon: '❓' },
      after: { title: 'Specchio Digitale', desc: 'Indossare virtualmente il gioiello in tempo reale con precisione millimetrica', icon: '✨' }
    },
    psychologyQuote: 'Vedere un oggetto di lusso addosso a sé attiva immediatamente il desiderio di possesso reale.',
    solutions: [
      'Integrazione SDK di Realtà Aumentata nel sito e-commerce',
      'Tracking preciso della mano e del polso per anelli e orologi',
      'Rendering in alta fedeltà con riflessi di luce realistici',
      'Pulsante "Condividi il look" per chiedere pareri ad amici',
      'Analisi dei modelli più provati per orientare gli acquisti di magazzino'
    ],
    economicBenefits: {
      title: 'Sales Acceleration',
      benefits: [
        'Aumento drastico della fiducia nell\'acquisto online',
        'Riduzione dei costi logistici legati ai resi per "non mi piace come sta"',
        'Attrazione di un target più giovane e tech-savvy',
        'Differenziazione assoluta rispetto alle gioiellerie tradizionali'
      ],
      savings: 'Costi logistici resi: €1.000 - €3.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Falli innamorare della loro immagine col tuo gioiello.',
        'La boutique è nel loro smartphone, h24.',
        'Elimina l\'incertezza, vendi la sicurezza.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le piacerebbe se i suoi clienti potessero provare ogni singolo anello del suo catalogo mentre sono comodamente sul divano?' }
      ],
      objections: [
        { objection: 'Non è come dal vivo', response: 'Certamente, ma è il miglior invito possibile a venire in negozio per finalizzare l\'acquisto dopo aver già scelto il modello.' }
      ],
      closingTechniques: ['Demo AR dal vivo sullo smartphone del titolare'],
      pricingStrategy: ['Focus sulla conversione e-commerce'],
      urgencyTriggers: ['I brand globali lo fanno già. Sii il primo nella tua città.']
    }
  },
  {
    id: '112',
    name: 'Certificazione Digitale Blockchain',
    shortDescription: 'Digital Twin e NFT per certificare autenticità e proprietà',
    tagline: 'L\'eternità del gioiello, la sicurezza della blockchain.',
    icon: '⛓️',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    problem: 'Certificati cartacei smarriti, contraffazione e difficoltà nel tracciare la storia di un orologio o diamante.',
    stats: [
      { icon: '🛡️', label: "Security", value: "Max", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💎', label: "Authentic", value: "100%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📜', label: "Asset", value: "Digital", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Documento Cartaceo', desc: 'Pezzo di carta facile da perdere o falsificare col tempo', icon: '📄' },
      after: { title: 'Identità Digitale', desc: 'Certificato immutabile su blockchain che viaggia col gioiello per sempre', icon: '🔐' }
    },
    psychologyQuote: 'La certezza dell\'autenticità è il prerequisito fondamentale per ogni acquisto di alto valore.',
    solutions: [
      'Creazione di un "Passaporto Digitale" per ogni pezzo importante',
      'Registrazione passaggi di proprietà su blockchain privata/pubblica',
      'Integrazione QR code inciso o su card fisica per accesso rapido',
      'Servizio di "Valutazione garantita" nel tempo tracciabile',
      'Assicurazione digitale integrata nel certificato'
    ],
    economicBenefits: {
      title: 'Valore nel Tempo',
      benefits: [
        'Aumento del valore di rivendita (second-hand) grazie alla tracciabilità',
        'Protezione totale del brand contro le imitazioni',
        'Nuova fonte di ricavi per servizi di certificazione',
        'Lealtà del cliente che vede valorizzato il suo investimento'
      ],
      savings: 'Costi perizie future: -60%'
    },
    secretSection: {
      killerPhrases: [
        'Un gioiello dura per sempre, il suo certificato anche.',
        'Sostituisci la carta con la tecnologia più sicura al mondo.',
        'Dai ai tuoi clienti un asset, non solo un oggetto.'
      ],
      scripts: [
        { title: 'Opening', content: 'Come protegge i suoi clienti dai falsi? Con la nostra certificazione blockchain, il valore dell\'oggetto è scritto nella pietra digitale.' }
      ],
      objections: [
        { objection: 'I clienti non sanno cos\'è la blockchain', response: 'Non devono saperlo! Per loro è solo un "Certificato Digitale Inalterabile" accessibile dal telefono. Semplice e sicuro.' }
      ],
      closingTechniques: ['Esempio di NFT di un orologio famoso'],
      pricingStrategy: ['Prezzo per ogni certificato emesso'],
      urgencyTriggers: ['Il mercato degli orologi di lusso richiede tracciabilità totale.']
    }
  },
  {
    id: '113',
    name: 'CRM & Fidelizzazione Boutique',
    shortDescription: 'Alert anniversari e inviti a eventi privati per VIP client',
    tagline: 'Il lusso è conoscere il desiderio prima del cliente.',
    icon: '👤',
    category: 'Marketing Digitale',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    problem: 'Perdere contatti con clienti alto-spendenti e dimenticare le loro date importanti (anniversari, compleanni).',
    stats: [
      { icon: '💖', label: "Loyalty", value: "High", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📈', label: "Repeat", value: "+35%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🍰', label: "Birthday", value: "Auto", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Vendita Casuale', desc: 'Aspettare che il cliente entri in negozio per puro caso', icon: '🤷' },
      after: { title: 'Relazione Curata', desc: 'Chiamata personalizzata una settimana prima dell\'anniversario con una proposta dedicata', icon: '📞' }
    },
    psychologyQuote: 'Nel lusso, la relazione conta più del prodotto. Sentirsi ricordati è la massima forma di riconoscimento.',
    solutions: [
      'Database clienti profilato con preferenze di stile e budget',
      'Automazione email/SMS per ricorrenze importanti (Compleanni, Matrimoni)',
      'Organizzazione digitale di Private Sales e anteprime collezioni',
      'Sistema di "Wishlist" condivisa con il partner (per suggerimenti regalo)',
      'Programma "Ambasciatore" per premiare le segnalazioni di nuovi clienti'
    ],
    economicBenefits: {
      title: 'Customer Lifetime Value',
      benefits: [
        'Aumento della frequenza di acquisto annuale per ogni cliente',
        'Recupero di clienti "dormienti" tramite comunicazioni mirate',
        'Incremento dello scontrino medio grazie alla fiducia consolidata',
        'Riduzione dei costi di marketing generalista'
      ],
      savings: 'Costo acquisizione nuovo cliente: -40%'
    },
    secretSection: {
      killerPhrases: [
        'Sii il complice dei loro momenti più belli.',
        'La gioia non è vendergli una volta, è stargli vicino per la vita.',
        'Un cliente nel lusso non si acquista, si coltiva.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti dei suoi clienti tornano regolarmente? Se sapessimo esattamente quando è il loro anniversario, potremmo fargli la proposta perfetta al momento giusto.' }
      ],
      objections: [
        { objection: 'Abbiamo un rapporto personale, non serve software', response: 'Il software serve ad AIUTARE la sua memoria, non a sostituirla. Le ricorda chi non sente da 6 mesi, così può chiamarli lei.' }
      ],
      closingTechniques: ['Setup dei primi 100 profili VIP gratuito'],
      pricingStrategy: ['Canone basato sul numero di clienti gestiti'],
      urgencyTriggers: ['Ogni anniversario dimenticato è una vendita che fa il tuo concorrente.']
    }
  },
  {
    id: '114',
    name: 'E-commerce di Lusso & Video-Assistenza',
    shortDescription: 'Vendita online con personal shopper in live chat video',
    tagline: 'L\'esperienza della boutique, nel comfort di casa.',
    icon: '💻',
    category: 'E-commerce',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    problem: 'Sito web freddo che non trasmette l\'emozione del gioiello e clienti che hanno paura di spendere cifre alte online senza parlare con un esperto.',
    stats: [
      { icon: '📹', label: "Live Shop", value: "HD", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '💰', label: "AOV", value: "+300%", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🤝', label: "Trust", value: "Max", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Carrello Freddo', desc: 'L\'utente guarda due foto e se ne va perché non può fare domande', icon: '🛒' },
      after: { title: 'Private Session', desc: 'Videochiamata in un click: l\'esperto mostra il gioiello dal vivo e chiude la vendita', icon: '💎' }
    },
    psychologyQuote: 'Il contatto visivo e la voce umana rimuovono tutte le barriere psicologiche dell\'e-commerce tradizionale.',
    solutions: [
      'Piattaforma e-commerce custom con design premium/minimal',
      'Integrazione "Live Video Shopping" (tipo One-to-One)',
      'Sistema di pagamento sicuro per cifre elevate (Bonifico istantaneo, Stripe)',
      'Packaging esperienziale tracciabile con video dell\'imballaggio',
      'Assicurazione spedizione "Valore Dichiarato" integrata'
    ],
    economicBenefits: {
      title: 'Global Sales Reach',
      benefits: [
        'Possibilità di vendere in tutto il mondo senza dipendere dal traffico fisico',
        'Aumento enorme dello scontrino medio online (da €200 a €5.000+)',
        'Migliore gestione del tempo del personale nei momenti di scarso afflusso in negozio',
        'Asset digitale che lavora 24/7'
      ],
      savings: 'Aumento fatturato online: +€50.000 - €200.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Non è un sito, è la tua vetrina nel mondo.',
        'Vendi l\'emozione, non solo l\'oro.',
        'La distanza non è più una scusa per non comprare da te.'
      ],
      scripts: [
        { title: 'Opening', content: 'Sa perché la gente non compra gioielli costosi sul suo sito? Perché ha paura. Se potessero parlarle in video e vedere il riflesso della luce sulla pietra, comprerebbero subito.' }
      ],
      objections: [
        { objection: 'È pericoloso spedire', response: 'Esistono corrieri portavalori specializzati e assicurazioni totali. Il rischio è zero, il potenziale è infinito.' }
      ],
      closingTechniques: ['Dimostrazione streaming HD del laboratorio'],
      pricingStrategy: ['Focus sul ROI tramite espansione geografica'],
      urgencyTriggers: ['I tuoi clienti sono ovunque, non solo in questa via.']
    }
  },
  {
    id: '115',
    name: 'Gestione Magazzino & Valori',
    shortDescription: 'Tracciabilità sicura RFID e inventario istantaneo per gioielli',
    tagline: 'Sicurezza millimetrica, controllo totale.',
    icon: '📦',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    problem: 'Inventari lenti e rischiosi, ammanchi difficili da individuare e mancanza di dati reali sulle rotazioni.',
    stats: [
      { icon: '📡', label: "RFID", value: "Fast", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⏱️', label: "Invent", value: "5 min", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🛡️', label: "Safety", value: "High", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Spunta Manuale', desc: 'Ore passate a contare pezzi con il rischio di errori e furti non visti', icon: '📝' },
      after: { title: 'Scansione Istantanea', desc: 'Un passaggio di lettore e l\'intero magazzino è aggiornato in tempo reale', icon: '⚡' }
    },
    psychologyQuote: 'La pace mentale derivante dal controllo totale permette di concentrarsi sulla vendita e sulla creatività.',
    solutions: [
      'Etichettatura intelligente invisibile o RFID',
      'Sincronizzazione automatica Magazzino / E-commerce / POS',
      'Alert furto o spostamento non autorizzato da vetrina',
      'Analisi dell\'invenduto e suggerimenti per lo smaltimento stock',
      'Report automatico valore di carico per assicurazione'
    ],
    economicBenefits: {
      title: 'Asset Protection',
      benefits: [
        'Eliminazione degli ammanchi di magazzino (furti interni/esterni)',
        'Riduzione drastica del costo del lavoro per l\'inventario',
        'Ottimizzazione del capitale immobilizzato (meno stock fermo)',
        'Maggiore velocità nel servizio al cliente (so subito se c\'è la misura)'
      ],
      savings: 'Risparmio perdite e tempo: €5.000 - €15.000/anno'
    },
    secretSection: {
      killerPhrases: [
        'Smetti di contare, inizia a vendere.',
        'Il tuo magazzino è il tuo caveau, trattalo come tale.',
        'La tecnologia protegge il tuo investimento mentre tu lavori.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanto tempo perde ogni mese a fare l\'inventario? E se potesse farlo in 5 minuti passano un lettore davanti alla cassaforte?' }
      ],
      objections: [
        { objection: 'Le etichette sono brutte', response: 'Usiamo micro-tag quasi invisibili o integrati nel packaging. L\'estetica del lusso è preservata.' }
      ],
      closingTechniques: ['Demo scansione intero vassoio gioielli'],
      pricingStrategy: ['Abbonamento software + costo tag'],
      urgencyTriggers: ['Un inventario impreciso è un invito al furto. Proteggiti oggi.']
    }
  },
  {
    id: '116',
    name: 'Appuntamenti Privati Online',
    shortDescription: 'Prenotazione slot esclusivi in boutique per consulenze preziose',
    tagline: 'Il tempo del tuo cliente è il bene più prezioso.',
    icon: '🗓️',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1543333346-64e4fe1fdeb5?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti che entrano quando il negozio è affollato e non ricevono l\'attenzione necessaria per un acquisto importante.',
    stats: [
      { icon: '⭐', label: "Exclusivity", value: "Top", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⏳', label: "Wait", value: "Zero", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📈', label: "Conv Rate", value: "+50%", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Ingresso Casuale', desc: 'Fila o personale occupato, il cliente scocciato se ne va', icon: '🚪' },
      after: { title: 'Private Experience', desc: 'Accoglienza con nome, caffè e vassoio già preparato sulle sue preferenze', icon: '☕' }
    },
    psychologyQuote: 'L\'esclusività e il trattamento privilegiato giustificano, nella mente del cliente, un prezzo più elevato.',
    solutions: [
      'Modulo di booking web elegante integrato nel sito',
      'Questionario pre-appuntamento (budget, stile, occasione)',
      'Sincronizzazione con calendario staff e Google Calendar',
      'Remind automatico via WhatsApp premium',
      'Possibilità di deposito cauzionale per consulenze di alto livello'
    ],
    economicBenefits: {
      title: 'Efficienza Boutique',
      benefits: [
        'Aumento del tasso di chiusura vendite (chi prenota è deciso)',
        'Gestione ottimale dello staff e della sicurezza',
        'Raccolta dati cliente prima ancora che entri in negozio',
        'Creazione di un\'immagine di alta sartoria del gioiello'
      ],
      savings: 'Aumento fatturato conversioni: +25%'
    },
    secretSection: {
      killerPhrases: [
        'Non è un appuntamento, è l\'inizio di un sogno.',
        'Vendi il tuo tempo come la tua merce: con valore.',
        'L\'ordine è l\'amico del lusso.'
      ],
      scripts: [
        { title: 'Opening', content: 'Le piacerebbe sapere esattamente cosa vuole il cliente prima che varchi la soglia? Con la prenotazione online, prepariamo il vassoio perfetto e chiudiamo prima.' }
      ],
      objections: [
        { objection: 'Sembra troppo formale', response: 'Possiamo chiamarlo "Prenota la tua consulenza creativa". I clienti moderni amano sapere di avere un esperto tutto per loro.' }
      ],
      closingTechniques: ['Offerta drink di benvenuto solo per prenotati'],
      pricingStrategy: ['Focus sul valore del servizio personalizzato'],
      urgencyTriggers: ['Gli slot del sabato si esauriscono in fretta. Non perdere vendite.']
    }
  },
  {
    id: '117',
    name: 'Instagram Marketing per Gioiellerie',
    shortDescription: 'Estetica premium, reels ipnotici e campagne influencer lusso',
    tagline: 'Brilla dove tutti guardano.',
    icon: '📸',
    category: 'Marketing Digitale',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    problem: 'Profilo Instagram trascurato, foto amatoriali che sminuiscono il valore dei gioielli e poca crescita di nuovi fan.',
    stats: [
      { icon: '🤳', label: "Likes", value: "Boost", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '👥', label: "Followers", value: "+10k", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '💎', label: "Inquiry", value: "Daily", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Feed Disordinato', desc: 'Foto scure fatte col telefono che sembrano bigiotteria da mercato', icon: '🌑' },
      after: { title: 'Galleria d\'Arte', desc: 'Video macro dei dettagli, riflessi perfetti e un\'immagine di brand solida', icon: '💍' }
    },
    psychologyQuote: 'I gioielli sono oggetti di status e desiderio; Instagram è il palcoscenico naturale per questa esibizione di bellezza.',
    solutions: [
      'Shooting professionali specifici per Instagram (Macro e Lifestyle)',
      'Strategia di Reels ipnotici (ASMR gioielli, packaging)',
      'Gestione influencer locali e micro-influencer di lusso',
      'Campagne Ads per "Target Interessi" (Matrimoni, Yacht, Orologi)',
      'Automazione risposte ai commenti e messaggi diretti'
    ],
    economicBenefits: {
      title: 'Digital Authority',
      benefits: [
        'Aumento dei contatti diretti (Richieste prezzo via DM)',
        'Crescita della reputazione del brand nel territorio',
        'Costruzione di una community fedele che interagisce h24',
        'Riduzione delle spese in pubblicità cartacea locale'
      ],
      savings: 'Costi agenzia marketing standard: -30% (specializzazione gioielleria)'
    },
    secretSection: {
      killerPhrases: [
        'Se non è su Instagram, non brilla abbastanza.',
        'La bellezza va mostrata, non solo sussurrata.',
        'Il tuo feed deve sembrare una cassaforte aperta.'
      ],
      scripts: [
        { title: 'Opening', content: 'Cosa vede un nuovo cliente quando cerca il suo nome su Instagram? Una gioielleria di lusso o un profilo trascurato? Cambiamo marcia.' }
      ],
      objections: [
        { objection: 'Non abbiamo gioielli da mille foto', response: 'Possiamo mostrare il processo creativo, la cura del cliente, la storia dei materiali. C\'è un mondo da raccontare.' }
      ],
      closingTechniques: ['Piano editoriale dei primi 30 giorni omaggio'],
      pricingStrategy: ['Canone mensile di gestione creativa'],
      urgencyTriggers: ['La gente compra con gli occhi mentre scorre il feed. Sii lì.']
    }
  },
  {
    id: '118',
    name: 'Packaging Digitale & Storytelling',
    shortDescription: 'QR code nella confezione con video della creazione del gioiello',
    tagline: 'Ogni pacchetto nasconde una storia magica.',
    icon: '📦',
    category: 'Digitalizzazione',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
    problem: 'Regali che sembrano "solo oggetti" e non trasmettono il sacrificio e l\'arte che ci sono dietro.',
    stats: [
      { icon: '🎬', label: "Stories", value: "HD", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '🎁', label: "Wow Eff", value: "Max", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🤳', label: "Sharing", value: "Hot", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Scatola Anonima', desc: 'Bellissima scatola che però rimane muta dopo l\'apertura', icon: '📦' },
      after: { title: 'Emozione Parlante', desc: 'L\'ospite inquadra il QR e vede il maestro orafo al lavoro o un video-dedica', icon: '📱' }
    },
    psychologyQuote: 'Conoscere la fatica e la genesi di un oggetto ne aumenta il valore percepito in modo irrazionale e potente.',
    solutions: [
      'Stampa di QR code eleganti su biglietti o fodere delle scatole',
      'Video-montaggi rapidi della lavorazione in laboratorio',
      'Possibilità per chi regala di caricare un video-messaggio segreto',
      'Link diretto per la cura e pulizia del gioiello specifico',
      'Integrazione con la newsletter per cross-selling post-regalo'
    ],
    economicBenefits: {
      title: 'Emotional ROI',
      benefits: [
        'Aumento virale degli "Unboxing video" sui social',
        'Differenziazione unica rispetto alle grandi catene industriali',
        'Fidelizzazione emotiva del destinatario del regalo',
        'Possibilità di tracciare chi riceve il regalo (nuovo lead)'
      ],
      savings: 'Costi marketing tradizionale: Convertiti in valore aggiunto'
    },
    secretSection: {
      killerPhrases: [
        'Dai una voce al tuo oro.',
        'Trasforma un oggetto in un ricordo indimenticabile.',
        'La magia inizia quando si apre la scatola.'
      ],
      scripts: [
        { title: 'Opening', content: 'Cosa succede dopo che vendete un gioiello? Con il packaging digitale, la vendita continua a casa del cliente tramite un\'emozione.' }
      ],
      objections: [
        { objection: 'Il laboratorio non è fotogenico', response: 'Il disordine del laboratorio è la prova del lavoro manuale. I clienti lo amano perché è autentico.' }
      ],
      closingTechniques: ['Esempio di video-dedica per un solitario'],
      pricingStrategy: ['Focus sull\'aumento della brand awareness'],
      urgencyTriggers: ['Natale è alle porte, rendi i tuoi regali speciali.']
    }
  },
  {
    id: '119',
    name: 'Programma Trade-in / Valutazione Usato',
    shortDescription: 'Piattaforma per valutare e permutare vecchio oro e orologi online',
    tagline: 'Il tuo vecchio tesoro è la chiave per il nuovo.',
    icon: '🔄',
    category: 'Analisi Dati',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd4dcd2?auto=format&fit=crop&w=800&q=80',
    problem: 'Clienti con gioielli vecchi che non sanno come liberarsene e preferiscono non entrare in negozio per "vergogna" o timore.',
    stats: [
      { icon: '💰', label: "New Sales", value: "+20%", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '⚖️', label: "Fairness", value: "Dati", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '🏠', label: "Self-eval", value: "Safe", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Cassetto Chiuso', desc: 'Ricchezze inutilizzate che rimangono chiuse perché "non so quanto valgono"', icon: '🗝️' },
      after: { title: 'Potere d\'Acquisto', desc: 'Stima veloce online che diventa un buono sconto per il nuovo acquisto', icon: '🎫' }
    },
    psychologyQuote: 'Il "Trade-in" riduce il senso di colpa per un nuovo acquisto costoso, trasformandolo in una scelta intelligente di permuta.',
    solutions: [
      'Calcolatore online valore oro basato sul FIX giornaliero',
      'Upload foto per pre-valutazione orologi di lusso (Rolex, Omega, ecc)',
      'Generazione automatica di un voucher "valore stimato"',
      'Sistema di appuntamento prioritario per la perizia fisica',
      'Integrazione legale con registro pubblica sicurezza (Antiriciclaggio)'
    ],
    economicBenefits: {
      title: 'Sales Activation',
      benefits: [
        'Nuovo canale per attirare clienti pronti a comprare il nuovo',
        'Acquisizione di merce usata ad alto margine di rivendita',
        'Aumento della fiducia nel "giusto valore" offerto dall\'agenzia',
        'Database di chi possiede beni di valore sul territorio'
      ],
      savings: 'Aumento vendite incrociate: +15-20%'
    },
    secretSection: {
      killerPhrases: [
        'Libera il valore che dorme nel tuo cassetto.',
        'La tua permuta è l\'acconto per il tuo prossimo desiderio.',
        'Non è usato, è capitale pronto all\'uso.'
      ],
      scripts: [
        { title: 'Opening', content: 'Quanti dei suoi clienti hanno oro vecchio fermo? Se gli dessimo un modo facile per valutarlo online e usarlo come acconto per un nuovo orologio?' }
      ],
      objections: [
        { objection: 'Attiriamo gente non in target', response: 'Possiamo filtrare solo sopra certe carature o brand di orologi. Diventa un modo per acquisire collezionisti.' }
      ],
      closingTechniques: ['Audit gratuito degli ultimi 10 trade-in fatti'],
      pricingStrategy: ['Focus sul margine di rivendita dell\'usato'],
      urgencyTriggers: ['Il prezzo dell\'oro è ai massimi. Invita i tuoi clienti a cambiare ora.']
    }
  },
  {
    id: '120',
    name: 'Wi-Fi Marketing in Boutique',
    shortDescription: 'Accesso internet che profila i visitatori del centro commerciale o via',
    tagline: 'Trasforma un passante in un cliente profilato.',
    icon: '📶',
    category: 'Marketing Digitale',
    activityType: 'jewelry',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    problem: 'Molte persone guardano le vetrine o entrano senza acquistare, e l\'agenzia non ha modo di ricontattarle.',
    stats: [
      { icon: '👥', label: "Visitors", value: "Tracked", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
      { icon: '📧', label: "Emails", value: "Daily", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
      { icon: '📱', label: "Ads ret", value: "Hot", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
    ],
    beforeAfter: {
      before: { title: 'Fantasmi', desc: 'Centinaia di persone vedono la vetrina ogni giorno e spariscono nel nulla', icon: '👻' },
      after: { title: 'Lead Digitali', desc: 'Chiunque si fermi vicino al negozio può agganciarsi al Wi-Fi e ricevere un coupon', icon: '📢' }
    },
    psychologyQuote: 'L\'offerta di un servizio gratuito (Wi-Fi) crea un debito di reciprocità che facilita il rilascio dei dati.',
    solutions: [
      'Installazione router ad alto raggio per coprire la zona esterna',
      'Captive Portal con immagini della nuova collezione',
      'Incentivo immediato per il login (es. "Kit pulizia gioielli omaggio")',
      'Retargeting automatico su Facebook/Instagram per chi si è collegato',
      'Analisi del tempo di permanenza davanti alle vetrine'
    ],
    economicBenefits: {
      title: 'Database Localized',
      benefits: [
        'Raccolta di email di persone che frequentano fisicamente la zona',
        'Possibilità di mandare notifiche push quando sono nelle vicinanze',
        'Aumento dei Like sulle pagine social in modo organico',
        'Dati certi sull\'efficacia dell\'allestimento vetrina'
      ],
      savings: 'Costi database esterni: Azzerati'
    },
    secretSection: {
      killerPhrases: [
        'Non farli passare oltre, falli fermare.',
        'Il Wi-Fi è il tuo nuovo buttafuori digitale.',
        'Conosci chi ti guarda, non solo chi ti compra.'
      ],
      scripts: [
        { title: 'Opening', content: 'Sa quante persone guardano le sue vetrine e poi comprano online? Se prendessimo la loro email mentre sono qui fuori, potremmo convincerli a entrare.' }
      ],
      objections: [
        { objection: 'Costa troppo come hardware', response: 'È un piccolo router una tantum. I dati che raccoglie valgono mille volte quella cifra.' }
      ],
      closingTechniques: ['Mappa di calore simulata dei passaggi'],
      pricingStrategy: ['Canone di gestione lead mensile'],
      urgencyTriggers: ['Migliaia di potenziali clienti passano ogni giorno. Inizia a salvarli ora.']
    }
  },
];


// Esportiamo anche i vecchi dati per compatibilità
export const STYLIST_DATA = {
  name: "Consulenza Digitale",
  address: "Servizi IT Professionali",
  rating: 4.9,
  rate: 150.00,
  image: "/images/services/stylist-profile-desktop.webp"
};

export const SERVICES_DATA = CONSULTING_SERVICES.slice(0, 3).map(s => ({
  id: s.id,
  name: s.name,
  duration: 'Consultazione',
  iconType: 'hair' as const
}));

export const LATEST_WORK_DATA = [
  {
    id: '1',
    beforeImage: "/images/services/work-1-before-desktop.webp",
    afterImage: "/images/services/4-desktop.webp"
  },
  {
    id: '2',
    beforeImage: "/images/services/work-2-before-desktop.webp",
    afterImage: "/images/services/1-desktop.webp"
  }
];

export const NEARBY_SALONS = CONSULTING_SERVICES.map((service, index) => ({
  id: service.id,
  name: service.name,
  subtitle: service.shortDescription,
  rating: 4.8 + (index * 0.1),
  image: service.image,
  reviews: 25 + (index * 15)
}));
