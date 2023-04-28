import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./Log.module.scss";

export const Log = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт менеджера
      </Typography>
      <TextField
        className={styles.field}
        label="Имя"
        error
        //helperText="Неверно указано имя"
        fullWidth
      />
      <TextField className={styles.field} label="Пароль" fullWidth />
      <Button className={styles.field1} size="large" variant="contained" fullWidth>
        Войти
      </Button>
    </Paper>
  );
};
