import { Category } from '../types';

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

export const STYLIST_DATA = {
  name: "Consulenza Digitale",
  address: "Servizi IT Professionali",
  rating: 4.9,
  rate: 150.00,
  image: "/images/services/stylist-profile-desktop.webp"
};

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
