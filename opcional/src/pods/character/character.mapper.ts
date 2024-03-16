import * as api from './api/character-api-model';
import * as vm from './character.vm';

export const mapCharacterFromApiToVm = (
  character: api.CharacterDetail
): vm.Character => ({
  gender: character.gender,
  image: character.image,
  name: character.name,
  status: character.status,
  id: character.id.toString()
});

export const mapCharacterFromVMtoApi = (
  character: vm.Character
): api.CharacterDetail =>
  ({
    ...character,
    gender: character.gender,
    image: character.image,
    name: character.name,
    status: character.status,
    id: character.id,
  } as unknown as api.CharacterDetail);
