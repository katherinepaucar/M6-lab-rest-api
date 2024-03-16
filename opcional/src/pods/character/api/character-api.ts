import { gql } from 'graphql-request';
import { CharacterDetail } from './character-api-model';
import { graphQLClient } from 'core/api';

interface getCharacterResponse {
  character: CharacterDetail;
}
export const getCharacterDetail = async (
  id: string
): Promise<CharacterDetail> => {
  const query = gql`
 query{
    character(id: "${id}") {
      name,
      image,
      status,
      gender,
      id
    
  }
}
 `;
  const { character } = await graphQLClient.request<getCharacterResponse>(
    query
  );
  return character;
};
