import { Lookup } from 'common/models/lookup';
import { CharacterDetail } from './character-api-model';
import axios from 'axios';

const characterListUrl = '/api/charactersCollection';
export const getCharacterDetail = async (
  id: string
): Promise<CharacterDetail> => {
  const response = await axios.get(`${characterListUrl}/${id}`)
  return response.data
};
export const getStatus = async (): Promise<Lookup[]> => {
  const response = await  axios.get('api/status')
  return response.data;
};
export const getGender = async (): Promise<Lookup[]> => {
  const response = await  axios.get('api/gender')
  return response.data;};

export const saveCharacter = async (
  character: CharacterDetail
): Promise<boolean> => {
  if (character.id) {
    await axios.put<CharacterDetail>(
      `${characterListUrl}/${character.id}`,
      character
    );
  } else {
    await axios.post<CharacterDetail>(characterListUrl, character);
  }
  return true;
};
