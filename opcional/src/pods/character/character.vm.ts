export interface Character {
    id: string;
    name: string;
    status: string;
    image: string;
    gender: string;
    sentences: string;
}

  export const createEmptyCharacter = (): Character => ({
    id: '',
    name: '',
    status: '',
    image: '',
    gender: '',
    sentences: ''
  });
  