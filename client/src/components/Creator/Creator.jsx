import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Request from '../Requests/Request/Request';
import { getRequestsByCreator } from '../../actions/requests';

const Creator = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { requests, isLoading } = useSelector((state) => state.requests);

  useEffect(() => {
    dispatch(getRequestsByCreator(name));
  }, []);

  if (!requests.length && !isLoading) return 'No requests';

  return (
    <div>
      <Typography variant="h2">{name}</Typography>
      <Divider style={{ margin: '20px 0 50px 0' }} />
      {isLoading ? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
          {requests?.map((request) => (
            <Grid key={request._id} item xs={12} sm={12} md={6} lg={3}>
              <Request request={request} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Creator;