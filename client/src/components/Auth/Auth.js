import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import AppBlockingIcon from '@mui/icons-material/LockOutlined';

import useStyles from "./styles";
const Auth = () => {
  const classes = useStyles();
  const isSignup = false;
  return (
    <Container>
      <Paper ClassName={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form></form>
      </Paper>
    </Container>
  );
};

export default Auth;
