import { CharacterDetail } from './character-api-model';
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character/';
export const getCharacterDetail = async (
  id: string
): Promise<CharacterDetail> => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};
