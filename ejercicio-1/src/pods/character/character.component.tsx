import { Button } from '@mui/material';
import React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Formik, Form } from 'formik';
import { SelectComponent, TextFieldComponent } from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from 'pods/character-collection/character.validations';
interface Props {
  character: Character;
  status: Lookup[];
  gender: Lookup[];
  onSave: (character: Character) => void;
}
export const CharacterComponent: React.FC<Props> = (props) => {
  const { character, onSave, status, gender } = props;
  const showFieldImage = false;
  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
         { showFieldImage && <TextFieldComponent name="image" label="Imagen"/>}
          { status && <SelectComponent name="status" label="Status" items={status} />}
          { gender && <SelectComponent name="gender" label="Gender" items={gender} />}
          <TextFieldComponent name="sentences" label="sentence" />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
