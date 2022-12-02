// import React from 'react'
// import { Pagination, PaginationItem } from '@mui/material';
// import useStyles from './styles';
// import {Link} from 'react-router-dom';

// const Paginate = () => {
//   const classes = useStyles();
//   return(<Pagination
//         classes={{ul: classes.ul}}
//         count= {5}
//         page={1}
//         variant="outlined"
//         color='primary'
//         renderItem={(item)=>(
//             <PaginationItem {...item} component={Link} to={`/requests?page=${1}`}/>
//         )}
//     />
//     );
// }

// export default Paginate

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

import { getRequests } from '../actions/requests';
import useStyles from './styles';

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.requests);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getRequests(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/requests?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;