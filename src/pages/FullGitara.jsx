import React from "react";
import Button from "@mui/material/Button";



import { Instrument } from "../components/Instrument";


export const FullGitara = () => {
 

  return (
    <>
      <Instrument
        fullName={"Гитара"}
        createdAt={"6 апреля"}
        category={"Струнные инструменты"}
        quality={15}
        price={6000}
        description={"Профессиональная гитара"}
        isFullInstrument
      />
      <Button>
        Добавить в корзину
      </Button>
    </>
  ); 
};