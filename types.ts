
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  calories?: string;
  category: string;
  isVeg?: boolean;
  isPopular?: boolean;
}

export interface AtmosphereImage {
  url: string;
  title: string;
  alt: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapsUrl: string;
  orderUrl: string;
}
