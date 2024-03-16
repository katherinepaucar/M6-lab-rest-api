import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import * as classes from './character-card.styles';
import { CharacterVM } from '../character-collection.vm';

interface Props {
  character: CharacterVM;
  onShow: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onShow } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.id}</Avatar>}
        title={character.name}
        subheader={character.status}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.status}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onShow(character.id)}>
          <VisibilityOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
