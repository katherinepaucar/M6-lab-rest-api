import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  CharacterCollectionScene,
} from 'scenes';
import { CharacterScene } from 'scenes/character-scene';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.character} element={<CharacterScene />} />
        <Route path={switchRoutes.createCharacter} element={<CharacterScene />} />
        <Route path={switchRoutes.editCharacter} element={<CharacterScene />} />
      </Routes>
    </HashRouter>
  );
};
