export interface Currency {
  name: string;
  symbol: string;
}

export interface Currencies {
  [currencyCode: string]: Currency;
}

export interface Languages {
  [language: string]: string;
}

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { official: string; common: string }>;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, { name: string; symbol: string }>;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: Record<string, string>;
  translations: Record<string, { official: string; common: string }>;
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: Record<string, unknown>;
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
}

export interface Quiz {
  title: string;
  quiz_id: string;
  thumbnail: string;
  description: string;
  number_of_questions: number;
  tags: string[];
  difficulty_level: number;
  average_rating: number;
  date_created: Date | string;
  view_count: number;
  author: string;
  is_published: boolean;
  time_to_complete: number;
  category: string;
  language: string;
}
