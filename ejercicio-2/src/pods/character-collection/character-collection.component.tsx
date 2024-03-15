import React from 'react';

import * as classes from './character-collection.styles';
import { CharacterVM } from './character-collection.vm';
import { CharacterCard } from './components/character-collection-card.component';
import { Button } from '@mui/material';
interface Props {
  characters: CharacterVM[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
}
export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characters, onEdit, onCreateCharacter } = props;
  return (
    <div className={classes.root}>
      <h2>Rick & Morty List</h2>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
      </Button>

      <ul className={classes.list}>
        {characters && characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
