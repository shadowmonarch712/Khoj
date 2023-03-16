import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import {deleteRequest } from '../../../actions/requests';
import hackathonImage from '../../../image/hackathon.jpg';
import { padding } from '@mui/system';

export default function RecipeReviewCard({ request, setCurrentId, setOpenDialog }) {
  const editAction = () => {
    setCurrentId(request._id);
    setOpenDialog(true);
  }
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345, borderRadius: "15px", backgroundColor: "#abcdd7", padding: "3px"}}>
      <CardHeader
        action={
          <IconButton aria-label="edit"
            onClick={
              editAction
            }>
            <EditIcon />
          </IconButton>
        }
        title={request.title}
        subheader={moment(request.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={hackathonImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {request.message}
        </Typography>
        <Typography variant="body2" color="text.Secondary" component="h2">{request.tags.map((tag) => `#${tag} `)}</Typography>
        <Typography variant="body2" color="text.secondary">
          {request.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => dispatch(deleteRequest(request._id))}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card >
  );
}