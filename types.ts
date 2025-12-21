// Servizi di consulenza informatica
export interface ConsultingService {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
  category: string; // Categoria tecnica (Digitalizzazione, E-commerce, etc.)
  activityType: string; // Tipo di attività (Beach/Chalet, Ristoranti, Hotel, etc.)
  image: string;
  alt?: string; // Descrizione accessibile dell'immagine
  problem: string; // Problema che risolve
  tagline?: string; // Tagline d'impatto (es. "Digitale. Igienico. Redditizio.")
  stats?: {
    icon: string;
    label: string;
    value: string;
    color: string;
    text: string;
  }[];
  beforeAfter?: {
    before: { title: string; desc: string; icon: string };
    after: { title: string; desc: string; icon: string };
  };
  psychologyQuote?: string; // Citazione psicologica finale
  solutions: string[]; // Array di soluzioni
  economicBenefits: {
    title: string;
    benefits: string[];
    savings?: string;
  };
  target?: string; // A chi parlare
  kpi?: string; // Metrica di successo
  secretSection?: SecretSectionContent; // Sezione segreta per vendita
}

export interface ActivityCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface SecretSectionContent {
  killerPhrases: string[];
  scripts: {
    title: string;
    content: string;
  }[];
  objections: {
    objection: string;
    response: string;
  }[];
  closingTechniques: string[];
  pricingStrategy: string[];
  urgencyTriggers: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface ActivityCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// Manteniamo i vecchi tipi per compatibilità se necessario
export interface Service {
  id: string;
  name: string;
  duration: string;
  iconType: 'hair' | 'beard' | 'massage';
}

export interface LatestWorkItem {
  id: string;
  beforeImage: string;
  afterImage: string;
}

export interface Stylist {
  name: string;
  address: string;
  rating: number;
  rate: number;
  image: string;
}

export interface Salon {
  id: string;
  name: string;
  subtitle: string;
  rating: number;
  image: string;
  reviews: number;
}