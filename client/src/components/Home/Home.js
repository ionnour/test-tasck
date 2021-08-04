import React, { useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
//import { useDispatch } from 'react-redux';
//import { useHistory, useLocation } from 'react-router-dom';

import useStyles from './style';

const Home = () => {
  const classes = useStyles();

  //const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();

  //const history = useHistory();

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <h1>Home</h1>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;