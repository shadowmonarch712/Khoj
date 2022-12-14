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
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux';
const Form = ({currentId, setCurrentId}) => {
  const [requestData, setRequestData] = useState({
    name: "",
    title: "",
    message: "",
    tags: "",
  });
  const request = useSelector((state)=>currentId ? state.requests.find((p)=>p._id===currentId):null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(request) setRequestData(request);
  },[request])
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updateRequest(currentId, requestData));
    }else{
      dispatch(createRequest(requestData));
    }
    clear();
  };
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
    <Paper className="{classes.paper">
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{ currentId ? 'Edit' : 'Create' } the add</Typography>
        <TextField
          name="name"
          variant="outlined"
          label="name"
          fullWidth
          value={requestData.name}
          onChange={(e) =>
            setRequestData({ ...requestData, name: e.target.value })
          }
        >
          {" "}
        </TextField>
        <TextField
          name="title"
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
          value={requestData.tags}
          onChange={(e) => setRequestData({ ...requestData, tags: e.target.value.split(',') })}
        >
          {" "}
        </TextField>
        <div className={classes.fileInput}>
          <Button
            className={classes.buttonSubmit}
            variant="container"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            clear{" "}
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
