import React, { useEffect, useState } from 'react';
import { CharacterComponent } from './character.component';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacterDetail, getGender, getStatus, saveCharacter } from './api';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVMtoApi,
} from './character.mapper';
import { Character, createEmptyCharacter } from './character.vm';
import { Lookup } from 'common/models';
export const CharacterContainer: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character>(createEmptyCharacter);
  const [status, setStatus] = useState<Lookup[]>(null);
  const [gender, setGender] = useState<Lookup[]>(null);
  const handleLoadStatusCollection = async () => {
    const data = await getStatus();
    setStatus(data);
  };
  const handleLoadGenderCollection = async () => {
    const data = await getGender();
    setGender(data);
  };
  const loadCharacter = async () => {
    const apiCharacter = await getCharacterDetail(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };
  useEffect(() => {
    if (id) {
      loadCharacter();
    }
    handleLoadGenderCollection();
    handleLoadStatusCollection();
  }, []);
  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVMtoApi(character);
    const success = await saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save Character');
    }
  };

  return (
    <CharacterComponent
      character={character}
      onSave={handleSave}
      status={status}
      gender={gender}
    />
  );
};
