import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  Fab,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteRequest } from "../../../actions/requests";
import useStyles from "./styles";

const Request = ({ request, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("profile"));

  const openRequest = () => navigate(`/requests/${request._id}`);
  // const openRequest = () => navigate.push(`/requests/${request._id}`);
  return (
    // <React.Fragment  >

    <Card className={classes.card} raised elevation={6}>
      {/* <ButtonBase className={classes.cardAction} onclick={openRequest}> */}
      {/* <Fab
        color="secondary"
        aria-label="add"
        size="small"
        onClick={openRequest}
      >
      </Fab> */}
      <CardMedia
        className={classes.media}
        // image={
        //   request.selectedFile ||
        //   "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        // }
        title={request.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{request.name}</Typography>
        <Typography variant="body2">
          {moment(request.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.id === request?.creator) && (
        <div className={classes.overlay2}>
          <Button
            onClick={() => setCurrentId(request._id)}
            style={{ color: "white" }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{request.tags.map((tag) => `#${tag} `)}</Typography>
        {/* <Typography variant="body2" color="textSecondary" component="h2">
          {request.tags}
        </Typography> */}
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {request.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {request.message}
        </Typography>
      </CardContent>
      {/* </ButtonBase> */}
      <CardActions className={classes.cardActions}>
        {user?.result?.id === request?.creator && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deleteRequest(request._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
        <Button
          size="small"
          color="secondary"
          onClick={openRequest}
        >
          <NorthEastIcon fontSize="small" /> View
        </Button>
      </CardActions>
    </Card>
    // </React.Fragment>
  );
};

export default Request;
