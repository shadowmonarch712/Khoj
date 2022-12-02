import React, { useState, useEffect } from "react";
import { Container,Grow, Grid, Paper, AppBar, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
// import getRequests from "../../actions/requests";
import Requests from "../Requests/Requests";
import Form from "../Form/Form";
import Pagination from "../Pagination";
import { ClassNames } from "@emotion/react";
import {useNavigate, useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input'; 
import useStyles from './styles';
import { getRequestsBySearch, getRequests } from "../../actions/requests";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  // const query = useQuery();
  // const navigate = useNavigate();
  // const page = query.get('page') || 1;
  // const searchQuery = query.get('searchQuery');

  // useEffect(() => {
  //   dispatch(getRequests());
  // }, [currentId, dispatch]);

  // return (
  //   <Grow in>
  //     <Container>
  //       <Grid
  //         container
  //         justify="space-between"
  //         alignItems="stretch"
  //         spacing={3}
  //       >
  //         <Grid item xs={12} sm={7}>
  //           <Requests setCurrentId={setCurrentId} />
  //         </Grid>
  //         <Grid item xs={12} sm={4}>
  //           <Form currentId={currentId} setCurrentId={setCurrentId} />
  //           <Paper elevation={6}>
  //               <Pagination/>
  //           </Paper>
  //         </Grid>
  //       </Grid>
  //     </Container>
  //   </Grow>
  // );

  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getRequestsBySearch({ search, tags: tags.join(',') }));
      navigate(`/requests/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
      // navigate.push(`/requests/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
      // navigate.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Requests setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
