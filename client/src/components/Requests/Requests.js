import React from "react";
import Request from "./Request/Request";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

const Requests = ({ setCurrentId }) => {
  const requests = useSelector((state) => state.requests);
  const classes = useStyles();

  return (
    // !Request.length ? (
    //   <CircularProgress />
    // ) : (
    //   <Grid className={classes.container} container spacing={3}>
    //     {requests.map((request, i) => {
    //       return (
    //         <React.Fragment key={request._id}>
    //           <Grid key={i} item xs={12} sm={6}>
    //             <Request
    //               request={request}
    //               setCurrentId={setCurrentId}
    //             />
    //           </Grid>
    //           ;
    //         </React.Fragment>
    //       );
    //     })}
    //   </Grid>
    // )
    !requests.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {requests.map((request) => (
          <Grid key={request._id} item xs={12} sm={6} md={6}>
            <Request request={request} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Requests;
