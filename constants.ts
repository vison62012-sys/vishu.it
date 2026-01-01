import { ACTIVITY_CATEGORIES } from './data/activities';
import { CONSULTING_SERVICES } from './data/services';
import { TECH_CATEGORIES, WELCOME_MESSAGES, STYLIST_DATA, LATEST_WORK_DATA } from './data/ui_data';

export { ACTIVITY_CATEGORIES, CONSULTING_SERVICES, TECH_CATEGORIES, WELCOME_MESSAGES, STYLIST_DATA, LATEST_WORK_DATA };

// Derived constants
export const SERVICES_DATA = CONSULTING_SERVICES.slice(0, 3).map(s => ({
    id: s.id,
    name: s.name,
    duration: 'Consultazione',
    iconType: 'hair' as const
}));

export const NEARBY_SALONS = CONSULTING_SERVICES.map((service, index) => ({
    id: service.id,
    name: service.name,
    subtitle: service.shortDescription,
    rating: 4.8 + (index * 0.1),
    image: service.image,
    reviews: 25 + (index * 15)
}));
