import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: '8px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px 0',
  },
  root: {
    '& .MuiTextField-root': {
      margin: '8px 0',
    },
  },
  avatar: {
    margin: '8px 0',
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '24px 0',
  },
  submit: {
    margin: '24px 0 16px',
  },
}));