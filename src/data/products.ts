export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'colliers' | 'bracelets' | 'accessoires';
  description: string;
  material: string;
  featured?: boolean;
}

export const products: Product[] = [
  // Colliers
  {
    id: 'collier-1',
    name: 'Collier Élégance en argent 925',
    price: 299,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/5.jpg',
    category: 'colliers',
    description: 'Un collier parfait pour toutes les occasions.',
    material: 'argent 925',
    featured: true,
  },
  {
    id: 'collier-2',
    name: 'Collier Prestige',
    price: 459,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/6.jpg',
    category: 'colliers',
    description: 'Collier de luxe.',
    material: 'argent 925',
    featured: true,
  },
  {
    id: 'collier-3',
    name: 'Collier Moderne',
    price: 329,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/12.jpg',
    category: 'colliers',
    description: 'Design contemporain pour un style moderne et sophistiqué.',
    material: 'Or 18 carats',
  },
  {
    id: 'collier-4',
    name: 'Collier Classique',
    price: 279,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/13.jpg',
    category: 'colliers',
    description: 'Un classique intemporel qui s\'adapte à tous les styles.',
    material: 'Or 18 carats',
  },
  {
    id: 'collier-5',
    name: 'Collier Sophistiqué',
    price: 389,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/14.jpg',
    category: 'colliers',
    description: 'Sophistication et raffinement dans un design unique.',
    material: 'Or 18 carats',
  },
  {
    id: 'collier-7',
    name: 'Collier Délicat',
    price: 249,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/2.jpg',
    category: 'colliers',
    description: 'Finesse et délicatesse pour un port quotidien.',
    material: 'Or 18 carats',
  },
  {
    id: 'collier-8',
    name: 'Collier Tendance',
    price: 359,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/3.jpg',
    category: 'colliers',
    description: 'Suivez la tendance avec ce collier au design actuel.',
    material: 'Or 18 carats',
  },
  {
    id: 'collier-9',
    name: 'Collier Chic',
    price: 299,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/4.jpg',
    category: 'colliers',
    description: 'Chic et élégant, parfait pour les soirées spéciales.',
    material: 'Or 18 carats',
  },
  {
    id: 'collier-12',
    name: 'Collier Précieux',
    price: 489,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/7.jpg',
    category: 'colliers',
    description: 'Un bijou précieux pour les moments précieux.',
    material: 'Or 18 carats',
  },
  {
    id: 'collier-13',
    name: 'Collier Glamour',
    price: 349,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/8.jpg',
    category: 'colliers',
    description: 'Glamour et sophistication pour briller en société.',
    material: 'Or 18 carats',
  },
  {
    id: 'collier-14',
    name: 'Collier Distinction',
    price: 399,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/collier/9.jpg',
    category: 'colliers',
    description: 'La distinction à l\'état pur dans ce collier remarquable.',
    material: 'Or 18 carats',
  },

  // Bracelets
  {
    id: 'bracelet-1',
    name: 'Bracelet Élégance',
    price: 189,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/bracelet/1.jpg',
    category: 'bracelets',
    description: 'Bracelet élégant en or, parfait complément à votre style.',
    material: 'Or 18 carats',
    featured: true,
  },

  // Accessoires
  {
    id: 'bague-1',
    name: 'Bague Royale',
    price: 259,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/bague/11.jpg',
    category: 'accessoires',
    description: 'Une bague digne de la royauté, finement ciselée.',
    material: 'Or 18 carats',
    featured: true,
  },
  {
    id: 'porte-cle-1',
    name: 'Porte-clés Luxe',
    price: 89,
    image: 'https://tbzihjehnzyqqvcobkfc.supabase.co/storage/v1/object/public/goldentouch-images/porte_cle/1.png',
    category: 'accessoires',
    description: 'Porte-clés de luxe pour vos clés les plus précieuses.',
    material: 'Métal doré',
  },
];