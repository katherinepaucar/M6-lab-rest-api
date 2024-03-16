import * as vm from './character-collection.vm';
import * as api from './api/character-collection-api-model';

export const mapCharacterFromApiToVm = (
  character: api.Character
): vm.CharacterVM => ({
  id: (character.id).toString(),
  image: character.image,
  status: character.status,
  name: character.name,
  sentences: character.bestSentences,
});
export const mapInfoPaginationFromApiToVm = (
  info: api.InfoPagination
): vm.paginationData => ({
  next: info.next,
  totalElements: info.count,
  pages: info.pages,
  prev: info.prev,
});

export const mapCharacterCollectionFromApiToVm = (
  characterCollection: api.Character[]
): vm.CharacterVM[] =>
  characterCollection.map((character) => mapCharacterFromApiToVm(character));

export const ResponseFromApiToVm = (
  characterCollection: api.CharacterResponse
): vm.CharacterCollectionVM => ({
  info: mapInfoPaginationFromApiToVm(characterCollection.info),
  results: mapCharacterCollectionFromApiToVm(characterCollection.results),
});
