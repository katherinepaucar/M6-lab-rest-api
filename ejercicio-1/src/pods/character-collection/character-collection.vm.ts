export interface CharacterVM {
  id: string;
  name: string;
  status: string;
  image: string;
}
export interface paginationData {
  totalElements: number;
  next: string;
  pages: number;
  prev: string;
}

export interface CharacterCollectionVM {
  info: paginationData;
  results: CharacterVM[];
}
