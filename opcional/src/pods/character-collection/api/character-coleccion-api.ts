import { gql } from 'graphql-request';
import { CharacterResponse } from './character-collection-api-model';
import { graphQLClient } from 'core/api';

interface getCharacterColletionResponse {
  characters: CharacterResponse;
}
export const getCharacterCollection = async (): Promise<CharacterResponse> => {
  const query = gql`
    query {
      characters(page: 1) {
        info {
          count
        }
        results {
          name
          image
          status
          gender
          id
        }
      }
    }
  `;
  const {characters} = await graphQLClient.request<getCharacterColletionResponse>(query);
  return characters;
};
