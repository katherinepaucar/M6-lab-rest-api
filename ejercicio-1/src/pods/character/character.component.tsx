import { Button } from '@mui/material';
import React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { formValidation } from 'pods/character-collection/character.validations';
interface Props {
  character: Character;
  close: () => void;
}
export const CharacterComponent: React.FC<Props> = (props) => {
  const { character, close } = props;
  const showFieldImage = false;
  return (
    <Formik
      onSubmit={close}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="name"
            label="Name"
            InputProps={{
              readOnly: true,
            }}
          />
          {showFieldImage && <TextFieldComponent name="image" label="Imagen" />}
          <TextFieldComponent
            name="status"
            label="Status"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextFieldComponent
            name="gender"
            label="Gender"
            InputProps={{
              readOnly: true,
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Cerrar
          </Button>
        </Form>
      )}
    </Formik>
  );
};
