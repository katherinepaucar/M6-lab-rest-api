import axios from 'axios';
import { Character } from './character-collection-api-model';
const characterUrl = '/api/charactersCollection';
export const getCharacterCollection = async (): Promise<Character[]> => {
  const { data } = await axios.get(characterUrl);
  return data;
};
