export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};

type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  id: number;
};

export type OfferServer = {
  city: City;
  preview_image?: string;
  images: string[];
  title: string;
  is_favorite?: boolean;
  is_premium?: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  max_adults?: number;
  price: number;
  goods: string[];
  host: {
    id: number;
    name: string;
    is_pro?: boolean;
    avatar_url?: string;
  };
  description: string;
  location: Location;
  id: number;
};


export type Offers = Offer[];
