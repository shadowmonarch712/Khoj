import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Button, Box } from "@mui/material";
import { useDispatch } from 'react-redux';
import getRequests from '../actions/requests';

import Requests from './Requests/Requests.js';
import Form from './Form/Form.js';
import useStyles from '../styles';
import ResponsiveAppBar from "./appbar";
import AddDialog from "./Form/AddDialog";

const MainPage = () => {
  const [currentId, setCurrentId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const onClickButton = () => {
    setOpenDialog(true)
  }
  const handleAddClose =()=>{
    setCurrentId(null);
    setOpenDialog(false)
  }

  useEffect(() => {
    dispatch(getRequests());
  }, [currentId, dispatch]);
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 2,
        borderRadius: "1rem",
        position: 'relative',
        marginLeft: '5rem',
        marginRight: '5rem',
        marginTop: "2rem",
        marginBottom: "2rem"
      }}>
        <Typography variant="h2" sx={{
          fontWeight: "bold",
          marginTop: 2.5,
          fontSize: "2rem",
          lineHeight: 1.625,
          color: "#abcdd7",
          fontFamily: "Roboto,Helvetica,Arial,sans-serif"
        }}>
          HACKATHONS
        </Typography>
        <Button
          variant='contained'
          color='info'
          size='medium'
          onClick={
            onClickButton
          }
          sx={{
            marginTop: 3, marginBottom: 3, width: '150px', borderRadius: '0.25rem', height: '3rem', backgroundColor: '#0d6efd'
          }}
        >
          + Add
        </Button>
      </Box>
      {openDialog && (<AddDialog openAdd={openDialog} handleAddClose={handleAddClose} currentId={currentId} setCurrentId={setCurrentId} />)}
      <Container maxWidth sx={{marginLeft: "3rem"}}>
      <Requests setCurrentId={setCurrentId} setOpenDialog={setOpenDialog}/>
      </Container>

    </>
  )
}
export default MainPage;