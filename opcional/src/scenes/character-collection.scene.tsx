import * as React from 'react';
import { AppLayout } from 'layouts';
import { CharacterColletionContainer } from 'pods/character-collection/character-collection.container';
export const CharacterCollectionScene = () => {
  return (
    <AppLayout>
      <CharacterColletionContainer />
    </AppLayout>
  );
};
