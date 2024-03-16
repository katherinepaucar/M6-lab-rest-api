import { AppLayout } from 'layouts';
import { CharacterContainer } from 'pods/character/character.container';
import React from 'react';
export const CharacterScene: React.FC = () => {
  return (
    <AppLayout>
      <CharacterContainer />
    </AppLayout>
  );
};
