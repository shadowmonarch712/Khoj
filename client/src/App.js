import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => (
  <Router>
    <Container maxWidth="lg">
      <GoogleOAuthProvider clientId="569852703196-c5cun9cigu8qfhdrejlujfj7ll515pkv.apps.googleusercontent.com">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </GoogleOAuthProvider>
    </Container>
  </Router>
);

export default App;
