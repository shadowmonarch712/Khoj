import React from "react";
import useStyles from "./styles";
import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  paperClasses,
} from "@mui/material";
import FileBase from "react-file-base64";
import { createRequest, updateRequest } from "../../actions/requests";
import { useDispatch, useSelector } from "react-redux";

const Form = ({currentId, setCurrentId}) => {
  const [requestData, setRequestData] = useState({
    name: "",
    title: "",
    message: "",
    tags: "",
  });
  const request = useSelector((state)=>currentId ? state.requests.requests.find((p)=>p._id===currentId):null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(()=>{
    if(request) setRequestData(request);
  },[request])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(currentId){
  //     dispatch(updateRequest(currentId, requestData));
  //   }else{
  //     dispatch(createRequest(requestData));
  //   }
  //   clear();
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createRequest({ ...requestData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updateRequest(currentId, { ...requestData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }
  
  const clear = () => {
      setCurrentId(null);
      setRequestData({
        name: "",
        title: "",
        message: "",
        tags: "",
      });
  };
  return (
    <Paper className={classes.paper} elevation={6} >
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
        style={{ margin: "5px 0", }}
      >
        <Typography variant="h6">{ currentId ? 'Edit' : 'Create' } the add</Typography>
        <TextField
          name="name"
          variant="outlined"
          label="name"
          fullWidth
          style={{ margin: "5px 0",padding: "0px 10px"}}
          value={requestData.name}
          onChange={(e) =>
            setRequestData({ ...requestData, name: e.target.value })
          }
        >
          {" "}
        </TextField>
        <TextField
          name="title"
          style={{ margin: "5px 0",padding: "0px 10px"}}
          variant="outlined"
          label="title"
          fullWidth
          value={requestData.title}
          onChange={(e) => setRequestData({ ...requestData, title: e.target.value })}
        >
          {" "}
        </TextField>
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          style={{ margin: "5px 0",padding: "0px 10px"}}
          value={requestData.message}
          onChange={(e) =>
            setRequestData({ ...requestData, message: e.target.value })
          }
        >
          {" "}
        </TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          style={{ margin: "5px 0",padding: "0px 10px"}}
          value={requestData.tags}
          onChange={(e) => setRequestData({ ...requestData, tags: e.target.value.split(',') })}
        >
          {" "}
        </TextField>
        <div className={classes.fileInput}>
          <Button
            className={classes.buttonSubmit}
            variant="container"
            color="error"
            size="large"
            type="submit"
            fullWidth
            style={{ margin: "5px 0",padding: "0px 10px"}}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={clear}
            fullWidth
            style={{ margin: "5px 0",padding: "0px 10px"}}
          >
            clear{" "}
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
