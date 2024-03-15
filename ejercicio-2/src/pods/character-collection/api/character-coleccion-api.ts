import axios from 'axios';
import { CharacterCollection } from './character-collection-api-model';
// const url = 'https://rickandmortyapi.com/api/character';
const characterUrl = '/api/charactersCollection';
export const getCharacterCollection = async (): Promise<CharacterCollection> => {
  const { data } = await axios.get(characterUrl);
  return data;
};
