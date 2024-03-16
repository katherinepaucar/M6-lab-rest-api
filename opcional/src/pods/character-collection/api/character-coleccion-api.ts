import { GraphQLClient, gql } from 'graphql-request';
import { CharacterResponse } from './character-collection-api-model';
const url = 'https://rickandmortyapi.com/graphql';
export const graphQLClient = new GraphQLClient(url);
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
