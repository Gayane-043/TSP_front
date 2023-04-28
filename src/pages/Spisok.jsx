import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Instrument } from '../components/Instrument';


export const Spisok = () => {
  

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
            < Instrument 
                  id={"1234"}
                  fullName={"Гитара"}
                  createdAt={"6 апреля 2023"}
                  category={"Струнные инструменты"}
                  quality={15}
                  price={6000}
                  description={"Профессиональная гитара"}
                  isEditable
            />
            < Instrument 
                  id={"5678"}
                  fullName={"Скрипка"}
                  createdAt={"4 марта 2023"}
                  category={"Струнные инструменты"}
                  quality={30}
                  price={8000}
                  description={"Профессиональная скрипка"}
                  isEditable
            />
            < Instrument 
                  id={"9101112"}
                  fullName={"Барабан"}
                  createdAt={"12 января 2023"}
                  category={"Ударные инструменты"}
                  quality={25}
                  price={12000}
                  description={"Бочка для барабанной установки"}
                  isEditable
            />
            <Typography  variant="h5">
                Стоимость:
            </Typography>
            <Button>
                Заказать
            </Button>
        </Grid>
      </Grid>
    </>
  ); 
};