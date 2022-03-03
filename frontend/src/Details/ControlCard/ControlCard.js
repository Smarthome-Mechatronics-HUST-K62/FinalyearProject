import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FlashlightOff } from '@mui/icons-material';
import { FlashlightOn } from '@mui/icons-material';
import { requirePropFactory, Switch } from '@mui/material';
import livingroom from '../../images/livingroom.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function MediaControlCard() {
    const theme = useTheme();
  
    return (
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Kich ban nha co khach
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Living Room
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex' ,alignItems: 'center', pl: 1, pb: 1 }}>
            <FlashlightOff />
            <FlashlightOn />
            <div>
                <p>Script 1</p>
                <Switch />
            </div>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={require('../../images/livingroom.png')}
          alt="Test"
        />
        <FontAwesomeIcon icon="fa-solid fa-couch" />
      </Card>
    );
}
  