import React, { useEffect, useState } from 'react';
import { CharacterComponent } from './character.component';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacterDetail } from './api';
import {
  mapCharacterFromApiToVm,
} from './character.mapper';
import { Character, createEmptyCharacter } from './character.vm';
export const CharacterContainer: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character>(createEmptyCharacter);

  const loadCharacter = async () => {
    const apiCharacter = await getCharacterDetail(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };
  useEffect(() => {
    if (id) {
      loadCharacter();
    }
  }, []);
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <CharacterComponent
      character={character}
      close={handleClose}
    />
  );
};
