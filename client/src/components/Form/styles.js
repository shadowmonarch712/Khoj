import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(3),  
    },
  },
  paper: {
    // padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  // buttonSubmit: {
  //   marginBottom: 10,
  // },
}));