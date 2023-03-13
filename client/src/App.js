import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Creator from "./components/Creator/Creator";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RequestDetails from "./components/RequestDetails/RequestDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Router>
      <Container maxWidth="xl">
        <GoogleOAuthProvider clientId="569852703196-c5cun9cigu8qfhdrejlujfj7ll515pkv.apps.googleusercontent.com">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
            <Route path="/" exact element={() => <Navigate to="/requests" />} />
            <Route path="/requests" exact element={<Home />} />
            <Route path="/requests/search" exact element={<Home />} />
            <Route path="/requests/:id" exact element={<RequestDetails/>} />
            <Route path="/creators/:name" exact element={<Creator/>} />
            <Route
              path="/auth"
              exact
              component={() => (!user ? <Auth /> : <Navigate to="/requests" />)}
            />
          </Routes>
        </GoogleOAuthProvider>
      </Container>
    </Router>
  );
};

export default App;
