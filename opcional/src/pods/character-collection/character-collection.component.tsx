import React from 'react';

import * as classes from './character-collection.styles';
import { CharacterVM } from './character-collection.vm';
import { CharacterCard } from './components/character-collection-card.component';
import { Button } from '@mui/material';
interface Props {
  characters: CharacterVM[];
  onShow: (id: string) => void;
}
export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characters, onShow } = props;
  return (
    <div className={classes.root}>
      <h2>Rick & Morty List</h2>

      <ul className={classes.list}>
        {characters && characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onShow={onShow} />
          </li>
        ))}
      </ul>
    </div>
  );
};
