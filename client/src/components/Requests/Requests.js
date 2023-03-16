import React from "react";
import Request from "./Request/Request";
import useStyles from "./styles";
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Box } from "@mui/material";
import RecipeReviewCard from "./Request/card";

const Requests = ({ setCurrentId, setOpenDialog }) => {
  const requests = useSelector((state) => state.requests);
  const classes = useStyles();
  console.log(requests)
  return (
    !Request.length ? <CircularProgress /> : (
      <div>
        <Grid container spacing={1} xs={12}>
          {
            requests.map((request) => (
              <Grid item md={3} sx={{marginBottom: "1rem"}}>
                <RecipeReviewCard request={request} setCurrentId={setCurrentId} setOpenDialog={setOpenDialog} />
              </Grid>

            ))
          }
        </Grid>
      </div>
    )
  );
};

export default Requests;
