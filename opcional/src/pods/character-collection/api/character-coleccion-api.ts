import axios from 'axios';
import { CharacterResponse } from './character-collection-api-model';
const url = 'https://rickandmortyapi.com/api/character';
export const getCharacterCollection = async (): Promise<CharacterResponse> => {
  const { data } = await axios.get(url);
  return data;
};
