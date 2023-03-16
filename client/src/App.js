import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Button, Box, Paper } from "@mui/material";
import { useDispatch } from 'react-redux';
import getRequests from './actions/requests';

import Requests from './components/Requests/Requests.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';
import ResponsiveAppBar from "./components/appbar";
import MainPage from "./components/MainPage";

const App = () => {
  //  const [currentId, setCurrentId] = useState(null);
  //  const [openDialog,setOpenDialog] = useState(false);
  // const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getRequests());
  // },[currentId,dispatch]); 

  return (
    // <div style={myStyle}>
      <MainPage />
    // </div>
  );
};

export default App;
