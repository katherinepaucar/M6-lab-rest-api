import React, { useEffect } from 'react';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
export const CharacterColletionContainer: React.FunctionComponent = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();

  useEffect(() => {
    loadCharacterCollection();
  }, []);
  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };
  const handleshow = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };
  return (
    <CharacterCollectionComponent
      characters={characterCollection}
      onShow={handleshow}
    />
  );
};
