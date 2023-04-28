import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";




export const NovTovar = () => {
  

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
        <Typography  variant="h5">
                Название:
            </Typography>
            <TextField  label="" fullWidth />
            <Typography  variant="h5">
                Изображение:
            </Typography>
            <TextField  label="" fullWidth />
            <Typography  variant="h5">
                Стоимость:
            </Typography>
            <TextField  label="" fullWidth />
            <Typography  variant="h5">
                Описание:
            </Typography>
            <TextField  label="" fullWidth />
            <Typography  variant="h5">
                Категория:
            </Typography>
            <TextField  label="" fullWidth />
            <Typography  variant="h5">
                Количество:
            </Typography>
            <TextField  label="" fullWidth />
            <Button>
                Сохранить
            </Button>
        </Grid>
      </Grid>
    </>
  ); 
};