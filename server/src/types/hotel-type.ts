export type Hotel = {
  city: City;
  preview_image: string;
  images: string[];
  title: string;
  is_favorite: boolean;
  is_premium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  max_adults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  id: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Host = {
  id: number;
  name: string;
  is_pro: boolean;
  avatar_url: string;
};

