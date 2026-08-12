export interface Breed {
  id: string;
  name: string;
  popularName?: string;
  description: string;
  temperament: string[];
  size: string;
  image: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  date?: string;
  comment: string;
  avatarBg: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    cityState: string;
    cep: string;
    full: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  hours: string;
  rating: number;
  reviewCount: number;
  social: {
    instagram: string;
    instagramUrl: string;
    facebook: string;
    facebookUrl: string;
  };
}
