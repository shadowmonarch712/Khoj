import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import CommentSection from './CommentSection';

import { getRequest, getRequestsBySearch } from '../../actions/requests';
import useStyles from './styles';

const RequestDetails = () => {

  console.log("RequestDetails");
  const { request, requests, isLoading } = useSelector((state) => state.requests);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRequest(id));
  }, [id]);

  useEffect(() => {
    if (request) {
      dispatch(getRequestsBySearch({ search: 'none', tags: request?.tags.join(',') }));
    }
  }, [request]);

  if (!request) return null;

  const openRequest = (_id) => navigate(`/requests/${_id}`);
  // const openRequest = (_id) => navigate.push(`/requests/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedRequests = requests.filter(({ _id }) => _id !== request._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{request.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{request.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{request.message}</Typography>
          <Typography variant="h6">Created by: {request.name}</Typography>
          <Typography variant="body1">{moment(request.createdAt).fromNow()}</Typography>
          <CommentSection request={request}/>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        {/* <div className={classes.imageSection}>
          <img className={classes.media} src={request.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={request.title} />
        </div> */}
      </div>
      {!recommendedRequests.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedRequests}>
            {recommendedRequests.map(({ title, name, message, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openRequest(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                {/* <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography> */}
                {/* <img src={selectedFile} width="200px" /> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default RequestDetails;