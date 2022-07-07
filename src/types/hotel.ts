type Location = {
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
  is_pro?: boolean;
  avatar_url?: string;
};

export type Hotel = {
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
  host: Host;
  description: string;
  location: Location;
  id: number;
};
