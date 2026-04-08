export const ROUTE_PATHS = {
  HOME: '/',
  PRODUCTS: '/products',
  INDUSTRIES: '/industries',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export interface Product {
  id: string;
  name: string;
  category: 'pp-band' | 'pe-tape' | 'polyester-band' | 'hand-roll' | 'printed-band' | 'conductive-band';
  description: string;
  specifications: {
    width?: string;
    thickness?: string;
    length?: string;
    tensile?: string;
    color?: string;
  };
  applications: string[];
  image: string;
  features: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  applications: string[];
  benefits: string[];
  image: string;
}

export interface CompanyInfo {
  name: string;
  established: number;
  ceo: string;
  address: string;
  phone: string;
  email: string;
  certifications: string[];
  values: string[];
  mission: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'KIC Corporation',
  established: 1973,
  ceo: 'Shin Chung-sik',
  address: '15, Hwanggeum-ro 273beon-gil, Yangchon-eup, Gimpo-si, Gyeonggi-do, South Korea',
  phone: '+82-31-998-1740',
  email: 'sales@powerband.co.kr',
  certifications: ['ISO 9001', 'RoHS'],
  values: [
    'Quality Excellence',
    'Customer Trust',
    'Environmental Responsibility',
    'Innovation',
    'Global Partnership',
  ],
  mission: 'To provide world-class strapping solutions that secure and protect products across industries, backed by 50+ years of manufacturing excellence and commitment to quality.',
};

export const PRODUCT_CATEGORIES = [
  { id: 'pp-band', name: 'PP Band', description: 'Polypropylene strapping for general packaging' },
  { id: 'pe-tape', name: 'PE Tying Tape', description: 'Polyethylene tape for bundling and tying' },
  { id: 'polyester-band', name: 'Polyester Band', description: 'High-strength polyester strapping' },
  { id: 'hand-roll', name: 'Hand Roll', description: 'Manual application strapping solutions' },
  { id: 'printed-band', name: 'Printed Band', description: 'Custom printed strapping for branding' },
  { id: 'conductive-band', name: 'Conductive Band', description: 'Anti-static strapping for electronics' },
] as const;

export const CONTACT_INFO = {
  email: COMPANY_INFO.email,
  phone: COMPANY_INFO.phone,
  address: COMPANY_INFO.address,
  businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM KST',
  languages: ['English', 'Korean', 'Chinese', 'Japanese', 'German', 'Spanish', 'French', 'Italian'],
} as const;

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\s/g, '');
};

export const getProductsByCategory = (products: Product[], category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
