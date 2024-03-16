import * as React from 'react';
import { getCharacterCollection } from './api/character-coleccion-api';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mappers';
import { CharacterVM } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] =
    React.useState<CharacterVM[]>(null);
  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) => {
      const response = mapCharacterCollectionFromApiToVm(result)
      setCharacterCollection(response);
    });
  };
  return { characterCollection, loadCharacterCollection };
};
