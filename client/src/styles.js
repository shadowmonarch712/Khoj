import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',   
        alignItems: 'center',
        color:'black',
      },
      heading: {
        color: 'black',
      },
      image: {
        marginLeft: '15px',
       },
}));