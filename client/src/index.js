import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import BackgroundImage from './image/background.png'

import reducers from './reducers';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
// const themeDark = createTheme({ palette: { background: { default: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000", }, }, });
const theme = createTheme({
  // palette: {
  //   primary: {
  //     light: purple[300],
  //     main: purple[500],
  //     dark: purple[700]
  //   },
  //   secondary: {
  //     light: green[300],
  //     main: green[500],
  //     dark: green[700]
  //   }
  // },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${BackgroundImage})`
  
            // "url(https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000)"
        }
      }
    }
  }
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
);