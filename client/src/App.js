import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import {useDispatch} from 'react-redux';
import getRequests from './actions/requests';

import Requests from './components/Requests/Requests.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';

const App = () => {
   const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getRequests());
  },[currentId,dispatch]); 

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          KHOJ
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Requests setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
