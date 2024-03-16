export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
  species?: string;
  type?: string;
  origin?: Origin;
  location?: Location;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface InfoPagination {
  count: number;
  next?: string;
  pages?: number;
  prev?: string;
}
export interface CharacterResponse {
  info: InfoPagination;
  results: Character[];
}
