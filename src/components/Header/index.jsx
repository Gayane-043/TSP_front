import React from 'react';


import styles from './Header.module.scss';
import Container from '@mui/material/Container';

export const Header = () => {
  const isAuth = false;
  
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <div className={styles.logo}>
            <div>Симфония</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
